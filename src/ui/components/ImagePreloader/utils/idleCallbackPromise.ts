export function idleCallbackPromise() {
    return new Promise<void>(res => {
        requestIdleCallback(() => {
            res();
        })
    });
}
