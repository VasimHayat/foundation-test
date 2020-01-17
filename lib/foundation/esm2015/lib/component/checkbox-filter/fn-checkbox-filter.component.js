/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
export class FnCheckboxFilterItem {
}
if (false) {
    /** @type {?} */
    FnCheckboxFilterItem.prototype.id;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.description;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.isSelected;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.childArray;
}
export class FnCheckboxFilterComponent {
    constructor() {
        this.listItemArray = [];
        this.cbSelectedItem = new EventEmitter();
        this.description = 'Filter';
        this.uiFilterArray = [];
        this.searchInput = '';
        this.showDropDown = false;
        this.showDropDown = false;
        this.selectedMap = {};
        this.listenClick();
    }
    /**
     * @return {?}
     */
    listenClick() {
        this.$wClickSubscrption = fromEvent(window, 'click').subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!document.getElementById('fn-checkbox-filter-container').contains(event.target)) {
                this.showDropDown = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // tslint:disable-next-line:triple-equals
        this.isGrouping = (this.isGrouping === true || this.isGrouping == 'true');
        this.uiFilterArray = this.listItemArray;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$wClickSubscrption.unsubscribe();
    }
    /**
     * @param {?} toggelValue
     * @return {?}
     */
    toggleSelect(toggelValue) {
        this.showDropDown = toggelValue;
    }
    /**
     * @return {?}
     */
    refreshSearch() {
        if (this.searchInput) {
            this.searchInput = '';
            this.uiFilterArray = this.listItemArray;
        }
    }
    /**
     * @param {?} isSelectAll
     * @return {?}
     */
    selectAction(isSelectAll) {
        if (isSelectAll) {
            if (this.isGrouping) {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    /** @type {?} */
                    const childArray = [];
                    this.uiFilterArray[i].isSelected = true;
                    for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                        this.uiFilterArray[i].childArray[j].isSelected = true;
                        childArray.push(this.uiFilterArray[i].childArray[j].id);
                    }
                    this.selectedMap[this.uiFilterArray[i].id] = childArray;
                }
            }
            else {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    this.uiFilterArray[i].isSelected = true;
                    // this.selectedMap[this.uiFilterArray[i].id] = null;
                    delete this.selectedMap[this.uiFilterArray[i].id];
                }
            }
            if (Object.keys(this.selectedMap).length > 1) {
                this.description = Object.keys(this.selectedMap).length + ' ' + 'options selected';
            }
        }
        else {
            this.uiFilterArray.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.isSelected = false;
            }));
            if (this.isGrouping) {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    this.uiFilterArray[i].isSelected = false;
                    for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                        this.uiFilterArray[i].childArray[j].isSelected = false;
                    }
                }
                this.searchInput = '';
                this.uiFilterArray = this.listItemArray;
            }
            this.selectedMap = {};
            this.description = 'Filter';
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
    /**
     * @param {?} uiItem
     * @return {?}
     */
    selectParent(uiItem) {
        /** @type {?} */
        const id = uiItem.id;
        if (this.selectedMap[id] !== undefined) {
            delete this.selectedMap[id];
        }
        if (uiItem.isSelected) {
            uiItem.isSelected = false;
            if (this.isGrouping && uiItem.childArray) {
                for (let i = 0; i < uiItem.childArray.length; i++) {
                    uiItem.childArray[i].isSelected = false;
                }
            }
        }
        else {
            uiItem.isSelected = true;
            /** @type {?} */
            const childArray = [];
            if (this.isGrouping && uiItem.childArray) {
                for (let i = 0; i < uiItem.childArray.length; i++) {
                    uiItem.childArray[i].isSelected = true;
                    childArray.push(uiItem.childArray[i].id);
                }
            }
            else {
                childArray.push(id);
            }
            this.selectedMap[id] = childArray;
        }
        // if (Object.keys(this.selectedMap).length === 1) {
        //     const firstIndex = Array.from(this.selectedMap)[0];
        //     for (let i = 0; i < this.uiFilterArray.length; i++) {
        //         if (this.uiFilterArray[i].id === firstIndex[0]) {
        //             this.description = this.uiFilterArray[i].description;
        //         }
        //     }
        // } else
        if (Object.keys(this.selectedMap).length >= 1) {
            this.description = Object.keys(this.selectedMap).length + ' ' + 'options selected';
        }
        else {
            this.selectedMap = {};
            this.description = 'Filter';
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
    /**
     * @return {?}
     */
    onSearch() {
        if (this.searchInput !== '') {
            if (this.isGrouping) {
                this.uiFilterArray = [];
                for (let i = 0; i < this.listItemArray.length; i++) {
                    if (this.listItemArray[i].description.toLowerCase().indexOf(this.searchInput) !== -1) {
                        this.uiFilterArray.push(Object.assign([], this.listItemArray[i]));
                    }
                    else {
                        /** @type {?} */
                        const childItem = this.listItemArray[i].childArray.filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        item => item.description.toLowerCase().indexOf(this.searchInput) !== -1));
                        if (childItem.length > 0) {
                            this.uiFilterArray.push(Object.assign([], this.listItemArray[i]));
                            this.uiFilterArray[this.uiFilterArray.length - 1].childArray = childItem;
                        }
                    }
                }
            }
            else {
                this.uiFilterArray = this.listItemArray.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.description.toLowerCase().indexOf(this.searchInput) !== -1));
            }
        }
        else {
            this.uiFilterArray = this.listItemArray;
        }
    }
    // this function is used for select and unselect the child item
    /**
     * @param {?} childVal
     * @param {?} childParentId
     * @return {?}
     */
    selectChildItem(childVal, childParentId) {
        for (let i = 0; i < this.uiFilterArray.length; i++) {
            if (this.uiFilterArray[i].id === childParentId) {
                for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                    if (this.uiFilterArray[i].childArray[j].id === childVal.id) {
                        if (this.uiFilterArray[i].childArray[j].isSelected === false) {
                            this.uiFilterArray[i].childArray[j].isSelected = true;
                            if (this.selectedMap[childParentId] !== undefined) {
                                /** @type {?} */
                                const itemVal = this.selectedMap[childParentId];
                                itemVal.push(childVal.id);
                                if (this.uiFilterArray[i].childArray.length === itemVal.length) {
                                    this.uiFilterArray[i].isSelected = true;
                                }
                            }
                            else {
                                this.selectedMap[childParentId] = [childVal.id];
                                if (this.uiFilterArray[i].childArray.length === this.selectedMap[childParentId].length) {
                                    this.uiFilterArray[i].isSelected = true;
                                }
                            }
                        }
                        else {
                            this.uiFilterArray[i].isSelected = false;
                            this.uiFilterArray[i].childArray[j].isSelected = false;
                            /** @type {?} */
                            const childObj = this.selectedMap[childParentId];
                            delete childObj[childVal.id];
                            this.selectedMap[childParentId] = childObj;
                            if (Object.keys(this.selectedMap[childParentId]).length === 0) {
                                delete this.selectedMap[childParentId];
                            }
                        }
                    }
                }
            }
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
}
FnCheckboxFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-checkbox-filter',
                template: "<div id=\"fn-checkbox-filter-container\" class=\"dropdown\" (click)=\"toggleSelect(true)\">\r\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle filter_btn\" ngDefaultControl [(ngModel)]=\"selectedMap\"\r\n    data-toggle=\"dropdown\"><span class=\"pull-left\" [innerHtml]=\"description\"></span>\r\n    <i class=\"fa fa-filter fa-fw\"></i>\r\n  </button>\r\n  <ul class=\"dropdown-menu filter_data show fn-multi-drop-ul\" *ngIf=\"showDropDown\">\r\n    <li> <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchInput\" (keyup)=\"onSearch()\" maxlength=\"40\"\r\n        class=\"form-control\"><i class=\"fa fa-times-circle-o search_icon\" (click)=\"refreshSearch()\"></i>\r\n    </li>\r\n    <li>\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-6\"><a (click)=\"selectAction(true)\">Select all</a></div>\r\n        <div class=\"col-6 text-right\"><a (click)=\"selectAction(false)\">Clear</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li *ngFor=\"let uiItem of uiFilterArray; let i=index;\" [value]=\"uiItem.id\">\r\n      <div (click)=\"selectParent(uiItem)\">\r\n        <span><i [ngClass]=\"{'fa fa-check': uiItem.isSelected}\"></i></span>\r\n        {{uiItem.description}}</div>\r\n      <div class=\"sub_role\" *ngIf=\"isGrouping\">\r\n        <ng-container *ngFor=\"let childItem of uiItem.childArray\">\r\n          <div class=\"sub_role_data\" (click)=\"selectChildItem(childItem,uiItem.id)\">\r\n            <span><i [ngClass]=\"{'fa fa-check': childItem.isSelected}\"></i></span>\r\n            <span>{{childItem.description}}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                styles: [".filter_btn{background-color:#fff;color:#777;border:1px solid #777;border-radius:30px;width:250px;margin-top:10px;padding:4px 10px;text-align:left}.filter_btn:active,.filter_btn:focus,.filter_btn:hover{box-shadow:none}.filter_btn i{margin-left:10px;float:right;top:18px;position:absolute;right:8px}.filter_btn:after{display:none}.filter_data{width:250px;background-color:#fff;padding:10px;box-shadow:0 6px 12px rgba(0,0,0,.15);max-height:230px;overflow-x:hidden}.filter_data input{padding-right:40px}.filter_data input:focus{box-shadow:none}.filter_data .search_icon{position:absolute;right:22px;top:22px;cursor:pointer}.filter_data li{color:#424242;font-size:14px;border-radius:4px;float:left;width:100%}.filter_data li a{text-decoration:none}.filter_data li div{padding:5px 6px}.filter_data li>div:hover{background-color:#f8f9f9;color:#787a7b}.filter_data li i{font-size:14px}.filter_data li span{margin-right:5px;width:auto;display:inline-block}.filter_data li:first-child{cursor:default;background-color:transparent;padding:0 0 5px}.filter_data li:nth-child(2){cursor:default}.filter_data li .sub_role{color:#a9a9a9;font-size:13px;padding:0;float:left;width:100%}.filter_data li .sub_role:hover{background-color:transparent}.filter_data li .sub_role .sub_role_data{cursor:pointer;float:left;width:100%;margin-bottom:1px;padding:5px 6px 5px 22px}.filter_data li .sub_role .sub_role_data:hover{background-color:#f8f9f9;color:#787a7b}"]
            }] }
];
/** @nocollapse */
FnCheckboxFilterComponent.ctorParameters = () => [];
FnCheckboxFilterComponent.propDecorators = {
    isGrouping: [{ type: Input }],
    listItemArray: [{ type: Input }],
    cbSelectedItem: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.isGrouping;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.listItemArray;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.cbSelectedItem;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.$wClickSubscrption;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.description;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.uiFilterArray;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.searchInput;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.showDropDown;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.selectedMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2NoZWNrYm94LWZpbHRlci9mbi1jaGVja2JveC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQStCLE1BQU0sTUFBTSxDQUFDO0FBRTlELE1BQU0sT0FBTyxvQkFBb0I7Q0FLaEM7OztJQUpHLGtDQUFXOztJQUNYLDJDQUFvQjs7SUFDcEIsMENBQW9COztJQUNwQiwwQ0FBeUM7O0FBUzdDLE1BQU0sT0FBTyx5QkFBeUI7SUFrQmxDO1FBZFMsa0JBQWEsR0FBZ0MsRUFBRSxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUV2QixrQkFBYSxHQUFnQyxFQUFFLENBQUM7UUFFaEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFPakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dC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QUFhLENBQUM7NEJBQ2hELE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxRQUFRLENBQUM7NEJBRTNDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQ0FDM0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzZCQUMxQzt5QkFJSjtxQkFFSjtpQkFDSjthQUVKO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFL0MsQ0FBQzs7O1lBN09KLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwrcURBQWdEOzthQUVuRDs7Ozs7eUJBS0ksS0FBSzs0QkFDTCxLQUFLOzZCQUNMLE1BQU07Ozs7SUFGUCwrQ0FBc0M7O0lBQ3RDLGtEQUF5RDs7SUFDekQsbURBQThDOztJQUU5Qyx1REFBaUM7O0lBQ2pDLGdEQUF1Qjs7SUFFdkIsa0RBQWdEOztJQUVoRCxnREFBaUI7O0lBQ2pCLGlEQUFxQjs7SUFFckIsZ0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uLCBjb25jYXQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm5DaGVja2JveEZpbHRlckl0ZW0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgY2hpbGRBcnJheT86IEFycmF5PEZuQ2hlY2tib3hGaWx0ZXJJdGVtPjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZuLWNoZWNrYm94LWZpbHRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZuLWNoZWNrYm94LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnZm4tY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbkNoZWNrYm94RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSBpc0dyb3VwaW5nOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbGlzdEl0ZW1BcnJheTogQXJyYXk8Rm5DaGVja2JveEZpbHRlckl0ZW0+ID0gW107XHJcbiAgICBAT3V0cHV0KCkgY2JTZWxlY3RlZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgJHdDbGlja1N1YnNjcnB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBkZXNjcmlwdGlvbiA9ICdGaWx0ZXInO1xyXG5cclxuICAgIHVpRmlsdGVyQXJyYXk6IEFycmF5PEZuQ2hlY2tib3hGaWx0ZXJJdGVtPiA9IFtdO1xyXG5cclxuICAgIHNlYXJjaElucHV0ID0gJyc7XHJcbiAgICBzaG93RHJvcERvd24gPSBmYWxzZTtcclxuXHJcbiAgICBzZWxlY3RlZE1hcDogb2JqZWN0O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93RHJvcERvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5saXN0ZW5DbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuJHdDbGlja1N1YnNjcnB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdywgJ2NsaWNrJykuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZuLWNoZWNrYm94LWZpbHRlci1jb250YWluZXInKS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEcm9wRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIHRoaXMuaXNHcm91cGluZyA9ICh0aGlzLmlzR3JvdXBpbmcgPT09IHRydWUgfHwgdGhpcy5pc0dyb3VwaW5nID09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy51aUZpbHRlckFycmF5ID0gdGhpcy5saXN0SXRlbUFycmF5O1xyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kd0NsaWNrU3Vic2NycHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTZWxlY3QodG9nZ2VsVmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNob3dEcm9wRG93biA9IHRvZ2dlbFZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWZyZXNoU2VhcmNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSAnJztcclxuICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5ID0gdGhpcy5saXN0SXRlbUFycmF5O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0QWN0aW9uKGlzU2VsZWN0QWxsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzU2VsZWN0QWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBpbmcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aUZpbHRlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5W2pdLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEFycmF5LnB1c2godGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXlbal0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwW3RoaXMudWlGaWx0ZXJBcnJheVtpXS5pZF0gPSBjaGlsZEFycmF5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RlZE1hcFt0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaWRdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZE1hcFt0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE1hcCkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRNYXApLmxlbmd0aCArICcgJyArICdvcHRpb25zIHNlbGVjdGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkuZm9yRWFjaCgoaXRlbTogRm5DaGVja2JveEZpbHRlckl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBpbmcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aUZpbHRlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5W2pdLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkgPSB0aGlzLmxpc3RJdGVtQXJyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gJ0ZpbHRlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2JTZWxlY3RlZEl0ZW0uZW1pdCh0aGlzLnNlbGVjdGVkTWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RQYXJlbnQodWlJdGVtOiBGbkNoZWNrYm94RmlsdGVySXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdWlJdGVtLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTWFwW2lkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkTWFwW2lkXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1aUl0ZW0uaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB1aUl0ZW0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwaW5nICYmIHVpSXRlbS5jaGlsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpSXRlbS5jaGlsZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlJdGVtLmNoaWxkQXJyYXlbaV0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWlJdGVtLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwaW5nICYmIHVpSXRlbS5jaGlsZEFycmF5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1aUl0ZW0uY2hpbGRBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1aUl0ZW0uY2hpbGRBcnJheVtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEFycmF5LnB1c2godWlJdGVtLmNoaWxkQXJyYXlbaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRBcnJheS5wdXNoKGlkKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcFtpZF0gPSBjaGlsZEFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRNYXApLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBmaXJzdEluZGV4ID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkTWFwKVswXTtcclxuXHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aUZpbHRlckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy51aUZpbHRlckFycmF5W2ldLmlkID09PSBmaXJzdEluZGV4WzBdKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRoaXMudWlGaWx0ZXJBcnJheVtpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyB9IGVsc2VcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE1hcCkubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRNYXApLmxlbmd0aCArICcgJyArICdvcHRpb25zIHNlbGVjdGVkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnRmlsdGVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYlNlbGVjdGVkSXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRNYXApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCAhPT0gJycpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RJdGVtQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0SXRlbUFycmF5W2ldLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaElucHV0KSAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheS5wdXNoKE9iamVjdC5hc3NpZ24oW10sIHRoaXMubGlzdEl0ZW1BcnJheVtpXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEl0ZW0gPSB0aGlzLmxpc3RJdGVtQXJyYXlbaV0uY2hpbGRBcnJheS5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hJbnB1dCkgIT09IC0xKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZEl0ZW0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5LnB1c2goT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5saXN0SXRlbUFycmF5W2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbdGhpcy51aUZpbHRlckFycmF5Lmxlbmd0aCAtIDFdLmNoaWxkQXJyYXkgPSBjaGlsZEl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkgPSB0aGlzLmxpc3RJdGVtQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWFyY2hJbnB1dCkgIT09IC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheSA9IHRoaXMubGlzdEl0ZW1BcnJheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBzZWxlY3QgYW5kIHVuc2VsZWN0IHRoZSBjaGlsZCBpdGVtXHJcbiAgICBzZWxlY3RDaGlsZEl0ZW0oY2hpbGRWYWw6IEZuQ2hlY2tib3hGaWx0ZXJJdGVtLCBjaGlsZFBhcmVudElkOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaWQgPT09IGNoaWxkUGFyZW50SWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5Lmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uY2hpbGRBcnJheVtqXS5pZCA9PT0gY2hpbGRWYWwuaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uY2hpbGRBcnJheVtqXS5pc1NlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXlbal0uaXNTZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWwgPSB0aGlzLnNlbGVjdGVkTWFwW2NoaWxkUGFyZW50SWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1WYWwucHVzaChjaGlsZFZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5Lmxlbmd0aCA9PT0gaXRlbVZhbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF0gPSBbY2hpbGRWYWwuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uY2hpbGRBcnJheS5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5W2pdLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE9iaiA9IHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRPYmpbY2hpbGRWYWwuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXSA9IGNoaWxkT2JqO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkTWFwW2NoaWxkUGFyZW50SWRdKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2JTZWxlY3RlZEl0ZW0uZW1pdCh0aGlzLnNlbGVjdGVkTWFwKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=