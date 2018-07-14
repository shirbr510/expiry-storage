const isStorageLike = (storage) =>
    !!storage &&
    storage !== null &&
    typeof(storage.getItem) === "function" &&
    typeof(storage.setItem) === "function" &&
    typeof(storage.removeItem) === "function" &&
    typeof(storage.clear) === "function"

export { isStorageLike }