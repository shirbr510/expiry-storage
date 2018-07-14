import { isStorageLike } from "../storageTypeChecker";

const getDefaultStorage=()=>{
    if(!!window){
        const {localStorage} = window
        if(localStorage){
            return localStorage
        }
    }
    throw "no supported storage found"
}

const getAdapterByStorage=(storage)=>{
    if(!storage){
        return getDefaultStorage();
    }
    if(isStorageLike(storage)){
        return storage;
    }
    return null;
}

export default getAdapterByStorage