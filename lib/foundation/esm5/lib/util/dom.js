/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnDomLibrary = /** @class */ (function () {
    function FnDomLibrary() {
        var _this = this;
        this.nodes = [];
        this.rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
        this.select = (/**
         * @param {?} parameter
         * @param {?} context
         * @return {?}
         */
        function (parameter, context) {
            // Allow for spaces before or after
            parameter = parameter.replace(/^\s*/, '').replace(/\s*$/, '');
            if (/^</.test(parameter)) {
                return _this.generate(parameter);
            }
            return (context || document).querySelectorAll(parameter);
        });
        this.slice = (/**
         * @param {?} pseudo
         * @return {?}
         */
        function (pseudo) {
            // Check that it's not a valid object
            if (!pseudo || pseudo.length === 0 ||
                typeof pseudo === 'string' ||
                pseudo.toString() === '[object Function]') {
                return [];
            }
            // Accept also a u() object (that has .nodes)
            return pseudo.length ? [].slice.call(pseudo.nodes || pseudo) : [pseudo];
        });
        this.generate = (/**
         * @param {?} html
         * @return {?}
         */
        function (html) {
            // Table elements need to be child of <table> for some f***ed up reason
            if (/^\s*<tr[> ]/.test(html)) {
                return new FnDomLibrary().init(document.createElement('table')).html(html).children().children().nodes;
            }
            else if (/^\s*<t(h|d)[> ]/.test(html)) {
                return new FnDomLibrary().init(document.createElement('table')).html(html).children().children().children().nodes;
            }
            else if (/^\s*</.test(html)) {
                return new FnDomLibrary().init(document.createElement('div')).html(html).children().nodes;
            }
            else {
                return document.createTextNode(html);
            }
        });
        this.html = (/**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            // Needs to check undefined as it might be ""
            if (text === undefined) {
                return _this.first().innerHTML || '';
            }
            // If we're attempting to set some text
            // Loop through all the nodes
            return _this.each((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                // Set the inner html to the node
                node.innerHTML = text;
            }));
        });
        this.first = (/**
         * @return {?}
         */
        function () {
            return _this.nodes[0] || false;
        });
        // tslint:disable-next-line: ban-types
        this.each = (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            if (!callback || typeof callback !== 'function') {
                return;
            }
            for (var i = 0; i < _this.nodes.length; i++) {
                callback(_this.nodes[i], i);
            }
        });
        this.empty = (/**
         * @return {?}
         */
        function () {
            return _this.each((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
            }));
        });
        // .filter(selector)
        // Delete all of the nodes that don't pass the selector
        this.filter = (/**
         * @param {?} selector
         * @param {?=} isNative
         * @return {?}
         */
        function (selector, isNative) {
            // The default function if it's a CSS selector
            // Cannot change name to 'selector' since it'd mess with it inside this fn
            /** @type {?} */
            var callback = (/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                // Make it compatible with some other browsers
                node.matches = node.matches || node.msMatchesSelector || node.webkitMatchesSelector;
                // Check if it's the same element (or any element if no selector was passed)
                return node.matches(selector || '*');
            });
            // filter() receives a function as in .filter(e => u(e).children().length)
            if (typeof selector === 'function') {
                callback = selector;
            }
            // filter() receives an instance of Agis as in .filter(u('a'))
            if (selector instanceof FnDomLibrary) {
                callback = (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    return (selector.nodes).indexOf(node) !== -1;
                });
            }
            return isNative ? _this.nodes.filter(callback) : new FnDomLibrary().init(_this.nodes.filter(callback));
        });
        // Find all the nodes children of the current ones matched by a selector
        this.find = (/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            return _this.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                return new FnDomLibrary().init(selector || '*', node);
            }));
        });
        // tslint:disable-next-line: ban-types
        this.map = (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            return callback ? new FnDomLibrary().init(_this.array(callback)).unique() : _this;
        });
        // Merge all of the nodes that the callback return into a simple array
        // tslint:disable-next-line: ban-types
        this.array = (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            callback = callback;
            /** @type {?} */
            var self = _this;
            return _this.nodes.reduce((/**
             * @param {?} list
             * @param {?} node
             * @param {?} i
             * @return {?}
             */
            function (list, node, i) {
                /** @type {?} */
                var val;
                if (callback) {
                    val = callback.call(self, node, i);
                    if (!val) {
                        val = false;
                    }
                    if (typeof val === 'string') {
                        val = new FnDomLibrary().init(val);
                    }
                    if (val instanceof FnDomLibrary) {
                        val = val.nodes;
                    }
                }
                else {
                    val = node.innerHTML;
                }
                return list.concat(val !== false ? val : []);
            }), []);
        });
        // Removed duplicated nodes, used for some specific methods
        this.unique = (/**
         * @return {?}
         */
        function () {
            return new FnDomLibrary().init(_this.nodes.reduce((/**
             * @param {?} clean
             * @param {?} node
             * @return {?}
             */
            function (clean, node) {
                /** @type {?} */
                var istruthy = node !== null && node !== undefined && node !== false;
                return (istruthy && clean.indexOf(node) === -1) ? clean.concat(node) : clean;
            }), []));
        });
        this.classesToArray = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (Array.isArray(val)) {
                return val;
            }
            if (typeof val === 'string') {
                return val.match(_this.rnothtmlwhite) || [];
            }
            return [];
        });
        // Add class(es) to the matched nodes
        this.addClass = (/**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        function (value) {
            /** @type {?} */
            var classes;
            /** @type {?} */
            var elem;
            /** @type {?} */
            var cur;
            /** @type {?} */
            var curValue;
            /** @type {?} */
            var clazz;
            /** @type {?} */
            var j;
            /** @type {?} */
            var finalValue;
            /** @type {?} */
            var i = 0;
            classes = _this.classesToArray(value);
            if (classes.length) {
                // tslint:disable-next-line: no-conditional-assignment
                while ((elem = _this.nodes[i++])) {
                    curValue = _this.getClass(elem);
                    cur = elem.nodeType === 1 && (' ' + _this.stripAndCollapse(curValue) + ' ');
                    if (cur) {
                        j = 0;
                        // tslint:disable-next-line: no-conditional-assignment
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(' ' + clazz + ' ') < 0) {
                                cur += clazz + ' ';
                            }
                        }
                        // Only assign if different to avoid unneeded rendering.
                        finalValue = _this.stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute('class', finalValue);
                        }
                    }
                }
            }
            return _this;
        });
        // Normalize the arguments to an array of strings
        // Allow for several class names like "a b, c" and several parameters
        this.args = (/**
         * @param {?} args
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (args, node, i) {
            if (typeof args === 'function') {
                args = args(node, i);
            }
            if (typeof args !== 'string') {
                args = _this.slice(args).map(_this.str(node, i));
            }
            // Then convert that string to an array of not-null strings
            return args.toString().split(/[\s,]+/).filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return e.length;
            }));
        });
        this.str = (/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) {
            return (/**
             * @param {?} arg
             * @return {?}
             */
            function (arg) {
                // Call the function with the corresponding nodes
                if (typeof arg === 'function') {
                    return arg.call(_this, node, i);
                }
                // From an array or other 'weird' things
                return arg.toString();
            });
        });
        this.removeClass = (/**
         * @template THIS
         * @this {THIS}
         * @param {?=} value
         * @return {THIS}
         */
        function (value) {
            /** @type {?} */
            var classes;
            /** @type {?} */
            var elem;
            /** @type {?} */
            var cur;
            /** @type {?} */
            var curValue;
            /** @type {?} */
            var clazz;
            /** @type {?} */
            var j;
            /** @type {?} */
            var finalValue;
            /** @type {?} */
            var i = 0;
            if (value === undefined) {
                _this.nodes.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) {
                    el.attr('class', '');
                }));
            }
            else {
                classes = _this.classesToArray(value);
                if (classes.length) {
                    // tslint:disable-next-line: no-conditional-assignment
                    while ((elem = _this.nodes[i++])) {
                        curValue = _this.getClass(elem);
                        // This expression is here for better compressibility (see addClass)
                        cur = elem.nodeType === 1 && (' ' + _this.stripAndCollapse(curValue) + ' ');
                        if (cur) {
                            j = 0;
                            // tslint:disable-next-line: no-conditional-assignment
                            while ((clazz = classes[j++])) {
                                // Remove *all* instances
                                while (cur.indexOf(' ' + clazz + ' ') > -1) {
                                    cur = cur.replace(' ' + clazz + ' ', ' ');
                                }
                            }
                            // Only assign if different to avoid unneeded rendering.
                            finalValue = _this.stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute('class', finalValue);
                            }
                        }
                    }
                }
            }
            return _this;
        });
        this.stripAndCollapse = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var _token = val.match(_this.rnothtmlwhite) || [];
            return _token.join(' ');
        });
        this.getClass = (/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            return elem.getAttribute && elem.getAttribute('class') || '';
        });
        this.hasClass = (/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            /** @type {?} */
            var className;
            /** @type {?} */
            var elem;
            /** @type {?} */
            var i = 0;
            className = ' ' + selector + ' ';
            // tslint:disable-next-line: no-conditional-assignment
            while ((elem = _this.nodes[i++])) {
                if (elem.nodeType === 1 &&
                    (' ' + _this.stripAndCollapse(_this.getClass(elem)) + ' ').indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        });
        this._siblings = (/**
         * @param {?} n
         * @param {?} elem
         * @return {?}
         */
        function (n, elem) {
            /** @type {?} */
            var matched = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        });
        this.siblings = (/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            return _this.map((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                return _this._siblings((elem.parentNode || {}).firstChild, elem);
            })).filter(selector);
        });
        this.children = (/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            return _this.map((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                return _this.slice(node.children);
            })).filter(selector);
        });
        this.dir = (/**
         * @param {?} elem
         * @param {?} dir
         * @return {?}
         */
        function (elem, dir) {
            /** @type {?} */
            var matched = [];
            // tslint:disable-next-line: no-conditional-assignment
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    matched.push(elem);
                }
            }
            return matched;
        });
        this._parent = (/**
         * @param {?=} selector
         * @return {?}
         */
        function (selector) {
            return _this.map((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector, true);
        });
        this.parent = (/**
         * @param {?=} selector
         * @return {?}
         */
        function (selector) {
            return _this.map((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector);
        });
        this.parents = (/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            /** @type {?} */
            var parents = [];
            return _this.map((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                parents.push(_this.dir(elem, 'parentNode'));
                return parents;
            })).filter(selector);
        });
    }
    /**
     * @param {?} parameter
     * @param {?=} context
     * @return {?}
     */
    FnDomLibrary.prototype.init = /**
     * @param {?} parameter
     * @param {?=} context
     * @return {?}
     */
    function (parameter, context) {
        if (!(this instanceof FnDomLibrary)) {
            return new FnDomLibrary().init(parameter, context);
        }
        if (parameter instanceof FnDomLibrary) {
            return parameter;
        }
        if (typeof parameter === 'string') {
            parameter = this.select(parameter, context);
        }
        // If we're referring a specific node as in on('click', function(){ u(this) })
        // or the select() function returned a single node such as in '#id'
        if (parameter && parameter.nodeName) {
            parameter = [parameter];
        }
        // Convert to an array, since there are many 'array-like' stuff in js-land
        this.nodes = this.slice(parameter);
        return this;
    };
    return FnDomLibrary;
}());
if (false) {
    /** @type {?} */
    FnDomLibrary.prototype.nodes;
    /**
     * @type {?}
     * @private
     */
    FnDomLibrary.prototype.rnothtmlwhite;
    /** @type {?} */
    FnDomLibrary.prototype.select;
    /** @type {?} */
    FnDomLibrary.prototype.slice;
    /** @type {?} */
    FnDomLibrary.prototype.generate;
    /** @type {?} */
    FnDomLibrary.prototype.html;
    /** @type {?} */
    FnDomLibrary.prototype.first;
    /** @type {?} */
    FnDomLibrary.prototype.each;
    /** @type {?} */
    FnDomLibrary.prototype.empty;
    /** @type {?} */
    FnDomLibrary.prototype.filter;
    /** @type {?} */
    FnDomLibrary.prototype.find;
    /** @type {?} */
    FnDomLibrary.prototype.map;
    /** @type {?} */
    FnDomLibrary.prototype.array;
    /** @type {?} */
    FnDomLibrary.prototype.unique;
    /** @type {?} */
    FnDomLibrary.prototype.classesToArray;
    /** @type {?} */
    FnDomLibrary.prototype.addClass;
    /** @type {?} */
    FnDomLibrary.prototype.args;
    /** @type {?} */
    FnDomLibrary.prototype.str;
    /** @type {?} */
    FnDomLibrary.prototype.removeClass;
    /**
     * @type {?}
     * @private
     */
    FnDomLibrary.prototype.stripAndCollapse;
    /** @type {?} */
    FnDomLibrary.prototype.getClass;
    /** @type {?} */
    FnDomLibrary.prototype.hasClass;
    /** @type {?} */
    FnDomLibrary.prototype._siblings;
    /** @type {?} */
    FnDomLibrary.prototype.siblings;
    /** @type {?} */
    FnDomLibrary.prototype.children;
    /** @type {?} */
    FnDomLibrary.prototype.dir;
    /** @type {?} */
    FnDomLibrary.prototype._parent;
    /** @type {?} */
    FnDomLibrary.prototype.parent;
    /** @type {?} */
    FnDomLibrary.prototype.parents;
}
/** @type {?} */
export var fnDom = new FnDomLibrary().init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtRQUFBLGlCQWlZQztRQWhZQyxVQUFLLEdBQWUsRUFBRSxDQUFDO1FBQ2Ysa0JBQWEsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUEwQjlDLFdBQU07Ozs7O1FBQUcsVUFBQyxTQUFjLEVBQUUsT0FBWTtZQUNwQyxtQ0FBbUM7WUFDbkMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFOUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDakM7WUFFRCxPQUFPLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBQTtRQUVELFVBQUs7Ozs7UUFBRyxVQUFDLE1BQVc7WUFDbEIscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNoQyxPQUFPLE1BQU0sS0FBSyxRQUFRO2dCQUMxQixNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssbUJBQW1CLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFFRCw2Q0FBNkM7WUFDN0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFBQTtRQUVELGFBQVE7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Qzs7SUEwQjlDLDhCQVNDOztJQUVELDZCQVVDOztJQUVELGdDQVlDOztJQUVELDRCQVlDOztJQUVELDZCQUVDOztJQUVELDRCQVFDOztJQUNELDZCQU1DOztJQUtELDhCQXdCQzs7SUFHRCw0QkFJQzs7SUFFRCwyQkFFQzs7SUFHRCw2QkFxQkM7O0lBSUQsOEJBS0M7O0lBRUQsc0NBUUM7O0lBR0QsZ0NBcUNDOztJQUtELDRCQVlDOztJQUNELDJCQVVDOztJQUNELG1DQWdEQzs7Ozs7SUFFRCx3Q0FHQzs7SUFFRCxnQ0FFQzs7SUFFRCxnQ0FhQzs7SUFFRCxpQ0FVQzs7SUFFRCxnQ0FLQzs7SUFDRCxnQ0FLQzs7SUFFRCwyQkFVQzs7SUFFRCwrQkFNQzs7SUFFRCw4QkFNQzs7SUFDRCwrQkFPQzs7O0FBSUgsTUFBTSxLQUFPLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGbkRvbUxpYnJhcnkge1xyXG4gIG5vZGVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBybm90aHRtbHdoaXRlID0gKC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyk7XHJcblxyXG4gIGluaXQocGFyYW1ldGVyOiBhbnksIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZuRG9tTGlicmFyeSkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0KHBhcmFtZXRlciwgY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1ldGVyIGluc3RhbmNlb2YgRm5Eb21MaWJyYXJ5KSB7XHJcbiAgICAgIHJldHVybiBwYXJhbWV0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHBhcmFtZXRlciA9IHRoaXMuc2VsZWN0KHBhcmFtZXRlciwgY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgd2UncmUgcmVmZXJyaW5nIGEgc3BlY2lmaWMgbm9kZSBhcyBpbiBvbignY2xpY2snLCBmdW5jdGlvbigpeyB1KHRoaXMpIH0pXHJcbiAgICAvLyBvciB0aGUgc2VsZWN0KCkgZnVuY3Rpb24gcmV0dXJuZWQgYSBzaW5nbGUgbm9kZSBzdWNoIGFzIGluICcjaWQnXHJcbiAgICBpZiAocGFyYW1ldGVyICYmIHBhcmFtZXRlci5ub2RlTmFtZSkge1xyXG4gICAgICBwYXJhbWV0ZXIgPSBbcGFyYW1ldGVyXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIGFuIGFycmF5LCBzaW5jZSB0aGVyZSBhcmUgbWFueSAnYXJyYXktbGlrZScgc3R1ZmYgaW4ganMtbGFuZFxyXG4gICAgdGhpcy5ub2RlcyA9IHRoaXMuc2xpY2UocGFyYW1ldGVyKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNlbGVjdCA9IChwYXJhbWV0ZXI6IGFueSwgY29udGV4dDogYW55KSA9PiB7XHJcbiAgICAvLyBBbGxvdyBmb3Igc3BhY2VzIGJlZm9yZSBvciBhZnRlclxyXG4gICAgcGFyYW1ldGVyID0gcGFyYW1ldGVyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xyXG5cclxuICAgIGlmICgvXjwvLnRlc3QocGFyYW1ldGVyKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZShwYXJhbWV0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChwYXJhbWV0ZXIpO1xyXG4gIH1cclxuXHJcbiAgc2xpY2UgPSAocHNldWRvOiBhbnkpID0+IHtcclxuICAgIC8vIENoZWNrIHRoYXQgaXQncyBub3QgYSB2YWxpZCBvYmplY3RcclxuICAgIGlmICghcHNldWRvIHx8IHBzZXVkby5sZW5ndGggPT09IDAgfHxcclxuICAgICAgdHlwZW9mIHBzZXVkbyA9PT0gJ3N0cmluZycgfHxcclxuICAgICAgcHNldWRvLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjY2VwdCBhbHNvIGEgdSgpIG9iamVjdCAodGhhdCBoYXMgLm5vZGVzKVxyXG4gICAgcmV0dXJuIHBzZXVkby5sZW5ndGggPyBbXS5zbGljZS5jYWxsKHBzZXVkby5ub2RlcyB8fCBwc2V1ZG8pIDogW3BzZXVkb107XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZSA9IChodG1sOiBhbnkpID0+IHtcclxuICAgIC8vIFRhYmxlIGVsZW1lbnRzIG5lZWQgdG8gYmUgY2hpbGQgb2YgPHRhYmxlPiBmb3Igc29tZSBmKioqZWQgdXAgcmVhc29uXHJcblxyXG4gICAgaWYgKC9eXFxzKjx0cls+IF0vLnRlc3QoaHRtbCkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJykpLmh0bWwoaHRtbCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzO1xyXG4gICAgfSBlbHNlIGlmICgvXlxccyo8dChofGQpWz4gXS8udGVzdChodG1sKSkge1xyXG4gICAgICByZXR1cm4gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSkuaHRtbChodG1sKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5ub2RlcztcclxuICAgIH0gZWxzZSBpZiAoL15cXHMqPC8udGVzdChodG1sKSkge1xyXG4gICAgICByZXR1cm4gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmh0bWwoaHRtbCkuY2hpbGRyZW4oKS5ub2RlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGh0bWwgPSAodGV4dDogYW55KSA9PiB7XHJcbiAgICAvLyBOZWVkcyB0byBjaGVjayB1bmRlZmluZWQgYXMgaXQgbWlnaHQgYmUgXCJcIlxyXG4gICAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maXJzdCgpLmlubmVySFRNTCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB3ZSdyZSBhdHRlbXB0aW5nIHRvIHNldCBzb21lIHRleHRcclxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzXHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKChub2RlOiBhbnkpID0+IHtcclxuICAgICAgLy8gU2V0IHRoZSBpbm5lciBodG1sIHRvIHRoZSBub2RlXHJcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlyc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1swXSB8fCBmYWxzZTtcclxuICB9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuICBlYWNoID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNhbGxiYWNrKHRoaXMubm9kZXNbaV0sIGkpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgZW1wdHkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKChub2RlOiBhbnkpID0+IHtcclxuICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gLmZpbHRlcihzZWxlY3RvcilcclxuICAvLyBEZWxldGUgYWxsIG9mIHRoZSBub2RlcyB0aGF0IGRvbid0IHBhc3MgdGhlIHNlbGVjdG9yXHJcbiAgZmlsdGVyID0gKHNlbGVjdG9yOiBhbnksIGlzTmF0aXZlPzogYm9vbGVhbikgPT4ge1xyXG4gICAgLy8gVGhlIGRlZmF1bHQgZnVuY3Rpb24gaWYgaXQncyBhIENTUyBzZWxlY3RvclxyXG4gICAgLy8gQ2Fubm90IGNoYW5nZSBuYW1lIHRvICdzZWxlY3Rvcicgc2luY2UgaXQnZCBtZXNzIHdpdGggaXQgaW5zaWRlIHRoaXMgZm5cclxuICAgIGxldCBjYWxsYmFjayA9IChub2RlOiBhbnkpID0+IHtcclxuICAgICAgLy8gTWFrZSBpdCBjb21wYXRpYmxlIHdpdGggc29tZSBvdGhlciBicm93c2Vyc1xyXG4gICAgICBub2RlLm1hdGNoZXMgPSBub2RlLm1hdGNoZXMgfHwgbm9kZS5tc01hdGNoZXNTZWxlY3RvciB8fCBub2RlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgdGhlIHNhbWUgZWxlbWVudCAob3IgYW55IGVsZW1lbnQgaWYgbm8gc2VsZWN0b3Igd2FzIHBhc3NlZClcclxuICAgICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3RvciB8fCAnKicpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBmaWx0ZXIoKSByZWNlaXZlcyBhIGZ1bmN0aW9uIGFzIGluIC5maWx0ZXIoZSA9PiB1KGUpLmNoaWxkcmVuKCkubGVuZ3RoKVxyXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjYWxsYmFjayA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRlcigpIHJlY2VpdmVzIGFuIGluc3RhbmNlIG9mIEFnaXMgYXMgaW4gLmZpbHRlcih1KCdhJykpXHJcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBGbkRvbUxpYnJhcnkpIHtcclxuICAgICAgY2FsbGJhY2sgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoc2VsZWN0b3Iubm9kZXMpLmluZGV4T2Yobm9kZSkgIT09IC0xO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc05hdGl2ZSA/IHRoaXMubm9kZXMuZmlsdGVyKGNhbGxiYWNrKSA6IG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0KHRoaXMubm9kZXMuZmlsdGVyKGNhbGxiYWNrKSk7XHJcbiAgfVxyXG5cclxuICAvLyBGaW5kIGFsbCB0aGUgbm9kZXMgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgb25lcyBtYXRjaGVkIGJ5IGEgc2VsZWN0b3JcclxuICBmaW5kID0gKHNlbGVjdG9yOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcCgobm9kZTogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdChzZWxlY3RvciB8fCAnKicsIG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXHJcbiAgbWFwID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrID8gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQodGhpcy5hcnJheShjYWxsYmFjaykpLnVuaXF1ZSgpIDogdGhpcztcclxuICB9XHJcbiAgLy8gTWVyZ2UgYWxsIG9mIHRoZSBub2RlcyB0aGF0IHRoZSBjYWxsYmFjayByZXR1cm4gaW50byBhIHNpbXBsZSBhcnJheVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXHJcbiAgYXJyYXkgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5yZWR1Y2UoKGxpc3QsIG5vZGUsIGkpID0+IHtcclxuICAgICAgbGV0IHZhbDtcclxuICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFsID0gY2FsbGJhY2suY2FsbChzZWxmLCBub2RlLCBpKTtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgdmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdmFsID0gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZuRG9tTGlicmFyeSkge1xyXG4gICAgICAgICAgdmFsID0gdmFsLm5vZGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWwgPSBub2RlLmlubmVySFRNTDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlzdC5jb25jYXQodmFsICE9PSBmYWxzZSA/IHZhbCA6IFtdKTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBSZW1vdmVkIGR1cGxpY2F0ZWQgbm9kZXMsIHVzZWQgZm9yIHNvbWUgc3BlY2lmaWMgbWV0aG9kc1xyXG4gIHVuaXF1ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdCh0aGlzLm5vZGVzLnJlZHVjZSgoY2xlYW4sIG5vZGUpID0+IHtcclxuICAgICAgY29uc3QgaXN0cnV0aHkgPSBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHVuZGVmaW5lZCAmJiBub2RlICE9PSBmYWxzZTtcclxuICAgICAgcmV0dXJuIChpc3RydXRoeSAmJiBjbGVhbi5pbmRleE9mKG5vZGUpID09PSAtMSkgPyBjbGVhbi5jb25jYXQobm9kZSkgOiBjbGVhbjtcclxuICAgIH0sIFtdKSk7XHJcbiAgfVxyXG5cclxuICBjbGFzc2VzVG9BcnJheSA9ICh2YWw6IGFueSkgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB2YWwubWF0Y2godGhpcy5ybm90aHRtbHdoaXRlKSB8fCBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIC8vIEFkZCBjbGFzcyhlcykgdG8gdGhlIG1hdGNoZWQgbm9kZXNcclxuICBhZGRDbGFzcyA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBsZXQgY2xhc3NlczogQXJyYXk8YW55PjtcclxuICAgIGxldCBlbGVtO1xyXG4gICAgbGV0IGN1cjtcclxuICAgIGxldCBjdXJWYWx1ZTogc3RyaW5nO1xyXG4gICAgbGV0IGNsYXp6O1xyXG4gICAgbGV0IGo7XHJcbiAgICBsZXQgZmluYWxWYWx1ZTtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzVG9BcnJheSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxyXG4gICAgICB3aGlsZSAoKGVsZW0gPSB0aGlzLm5vZGVzW2krK10pKSB7XHJcbiAgICAgICAgY3VyVmFsdWUgPSB0aGlzLmdldENsYXNzKGVsZW0pO1xyXG4gICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCcgJyArIHRoaXMuc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyAnICcpO1xyXG5cclxuICAgICAgICBpZiAoY3VyKSB7XHJcbiAgICAgICAgICBqID0gMDtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxyXG4gICAgICAgICAgd2hpbGUgKChjbGF6eiA9IGNsYXNzZXNbaisrXSkpIHtcclxuICAgICAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNsYXp6ICsgJyAnKSA8IDApIHtcclxuICAgICAgICAgICAgICBjdXIgKz0gY2xhenogKyAnICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxyXG4gICAgICAgICAgZmluYWxWYWx1ZSA9IHRoaXMuc3RyaXBBbmRDb2xsYXBzZShjdXIpO1xyXG4gICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIE5vcm1hbGl6ZSB0aGUgYXJndW1lbnRzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3NcclxuICAvLyBBbGxvdyBmb3Igc2V2ZXJhbCBjbGFzcyBuYW1lcyBsaWtlIFwiYSBiLCBjXCIgYW5kIHNldmVyYWwgcGFyYW1ldGVyc1xyXG4gIGFyZ3MgPSAoYXJnczogYW55LCBub2RlOiBhbnksIGk6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGFyZ3MgPSBhcmdzKG5vZGUsIGkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBhcmdzID0gdGhpcy5zbGljZShhcmdzKS5tYXAodGhpcy5zdHIobm9kZSwgaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZW4gY29udmVydCB0aGF0IHN0cmluZyB0byBhbiBhcnJheSBvZiBub3QtbnVsbCBzdHJpbmdzXHJcbiAgICByZXR1cm4gYXJncy50b1N0cmluZygpLnNwbGl0KC9bXFxzLF0rLykuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIGUubGVuZ3RoO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0ciA9IChub2RlOiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIChhcmc6IGFueSkgPT4ge1xyXG4gICAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIG5vZGVzXHJcbiAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZy5jYWxsKHRoaXMsIG5vZGUsIGkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGcm9tIGFuIGFycmF5IG9yIG90aGVyICd3ZWlyZCcgdGhpbmdzXHJcbiAgICAgIHJldHVybiBhcmcudG9TdHJpbmcoKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbW92ZUNsYXNzID0gKHZhbHVlPzogYW55KSA9PiB7XHJcbiAgICBsZXQgY2xhc3NlczogQXJyYXk8YW55PjtcclxuICAgIGxldCBlbGVtO1xyXG4gICAgbGV0IGN1cjtcclxuICAgIGxldCBjdXJWYWx1ZTogc3RyaW5nO1xyXG4gICAgbGV0IGNsYXp6O1xyXG4gICAgbGV0IGo7XHJcbiAgICBsZXQgZmluYWxWYWx1ZTtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm5vZGVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYXR0cignY2xhc3MnLCAnJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xhc3NlcyA9IHRoaXMuY2xhc3Nlc1RvQXJyYXkodmFsdWUpO1xyXG5cclxuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICAgICAgd2hpbGUgKChlbGVtID0gdGhpcy5ub2Rlc1tpKytdKSkge1xyXG4gICAgICAgICAgY3VyVmFsdWUgPSB0aGlzLmdldENsYXNzKGVsZW0pO1xyXG5cclxuICAgICAgICAgIC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXHJcbiAgICAgICAgICBjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICgnICcgKyB0aGlzLnN0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpICsgJyAnKTtcclxuXHJcbiAgICAgICAgICBpZiAoY3VyKSB7XHJcbiAgICAgICAgICAgIGogPSAwO1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcclxuICAgICAgICAgICAgd2hpbGUgKChjbGF6eiA9IGNsYXNzZXNbaisrXSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xyXG4gICAgICAgICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZignICcgKyBjbGF6eiArICcgJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UoJyAnICsgY2xhenogKyAnICcsICcgJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxyXG4gICAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpcy5zdHJpcEFuZENvbGxhcHNlKGN1cik7XHJcbiAgICAgICAgICAgIGlmIChjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdHJpcEFuZENvbGxhcHNlID0gKHZhbDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBfdG9rZW4gPSB2YWwubWF0Y2godGhpcy5ybm90aHRtbHdoaXRlKSB8fCBbXTtcclxuICAgIHJldHVybiBfdG9rZW4uam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3MgPSAoZWxlbTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBoYXNDbGFzcyA9IChzZWxlY3RvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgY2xhc3NOYW1lO1xyXG4gICAgbGV0IGVsZW07XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjbGFzc05hbWUgPSAnICcgKyBzZWxlY3RvciArICcgJztcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxyXG4gICAgd2hpbGUgKChlbGVtID0gdGhpcy5ub2Rlc1tpKytdKSkge1xyXG4gICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICgnICcgKyB0aGlzLnN0cmlwQW5kQ29sbGFwc2UodGhpcy5nZXRDbGFzcyhlbGVtKSkgKyAnICcpLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9zaWJsaW5ncyA9IChuOiBhbnksIGVsZW06IGFueSkgPT4ge1xyXG4gICAgY29uc3QgbWF0Y2hlZCA9IFtdO1xyXG5cclxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xyXG4gICAgICBpZiAobi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBlbGVtKSB7XHJcbiAgICAgICAgbWF0Y2hlZC5wdXNoKG4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWQ7XHJcbiAgfVxyXG5cclxuICBzaWJsaW5ncyA9IChzZWxlY3RvcjogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2libGluZ3MoKGVsZW0ucGFyZW50Tm9kZSB8fCB7fSkuZmlyc3RDaGlsZCwgZWxlbSk7XHJcbiAgICB9KS5maWx0ZXIoc2VsZWN0b3IpO1xyXG5cclxuICB9XHJcbiAgY2hpbGRyZW4gPSAoc2VsZWN0b3I6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKChub2RlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2xpY2Uobm9kZS5jaGlsZHJlbik7XHJcbiAgICB9KS5maWx0ZXIoc2VsZWN0b3IpO1xyXG5cclxuICB9XHJcblxyXG4gIGRpciA9IChlbGVtOiBhbnksIGRpcjogYW55KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVkID0gW107XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICB3aGlsZSAoKGVsZW0gPSBlbGVtW2Rpcl0pICYmIGVsZW0ubm9kZVR5cGUgIT09IDkpIHtcclxuICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICBtYXRjaGVkLnB1c2goZWxlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGVkO1xyXG4gIH1cclxuXHJcbiAgX3BhcmVudCA9IChzZWxlY3Rvcj86IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKChlbGVtOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xyXG4gICAgfSkuZmlsdGVyKHNlbGVjdG9yLCB0cnVlKTtcclxuXHJcbiAgfVxyXG5cclxuICBwYXJlbnQgPSAoc2VsZWN0b3I/OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcCgoZWxlbTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcclxuICAgIH0pLmZpbHRlcihzZWxlY3Rvcik7XHJcblxyXG4gIH1cclxuICBwYXJlbnRzID0gKHNlbGVjdG9yOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudHM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHJldHVybiB0aGlzLm1hcCgoZWxlbTogYW55KSA9PiB7XHJcbiAgICAgIHBhcmVudHMucHVzaCh0aGlzLmRpcihlbGVtLCAncGFyZW50Tm9kZScpKTtcclxuICAgICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgICB9KS5maWx0ZXIoc2VsZWN0b3IpO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm5Eb20gPSBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdDtcclxuIl19