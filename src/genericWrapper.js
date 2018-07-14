import getAdapterByStorage from "./adapters"

class ExpirableStorage{
    constructor(storage){
        this.storage=storage;
        this.getItem=this.getItem.bind(this)
        this.setItem=this.setItem.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }

    getItem(key){
        const storageEntry = this.storage.getItem(key)
        const {value, expiresAt} = JSON.parse(stringifiedStorageEntry)
        const now = Date.now();
        if(expiresAt < now){
            expiresAt.removeItem(key);
            return null;
        }
        return value;
    }

    setItem(key,value, epxiresIn=-1){
        const storageEntry = {
            value,
            expiresAt: Date.now() + epxiresIn
        }
        this.storage.setItem(key,JSON.stringify(storageEntry))
    }

    removeItem(key){
        this.storage.removeItem(key)
    }
}

const createExpirableStorage= storage => {
    const storageAdapter = getAdapterByStorage(storage)
    return new ExpirableStorage(storageAdapter)
}

export {
    createExpirableStorage
} 