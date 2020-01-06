/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModel } from '@angular/forms';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { FLOAT_NUM_WITH_NEG_REGEX, FLOAT_NUM_REGEX } from '../model/fn-form.constant';
export class FnNumberDirective {
    // user selected value via mouse
    /**
     * @param {?} model
     * @param {?} elementRef
     */
    constructor(model, elementRef) {
        this.model = model;
        this.elementRef = elementRef;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.selectedVal = ''; // user selected value via mouse
        this.nativeElement = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    removeSelectedVal() {
        this.selectedVal = window.getSelection().toString();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        // tslint:disable-next-line: no-string-literal
        /** @type {?} */
        const isNotAddingBeforMinus = !(e.target['value'].indexOf('-') === 0 && e.target['selectionStart'] === 0);
        if ((this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'y' && e.ctrlKey === true) || // Allow: Ctrl+y
            (e.key === 'z' && e.ctrlKey === true) || // Allow: Ctrl+y
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X(Mac)
            (e.key === 'y' && e.metaKey === true) || // Allow: Cmd+y (Mac)
            (e.key === 'z' && e.metaKey === true) || // Allow: Cmd+z (Mac)
            (this.isDecimal && e.key === '.' && this.decimalCounter < 1) && isNotAddingBeforMinus) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        // tslint:disable-next-line: deprecation
        if (e.key === ' ' || !this.isValidKey(event, isNotAddingBeforMinus)) {
            e.preventDefault();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyUp(e) {
        if (!this.isDecimal) {
            return;
        }
        else {
            this.decimalCounter = this.nativeElement.value.split('.').length - 1;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPaste(event) {
        this.removeSelectedVal();
        /** @type {?} */
        const pastedInput = event.clipboardData.getData('text/plain');
        if (this.isValidPastString(pastedInput, event)) {
            document.execCommand('insertText', false, pastedInput);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        const textData = event.dataTransfer.getData('text');
        this.nativeElement.focus();
        this.removeSelectedVal();
        if (this.isValidPastString(textData, event)) {
            document.execCommand('insertText', false, textData);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    }
    /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    isDigit(eventKey, isNotAddingDotBeforMinus) {
        return ((eventKey >= '0' && eventKey <= '9') && isNotAddingDotBeforMinus);
    }
    /**
     * @return {?}
     */
    isAllTextSelected() {
        /** @type {?} */
        const valueLen = this.nativeElement.value.trim().length;
        return valueLen === 0;
    }
    /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    isValidKey(event, isNotAddingDotBeforMinus) {
        /** @type {?} */
        const key = event.key;
        if (this.isNegative && key === '-') {
            return this.isAllTextSelected() || (event.target.selectionStart === 0 && this.nativeElement.value.indexOf('-') === -1);
        }
        else {
            if (this.isDecimal && key === '.' && (this.isAllTextSelected() || (this.decimalCounter < 1 && isNotAddingDotBeforMinus))) {
                return true;
            }
            else {
                return this.isDigit(key, isNotAddingDotBeforMinus);
            }
        }
    }
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    isValidPastString(inputVal, event) {
        /** @type {?} */
        const startCursorposition = event.target.selectionStart;
        /** @type {?} */
        const endCursorposition = event.target.selectionEnd;
        return this.isAllowPastingOrDroping(this.replaceBetween(startCursorposition, endCursorposition, inputVal)) ? this.isDecimal ?
            this.isValidDecimal(inputVal, startCursorposition) : this.isValidNumber(inputVal, startCursorposition) : false;
    }
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    isValidNumber(inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? /^[-]?[0-9]+$/.test(inputVal) : /^[0-9]+$/.test(inputVal);
    }
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    isValidDecimal(inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? FLOAT_NUM_WITH_NEG_REGEX.test(inputVal) : FLOAT_NUM_REGEX.test(inputVal);
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    replaceBetween(start, end, inputVal) {
        /** @type {?} */
        const value = this.nativeElement.val;
        return value !== undefined && value !== '' ? value.substring(0, start) + inputVal + value.substring(end) : inputVal;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    isAllowPastingOrDroping(val) {
        return FLOAT_NUM_WITH_NEG_REGEX.test(val);
    }
}
FnNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fnNumberDirective]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
FnNumberDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
FnNumberDirective.propDecorators = {
    isNegative: [{ type: Input }],
    isDecimal: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.decimalCounter;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.navigationKeys;
    /** @type {?} */
    FnNumberDirective.prototype.isNegative;
    /** @type {?} */
    FnNumberDirective.prototype.isDecimal;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.selectedVal;
    /**
     * @type {?}
     * @protected
     */
    FnNumberDirective.prototype.model;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbnVtYmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29yZS9kaXJlY3RpdmVzL2ZuLW51bWJlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVF0RixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFzQjVCLFlBQXNCLEtBQWMsRUFBVSxVQUFzQjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXBCNUQsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsbUJBQWMsR0FBRztZQUN2QixXQUFXO1lBQ1gsUUFBUTtZQUNSLEtBQUs7WUFDTCxRQUFRO1lBQ1IsT0FBTztZQUNQLE1BQU07WUFDTixLQUFLO1lBQ0wsV0FBVztZQUNYLFlBQVk7WUFDWixPQUFPO1lBQ1AsTUFBTTtZQUNOLE9BQU87U0FDUixDQUFDO1FBS00sZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNyRCxDQUFDOzs7O0lBR0QsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFLRCxTQUFTLENBQUMsQ0FBZ0I7OztjQUVsQixxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxP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QUs7d0JBQ0wsS0FBSzt3QkFjTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQWdDbEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFXaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFZaEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXRGaEMsMkNBQTJCOzs7OztJQUMzQiwyQ0FhRTs7SUFFRix1Q0FBNkI7O0lBQzdCLHNDQUE0Qjs7Ozs7SUFDNUIsMENBQTJCOzs7OztJQUMzQix3Q0FBeUI7Ozs7O0lBQ2Isa0NBQXdCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRkxPQVRfTlVNX1dJVEhfTkVHX1JFR0VYLCBGTE9BVF9OVU1fUkVHRVggfSBmcm9tICcuLi9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZm5OdW1iZXJEaXJlY3RpdmVdJyxcclxuICBwcm92aWRlcnM6IFtOZ01vZGVsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5OdW1iZXJEaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIGRlY2ltYWxDb3VudGVyID0gMDtcclxuICBwcml2YXRlIG5hdmlnYXRpb25LZXlzID0gW1xyXG4gICAgJ0JhY2tzcGFjZScsXHJcbiAgICAnRGVsZXRlJyxcclxuICAgICdUYWInLFxyXG4gICAgJ0VzY2FwZScsXHJcbiAgICAnRW50ZXInLFxyXG4gICAgJ0hvbWUnLFxyXG4gICAgJ0VuZCcsXHJcbiAgICAnQXJyb3dMZWZ0JyxcclxuICAgICdBcnJvd1JpZ2h0JyxcclxuICAgICdDbGVhcicsXHJcbiAgICAnQ29weScsXHJcbiAgICAnUGFzdGUnXHJcbiAgXTtcclxuXHJcbiAgQElucHV0KCkgaXNOZWdhdGl2ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc0RlY2ltYWw6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBuYXRpdmVFbGVtZW50OiBhbnk7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbCA9ICcnOyAvLyB1c2VyIHNlbGVjdGVkIHZhbHVlIHZpYSBtb3VzZVxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2RlbDogTmdNb2RlbCwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG5cclxuICByZW1vdmVTZWxlY3RlZFZhbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcclxuICAgIGNvbnN0IGlzTm90QWRkaW5nQmVmb3JNaW51cyA9ICEoZS50YXJnZXRbJ3ZhbHVlJ10uaW5kZXhPZignLScpID09PSAwICYmIGUudGFyZ2V0WydzZWxlY3Rpb25TdGFydCddID09PSAwKTtcclxuICAgIGlmICgoXHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbktleXMuaW5kZXhPZihlLmtleSkgPiAtMSB8fCAvLyBBbGxvdzogbmF2aWdhdGlvbiBrZXlzOiBiYWNrc3BhY2UsIGRlbGV0ZSwgYXJyb3dzIGV0Yy5cclxuICAgICAgKGUua2V5ID09PSAnYScgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXHJcbiAgICAgIChlLmtleSA9PT0gJ2MnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQ1xyXG4gICAgICAoZS5rZXkgPT09ICd2JyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK1ZcclxuICAgICAgKGUua2V5ID09PSAneCcgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXHJcbiAgICAgIChlLmtleSA9PT0gJ3knICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwreVxyXG4gICAgICAoZS5rZXkgPT09ICd6JyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK3lcclxuICAgICAgKGUua2V5ID09PSAnYScgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK0EgKE1hYylcclxuICAgICAgKGUua2V5ID09PSAnYycgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK0MgKE1hYylcclxuICAgICAgKGUua2V5ID09PSAndicgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK1YgKE1hYylcclxuICAgICAgKGUua2V5ID09PSAneCcgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK1goTWFjKVxyXG4gICAgICAoZS5rZXkgPT09ICd5JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQreSAoTWFjKVxyXG4gICAgICAoZS5rZXkgPT09ICd6JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQreiAoTWFjKVxyXG4gICAgICAodGhpcy5pc0RlY2ltYWwgJiYgZS5rZXkgPT09ICcuJyAmJiB0aGlzLmRlY2ltYWxDb3VudGVyIDwgMSkgJiYgaXNOb3RBZGRpbmdCZWZvck1pbnVzKS8vIEFsbG93OiBvbmx5IG9uZSBkZWNpbWFsIHBvaW50XHJcbiAgICApIHtcclxuICAgICAgLy8gbGV0IGl0IGhhcHBlbiwgZG9uJ3QgZG8gYW55dGhpbmdcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxyXG4gICAgaWYgKGUua2V5ID09PSAnICcgfHwgIXRoaXMuaXNWYWxpZEtleShldmVudCwgaXNOb3RBZGRpbmdCZWZvck1pbnVzKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5VXAoZTogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEZWNpbWFsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGVjaW1hbENvdW50ZXIgPSB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUuc3BsaXQoJy4nKS5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXHJcbiAgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWRWYWwoKTtcclxuICAgIGNvbnN0IHBhc3RlZElucHV0OiBzdHJpbmcgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRQYXN0U3RyaW5nKHBhc3RlZElucHV0LCBldmVudCkpIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgcGFzdGVkSW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGhpcy5zZWxlY3RlZFZhbCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHRleHREYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5yZW1vdmVTZWxlY3RlZFZhbCgpO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZFBhc3RTdHJpbmcodGV4dERhdGEsIGV2ZW50KSkge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0aGlzLnNlbGVjdGVkVmFsKTtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBpc0RpZ2l0KGV2ZW50S2V5OiBzdHJpbmcsIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykge1xyXG4gICAgcmV0dXJuICgoZXZlbnRLZXkgPj0gJzAnICYmIGV2ZW50S2V5IDw9ICc5JykgJiYgaXNOb3RBZGRpbmdEb3RCZWZvck1pbnVzKTtcclxuICB9XHJcblxyXG4gIGlzQWxsVGV4dFNlbGVjdGVkKCkge1xyXG4gICAgY29uc3QgdmFsdWVMZW4gPSB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUudHJpbSgpLmxlbmd0aDtcclxuICAgIHJldHVybiB2YWx1ZUxlbiA9PT0gMDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRLZXkoZXZlbnQsIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSAmJiBrZXkgPT09ICctJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0FsbFRleHRTZWxlY3RlZCgpIHx8IChldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlLmluZGV4T2YoJy0nKSA9PT0gLTEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaXNEZWNpbWFsICYmIGtleSA9PT0gJy4nICYmICh0aGlzLmlzQWxsVGV4dFNlbGVjdGVkKCkgfHwgKHRoaXMuZGVjaW1hbENvdW50ZXIgPCAxICYmIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaWdpdChrZXksIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFVzZWQgb25seSBmb3IgY29weSBwYXN0ZSBkYXRhXHJcbiAgaXNWYWxpZFBhc3RTdHJpbmcoaW5wdXRWYWw6IHN0cmluZywgZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgc3RhcnRDdXJzb3Jwb3NpdGlvbiA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGVuZEN1cnNvcnBvc2l0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcclxuICAgIHJldHVybiB0aGlzLmlzQWxsb3dQYXN0aW5nT3JEcm9waW5nKHRoaXMucmVwbGFjZUJldHdlZW4oc3RhcnRDdXJzb3Jwb3NpdGlvbiwgZW5kQ3Vyc29ycG9zaXRpb24sIGlucHV0VmFsKSkgPyB0aGlzLmlzRGVjaW1hbCA/XHJcbiAgICAgIHRoaXMuaXNWYWxpZERlY2ltYWwoaW5wdXRWYWwsIHN0YXJ0Q3Vyc29ycG9zaXRpb24pIDogdGhpcy5pc1ZhbGlkTnVtYmVyKGlucHV0VmFsLCBzdGFydEN1cnNvcnBvc2l0aW9uKSA6IGZhbHNlO1xyXG4gIH1cclxuICBpc1ZhbGlkTnVtYmVyKGlucHV0VmFsOiBzdHJpbmcsIHN0YXJ0Q3Vyc29ycG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzTmVnYXRpdmUgJiYgc3RhcnRDdXJzb3Jwb3NpdGlvbiA9PT0gMCA/IC9eWy1dP1swLTldKyQvLnRlc3QoaW5wdXRWYWwpIDogL15bMC05XSskLy50ZXN0KGlucHV0VmFsKTtcclxuICB9XHJcbiAgaXNWYWxpZERlY2ltYWwoaW5wdXRWYWw6IHN0cmluZywgc3RhcnRDdXJzb3Jwb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNOZWdhdGl2ZSAmJiBzdGFydEN1cnNvcnBvc2l0aW9uID09PSAwID8gRkxPQVRfTlVNX1dJVEhfTkVHX1JFR0VYLnRlc3QoaW5wdXRWYWwpIDogRkxPQVRfTlVNX1JFR0VYLnRlc3QoaW5wdXRWYWwpO1xyXG4gIH1cclxuICByZXBsYWNlQmV0d2VlbihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgaW5wdXRWYWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmF0aXZlRWxlbWVudC52YWw7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJycgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgaW5wdXRWYWwgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kKSA6IGlucHV0VmFsO1xyXG4gIH1cclxuICBpc0FsbG93UGFzdGluZ09yRHJvcGluZyh2YWwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBGTE9BVF9OVU1fV0lUSF9ORUdfUkVHRVgudGVzdCh2YWwpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19