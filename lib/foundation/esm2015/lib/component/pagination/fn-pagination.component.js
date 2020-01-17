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
        this.currentPage = 0;
        this.totalPage = 0;
        this.pageSize = 0;
        this.pageClass = '';
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
                template: "<div class=\"{{pageClass}}\" *ngIf=\"totalPage>1\">\n  <div class=\" row \">\n    <div class=\"col-sm-12 no-padding \">\n      <div class=\"btn-toolbar pull-right \" role=\"toolbar \">\n        <div class=\"btn-group \">\n          <button id=\"firstBtn \" class=\"btn btn-xs fn-pagging-btn \" (click)=\"firstPage() \" [disabled]=\"currentPage==1 \">\n            First\n          </button>\n          <button id=\"prevBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==1\" (click)=\"prevPage() \">\n            Previous\n          </button>\n          <button id=\"labelBtn \" class=\"btn btn-xs fn-pagging-btn bg-white \" disabled=\"disabled \">\n            {{currentPage}}/{{totalPage}}</button>\n          <button id=\"nextBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage == totalPage \"\n                  (click)=\"nextPage() \">\n            Next\n          </button>\n          <button id=\"lastBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==totalPage \"\n                  (click)=\"lastPage() \">\n            Last\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-pagging-btn{border:1px solid #ced4da;padding:3px 10px!important;font-size:12px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9wYWdpbmF0aW9uL2ZuLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBU2hHLE1BQU0sT0FBTyxxQkFBcUI7SUFObEM7UUFRVyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTJCNUMsQ0FBQzs7OztJQXpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiw4cENBQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OzswQkFHRSxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07Ozs7SUFKUCw0Q0FBeUI7O0lBQ3pCLDBDQUF1Qjs7SUFDdkIseUNBQXNCOztJQUN0QiwwQ0FBd0I7O0lBQ3hCLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBtdmFzaW0gb24gMTIvOS8xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1wYWdpbmF0aW9uLmNvbXBvbmVuLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGblBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlID0gMDtcbiAgQElucHV0KCkgdG90YWxQYWdlID0gMDtcbiAgQElucHV0KCkgcGFnZVNpemUgPSAwO1xuICBASW5wdXQoKSBwYWdlQ2xhc3MgPSAnJztcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gIH1cblxuICBmaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSAtIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuICBsYXN0UGFnZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy50b3RhbFBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gIH1cblxuXG59XG4iXX0=