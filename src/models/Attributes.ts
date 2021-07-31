export class Attributes<T> {
    constructor(private data: T) {}

    // Type K can only ever be one of the keys of T! T[K] reaches into the interface and pulls our return type out.
    get<K extends keyof T>(key: K): T[K] { // Creates custom possible return types corresponding to each possible KEY in the passed object!
        return this.data[key]
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }
}