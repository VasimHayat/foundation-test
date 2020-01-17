/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModel } from '@angular/forms';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { FLOAT_NUM_WITH_NEG_REGEX, FLOAT_NUM_REGEX } from '../model/fn-form.constant';
var FnNumberDirective = /** @class */ (function () {
    function FnNumberDirective(model, elementRef) {
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
    FnNumberDirective.prototype.removeSelectedVal = /**
     * @return {?}
     */
    function () {
        this.selectedVal = window.getSelection().toString();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnNumberDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // tslint:disable-next-line: no-string-literal
        /** @type {?} */
        var isNotAddingBeforMinus = !(e.target['value'].indexOf('-') === 0 && e.target['selectionStart'] === 0);
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
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnNumberDirective.prototype.onKeyUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDecimal) {
            return;
        }
        else {
            this.decimalCounter = this.nativeElement.value.split('.').length - 1;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.onPaste = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.removeSelectedVal();
        /** @type {?} */
        var pastedInput = event.clipboardData.getData('text/plain');
        if (this.isValidPastString(pastedInput, event)) {
            document.execCommand('insertText', false, pastedInput);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var textData = event.dataTransfer.getData('text');
        this.nativeElement.focus();
        this.removeSelectedVal();
        if (this.isValidPastString(textData, event)) {
            document.execCommand('insertText', false, textData);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    };
    /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    FnNumberDirective.prototype.isDigit = /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    function (eventKey, isNotAddingDotBeforMinus) {
        return ((eventKey >= '0' && eventKey <= '9') && isNotAddingDotBeforMinus);
    };
    /**
     * @return {?}
     */
    FnNumberDirective.prototype.isAllTextSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var valueLen = this.nativeElement.value.trim().length;
        return valueLen === 0;
    };
    /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    FnNumberDirective.prototype.isValidKey = /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    function (event, isNotAddingDotBeforMinus) {
        /** @type {?} */
        var key = event.key;
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
    };
    // Used only for copy paste data
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.isValidPastString = 
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    function (inputVal, event) {
        /** @type {?} */
        var startCursorposition = event.target.selectionStart;
        /** @type {?} */
        var endCursorposition = event.target.selectionEnd;
        return this.isAllowPastingOrDroping(this.replaceBetween(startCursorposition, endCursorposition, inputVal)) ? this.isDecimal ?
            this.isValidDecimal(inputVal, startCursorposition) : this.isValidNumber(inputVal, startCursorposition) : false;
    };
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    FnNumberDirective.prototype.isValidNumber = /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    function (inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? /^[-]?[0-9]+$/.test(inputVal) : /^[0-9]+$/.test(inputVal);
    };
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    FnNumberDirective.prototype.isValidDecimal = /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    function (inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? FLOAT_NUM_WITH_NEG_REGEX.test(inputVal) : FLOAT_NUM_REGEX.test(inputVal);
    };
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    FnNumberDirective.prototype.replaceBetween = /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    function (start, end, inputVal) {
        /** @type {?} */
        var value = this.nativeElement.val;
        return value !== undefined && value !== '' ? value.substring(0, start) + inputVal + value.substring(end) : inputVal;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FnNumberDirective.prototype.isAllowPastingOrDroping = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return FLOAT_NUM_WITH_NEG_REGEX.test(val);
    };
    FnNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fnNumberDirective]',
                    providers: [NgModel]
                },] }
    ];
    /** @nocollapse */
    FnNumberDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    FnNumberDirective.propDecorators = {
        isNegative: [{ type: Input }],
        isDecimal: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return FnNumberDirective;
}());
export { FnNumberDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbnVtYmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29yZS9kaXJlY3RpdmVzL2ZuLW51bWJlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUdwRjtJQTBCRSwyQkFBc0IsS0FBYyxFQUFVLFVBQXNCO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQVM7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEI1RCxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixtQkFBYyxHQUFHO1lBQ3ZCLFdBQVc7WUFDWCxRQUFRO1lBQ1IsS0FBSztZQUNMLFFBQVE7WUFDUixPQUFPO1lBQ1AsTUFBTTtZQUNOLEtBQUs7WUFDTCxXQUFXO1lBQ1gsWUFBWTtZQUNaLE9BQU87WUFDUCxNQUFNO1lBQ04sT0FBTztTQUNSLENBQUM7UUFLTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQztRQUV4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFHRCw2Q0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBSUQscUNBQVM7Ozs7SUFEVCxVQUNVLENBQWdCOzs7WUFFbEIscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxD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QUM7O2dCQXBKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUNyQjs7OztnQkFUTyxPQUFPO2dCQUVJLFVBQVU7Ozs2QkEwQjFCLEtBQUs7NEJBQ0wsS0FBSzs0QkFhTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQWdDbEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFVaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFZaEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0RGxDLHdCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0FsSlksaUJBQWlCOzs7Ozs7SUFFNUIsMkNBQTJCOzs7OztJQUMzQiwyQ0FhRTs7SUFFRix1Q0FBNkI7O0lBQzdCLHNDQUE0Qjs7Ozs7SUFDNUIsMENBQTJCOzs7OztJQUMzQix3Q0FBeUI7Ozs7O0lBQ2Isa0NBQXdCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2RlbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZMT0FUX05VTV9XSVRIX05FR19SRUdFWCwgRkxPQVRfTlVNX1JFR0VYfSBmcm9tICcuLi9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmbk51bWJlckRpcmVjdGl2ZV0nLFxyXG4gIHByb3ZpZGVyczogW05nTW9kZWxdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk51bWJlckRpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgZGVjaW1hbENvdW50ZXIgPSAwO1xyXG4gIHByaXZhdGUgbmF2aWdhdGlvbktleXMgPSBbXHJcbiAgICAnQmFja3NwYWNlJyxcclxuICAgICdEZWxldGUnLFxyXG4gICAgJ1RhYicsXHJcbiAgICAnRXNjYXBlJyxcclxuICAgICdFbnRlcicsXHJcbiAgICAnSG9tZScsXHJcbiAgICAnRW5kJyxcclxuICAgICdBcnJvd0xlZnQnLFxyXG4gICAgJ0Fycm93UmlnaHQnLFxyXG4gICAgJ0NsZWFyJyxcclxuICAgICdDb3B5JyxcclxuICAgICdQYXN0ZSdcclxuICBdO1xyXG5cclxuICBASW5wdXQoKSBpc05lZ2F0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGlzRGVjaW1hbDogYm9vbGVhbjtcclxuICBwcml2YXRlIG5hdGl2ZUVsZW1lbnQ6IGFueTtcclxuICBwcml2YXRlIHNlbGVjdGVkVmFsID0gJyc7IC8vIHVzZXIgc2VsZWN0ZWQgdmFsdWUgdmlhIG1vdXNlXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGVsOiBOZ01vZGVsLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXHJcbiAgICBjb25zdCBpc05vdEFkZGluZ0JlZm9yTWludXMgPSAhKGUudGFyZ2V0Wyd2YWx1ZSddLmluZGV4T2YoJy0nKSA9PT0gMCAmJiBlLnRhcmdldFsnc2VsZWN0aW9uU3RhcnQnXSA9PT0gMCk7XHJcbiAgICBpZiAoKFxyXG4gICAgICB0aGlzLm5hdmlnYXRpb25LZXlzLmluZGV4T2YoZS5rZXkpID4gLTEgfHwgLy8gQWxsb3c6IG5hdmlnYXRpb24ga2V5czogYmFja3NwYWNlLCBkZWxldGUsIGFycm93cyBldGMuXHJcbiAgICAgIChlLmtleSA9PT0gJ2EnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxyXG4gICAgICAoZS5rZXkgPT09ICdjJyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcclxuICAgICAgKGUua2V5ID09PSAndicgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtWXHJcbiAgICAgIChlLmtleSA9PT0gJ3gnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxyXG4gICAgICAoZS5rZXkgPT09ICd5JyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK3lcclxuICAgICAgKGUua2V5ID09PSAneicgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCt5XHJcbiAgICAgIChlLmtleSA9PT0gJ2EnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtBIChNYWMpXHJcbiAgICAgIChlLmtleSA9PT0gJ2MnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtDIChNYWMpXHJcbiAgICAgIChlLmtleSA9PT0gJ3YnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtWIChNYWMpXHJcbiAgICAgIChlLmtleSA9PT0gJ3gnICYmIGUubWV0YUtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IENtZCtYKE1hYylcclxuICAgICAgKGUua2V5ID09PSAneScgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK3kgKE1hYylcclxuICAgICAgKGUua2V5ID09PSAneicgJiYgZS5tZXRhS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ21kK3ogKE1hYylcclxuICAgICAgKHRoaXMuaXNEZWNpbWFsICYmIGUua2V5ID09PSAnLicgJiYgdGhpcy5kZWNpbWFsQ291bnRlciA8IDEpICYmIGlzTm90QWRkaW5nQmVmb3JNaW51cykvLyBBbGxvdzogb25seSBvbmUgZGVjaW1hbCBwb2ludFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgIGlmIChlLmtleSA9PT0gJyAnIHx8ICF0aGlzLmlzVmFsaWRLZXkoZXZlbnQsIGlzTm90QWRkaW5nQmVmb3JNaW51cykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcclxuICBvbktleVVwKGU6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGVjaW1hbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRlY2ltYWxDb3VudGVyID0gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlLnNwbGl0KCcuJykubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXHJcbiAgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWRWYWwoKTtcclxuICAgIGNvbnN0IHBhc3RlZElucHV0OiBzdHJpbmcgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgIGlmICh0aGlzLmlzVmFsaWRQYXN0U3RyaW5nKHBhc3RlZElucHV0LCBldmVudCkpIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgcGFzdGVkSW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGhpcy5zZWxlY3RlZFZhbCk7XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHRleHREYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcclxuICAgIHRoaXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5yZW1vdmVTZWxlY3RlZFZhbCgpO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZFBhc3RTdHJpbmcodGV4dERhdGEsIGV2ZW50KSkge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0RGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0aGlzLnNlbGVjdGVkVmFsKTtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBpc0RpZ2l0KGV2ZW50S2V5OiBzdHJpbmcsIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykge1xyXG4gICAgcmV0dXJuICgoZXZlbnRLZXkgPj0gJzAnICYmIGV2ZW50S2V5IDw9ICc5JykgJiYgaXNOb3RBZGRpbmdEb3RCZWZvck1pbnVzKTtcclxuICB9XHJcblxyXG4gIGlzQWxsVGV4dFNlbGVjdGVkKCkge1xyXG4gICAgY29uc3QgdmFsdWVMZW4gPSB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUudHJpbSgpLmxlbmd0aDtcclxuICAgIHJldHVybiB2YWx1ZUxlbiA9PT0gMDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRLZXkoZXZlbnQsIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSAmJiBrZXkgPT09ICctJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc0FsbFRleHRTZWxlY3RlZCgpIHx8IChldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlLmluZGV4T2YoJy0nKSA9PT0gLTEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaXNEZWNpbWFsICYmIGtleSA9PT0gJy4nICYmICh0aGlzLmlzQWxsVGV4dFNlbGVjdGVkKCkgfHwgKHRoaXMuZGVjaW1hbENvdW50ZXIgPCAxICYmIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cykpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaWdpdChrZXksIGlzTm90QWRkaW5nRG90QmVmb3JNaW51cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFVzZWQgb25seSBmb3IgY29weSBwYXN0ZSBkYXRhXHJcbiAgaXNWYWxpZFBhc3RTdHJpbmcoaW5wdXRWYWw6IHN0cmluZywgZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgc3RhcnRDdXJzb3Jwb3NpdGlvbiA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgIGNvbnN0IGVuZEN1cnNvcnBvc2l0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcclxuICAgIHJldHVybiB0aGlzLmlzQWxsb3dQYXN0aW5nT3JEcm9waW5nKHRoaXMucmVwbGFjZUJldHdlZW4oc3RhcnRDdXJzb3Jwb3NpdGlvbiwgZW5kQ3Vyc29ycG9zaXRpb24sIGlucHV0VmFsKSkgPyB0aGlzLmlzRGVjaW1hbCA/XHJcbiAgICAgIHRoaXMuaXNWYWxpZERlY2ltYWwoaW5wdXRWYWwsIHN0YXJ0Q3Vyc29ycG9zaXRpb24pIDogdGhpcy5pc1ZhbGlkTnVtYmVyKGlucHV0VmFsLCBzdGFydEN1cnNvcnBvc2l0aW9uKSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZE51bWJlcihpbnB1dFZhbDogc3RyaW5nLCBzdGFydEN1cnNvcnBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc05lZ2F0aXZlICYmIHN0YXJ0Q3Vyc29ycG9zaXRpb24gPT09IDAgPyAvXlstXT9bMC05XSskLy50ZXN0KGlucHV0VmFsKSA6IC9eWzAtOV0rJC8udGVzdChpbnB1dFZhbCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkRGVjaW1hbChpbnB1dFZhbDogc3RyaW5nLCBzdGFydEN1cnNvcnBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc05lZ2F0aXZlICYmIHN0YXJ0Q3Vyc29ycG9zaXRpb24gPT09IDAgPyBGTE9BVF9OVU1fV0lUSF9ORUdfUkVHRVgudGVzdChpbnB1dFZhbCkgOiBGTE9BVF9OVU1fUkVHRVgudGVzdChpbnB1dFZhbCk7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlQmV0d2VlbihzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgaW5wdXRWYWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmF0aXZlRWxlbWVudC52YWw7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJycgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgaW5wdXRWYWwgKyB2YWx1ZS5zdWJzdHJpbmcoZW5kKSA6IGlucHV0VmFsO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxvd1Bhc3RpbmdPckRyb3BpbmcodmFsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gRkxPQVRfTlVNX1dJVEhfTkVHX1JFR0VYLnRlc3QodmFsKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==