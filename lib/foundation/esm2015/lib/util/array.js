/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
export function toArray(value) {
    /** @type {?} */
    let ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
export function arraysEqual(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    const len = array1.length;
    for (let i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
export function shallowCopyArray(source) {
    return source.slice();
}
/**
 * @param {?} key
 * @param {?} isDesc
 * @return {?}
 */
export function compare(key, isDesc) {
    // tslint:disable-next-line:only-arrow-functions
    return (/**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    (x, y) => {
        if (!x.hasOwnProperty(key) ||
            !y.hasOwnProperty(key)) {
            return 0;
        }
        /** @type {?} */
        const key1 = (typeof x[key] === 'string') ?
            x[key].toUpperCase() : x[key];
        /** @type {?} */
        const key2 = (typeof y[key] === 'string') ?
            y[key].toUpperCase() : y[key];
        /** @type {?} */
        let comparison = 0;
        if (key1 > key2) {
            comparison = 1;
        }
        else if (key1 < key2) {
            comparison = -1;
        }
        return (isDesc ? (comparison * -1) : comparison);
    });
}
/**
 * @param {?} objectArray
 * @param {?} key
 * @param {?=} isDesc
 * @return {?}
 */
export function sortArray(objectArray, key, isDesc) {
    return objectArray.sort(this.compare(key, isDesc));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3V0aWwvYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLE9BQU8sQ0FBSSxLQUFjOztRQUNuQyxHQUFRO0lBQ1osSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2Y7U0FBTTtRQUNMLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUksTUFBVyxFQUFFLE1BQVc7SUFDckQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDekQsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFFSyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUksTUFBVztJQUM3QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVEsRUFBRSxNQUFlO0lBQy9DLGdEQUFnRDtJQUNoRDs7Ozs7SUFBTyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTtRQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7O2NBRUssSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O2NBQ3pCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOztZQUUzQixVQUFVLEdBQUcsQ0FBQztRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDZixVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQ3RCLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sQ0FDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FDeEMsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLFdBQXVCLEVBQUUsR0FBVyxFQUFFLE1BQWdCO0lBQzlFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XHJcbiAgbGV0IHJldDogVFtdO1xyXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICByZXQgPSBbXTtcclxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0ID0gW3ZhbHVlXTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0ID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheXNFcXVhbDxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10pOiBib29sZWFuIHtcclxuICBpZiAoIWFycmF5MSB8fCAhYXJyYXkyIHx8IGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxlbiA9IGFycmF5MS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93Q29weUFycmF5PFQ+KHNvdXJjZTogVFtdKTogVFtdIHtcclxuICByZXR1cm4gc291cmNlLnNsaWNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGtleTogYW55LCBpc0Rlc2M6IGJvb2xlYW4pIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b25seS1hcnJvdy1mdW5jdGlvbnNcclxuICByZXR1cm4gKHg6IGFueSwgeTogYW55KSA9PiB7XHJcbiAgICBpZiAoIXguaGFzT3duUHJvcGVydHkoa2V5KSB8fFxyXG4gICAgICAheS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleTEgPSAodHlwZW9mIHhba2V5XSA9PT0gJ3N0cmluZycpID9cclxuICAgICAgeFtrZXldLnRvVXBwZXJDYXNlKCkgOiB4W2tleV07XHJcbiAgICBjb25zdCBrZXkyID0gKHR5cGVvZiB5W2tleV0gPT09ICdzdHJpbmcnKSA/XHJcbiAgICAgIHlba2V5XS50b1VwcGVyQ2FzZSgpIDogeVtrZXldO1xyXG5cclxuICAgIGxldCBjb21wYXJpc29uID0gMDtcclxuICAgIGlmIChrZXkxID4ga2V5Mikge1xyXG4gICAgICBjb21wYXJpc29uID0gMTtcclxuICAgIH0gZWxzZSBpZiAoa2V5MSA8IGtleTIpIHtcclxuICAgICAgY29tcGFyaXNvbiA9IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNEZXNjID8gKGNvbXBhcmlzb24gKiAtMSkgOiBjb21wYXJpc29uXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0QXJyYXkob2JqZWN0QXJyYXk6IEFycmF5PGFueT4sIGtleTogc3RyaW5nLCBpc0Rlc2M/OiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIG9iamVjdEFycmF5LnNvcnQodGhpcy5jb21wYXJlKGtleSwgaXNEZXNjKSk7XHJcbn1cclxuIl19