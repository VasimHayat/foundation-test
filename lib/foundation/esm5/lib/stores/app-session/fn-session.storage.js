/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnSessionStorage = /** @class */ (function () {
    function FnSessionStorage() {
    }
    /**
     * @param {?} fnSession
     * @return {?}
     */
    FnSessionStorage.setFnSession = /**
     * @param {?} fnSession
     * @return {?}
     */
    function (fnSession) {
        localStorage.setItem('fnSession', encodeURIComponent(JSON.stringify(fnSession)));
    };
    /**
     * @return {?}
     */
    FnSessionStorage.getFnSession = /**
     * @return {?}
     */
    function () {
        if (localStorage.getItem('fnSession') === undefined) {
            return;
        }
        return JSON.parse(decodeURIComponent(localStorage.getItem('fnSession')));
    };
    /**
     * @param {?} fnSession
     * @return {?}
     */
    FnSessionStorage.clearFnSession = /**
     * @param {?} fnSession
     * @return {?}
     */
    function (fnSession) {
        localStorage.setItem('fnSession', undefined);
    };
    return FnSessionStorage;
}());
export { FnSessionStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vZm4tc2Vzc2lvbi5zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFkUSw2QkFBWTs7OztJQUFuQixVQUFvQixTQUFvQjtRQUN0QyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7O0lBRU0sNkJBQVk7OztJQUFuQjtRQUNFLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDbkQsT0FBTztTQUNSO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRU0sK0JBQWM7Ozs7SUFBckIsVUFBc0IsU0FBb0I7UUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZuU2Vzc2lvbn0gZnJvbSAnLi9zdGF0ZS9mbi5zZXNzaW9uLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGblNlc3Npb25TdG9yYWdlIHtcclxuICBzdGF0aWMgc2V0Rm5TZXNzaW9uKGZuU2Vzc2lvbjogRm5TZXNzaW9uKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm5TZXNzaW9uJywgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGZuU2Vzc2lvbikpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRGblNlc3Npb24oKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZuU2Vzc2lvbicpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmblNlc3Npb24nKSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsZWFyRm5TZXNzaW9uKGZuU2Vzc2lvbjogRm5TZXNzaW9uKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm5TZXNzaW9uJywgdW5kZWZpbmVkKTtcclxuICB9XHJcbn1cclxuIl19