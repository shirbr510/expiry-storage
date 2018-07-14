import { isStorageLike } from "../storageTypeChecker"

describe('isStorageLikeObject', () => {
    it('should return true for object that looks similar to storage', () => {
        const sessionLikeObject = {
            getItem:()=>{},
            setItem:()=>{},
            removeItem:()=>{},
            clear:()=>{}
        }
        const result = isStorageLike(sessionLikeObject);
        expect(result).toBe(true)
    });
    it('should return false for null', () => {
        const result = isStorageLike(null);
        expect(result).toBe(false)
    });
    it('should return false for undefined', () => {
        const result = isStorageLike(undefined);
        expect(result).toBe(false)
    });
    it('should return false for empty object', () => {
        const result = isStorageLike({});
        expect(result).toBe(false)
    });
})