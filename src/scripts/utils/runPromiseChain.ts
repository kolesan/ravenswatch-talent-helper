type NextPromise<T> = {
    promise: Promise<T>,
    getPromiseAfterThat?: () => NextPromise<T>
}

type Params<T> = {
    currentPromise: Promise<T>, 
    getNextPromise?: () => NextPromise<T>,
    options?: {
        delayMs?: number;
    }
}

export function runPromiseChain<T>({
    currentPromise, 
    getNextPromise,
    options
}: Params<T>): Promise<void> {
    return currentPromise
        .then(applyDelayIfAny(options?.delayMs, !!getNextPromise))
        .then(() => {
            if (!getNextPromise) {
                return Promise.resolve();
            }

            const next = getNextPromise();
            return runPromiseChain({
                currentPromise: next.promise, 
                getNextPromise: next.getPromiseAfterThat,
                options,
            }); 
        });
}

function applyDelayIfAny(delayMs: number | undefined, hasNext: boolean) {
    return function<T>(result: T) {
        if (!delayMs || !hasNext) {
            return Promise.resolve(result);
        }

        console.log(`Applying a delay of ${delayMs}ms`);
        return new Promise<any>((res) => setTimeout(() => {
            res(result);
        }, delayMs));
    }
}
