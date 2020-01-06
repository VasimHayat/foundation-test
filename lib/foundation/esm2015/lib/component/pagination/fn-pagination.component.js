/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by mvasim on 12/9/17.
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
export class FnPaginationComponent {
    constructor() {
        this.changePage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPage = 1;
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.currentPage = 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.currentPage = this.currentPage - 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.currentPage = this.currentPage + 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    lastPage() {
        this.currentPage = this.totalPage;
        this.changePage.emit(this.currentPage);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9wYWdpbmF0aW9uL2ZuLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2xHLE1BQU0sT0FBTyxxQkFBcUI7SUFObEM7UUFZWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTJCNUMsQ0FBQzs7OztJQXpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixrbUNBQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OzswQkFHRSxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07Ozs7SUFKUCw0Q0FBNkI7O0lBQzdCLDBDQUEyQjs7SUFDM0IseUNBQTBCOztJQUMxQiwwQ0FBMkI7O0lBQzNCLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdmFzaW0gb24gMTIvOS8xNy5cbiAqL1xuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1wYWdpbmF0aW9uLmNvbXBvbmVuLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGblBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBwYWdlQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gIH1cblxuICBmaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSAtIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBsYXN0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy50b3RhbFBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuXG59XG4iXX0=