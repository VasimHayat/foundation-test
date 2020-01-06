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
    function (x, y) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3V0aWwvYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLE9BQU8sQ0FBSSxLQUFjOztRQUNuQyxHQUFRO0lBQ1osSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2Y7U0FBTTtRQUNMLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUksTUFBVyxFQUFFLE1BQVc7SUFDckQsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDekQsT0FBTyxLQUFLLENBQUM7S0FDZDs7VUFFSyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUksTUFBVztJQUM3QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVEsRUFBRSxNQUFlO0lBQy9DLGdEQUFnRDtJQUNoRDs7Ozs7SUFBTyxVQUFVLENBQU0sRUFBRSxDQUFNO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLENBQUM7U0FDVjs7Y0FFSyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7Y0FDekIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O1lBRTNCLFVBQVUsR0FBRyxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUNmLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDdEIsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxDQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUN4QyxDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsV0FBdUIsRUFBRSxHQUFXLEVBQUUsTUFBZ0I7SUFDOUUsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcclxuICBsZXQgcmV0OiBUW107XHJcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgIHJldCA9IFtdO1xyXG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXQgPSBbdmFsdWVdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXQgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5c0VxdWFsPFQ+KGFycmF5MTogVFtdLCBhcnJheTI6IFRbXSk6IGJvb2xlYW4ge1xyXG4gIGlmICghYXJyYXkxIHx8ICFhcnJheTIgfHwgYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGVuID0gYXJyYXkxLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dDb3B5QXJyYXk8VD4oc291cmNlOiBUW10pOiBUW10ge1xyXG4gIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoa2V5OiBhbnksIGlzRGVzYzogYm9vbGVhbikge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmx5LWFycm93LWZ1bmN0aW9uc1xyXG4gIHJldHVybiBmdW5jdGlvbiAoeDogYW55LCB5OiBhbnkpIHtcclxuICAgIGlmICgheC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8XHJcbiAgICAgICF5Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5MSA9ICh0eXBlb2YgeFtrZXldID09PSAnc3RyaW5nJykgP1xyXG4gICAgICB4W2tleV0udG9VcHBlckNhc2UoKSA6IHhba2V5XTtcclxuICAgIGNvbnN0IGtleTIgPSAodHlwZW9mIHlba2V5XSA9PT0gJ3N0cmluZycpID9cclxuICAgICAgeVtrZXldLnRvVXBwZXJDYXNlKCkgOiB5W2tleV07XHJcblxyXG4gICAgbGV0IGNvbXBhcmlzb24gPSAwO1xyXG4gICAgaWYgKGtleTEgPiBrZXkyKSB7XHJcbiAgICAgIGNvbXBhcmlzb24gPSAxO1xyXG4gICAgfSBlbHNlIGlmIChrZXkxIDwga2V5Mikge1xyXG4gICAgICBjb21wYXJpc29uID0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc0Rlc2MgPyAoY29tcGFyaXNvbiAqIC0xKSA6IGNvbXBhcmlzb25cclxuICAgICk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBcnJheShvYmplY3RBcnJheTogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcsIGlzRGVzYz86IGJvb2xlYW4pIHtcclxuICByZXR1cm4gb2JqZWN0QXJyYXkuc29ydCh0aGlzLmNvbXBhcmUoa2V5LCBpc0Rlc2MpKTtcclxufVxyXG4iXX0=