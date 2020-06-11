export declare class Observable<T> {
    private observers;
    subscribe(f: (data: T) => void): void;
    notify(data: T): void;
}
