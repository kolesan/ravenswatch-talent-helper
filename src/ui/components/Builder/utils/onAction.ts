export type OnActionParams = {
    showMsg: (msg: string) => void;
    predicate?: () => boolean;
    failedPredicateMsg?: string;
    action: () => void;
    msg: string;
}

export function onAction({ 
    showMsg, 
    predicate, 
    failedPredicateMsg,
    action, 
    msg, 
}: OnActionParams) {
    return function() {
        if (predicate && !predicate()) {
            showMsg(failedPredicateMsg || "Action failed");
            return;
        }
        showMsg(msg);
        action();
    }
}
