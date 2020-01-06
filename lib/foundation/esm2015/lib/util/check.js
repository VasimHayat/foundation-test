/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IndexableObject() { }
/**
 * @param {?} value
 * @return {?}
 */
export function typeofUndefined(value) {
    return typeof (value) === 'undefined' || value == null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofObject(value) {
    return typeof (value) === 'object' && value.constructor == Object;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofString(value) {
    return typeof (value) === 'string' && value.constructor == String;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofBoolean(value) {
    return typeof (value) === 'boolean' && value.constructor == Boolean;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofNumber(value) {
    return typeof (value) === 'number' && value.constructor == Number;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofFunction(value) {
    return typeof (value) === 'function' && value.constructor == Function;
}
/**
 * @param {?} value
 * @return {?}
 */
export function typeofArray(value) {
    return typeof (value) === 'object' && value.constructor == Array;
}
/**
 * @param {?} num
 * @return {?}
 */
export function isFloat(num) {
    num = parseFloat(num);
    return Number(num) === num && num % 1 !== 0;
}
/**
 * @param {?} num
 * @return {?}
 */
export function isInt(num) {
    return num % 1 === 0;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isString(value) {
    return typeofString(value);
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isNotNull(value) {
    return typeof value !== 'undefined' && value !== null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isNull(value) {
    return typeof value === 'undefined' || value === null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isEmptyString(value) {
    return typeof value === 'string' && value.toString().length == 0;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isEmptyObject(obj) {
    // tslint:disable-next-line:forin
    for (const name in obj) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * Examine if two objects are shallowly equaled.
 * @param {?=} objA
 * @param {?=} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    const keysA = Object.keys(objA);
    /** @type {?} */
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3V0aWwvY2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFDQUVDOzs7OztBQUdELE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBSztJQUNuQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxXQUFXLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQztBQUN6RCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBSztJQUNoQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7QUFDcEUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQUs7SUFDaEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO0FBQ3BFLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFLO0lBQ2pDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztBQUN0RSxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBSztJQUNoQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7QUFDcEUsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQUs7SUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDO0FBQ3hFLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFLO0lBQy9CLE9BQU8sT0FB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QUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSW5kZXhhYmxlT2JqZWN0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHlwZW9mVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHlwZW9mT2JqZWN0KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBPYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlb2ZTdHJpbmcodmFsdWUpIHtcclxuICByZXR1cm4gdHlwZW9mICh2YWx1ZSkgPT09ICdzdHJpbmcnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09IFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVvZkJvb2xlYW4odmFsdWUpIHtcclxuICByZXR1cm4gdHlwZW9mICh2YWx1ZSkgPT09ICdib29sZWFuJyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBCb29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHlwZW9mTnVtYmVyKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUpID09PSAnbnVtYmVyJyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBOdW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlb2ZGdW5jdGlvbih2YWx1ZSkge1xyXG4gIHJldHVybiB0eXBlb2YgKHZhbHVlKSA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVvZkFycmF5KHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PSBBcnJheTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Zsb2F0KG51bTogYW55KSB7XHJcbiAgbnVtID0gcGFyc2VGbG9hdChudW0pO1xyXG4gIHJldHVybiBOdW1iZXIobnVtKSA9PT0gbnVtICYmIG51bSAlIDEgIT09IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ludChudW06IG51bWJlcikge1xyXG4gIHJldHVybiBudW0gJSAxID09PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB0eXBlb2ZTdHJpbmcodmFsdWUpO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vdE51bGwodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsdWU6IGFueSkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eVN0cmluZyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPT0gMDtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVN0cmluZyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmo6IG9iamVjdCkge1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICBmb3IgKGNvbnN0IG5hbWUgaW4gb2JqKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogRXhhbWluZSBpZiB0d28gb2JqZWN0cyBhcmUgc2hhbGxvd2x5IGVxdWFsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakE/OiBJbmRleGFibGVPYmplY3QsIG9iakI/OiBJbmRleGFibGVPYmplY3QpOiBib29sZWFuIHtcclxuICBpZiAob2JqQSA9PT0gb2JqQikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCAhb2JqQikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcclxuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xyXG5cclxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcclxuICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBrZXlzQVtpZHhdO1xyXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG4iXX0=