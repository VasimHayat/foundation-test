/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by mvasim on 12/9/17.
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var FnPaginationComponent = /** @class */ (function () {
    function FnPaginationComponent() {
        this.changePage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.currentPage - 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.currentPage + 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.totalPage;
        this.changePage.emit(this.currentPage);
    };
    FnPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-pagination',
                    template: "<div class=\"{{pageClass}}\" *ngIf=\"totalPage>1\">\n  <div class=\" row \">\n    <div class=\"col-sm-12 no-padding \">\n      <div class=\"btn-toolbar pull-right \" role=\"toolbar \">\n        <div class=\"btn-group \">\n          <button id=\"firstBtn \" class=\"btn btn-xs fn-pagging-btn \" (click)=\"firstPage() \" [disabled]=\"currentPage==1 \">\n            First</button>\n          <button id=\"prevBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==1\" (click)=\"prevPage() \">\n            Previous</button>\n          <button id=\"labelBtn \" class=\"btn btn-xs fn-pagging-btn bg-white \" disabled=\"disabled \">\n            {{currentPage}}/{{totalPage}}</button>\n          <button id=\"nextBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage == totalPage \"\n            (click)=\"nextPage() \">\n            Next</button>\n          <button id=\"lastBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==totalPage \"\n            (click)=\"lastPage() \">\n            Last</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-pagging-btn{border:1px solid #c7c7c8;padding:3px 10px!important;font-size:12px}"]
                }] }
    ];
    FnPaginationComponent.propDecorators = {
        currentPage: [{ type: Input }],
        totalPage: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageClass: [{ type: Input }],
        changePage: [{ type: Output }]
    };
    return FnPaginationComponent;
}());
export { FnPaginationComponent };
if (false) {
    /** @type {?} */
    FnPaginationComponent.prototype.currentPage;
    /** @type {?} */
    FnPaginationComponent.prototype.totalPage;
    /** @type {?} */
    FnPaginationComponent.prototype.pageSize;
    /** @type {?} */
    FnPaginationComponent.prototype.pageClass;
    /** @type {?} */
    FnPaginationComponent.prototype.changePage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9wYWdpbmF0aW9uL2ZuLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2xHO0lBQUE7UUFZWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTJCNUMsQ0FBQzs7OztJQXpCQyx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsa21DQUEyQztvQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OzhCQUdFLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7SUEyQlQsNEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWpDWSxxQkFBcUI7OztJQUVoQyw0Q0FBNkI7O0lBQzdCLDBDQUEyQjs7SUFDM0IseUNBQTBCOztJQUMxQiwwQ0FBMkI7O0lBQzNCLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdmFzaW0gb24gMTIvOS8xNy5cbiAqL1xuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1wYWdpbmF0aW9uLmNvbXBvbmVuLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGblBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gIH1cblxuICBmaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSAtIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBsYXN0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy50b3RhbFBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuXG59XG4iXX0=