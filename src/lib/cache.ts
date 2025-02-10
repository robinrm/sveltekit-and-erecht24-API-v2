import nodeCache from "node-cache";

/**
 * Cache manager for eR24Fetch
 * TTL is set to 1800 seconds (30min)
 */
export class eR24Cache {
    private static cache = new nodeCache({stdTTL: 1800});

    /**
     * Adds a key-value pair to the cache.
     *
     * @param {string} key - The key for the value to be added to the cache.
     * @param {*} value - The value to be added to the cache.
     */
    public static set(key: string, value: any): void {
        this.cache.set(key, value);
    }

    /**
     * Retrieves a value from the cache using the specified key.
     *
     * @param {string} key - The key used to retrieve the value from the cache.
     * @return {*} The value corresponding to the specified key in the cache.
     */
    public static get(key: string): any {
        return this.cache.get(key);
    }

    /**
     * Checks if a given key exists in the cache.
     *
     * @param {string} key - The key to check.
     * @return {boolean} - Returns true if the key exists in the cache, otherwise returns false.
     */
    public static has(key: string): boolean {
        return this.cache.has(key);
    }

    /**
     * Removes a cached value using the specified key.
     *
     * @param {string} key - The key of the value to be removed from the cache.
     * @return {void}
     */
    public static remove(key: string): void {
        this.cache.del(key);
    }

    /**
     * Clears the cache by flushing all entries.
     *
     * @returns {void}
     */
    public static clear(): void {
        this.cache.flushAll();
    }
}