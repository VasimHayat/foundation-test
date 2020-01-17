/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
var FnCheckboxFilterItem = /** @class */ (function () {
    function FnCheckboxFilterItem() {
    }
    return FnCheckboxFilterItem;
}());
export { FnCheckboxFilterItem };
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
var FnCheckboxFilterComponent = /** @class */ (function () {
    function FnCheckboxFilterComponent() {
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
    FnCheckboxFilterComponent.prototype.listenClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.$wClickSubscrption = fromEvent(window, 'click').subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!document.getElementById('fn-checkbox-filter-container').contains(event.target)) {
                _this.showDropDown = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line:triple-equals
        this.isGrouping = (this.isGrouping === true || this.isGrouping == 'true');
        this.uiFilterArray = this.listItemArray;
    };
    /**
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$wClickSubscrption.unsubscribe();
    };
    /**
     * @param {?} toggelValue
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.toggleSelect = /**
     * @param {?} toggelValue
     * @return {?}
     */
    function (toggelValue) {
        this.showDropDown = toggelValue;
    };
    /**
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.refreshSearch = /**
     * @return {?}
     */
    function () {
        if (this.searchInput) {
            this.searchInput = '';
            this.uiFilterArray = this.listItemArray;
        }
    };
    /**
     * @param {?} isSelectAll
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.selectAction = /**
     * @param {?} isSelectAll
     * @return {?}
     */
    function (isSelectAll) {
        if (isSelectAll) {
            if (this.isGrouping) {
                for (var i = 0; i < this.uiFilterArray.length; i++) {
                    /** @type {?} */
                    var childArray = [];
                    this.uiFilterArray[i].isSelected = true;
                    for (var j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                        this.uiFilterArray[i].childArray[j].isSelected = true;
                        childArray.push(this.uiFilterArray[i].childArray[j].id);
                    }
                    this.selectedMap[this.uiFilterArray[i].id] = childArray;
                }
            }
            else {
                for (var i = 0; i < this.uiFilterArray.length; i++) {
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
            function (item) {
                item.isSelected = false;
            }));
            if (this.isGrouping) {
                for (var i = 0; i < this.uiFilterArray.length; i++) {
                    this.uiFilterArray[i].isSelected = false;
                    for (var j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
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
    };
    /**
     * @param {?} uiItem
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.selectParent = /**
     * @param {?} uiItem
     * @return {?}
     */
    function (uiItem) {
        /** @type {?} */
        var id = uiItem.id;
        if (this.selectedMap[id] !== undefined) {
            delete this.selectedMap[id];
        }
        if (uiItem.isSelected) {
            uiItem.isSelected = false;
            if (this.isGrouping && uiItem.childArray) {
                for (var i = 0; i < uiItem.childArray.length; i++) {
                    uiItem.childArray[i].isSelected = false;
                }
            }
        }
        else {
            uiItem.isSelected = true;
            /** @type {?} */
            var childArray = [];
            if (this.isGrouping && uiItem.childArray) {
                for (var i = 0; i < uiItem.childArray.length; i++) {
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
    };
    /**
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.onSearch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchInput !== '') {
            if (this.isGrouping) {
                this.uiFilterArray = [];
                for (var i = 0; i < this.listItemArray.length; i++) {
                    if (this.listItemArray[i].description.toLowerCase().indexOf(this.searchInput) !== -1) {
                        this.uiFilterArray.push(Object.assign([], this.listItemArray[i]));
                    }
                    else {
                        /** @type {?} */
                        var childItem = this.listItemArray[i].childArray.filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) {
                            return item.description.toLowerCase().indexOf(_this.searchInput) !== -1;
                        }));
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
                function (item) { return item.description.toLowerCase().indexOf(_this.searchInput) !== -1; }));
            }
        }
        else {
            this.uiFilterArray = this.listItemArray;
        }
    };
    // this function is used for select and unselect the child item
    // this function is used for select and unselect the child item
    /**
     * @param {?} childVal
     * @param {?} childParentId
     * @return {?}
     */
    FnCheckboxFilterComponent.prototype.selectChildItem = 
    // this function is used for select and unselect the child item
    /**
     * @param {?} childVal
     * @param {?} childParentId
     * @return {?}
     */
    function (childVal, childParentId) {
        for (var i = 0; i < this.uiFilterArray.length; i++) {
            if (this.uiFilterArray[i].id === childParentId) {
                for (var j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                    if (this.uiFilterArray[i].childArray[j].id === childVal.id) {
                        if (this.uiFilterArray[i].childArray[j].isSelected === false) {
                            this.uiFilterArray[i].childArray[j].isSelected = true;
                            if (this.selectedMap[childParentId] !== undefined) {
                                /** @type {?} */
                                var itemVal = this.selectedMap[childParentId];
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
                            var childObj = this.selectedMap[childParentId];
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
    };
    FnCheckboxFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-checkbox-filter',
                    template: "<div id=\"fn-checkbox-filter-container\" class=\"dropdown\" (click)=\"toggleSelect(true)\">\r\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle filter_btn\" ngDefaultControl [(ngModel)]=\"selectedMap\"\r\n    data-toggle=\"dropdown\"><span class=\"pull-left\" [innerHtml]=\"description\"></span>\r\n    <i class=\"fa fa-filter fa-fw\"></i>\r\n  </button>\r\n  <ul class=\"dropdown-menu filter_data show fn-multi-drop-ul\" *ngIf=\"showDropDown\">\r\n    <li> <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchInput\" (keyup)=\"onSearch()\" maxlength=\"40\"\r\n        class=\"form-control\"><i class=\"fa fa-times-circle-o search_icon\" (click)=\"refreshSearch()\"></i>\r\n    </li>\r\n    <li>\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-6\"><a (click)=\"selectAction(true)\">Select all</a></div>\r\n        <div class=\"col-6 text-right\"><a (click)=\"selectAction(false)\">Clear</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li *ngFor=\"let uiItem of uiFilterArray; let i=index;\" [value]=\"uiItem.id\">\r\n      <div (click)=\"selectParent(uiItem)\">\r\n        <span><i [ngClass]=\"{'fa fa-check': uiItem.isSelected}\"></i></span>\r\n        {{uiItem.description}}</div>\r\n      <div class=\"sub_role\" *ngIf=\"isGrouping\">\r\n        <ng-container *ngFor=\"let childItem of uiItem.childArray\">\r\n          <div class=\"sub_role_data\" (click)=\"selectChildItem(childItem,uiItem.id)\">\r\n            <span><i [ngClass]=\"{'fa fa-check': childItem.isSelected}\"></i></span>\r\n            <span>{{childItem.description}}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                    styles: [".filter_btn{background-color:#fff;color:#777;border:1px solid #777;border-radius:30px;width:250px;margin-top:10px;padding:4px 10px;text-align:left}.filter_btn:active,.filter_btn:focus,.filter_btn:hover{box-shadow:none}.filter_btn i{margin-left:10px;float:right;top:18px;position:absolute;right:8px}.filter_btn:after{display:none}.filter_data{width:250px;background-color:#fff;padding:10px;box-shadow:0 6px 12px rgba(0,0,0,.15);max-height:230px;overflow-x:hidden}.filter_data input{padding-right:40px}.filter_data input:focus{box-shadow:none}.filter_data .search_icon{position:absolute;right:22px;top:22px;cursor:pointer}.filter_data li{color:#424242;font-size:14px;border-radius:4px;float:left;width:100%}.filter_data li a{text-decoration:none}.filter_data li div{padding:5px 6px}.filter_data li>div:hover{background-color:#f8f9f9;color:#787a7b}.filter_data li i{font-size:14px}.filter_data li span{margin-right:5px;width:auto;display:inline-block}.filter_data li:first-child{cursor:default;background-color:transparent;padding:0 0 5px}.filter_data li:nth-child(2){cursor:default}.filter_data li .sub_role{color:#a9a9a9;font-size:13px;padding:0;float:left;width:100%}.filter_data li .sub_role:hover{background-color:transparent}.filter_data li .sub_role .sub_role_data{cursor:pointer;float:left;width:100%;margin-bottom:1px;padding:5px 6px 5px 22px}.filter_data li .sub_role .sub_role_data:hover{background-color:#f8f9f9;color:#787a7b}"]
                }] }
    ];
    /** @nocollapse */
    FnCheckboxFilterComponent.ctorParameters = function () { return []; };
    FnCheckboxFilterComponent.propDecorators = {
        isGrouping: [{ type: Input }],
        listItemArray: [{ type: Input }],
        cbSelectedItem: [{ type: Output }]
    };
    return FnCheckboxFilterComponent;
}());
export { FnCheckboxFilterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2NoZWNrYm94LWZpbHRlci9mbi1jaGVja2JveC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQStCLE1BQU0sTUFBTSxDQUFDO0FBRTlEO0lBQUE7SUFLQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpHLGtDQUFXOztJQUNYLDJDQUFvQjs7SUFDcEIsMENBQW9COztJQUNwQiwwQ0FBeUM7O0FBRzdDO0lBd0JJO1FBZFMsa0JBQWEsR0FBZ0MsRUFBRSxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUV2QixrQkFBYSxHQUFnQyxFQUFFLENBQUM7UUFFaEQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFPakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQVU7WUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1B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QUM7NEJBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O2dDQUVqRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7NEJBQ2hELE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxRQUFRLENBQUM7NEJBRTNDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQ0FDM0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzZCQUMxQzt5QkFJSjtxQkFFSjtpQkFDSjthQUVKO1NBQ0o7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFL0MsQ0FBQzs7Z0JBN09KLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QiwrcURBQWdEOztpQkFFbkQ7Ozs7OzZCQUtJLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxNQUFNOztJQXFPWCxnQ0FBQztDQUFBLEFBaFBELElBZ1BDO1NBMU9ZLHlCQUF5Qjs7O0lBR2xDLCtDQUFzQzs7SUFDdEMsa0RBQXlEOztJQUN6RCxtREFBOEM7O0lBRTlDLHVEQUFpQzs7SUFDakMsZ0RBQXVCOztJQUV2QixrREFBZ0Q7O0lBRWhELGdEQUFpQjs7SUFDakIsaURBQXFCOztJQUVyQixnREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24sIGNvbmNhdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGbkNoZWNrYm94RmlsdGVySXRlbSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBjaGlsZEFycmF5PzogQXJyYXk8Rm5DaGVja2JveEZpbHRlckl0ZW0+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm4tY2hlY2tib3gtZmlsdGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZm4tY2hlY2tib3gtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydmbi1jaGVja2JveC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZuQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIGlzR3JvdXBpbmc6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaXN0SXRlbUFycmF5OiBBcnJheTxGbkNoZWNrYm94RmlsdGVySXRlbT4gPSBbXTtcclxuICAgIEBPdXRwdXQoKSBjYlNlbGVjdGVkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAkd0NsaWNrU3Vic2NycHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGRlc2NyaXB0aW9uID0gJ0ZpbHRlcic7XHJcblxyXG4gICAgdWlGaWx0ZXJBcnJheTogQXJyYXk8Rm5DaGVja2JveEZpbHRlckl0ZW0+ID0gW107XHJcblxyXG4gICAgc2VhcmNoSW5wdXQgPSAnJztcclxuICAgIHNob3dEcm9wRG93biA9IGZhbHNlO1xyXG5cclxuICAgIHNlbGVjdGVkTWFwOiBvYmplY3Q7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNob3dEcm9wRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmxpc3RlbkNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy4kd0NsaWNrU3Vic2NycHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAnY2xpY2snKS5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm4tY2hlY2tib3gtZmlsdGVyLWNvbnRhaW5lcicpLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcbiAgICAgICAgdGhpcy5pc0dyb3VwaW5nID0gKHRoaXMuaXNHcm91cGluZyA9PT0gdHJ1ZSB8fCB0aGlzLmlzR3JvdXBpbmcgPT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkgPSB0aGlzLmxpc3RJdGVtQXJyYXk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiR3Q2xpY2tTdWJzY3JwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNlbGVjdCh0b2dnZWxWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdG9nZ2VsVmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlZnJlc2hTZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkgPSB0aGlzLmxpc3RJdGVtQXJyYXk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBY3Rpb24oaXNTZWxlY3RBbGw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNTZWxlY3RBbGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cGluZykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXlbal0uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJyYXkucHVzaCh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uY2hpbGRBcnJheVtqXS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXBbdGhpcy51aUZpbHRlckFycmF5W2ldLmlkXSA9IGNoaWxkQXJyYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlGaWx0ZXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVtpXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNlbGVjdGVkTWFwW3RoaXMudWlGaWx0ZXJBcnJheVtpXS5pZF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkTWFwW3RoaXMudWlGaWx0ZXJBcnJheVtpXS5pZF07XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkTWFwKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE1hcCkubGVuZ3RoICsgJyAnICsgJ29wdGlvbnMgc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheS5mb3JFYWNoKChpdGVtOiBGbkNoZWNrYm94RmlsdGVySXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cGluZykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXlbal0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheSA9IHRoaXMubGlzdEl0ZW1BcnJheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnRmlsdGVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYlNlbGVjdGVkSXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRNYXApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFBhcmVudCh1aUl0ZW06IEZuQ2hlY2tib3hGaWx0ZXJJdGVtKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB1aUl0ZW0uaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNYXBbaWRdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRNYXBbaWRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVpSXRlbS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHVpSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBpbmcgJiYgdWlJdGVtLmNoaWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdWlJdGVtLmNoaWxkQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB1aUl0ZW0uY2hpbGRBcnJheVtpXS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1aUl0ZW0uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBpbmcgJiYgdWlJdGVtLmNoaWxkQXJyYXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpSXRlbS5jaGlsZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVpSXRlbS5jaGlsZEFycmF5W2ldLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQXJyYXkucHVzaCh1aUl0ZW0uY2hpbGRBcnJheVtpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZEFycmF5LnB1c2goaWQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwW2lkXSA9IGNoaWxkQXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE1hcCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGZpcnN0SW5kZXggPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRNYXApWzBdO1xyXG5cclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaWQgPT09IGZpcnN0SW5kZXhbMF0pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy51aUZpbHRlckFycmF5W2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH0gZWxzZVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGVkTWFwKS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gT2JqZWN0LmtleXModGhpcy5zZWxlY3RlZE1hcCkubGVuZ3RoICsgJyAnICsgJ29wdGlvbnMgc2VsZWN0ZWQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXAgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICdGaWx0ZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNiU2VsZWN0ZWRJdGVtLmVtaXQodGhpcy5zZWxlY3RlZE1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2goKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0ICE9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW1BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RJdGVtQXJyYXlbaV0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoSW5wdXQpICE9PSAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5LnB1c2goT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5saXN0SXRlbUFycmF5W2ldKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkSXRlbSA9IHRoaXMubGlzdEl0ZW1BcnJheVtpXS5jaGlsZEFycmF5LmZpbHRlcihpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaElucHV0KSAhPT0gLTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkSXRlbS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXkucHVzaChPYmplY3QuYXNzaWduKFtdLCB0aGlzLmxpc3RJdGVtQXJyYXlbaV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheVt0aGlzLnVpRmlsdGVyQXJyYXkubGVuZ3RoIC0gMV0uY2hpbGRBcnJheSA9IGNoaWxkSXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlGaWx0ZXJBcnJheSA9IHRoaXMubGlzdEl0ZW1BcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaElucHV0KSAhPT0gLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5ID0gdGhpcy5saXN0SXRlbUFycmF5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIHNlbGVjdCBhbmQgdW5zZWxlY3QgdGhlIGNoaWxkIGl0ZW1cclxuICAgIHNlbGVjdENoaWxkSXRlbShjaGlsZFZhbDogRm5DaGVja2JveEZpbHRlckl0ZW0sIGNoaWxkUGFyZW50SWQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlGaWx0ZXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudWlGaWx0ZXJBcnJheVtpXS5pZCA9PT0gY2hpbGRQYXJlbnRJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5W2pdLmlkID09PSBjaGlsZFZhbC5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5W2pdLmlzU2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbaV0uY2hpbGRBcnJheVtqXS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbCA9IHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVZhbC5wdXNoKGNoaWxkVmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXkubGVuZ3RoID09PSBpdGVtVmFsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXSA9IFtjaGlsZFZhbC5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlGaWx0ZXJBcnJheVtpXS5jaGlsZEFycmF5Lmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpRmlsdGVyQXJyYXlbaV0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUZpbHRlckFycmF5W2ldLmNoaWxkQXJyYXlbal0uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkT2JqID0gdGhpcy5zZWxlY3RlZE1hcFtjaGlsZFBhcmVudElkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZE9ialtjaGlsZFZhbC5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwW2NoaWxkUGFyZW50SWRdID0gY2hpbGRPYmo7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc2VsZWN0ZWRNYXBbY2hpbGRQYXJlbnRJZF0pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkTWFwW2NoaWxkUGFyZW50SWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYlNlbGVjdGVkSXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRNYXApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==