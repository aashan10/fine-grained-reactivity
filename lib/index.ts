function initialize() {

    // A subscriber is a function that is executed when a signal changes.
    type Subscriber<T> = {
        dependencies: Set<Set<Subscriber<T>>>
        execute: () => T
    }

    // The context is a stack of subscribers. The top of the stack is the currently running subscriber.
    let context: Array<Subscriber<any>> = [];


    // A signal is a pair of a getter and a setter.
    function createSignal<T>(value: T): [() => T, (value: T) => void] {
        let data = value;
        let subscriptions: Set<Subscriber<T>> = new Set();

        const get = () => {
            const running = context[context.length - 1];
            if (running) {
                subscribe(running, subscriptions);
            }

            return data;
        };
        const set = (value: T) => {
            data = value;

            for (const subscription of [...subscriptions]) {
                subscription.execute();
            }
        }

        return [get, set];
    }

    // A subscriber is added to the dependencies of the currently running subscriber.
    function subscribe<T>(running: Subscriber<T>, subscriptions: Set<Subscriber<T>>) {
        subscriptions.add(running);
        running.dependencies.add(subscriptions);
    }


    return {
        createSignal
    }

}

const {createSignal} = initialize();

export { createSignal};