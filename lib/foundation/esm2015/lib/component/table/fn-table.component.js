/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by mvasim on 12/9/17.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FnTableConfig } from './fn-table.config';
import { List } from 'immutable';
import { Subject } from 'rxjs';
import { FnUtilService } from '../../services/fn-util.service';
export class FnTableComponent {
    /**
     * @param {?} fnUtil
     */
    constructor(fnUtil) {
        this.fnUtil = fnUtil;
        this.tblSearchConfig = {
            actionClear: new Subject()
        };
        this.updateRow = new EventEmitter();
        this.deleteRow = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config.tableAction.unsubscribe();
        this.tblSearchConfig.actionClear.complete();
    }
    /**
     * @return {?}
     */
    initPageConfig() {
        if (this.fnUtil.isEmptyObject(this.config.hidePagination)) {
            this.config.hidePagination = false;
        }
        if (!this.config.hidePagination) {
            this.currentPage = 1;
            this.pageSize = this.fnUtil.isEmptyObject(this.pageSize) ? 10 : this.pageSize;
            this.totalPage = Math.ceil(this.dataArray.size / this.pageSize);
        }
        else {
            this.currentPage = 1;
            this.pageSize = this.dataArray.size;
            this.totalPage = 1;
        }
        if (this.fnUtil.isEmptyObject(this.config.uniqueKey)) {
            this.config.uniqueKey = 'primaryKey';
        }
        /** @type {?} */
        const _tempMetaHash = this.fnUtil.mapFromArray(this.rowMetaArray, 'key');
        this.uniquKeyExits = !this.fnUtil.isEmptyObject(_tempMetaHash[this.config.uniqueKey]);
    }
    /**
     * @param {?} tableAction
     * @return {?}
     */
    tableAction(tableAction) {
        if (tableAction.action === 'ADD') {
            this.addRowAction(tableAction.data);
        }
        else if (tableAction.action === 'REFRESH') {
        }
        else {
            // todo
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config.tableAction.subscribe(this.tableAction);
        this.filterArray = this.dataArray;
        this.initPageConfig();
        for (let index = 0; index < this.rowMetaArray.length; index++) {
            this.rowMetaArray[index].sortValue = this.fnUtil.isEmptyObject(this.rowMetaArray[index].sortValue) ?
                FnTableConfig.defaultSortValue : this.rowMetaArray[index].sortValue;
            if (this.fnUtil.isEmptyObject(this.rowMetaArray[index].isSortable)) {
                this.rowMetaArray[index].isSortable = FnTableConfig.defaultIsColSort;
            }
            if (this.config.defaultSortKey === this.rowMetaArray[index].key) {
                this.selectedCol = this.rowMetaArray[index];
            }
        }
        if (this.config.defaultSortKey) {
            this.applySortIcon(this.config.defaultSortKey);
            this.changeSort(this.selectedCol);
        }
    }
    /**
     * @param {?} sortKey
     * @return {?}
     */
    applySortIcon(sortKey) {
        for (const index in this.rowMetaArray) {
            if (this.rowMetaArray[index].key === sortKey) {
                if (this.rowMetaArray[index].sortValue === 0) {
                    this.rowMetaArray[index].sortValue = 1;
                    this.rowMetaArray[index].sortCls = ' fa-sort-desc';
                }
                else {
                    this.rowMetaArray[index].sortValue = this.rowMetaArray[index].sortValue === 1 ? -1 : 1;
                    this.rowMetaArray[index].sortCls = this.rowMetaArray[index].sortValue === 1 ? ' fa-sort-desc' : ' fa-sort-asc';
                }
            }
            else {
                this.rowMetaArray[index].sortCls = FnTableConfig.defalutSortClass;
                this.rowMetaArray[index].sortValue = FnTableConfig.defaultSortValue;
            }
        }
    }
    /**
     * @param {?} column
     * @param {?=} skipSortIcon
     * @return {?}
     */
    changeSort(column, skipSortIcon) {
        this.selectedCol = column;
        if (!skipSortIcon) {
            this.applySortIcon(column.key);
        }
        /** @type {?} */
        const _key = column.sortValue < 0 ? '-' + column.key : column.key;
        /** @type {?} */
        const tempArray = this.fnUtil.sortObjectOnKeys(this.filterArray.toArray(), _key);
        /** @type {?} */
        const startSize = (this.currentPage - 1) * (this.pageSize);
        this.dataCloneArray = List(tempArray.slice(startSize, startSize + this.pageSize));
    }
    /**
     * @param {?} eventObj
     * @return {?}
     */
    paginzationEvent(eventObj) {
        this.currentPage = eventObj;
        this.changeSort(this.selectedCol, true);
    }
    /**
     * @param {?=} _searchTerm
     * @return {?}
     */
    searchOnRows(_searchTerm) {
        this.currentPage = 1;
        if (this.fnUtil.isEmptyObject(_searchTerm)) {
            this.filterArray = this.dataArray;
            this.totalPage = Math.ceil(this.dataArray.size / this.pageSize);
        }
        else {
            this.filterArray = List(this.fnUtil.filterArray(this.dataArray.toArray(), _searchTerm, true));
            this.totalPage = Math.ceil(this.filterArray.size / this.pageSize);
        }
        this.changeSort(this.selectedCol, true);
    }
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    addRowAction(rowObj) {
        this.dataArray.push(rowObj);
        this.searchOnRows();
    }
    /**
     * @param {?} rowArray
     * @return {?}
     */
    filterAction(rowArray) {
        this.dataArray = rowArray;
        this.searchTerm = '';
        this.searchOnRows();
    }
    /**
     * @private
     * @param {?} dataArray
     * @return {?}
     */
    updateDataArray(dataArray) {
        this.dataArray = dataArray;
        this.ngOnInit();
    }
    /**
     * @param {?} rowObj
     * @param {?} columnName
     * @return {?}
     */
    cellClick(rowObj, columnName) {
        this.updateAction(rowObj);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    updateAction(rowObj) {
        this.updateRow.emit({
            row: rowObj, callback: (/**
             * @param {?} returnRow
             * @return {?}
             */
            (returnRow) => {
                for (const key in this.dataArray) {
                    if (this.uniquKeyExits && this.dataArray[key][this.config.uniqueKey] === returnRow[this.config.uniqueKey]) {
                        this.dataArray[key] = returnRow;
                        break;
                    }
                }
                this.searchOnRows();
            })
        });
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    deleteAction(rowObj) {
        this.deleteRow.emit({
            row: rowObj, callback: (/**
             * @param {?=} returnRow
             * @return {?}
             */
            (returnRow) => {
                for (const index in this.dataArray) {
                    if (this.uniquKeyExits && this.dataArray[index][this.config.uniqueKey] === rowObj[this.config.uniqueKey]) {
                        // tslint:disable-next-line:radix
                        this.dataArray.splice(parseInt(index), 1);
                        break;
                    }
                }
                this.searchOnRows();
            })
        });
    }
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    deleteRowAction(rowObj) {
        for (const index in this.dataArray) {
            if (this.uniquKeyExits && this.dataArray[index][this.config.uniqueKey] === rowObj[this.config.uniqueKey]) {
                // tslint:disable-next-line: radix
                this.dataArray.splice(parseInt(index), 1);
                break;
            }
        }
        this.searchOnRows();
    }
    /**
     * @return {?}
     */
    toggleSearch() {
        this.searchTerm = '';
        if (this.showSearchBox) {
            this.tblSearchConfig.actionClear.next();
        }
        this.searchOnRows();
        this.showSearchBox = !this.showSearchBox;
    }
}
FnTableComponent.DEFAULT_SORT_CLS = '';
FnTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-table',
                template: "<table class=\"table table-bordered table-striped table-hover dataTable no-margin\" ngClass=\"{{config.tableClass || ''}}\" role=\"grid\" style=\"width: 100%;\">\n  <thead class=\"grey lighten-2\">\n  <tr role=\"row\">\n    <th *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\" (click)=\"changeSort(column)\"\n        ngClass=\"{{column.className || ''}}\">\n      {{column.description}}\n      <i *ngIf=\"column.isSortable\" class=\"margin-left-5 fa \" [ngClass]=\"column.sortCls\"></i>\n    </th>\n    <th *ngIf=\"!config.hideAction\" class=\"text-center relative\" style=\"width:10%;min-width: 100px;\">\n        <span>Action\n          <label class=\"lable\" (click)=\"toggleSearch()\" style=\"cursor: pointer;margin-bottom:-2px\">\n            <i class=\"fa fa-search pull-right blue \"></i>\n          </label>\n        </span>\n\n      <div id=\"fn-search-input\" class=\"input-group table-search\" [class.hidden]=\"!showSearchBox\">\n        <!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\n        <fn-table-search-component (search)=\"searchOnRows($event)\" [config]=\"tblSearchConfig\">\n        </fn-table-search-component>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-basic btn-sm\" type=\"button\" (click)=\"toggleSearch()\">\n              <i class=\"fa fa-times red\"></i>\n            </button>\n          </span>\n      </div>\n\n    </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let row of dataCloneArray\">\n    <td (click)=\"cellClick(row, column.key)\" *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\">\n      <div *ngIf=\"column.type == 'string'\"> {{row[column.key]}} </div>\n      <div *ngIf=\"column.type == 'number'\"> {{row[column.key]}} </div>\n      <div *ngIf=\"column.type == 'color'\" class=\"color-test padding-10 choppOff\"\n           [ngStyle]=\"{'background-color': row[column.key]}\"></div>\n    </td>\n    <td *ngIf=\"!config.hideAction\" style=\"width:10%\" class=\"text-center\">\n      <button (click)=\"updateAction(row)\" *ngIf=\"!config.hideEdit\" class=\"btn btn-link btn-action\">\n        <!-- <img src=\"assets/images/common/svg/edit-icon.svg\" class=\"alta-table-btn\"> -->\n        <i (click)=\"updateAction(row)\" ng-if=\"!config.hideEdit\" class=\"fa hide fa-edit blue fa-lg\"></i></button>\n      <button (click)=\"deleteAction(row)\" *ngIf=\"!config.hideDelete\" class=\"btn btn-link btn-action\">\n        <!-- <img src=\"assets/images/common/svg/delete-icon.svg\" class=\"alta-table-btn\"> -->\n        <i (click)=\"deleteAction(row)\" ng-if=\"!config.hideDelete\" class=\"fa hide fa-trash-o red fa-lg\"></i></button>\n\n      <input *ngIf=\"config.isSelectable\" [(ngModel)]=\"row['isActive']\" type=\"checkbox\" (change)=\"updateAction(row)\"\n             style=\"opacity: 1\">\n\n\n    </td>\n  </tr>\n\n  </tbody>\n</table>\n<div class=\"no_data_display mt-13\" *ngIf=\"dataCloneArray.size<1\">No Data to display</div>\n<fn-pagination [currentPage]=\"currentPage\" [totalPage]=\"totalPage\" (changePage)=\"paginzationEvent($event)\">\n</fn-pagination>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["#fn-search-input{padding:0!important;border:1px solid #ced4da;border-radius:6px;background-color:#fff}#fn-search-input input{border:none!important;box-shadow:none}#fn-search-input button{margin:0!important;background:0 0;box-shadow:none;border:none!important;color:#8a8f9f;padding:4px 8px 4px 10px;border-left:1px solid #ced4da}#fn-search-input button:hover{border:none!important;box-shadow:none;border-left:1px solid #ced4da}#fn-search-input .glyphicon-search{font-size:23px}"]
            }] }
];
/** @nocollapse */
FnTableComponent.ctorParameters = () => [
    { type: FnUtilService }
];
FnTableComponent.propDecorators = {
    config: [{ type: Input }],
    rowMetaArray: [{ type: Input }],
    dataArray: [{ type: Input }],
    currentPage: [{ type: Input }],
    pageSize: [{ type: Input }],
    updateRow: [{ type: Output }],
    deleteRow: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.DEFAULT_SORT_CLS;
    /** @type {?} */
    FnTableComponent.prototype.tblSearchConfig;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.selectedCol;
    /** @type {?} */
    FnTableComponent.prototype.searchTerm;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.uniquKeyExits;
    /** @type {?} */
    FnTableComponent.prototype.filterArray;
    /** @type {?} */
    FnTableComponent.prototype.config;
    /** @type {?} */
    FnTableComponent.prototype.rowMetaArray;
    /** @type {?} */
    FnTableComponent.prototype.dataArray;
    /** @type {?} */
    FnTableComponent.prototype.currentPage;
    /** @type {?} */
    FnTableComponent.prototype.pageSize;
    /** @type {?} */
    FnTableComponent.prototype.updateRow;
    /** @type {?} */
    FnTableComponent.prototype.deleteRow;
    /** @type {?} */
    FnTableComponent.prototype.totalPage;
    /** @type {?} */
    FnTableComponent.prototype.showSearchBox;
    /** @type {?} */
    FnTableComponent.prototype.dataCloneArray;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.fnUtil;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFlLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFXL0QsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBS3pDLG9CQUFlLEdBQUc7WUFDaEIsV0FBVyxFQUFFLElBQUksT0FBTyxFQUFFO1NBQzNCLENBQUM7UUFXUSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWxCekMsQ0FBQzs7OztJQXdCRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NB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LE1BQU07d0JBQ04sTUFBTTs7Ozs7OztJQWhCUCxrQ0FBcUM7O0lBRXJDLDJDQUVFOzs7OztJQUNGLHVDQUFxQzs7SUFDckMsc0NBQTBCOzs7OztJQUMxQix5Q0FBK0I7O0lBQy9CLHVDQUFpQzs7SUFFakMsa0NBQWdDOztJQUNoQyx3Q0FBOEM7O0lBQzlDLHFDQUFpQzs7SUFDakMsdUNBQThCOztJQUM5QixvQ0FBMkI7O0lBQzNCLHFDQUF5Qzs7SUFDekMscUNBQXlDOztJQUV6QyxxQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsMENBQTZCOzs7OztJQXZCakIsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG12YXNpbSBvbiAxMi85LzE3LlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm5UYWJsZU1ldGFEYXRhIH0gZnJvbSAnLi9mbi10YWJsZS5tZXRhLmRhdGEnO1xuaW1wb3J0IHsgVGFibGVBY3Rpb24sIEZuVGFibGVDb25maWcgfSBmcm9tICcuL2ZuLXRhYmxlLmNvbmZpZyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZuVXRpbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmbi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuXG59KVxuZXhwb3J0IGNsYXNzIEZuVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm5VdGlsOiBGblV0aWxTZXJ2aWNlKSB7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX1NPUlRfQ0xTID0gJyc7XG5cbiAgdGJsU2VhcmNoQ29uZmlnID0ge1xuICAgIGFjdGlvbkNsZWFyOiBuZXcgU3ViamVjdCgpXG4gIH07XG4gIHByaXZhdGUgc2VsZWN0ZWRDb2w6IEZuVGFibGVNZXRhRGF0YTtcbiAgcHVibGljIHNlYXJjaFRlcm06IHN0cmluZztcbiAgcHJpdmF0ZSB1bmlxdUtleUV4aXRzOiBib29sZWFuO1xuICBwdWJsaWMgZmlsdGVyQXJyYXk6IExpc3Q8b2JqZWN0PjtcblxuICBASW5wdXQoKSBjb25maWc/OiBGblRhYmxlQ29uZmlnO1xuICBASW5wdXQoKSByb3dNZXRhQXJyYXk6IEFycmF5PEZuVGFibGVNZXRhRGF0YT47XG4gIEBJbnB1dCgpIGRhdGFBcnJheTogTGlzdDxvYmplY3Q+O1xuICBASW5wdXQoKSBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZVNpemU/OiBudW1iZXI7XG4gIEBPdXRwdXQoKSB1cGRhdGVSb3cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWxldGVSb3cgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdG90YWxQYWdlOiBudW1iZXI7XG4gIHNob3dTZWFyY2hCb3g6IGJvb2xlYW47XG4gIGRhdGFDbG9uZUFycmF5OiBMaXN0PG9iamVjdD47XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWcudGFibGVBY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRibFNlYXJjaENvbmZpZy5hY3Rpb25DbGVhci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgaW5pdFBhZ2VDb25maWcoKSB7XG4gICAgaWYgKHRoaXMuZm5VdGlsLmlzRW1wdHlPYmplY3QodGhpcy5jb25maWcuaGlkZVBhZ2luYXRpb24pKSB7XG4gICAgICB0aGlzLmNvbmZpZy5oaWRlUGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29uZmlnLmhpZGVQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLmZuVXRpbC5pc0VtcHR5T2JqZWN0KHRoaXMucGFnZVNpemUpID8gMTAgOiB0aGlzLnBhZ2VTaXplO1xuICAgICAgdGhpcy50b3RhbFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5kYXRhQXJyYXkuc2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLmRhdGFBcnJheS5zaXplO1xuICAgICAgdGhpcy50b3RhbFBhZ2UgPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5mblV0aWwuaXNFbXB0eU9iamVjdCh0aGlzLmNvbmZpZy51bmlxdWVLZXkpKSB7XG4gICAgICB0aGlzLmNvbmZpZy51bmlxdWVLZXkgPSAncHJpbWFyeUtleSc7XG4gICAgfVxuICAgIGNvbnN0IF90ZW1wTWV0YUhhc2ggPSB0aGlzLmZuVXRpbC5tYXBGcm9tQXJyYXkodGhpcy5yb3dNZXRhQXJyYXksICdrZXknKTtcbiAgICB0aGlzLnVuaXF1S2V5RXhpdHMgPSAhdGhpcy5mblV0aWwuaXNFbXB0eU9iamVjdChfdGVtcE1ldGFIYXNoW3RoaXMuY29uZmlnLnVuaXF1ZUtleV0pO1xuXG4gIH1cblxuICB0YWJsZUFjdGlvbih0YWJsZUFjdGlvbjogVGFibGVBY3Rpb24pIHtcbiAgICBpZiAodGFibGVBY3Rpb24uYWN0aW9uID09PSAnQUREJykge1xuICAgICAgdGhpcy5hZGRSb3dBY3Rpb24odGFibGVBY3Rpb24uZGF0YSk7XG4gICAgfSBlbHNlIGlmICh0YWJsZUFjdGlvbi5hY3Rpb24gPT09ICdSRUZSRVNIJykge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRvZG9cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbmZpZy50YWJsZUFjdGlvbi5zdWJzY3JpYmUodGhpcy50YWJsZUFjdGlvbik7XG4gICAgdGhpcy5maWx0ZXJBcnJheSA9IHRoaXMuZGF0YUFycmF5O1xuICAgIHRoaXMuaW5pdFBhZ2VDb25maWcoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnJvd01ldGFBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRWYWx1ZSA9IHRoaXMuZm5VdGlsLmlzRW1wdHlPYmplY3QodGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRWYWx1ZSkgP1xuICAgICAgICBGblRhYmxlQ29uZmlnLmRlZmF1bHRTb3J0VmFsdWUgOiB0aGlzLnJvd01ldGFBcnJheVtpbmRleF0uc29ydFZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5mblV0aWwuaXNFbXB0eU9iamVjdCh0aGlzLnJvd01ldGFBcnJheVtpbmRleF0uaXNTb3J0YWJsZSkpIHtcbiAgICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLmlzU29ydGFibGUgPSBGblRhYmxlQ29uZmlnLmRlZmF1bHRJc0NvbFNvcnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdFNvcnRLZXkgPT09IHRoaXMucm93TWV0YUFycmF5W2luZGV4XS5rZXkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbCA9IHRoaXMucm93TWV0YUFycmF5W2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRTb3J0S2V5KSB7XG4gICAgICB0aGlzLmFwcGx5U29ydEljb24odGhpcy5jb25maWcuZGVmYXVsdFNvcnRLZXkpO1xuICAgICAgdGhpcy5jaGFuZ2VTb3J0KHRoaXMuc2VsZWN0ZWRDb2wpO1xuICAgIH1cblxuXG4gIH1cblxuXG4gIHB1YmxpYyBhcHBseVNvcnRJY29uKHNvcnRLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy5yb3dNZXRhQXJyYXkpIHtcbiAgICAgIGlmICh0aGlzLnJvd01ldGFBcnJheVtpbmRleF0ua2V5ID09PSBzb3J0S2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnJvd01ldGFBcnJheVtpbmRleF0uc29ydFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRWYWx1ZSA9IDE7XG4gICAgICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRDbHMgPSAnIGZhLXNvcnQtZGVzYyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRWYWx1ZSA9IHRoaXMucm93TWV0YUFycmF5W2luZGV4XS5zb3J0VmFsdWUgPT09IDEgPyAtMSA6IDE7XG4gICAgICAgICAgdGhpcy5yb3dNZXRhQXJyYXlbaW5kZXhdLnNvcnRDbHMgPSB0aGlzLnJvd01ldGFBcnJheVtpbmRleF0uc29ydFZhbHVlID09PSAxID8gJyBmYS1zb3J0LWRlc2MnIDogJyBmYS1zb3J0LWFzYyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm93TWV0YUFycmF5W2luZGV4XS5zb3J0Q2xzID0gRm5UYWJsZUNvbmZpZy5kZWZhbHV0U29ydENsYXNzO1xuICAgICAgICB0aGlzLnJvd01ldGFBcnJheVtpbmRleF0uc29ydFZhbHVlID0gRm5UYWJsZUNvbmZpZy5kZWZhdWx0U29ydFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VTb3J0KGNvbHVtbjogRm5UYWJsZU1ldGFEYXRhLCBza2lwU29ydEljb24/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZENvbCA9IGNvbHVtbjtcbiAgICBpZiAoIXNraXBTb3J0SWNvbikge1xuICAgICAgdGhpcy5hcHBseVNvcnRJY29uKGNvbHVtbi5rZXkpO1xuICAgIH1cbiAgICBjb25zdCBfa2V5ID0gY29sdW1uLnNvcnRWYWx1ZSA8IDAgPyAnLScgKyBjb2x1bW4ua2V5IDogY29sdW1uLmtleTtcblxuICAgIGNvbnN0IHRlbXBBcnJheSA9IHRoaXMuZm5VdGlsLnNvcnRPYmplY3RPbktleXModGhpcy5maWx0ZXJBcnJheS50b0FycmF5KCksIF9rZXkpO1xuICAgIGNvbnN0IHN0YXJ0U2l6ZSA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiAodGhpcy5wYWdlU2l6ZSk7XG4gICAgdGhpcy5kYXRhQ2xvbmVBcnJheSA9IExpc3QodGVtcEFycmF5LnNsaWNlKHN0YXJ0U2l6ZSwgc3RhcnRTaXplICsgdGhpcy5wYWdlU2l6ZSkpO1xuICB9XG5cbiAgcHVibGljIHBhZ2luemF0aW9uRXZlbnQoZXZlbnRPYmo6IGFueSkge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBldmVudE9iajtcbiAgICB0aGlzLmNoYW5nZVNvcnQodGhpcy5zZWxlY3RlZENvbCwgdHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoT25Sb3dzKF9zZWFyY2hUZXJtPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgaWYgKHRoaXMuZm5VdGlsLmlzRW1wdHlPYmplY3QoX3NlYXJjaFRlcm0pKSB7XG4gICAgICB0aGlzLmZpbHRlckFycmF5ID0gdGhpcy5kYXRhQXJyYXk7XG4gICAgICB0aGlzLnRvdGFsUGFnZSA9IE1hdGguY2VpbCh0aGlzLmRhdGFBcnJheS5zaXplIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQXJyYXkgPSBMaXN0KHRoaXMuZm5VdGlsLmZpbHRlckFycmF5KHRoaXMuZGF0YUFycmF5LnRvQXJyYXkoKSwgX3NlYXJjaFRlcm0sIHRydWUpKTtcbiAgICAgIHRoaXMudG90YWxQYWdlID0gTWF0aC5jZWlsKHRoaXMuZmlsdGVyQXJyYXkuc2l6ZSAvIHRoaXMucGFnZVNpemUpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlU29ydCh0aGlzLnNlbGVjdGVkQ29sLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUm93QWN0aW9uKHJvd09iajogb2JqZWN0KSB7XG4gICAgdGhpcy5kYXRhQXJyYXkucHVzaChyb3dPYmopO1xuICAgIHRoaXMuc2VhcmNoT25Sb3dzKCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyQWN0aW9uKHJvd0FycmF5OiBMaXN0PG9iamVjdD4pIHtcbiAgICB0aGlzLmRhdGFBcnJheSA9IHJvd0FycmF5O1xuICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xuICAgIHRoaXMuc2VhcmNoT25Sb3dzKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgdXBkYXRlRGF0YUFycmF5KGRhdGFBcnJheTogTGlzdDxhbnk+KSB7XG4gICAgdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIGNlbGxDbGljayhyb3dPYmo6IG9iamVjdCwgY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVBY3Rpb24ocm93T2JqKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVBY3Rpb24ocm93T2JqOiBvYmplY3QpIHtcbiAgICB0aGlzLnVwZGF0ZVJvdy5lbWl0KHtcbiAgICAgIHJvdzogcm93T2JqLCBjYWxsYmFjazogKHJldHVyblJvdzogb2JqZWN0KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YUFycmF5KSB7XG4gICAgICAgICAgaWYgKHRoaXMudW5pcXVLZXlFeGl0cyAmJiB0aGlzLmRhdGFBcnJheVtrZXldW3RoaXMuY29uZmlnLnVuaXF1ZUtleV0gPT09IHJldHVyblJvd1t0aGlzLmNvbmZpZy51bmlxdWVLZXldKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFBcnJheVtrZXldID0gcmV0dXJuUm93O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoT25Sb3dzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQWN0aW9uKHJvd09iajogb2JqZWN0KSB7XG4gICAgdGhpcy5kZWxldGVSb3cuZW1pdCh7XG4gICAgICByb3c6IHJvd09iaiwgY2FsbGJhY2s6IChyZXR1cm5Sb3c/OiBvYmplY3QpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB0aGlzLmRhdGFBcnJheSkge1xuICAgICAgICAgIGlmICh0aGlzLnVuaXF1S2V5RXhpdHMgJiYgdGhpcy5kYXRhQXJyYXlbaW5kZXhdW3RoaXMuY29uZmlnLnVuaXF1ZUtleV0gPT09IHJvd09ialt0aGlzLmNvbmZpZy51bmlxdWVLZXldKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcbiAgICAgICAgICAgIHRoaXMuZGF0YUFycmF5LnNwbGljZShwYXJzZUludChpbmRleCksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VhcmNoT25Sb3dzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZVJvd0FjdGlvbihyb3dPYmo6IG9iamVjdCkge1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy5kYXRhQXJyYXkpIHtcbiAgICAgIGlmICh0aGlzLnVuaXF1S2V5RXhpdHMgJiYgdGhpcy5kYXRhQXJyYXlbaW5kZXhdW3RoaXMuY29uZmlnLnVuaXF1ZUtleV0gPT09IHJvd09ialt0aGlzLmNvbmZpZy51bmlxdWVLZXldKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcbiAgICAgICAgdGhpcy5kYXRhQXJyYXkuc3BsaWNlKHBhcnNlSW50KGluZGV4KSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlYXJjaE9uUm93cygpO1xuICB9XG5cblxuICBwdWJsaWMgdG9nZ2xlU2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xuICAgIGlmICh0aGlzLnNob3dTZWFyY2hCb3gpIHtcbiAgICAgIHRoaXMudGJsU2VhcmNoQ29uZmlnLmFjdGlvbkNsZWFyLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hPblJvd3MoKTtcbiAgICB0aGlzLnNob3dTZWFyY2hCb3ggPSAhdGhpcy5zaG93U2VhcmNoQm94O1xuXG5cbiAgfVxufVxuIl19