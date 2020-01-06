/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FnSessionStorage {
    /**
     * @param {?} fnSession
     * @return {?}
     */
    static setFnSession(fnSession) {
        localStorage.setItem('fnSession', encodeURIComponent(JSON.stringify(fnSession)));
    }
    /**
     * @return {?}
     */
    static getFnSession() {
        if (localStorage.getItem('fnSession') === undefined) {
            return;
        }
        return JSON.parse(decodeURIComponent(localStorage.getItem('fnSession')));
    }
    /**
     * @param {?} fnSession
     * @return {?}
     */
    static clearFnSession(fnSession) {
        localStorage.setItem('fnSession', undefined);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vZm4tc2Vzc2lvbi5zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixNQUFNLENBQUMsWUFBWSxDQUFDLFNBQW9CO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWTtRQUNqQixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25ELE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBb0I7UUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGblNlc3Npb259IGZyb20gJy4vc3RhdGUvZm4uc2Vzc2lvbi5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm5TZXNzaW9uU3RvcmFnZSB7XHJcbiAgc3RhdGljIHNldEZuU2Vzc2lvbihmblNlc3Npb246IEZuU2Vzc2lvbikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZuU2Vzc2lvbicsIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShmblNlc3Npb24pKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Rm5TZXNzaW9uKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmblNlc3Npb24nKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm5TZXNzaW9uJykpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbGVhckZuU2Vzc2lvbihmblNlc3Npb246IEZuU2Vzc2lvbikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZuU2Vzc2lvbicsIHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==