/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} min
 * @param {?} max
 * @param {?} value
 * @return {?}
 */
export function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
/**
 * @param {?} num
 * @return {?}
 */
export function getPrecision(num) {
    /** @type {?} */
    const numStr = num.toString();
    /** @type {?} */
    const dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
/**
 * @param {?} num
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi91dGlsL251bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLFVBQVUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWE7SUFDOUQsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQy9DLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxHQUFXOztVQUM5QixNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRTs7VUFDdkIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDckUsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUN6QixPQUFPLEdBQUcsQ0FBQztLQUNkO1NBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7U0FBTTtRQUNILE9BQU8sR0FBRyxDQUFDO0tBQ2Q7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZWNpc2lvbihudW06IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBudW1TdHIgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IGRvdEluZGV4ID0gbnVtU3RyLmluZGV4T2YoJy4nKTtcclxuICAgIHJldHVybiBkb3RJbmRleCA+PSAwID8gbnVtU3RyLmxlbmd0aCAtIGRvdEluZGV4IC0gMSA6IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVOdW1iZXJJblJhbmdlKG51bTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGlzTmFOKG51bSkgfHwgbnVtIDwgbWluKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH0gZWxzZSBpZiAobnVtID4gbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIG1heDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxufSJdfQ==