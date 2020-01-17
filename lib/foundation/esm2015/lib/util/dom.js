/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDomLibrary {
    constructor() {
        this.nodes = [];
        this.rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
        this.select = (/**
         * @param {?} parameter
         * @param {?} context
         * @return {?}
         */
        (parameter, context) => {
            // Allow for spaces before or after
            parameter = parameter.replace(/^\s*/, '').replace(/\s*$/, '');
            if (/^</.test(parameter)) {
                return this.generate(parameter);
            }
            return (context || document).querySelectorAll(parameter);
        });
        this.slice = (/**
         * @param {?} pseudo
         * @return {?}
         */
        (pseudo) => {
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
        (html) => {
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
        (text) => {
            // Needs to check undefined as it might be ""
            if (text === undefined) {
                return this.first().innerHTML || '';
            }
            // If we're attempting to set some text
            // Loop through all the nodes
            return this.each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                // Set the inner html to the node
                node.innerHTML = text;
            }));
        });
        this.first = (/**
         * @return {?}
         */
        () => {
            return this.nodes[0] || false;
        });
        // tslint:disable-next-line: ban-types
        this.each = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            if (!callback || typeof callback !== 'function') {
                return;
            }
            for (let i = 0; i < this.nodes.length; i++) {
                callback(this.nodes[i], i);
            }
        });
        this.empty = (/**
         * @return {?}
         */
        () => {
            return this.each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
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
        (selector, isNative) => {
            // The default function if it's a CSS selector
            // Cannot change name to 'selector' since it'd mess with it inside this fn
            /** @type {?} */
            let callback = (/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
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
                (node) => {
                    return (selector.nodes).indexOf(node) !== -1;
                });
            }
            return isNative ? this.nodes.filter(callback) : new FnDomLibrary().init(this.nodes.filter(callback));
        });
        // Find all the nodes children of the current ones matched by a selector
        this.find = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                return new FnDomLibrary().init(selector || '*', node);
            }));
        });
        // tslint:disable-next-line: ban-types
        this.map = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            return callback ? new FnDomLibrary().init(this.array(callback)).unique() : this;
        });
        // Merge all of the nodes that the callback return into a simple array
        // tslint:disable-next-line: ban-types
        this.array = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            callback = callback;
            /** @type {?} */
            const self = this;
            return this.nodes.reduce((/**
             * @param {?} list
             * @param {?} node
             * @param {?} i
             * @return {?}
             */
            (list, node, i) => {
                /** @type {?} */
                let val;
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
        () => {
            return new FnDomLibrary().init(this.nodes.reduce((/**
             * @param {?} clean
             * @param {?} node
             * @return {?}
             */
            (clean, node) => {
                /** @type {?} */
                const istruthy = node !== null && node !== undefined && node !== false;
                return (istruthy && clean.indexOf(node) === -1) ? clean.concat(node) : clean;
            }), []));
        });
        this.classesToArray = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (Array.isArray(val)) {
                return val;
            }
            if (typeof val === 'string') {
                return val.match(this.rnothtmlwhite) || [];
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
        (value) => {
            /** @type {?} */
            let classes;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let cur;
            /** @type {?} */
            let curValue;
            /** @type {?} */
            let clazz;
            /** @type {?} */
            let j;
            /** @type {?} */
            let finalValue;
            /** @type {?} */
            let i = 0;
            classes = this.classesToArray(value);
            if (classes.length) {
                // tslint:disable-next-line: no-conditional-assignment
                while ((elem = this.nodes[i++])) {
                    curValue = this.getClass(elem);
                    cur = elem.nodeType === 1 && (' ' + this.stripAndCollapse(curValue) + ' ');
                    if (cur) {
                        j = 0;
                        // tslint:disable-next-line: no-conditional-assignment
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(' ' + clazz + ' ') < 0) {
                                cur += clazz + ' ';
                            }
                        }
                        // Only assign if different to avoid unneeded rendering.
                        finalValue = this.stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute('class', finalValue);
                        }
                    }
                }
            }
            return this;
        });
        // Normalize the arguments to an array of strings
        // Allow for several class names like "a b, c" and several parameters
        this.args = (/**
         * @param {?} args
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (args, node, i) => {
            if (typeof args === 'function') {
                args = args(node, i);
            }
            if (typeof args !== 'string') {
                args = this.slice(args).map(this.str(node, i));
            }
            // Then convert that string to an array of not-null strings
            return args.toString().split(/[\s,]+/).filter((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                return e.length;
            }));
        });
        this.str = (/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => {
            return (/**
             * @param {?} arg
             * @return {?}
             */
            (arg) => {
                // Call the function with the corresponding nodes
                if (typeof arg === 'function') {
                    return arg.call(this, node, i);
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
        (value) => {
            /** @type {?} */
            let classes;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let cur;
            /** @type {?} */
            let curValue;
            /** @type {?} */
            let clazz;
            /** @type {?} */
            let j;
            /** @type {?} */
            let finalValue;
            /** @type {?} */
            let i = 0;
            if (value === undefined) {
                this.nodes.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                (el) => {
                    el.attr('class', '');
                }));
            }
            else {
                classes = this.classesToArray(value);
                if (classes.length) {
                    // tslint:disable-next-line: no-conditional-assignment
                    while ((elem = this.nodes[i++])) {
                        curValue = this.getClass(elem);
                        // This expression is here for better compressibility (see addClass)
                        cur = elem.nodeType === 1 && (' ' + this.stripAndCollapse(curValue) + ' ');
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
                            finalValue = this.stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute('class', finalValue);
                            }
                        }
                    }
                }
            }
            return this;
        });
        this.stripAndCollapse = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const _token = val.match(this.rnothtmlwhite) || [];
            return _token.join(' ');
        });
        this.getClass = (/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => {
            return elem.getAttribute && elem.getAttribute('class') || '';
        });
        this.hasClass = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            /** @type {?} */
            let className;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let i = 0;
            className = ' ' + selector + ' ';
            // tslint:disable-next-line: no-conditional-assignment
            while ((elem = this.nodes[i++])) {
                if (elem.nodeType === 1 &&
                    (' ' + this.stripAndCollapse(this.getClass(elem)) + ' ').indexOf(className) > -1) {
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
        (n, elem) => {
            /** @type {?} */
            const matched = [];
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
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                return this._siblings((elem.parentNode || {}).firstChild, elem);
            })).filter(selector);
        });
        this.children = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                return this.slice(node.children);
            })).filter(selector);
        });
        this.dir = (/**
         * @param {?} elem
         * @param {?} dir
         * @return {?}
         */
        (elem, dir) => {
            /** @type {?} */
            const matched = [];
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
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                /** @type {?} */
                const parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector, true);
        });
        this.parent = (/**
         * @param {?=} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                /** @type {?} */
                const parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector);
        });
        this.parents = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            /** @type {?} */
            const parents = [];
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                parents.push(this.dir(elem, 'parentNode'));
                return parents;
            })).filter(selector);
        });
    }
    /**
     * @param {?} parameter
     * @param {?=} context
     * @return {?}
     */
    init(parameter, context) {
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
    }
}
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
export const fnDom = new FnDomLibrary().init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxZQUFZO0lBQWxCO1FBQ0UsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBMEI5QyxXQUFNOzs7OztRQUFHLENBQUMsU0FBYyxFQUFFLE9BQVksRUFBRSxFQUFFO1lBQ3hDLG1DQUFtQztZQUNuQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU5RCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQztZQUVELE9BQU8sQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFBO1FBRUQsVUFBSzs7OztRQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDdEIscUNBQXFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNoQyxPQUFPLE1BQU0sS0FBSyxRQUFRO2dCQUMxQixNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssbUJBQW1CLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFFRCw2Q0FBNkM7WUFDN0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENB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LEVBQUU7WUFDckMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0M7UUFFRCw4RUFBOEU7UUFDOUUsbUVBQW1FO1FBQ25FLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7UUFFRCwwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBRWQsQ0FBQztDQXVXRjs7O0lBaFlDLDZCQUF1Qjs7Ozs7SUFDdkIscUNBQThDOztJQTBCOUMsOEJBU0M7O0lBRUQsNkJBVUM7O0lBRUQsZ0NBWUM7O0lBRUQsNEJBWUM7O0lBRUQsNkJBRUM7O0lBRUQsNEJBUUM7O0lBQ0QsNkJBTUM7O0lBS0QsOEJBd0JDOztJQUdELDRCQUlDOztJQUVELDJCQUVDOztJQUdELDZCQXFCQzs7SUFJRCw4QkFLQzs7SUFFRCxzQ0FRQzs7SUFHRCxnQ0FxQ0M7O0lBS0QsNEJBWUM7O0lBQ0QsMkJBVUM7O0lBQ0QsbUNBZ0RDOzs7OztJQUVELHdDQUdDOztJQUVELGdDQUVDOztJQUVELGdDQWFDOztJQUVELGlDQVVDOztJQUVELGdDQUtDOztJQUNELGdDQUtDOztJQUVELDJCQVVDOztJQUVELCtCQU1DOztJQUVELDhCQU1DOztJQUNELCtCQU9DOzs7QUFJSCxNQUFNLE9BQU8sS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZuRG9tTGlicmFyeSB7XHJcbiAgbm9kZXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIHJub3RodG1sd2hpdGUgPSAoL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nKTtcclxuXHJcbiAgaW5pdChwYXJhbWV0ZXI6IGFueSwgY29udGV4dD86IGFueSk6IGFueSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRm5Eb21MaWJyYXJ5KSkge1xyXG4gICAgICByZXR1cm4gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQocGFyYW1ldGVyLCBjb250ZXh0KTtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXIgaW5zdGFuY2VvZiBGbkRvbUxpYnJhcnkpIHtcclxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcGFyYW1ldGVyID0gdGhpcy5zZWxlY3QocGFyYW1ldGVyLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB3ZSdyZSByZWZlcnJpbmcgYSBzcGVjaWZpYyBub2RlIGFzIGluIG9uKCdjbGljaycsIGZ1bmN0aW9uKCl7IHUodGhpcykgfSlcclxuICAgIC8vIG9yIHRoZSBzZWxlY3QoKSBmdW5jdGlvbiByZXR1cm5lZCBhIHNpbmdsZSBub2RlIHN1Y2ggYXMgaW4gJyNpZCdcclxuICAgIGlmIChwYXJhbWV0ZXIgJiYgcGFyYW1ldGVyLm5vZGVOYW1lKSB7XHJcbiAgICAgIHBhcmFtZXRlciA9IFtwYXJhbWV0ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgdG8gYW4gYXJyYXksIHNpbmNlIHRoZXJlIGFyZSBtYW55ICdhcnJheS1saWtlJyBzdHVmZiBpbiBqcy1sYW5kXHJcbiAgICB0aGlzLm5vZGVzID0gdGhpcy5zbGljZShwYXJhbWV0ZXIpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2VsZWN0ID0gKHBhcmFtZXRlcjogYW55LCBjb250ZXh0OiBhbnkpID0+IHtcclxuICAgIC8vIEFsbG93IGZvciBzcGFjZXMgYmVmb3JlIG9yIGFmdGVyXHJcbiAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XHJcblxyXG4gICAgaWYgKC9ePC8udGVzdChwYXJhbWV0ZXIpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlKHBhcmFtZXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtZXRlcik7XHJcbiAgfVxyXG5cclxuICBzbGljZSA9IChwc2V1ZG86IGFueSkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgdGhhdCBpdCdzIG5vdCBhIHZhbGlkIG9iamVjdFxyXG4gICAgaWYgKCFwc2V1ZG8gfHwgcHNldWRvLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICB0eXBlb2YgcHNldWRvID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICBwc2V1ZG8udG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWNjZXB0IGFsc28gYSB1KCkgb2JqZWN0ICh0aGF0IGhhcyAubm9kZXMpXHJcbiAgICByZXR1cm4gcHNldWRvLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwocHNldWRvLm5vZGVzIHx8IHBzZXVkbykgOiBbcHNldWRvXTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlID0gKGh0bWw6IGFueSkgPT4ge1xyXG4gICAgLy8gVGFibGUgZWxlbWVudHMgbmVlZCB0byBiZSBjaGlsZCBvZiA8dGFibGU+IGZvciBzb21lIGYqKiplZCB1cCByZWFzb25cclxuXHJcbiAgICBpZiAoL15cXHMqPHRyWz4gXS8udGVzdChodG1sKSkge1xyXG4gICAgICByZXR1cm4gbmV3IEZuRG9tTGlicmFyeSgpLmluaXQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSkuaHRtbChodG1sKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkubm9kZXM7XHJcbiAgICB9IGVsc2UgaWYgKC9eXFxzKjx0KGh8ZClbPiBdLy50ZXN0KGh0bWwpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpKS5odG1sKGh0bWwpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLm5vZGVzO1xyXG4gICAgfSBlbHNlIGlmICgvXlxccyo8Ly50ZXN0KGh0bWwpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuaHRtbChodG1sKS5jaGlsZHJlbigpLm5vZGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGh0bWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHRtbCA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIC8vIE5lZWRzIHRvIGNoZWNrIHVuZGVmaW5lZCBhcyBpdCBtaWdodCBiZSBcIlwiXHJcbiAgICBpZiAodGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpcnN0KCkuaW5uZXJIVE1MIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHdlJ3JlIGF0dGVtcHRpbmcgdG8gc2V0IHNvbWUgdGV4dFxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXNcclxuICAgIHJldHVybiB0aGlzLmVhY2goKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyBTZXQgdGhlIGlubmVyIGh0bWwgdG8gdGhlIG5vZGVcclxuICAgICAgbm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaXJzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzWzBdIHx8IGZhbHNlO1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xyXG4gIGVhY2ggPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2FsbGJhY2sodGhpcy5ub2Rlc1tpXSwgaSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBlbXB0eSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLmVhY2goKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyAuZmlsdGVyKHNlbGVjdG9yKVxyXG4gIC8vIERlbGV0ZSBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgZG9uJ3QgcGFzcyB0aGUgc2VsZWN0b3JcclxuICBmaWx0ZXIgPSAoc2VsZWN0b3I6IGFueSwgaXNOYXRpdmU/OiBib29sZWFuKSA9PiB7XHJcbiAgICAvLyBUaGUgZGVmYXVsdCBmdW5jdGlvbiBpZiBpdCdzIGEgQ1NTIHNlbGVjdG9yXHJcbiAgICAvLyBDYW5ub3QgY2hhbmdlIG5hbWUgdG8gJ3NlbGVjdG9yJyBzaW5jZSBpdCdkIG1lc3Mgd2l0aCBpdCBpbnNpZGUgdGhpcyBmblxyXG4gICAgbGV0IGNhbGxiYWNrID0gKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyBNYWtlIGl0IGNvbXBhdGlibGUgd2l0aCBzb21lIG90aGVyIGJyb3dzZXJzXHJcbiAgICAgIG5vZGUubWF0Y2hlcyA9IG5vZGUubWF0Y2hlcyB8fCBub2RlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IG5vZGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyB0aGUgc2FtZSBlbGVtZW50IChvciBhbnkgZWxlbWVudCBpZiBubyBzZWxlY3RvciB3YXMgcGFzc2VkKVxyXG4gICAgICByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yIHx8ICcqJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGZpbHRlcigpIHJlY2VpdmVzIGEgZnVuY3Rpb24gYXMgaW4gLmZpbHRlcihlID0+IHUoZSkuY2hpbGRyZW4oKS5sZW5ndGgpXHJcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlsdGVyKCkgcmVjZWl2ZXMgYW4gaW5zdGFuY2Ugb2YgQWdpcyBhcyBpbiAuZmlsdGVyKHUoJ2EnKSlcclxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEZuRG9tTGlicmFyeSkge1xyXG4gICAgICBjYWxsYmFjayA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChzZWxlY3Rvci5ub2RlcykuaW5kZXhPZihub2RlKSAhPT0gLTE7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzTmF0aXZlID8gdGhpcy5ub2Rlcy5maWx0ZXIoY2FsbGJhY2spIDogbmV3IEZuRG9tTGlicmFyeSgpLmluaXQodGhpcy5ub2Rlcy5maWx0ZXIoY2FsbGJhY2spKTtcclxuICB9XHJcblxyXG4gIC8vIEZpbmQgYWxsIHRoZSBub2RlcyBjaGlsZHJlbiBvZiB0aGUgY3VycmVudCBvbmVzIG1hdGNoZWQgYnkgYSBzZWxlY3RvclxyXG4gIGZpbmQgPSAoc2VsZWN0b3I6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKChub2RlOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0KHNlbGVjdG9yIHx8ICcqJywgbm9kZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuICBtYXAgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gY2FsbGJhY2sgPyBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdCh0aGlzLmFycmF5KGNhbGxiYWNrKSkudW5pcXVlKCkgOiB0aGlzO1xyXG4gIH1cclxuICAvLyBNZXJnZSBhbGwgb2YgdGhlIG5vZGVzIHRoYXQgdGhlIGNhbGxiYWNrIHJldHVybiBpbnRvIGEgc2ltcGxlIGFycmF5XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcclxuICBhcnJheSA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcclxuICAgIGNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLm5vZGVzLnJlZHVjZSgobGlzdCwgbm9kZSwgaSkgPT4ge1xyXG4gICAgICBsZXQgdmFsO1xyXG4gICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YWwgPSBjYWxsYmFjay5jYWxsKHNlbGYsIG5vZGUsIGkpO1xyXG4gICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICB2YWwgPSBuZXcgRm5Eb21MaWJyYXJ5KCkuaW5pdCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRm5Eb21MaWJyYXJ5KSB7XHJcbiAgICAgICAgICB2YWwgPSB2YWwubm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbCA9IG5vZGUuaW5uZXJIVE1MO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaXN0LmNvbmNhdCh2YWwgIT09IGZhbHNlID8gdmFsIDogW10pO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIFJlbW92ZWQgZHVwbGljYXRlZCBub2RlcywgdXNlZCBmb3Igc29tZSBzcGVjaWZpYyBtZXRob2RzXHJcbiAgdW5pcXVlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0KHRoaXMubm9kZXMucmVkdWNlKChjbGVhbiwgbm9kZSkgPT4ge1xyXG4gICAgICBjb25zdCBpc3RydXRoeSA9IG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gdW5kZWZpbmVkICYmIG5vZGUgIT09IGZhbHNlO1xyXG4gICAgICByZXR1cm4gKGlzdHJ1dGh5ICYmIGNsZWFuLmluZGV4T2Yobm9kZSkgPT09IC0xKSA/IGNsZWFuLmNvbmNhdChub2RlKSA6IGNsZWFuO1xyXG4gICAgfSwgW10pKTtcclxuICB9XHJcblxyXG4gIGNsYXNzZXNUb0FycmF5ID0gKHZhbDogYW55KSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHZhbC5tYXRjaCh0aGlzLnJub3RodG1sd2hpdGUpIHx8IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGNsYXNzKGVzKSB0byB0aGUgbWF0Y2hlZCBub2Rlc1xyXG4gIGFkZENsYXNzID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGxldCBjbGFzc2VzOiBBcnJheTxhbnk+O1xyXG4gICAgbGV0IGVsZW07XHJcbiAgICBsZXQgY3VyO1xyXG4gICAgbGV0IGN1clZhbHVlOiBzdHJpbmc7XHJcbiAgICBsZXQgY2xheno7XHJcbiAgICBsZXQgajtcclxuICAgIGxldCBmaW5hbFZhbHVlO1xyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIGNsYXNzZXMgPSB0aGlzLmNsYXNzZXNUb0FycmF5KHZhbHVlKTtcclxuXHJcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICAgIHdoaWxlICgoZWxlbSA9IHRoaXMubm9kZXNbaSsrXSkpIHtcclxuICAgICAgICBjdXJWYWx1ZSA9IHRoaXMuZ2V0Q2xhc3MoZWxlbSk7XHJcbiAgICAgICAgY3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoJyAnICsgdGhpcy5zdHJpcEFuZENvbGxhcHNlKGN1clZhbHVlKSArICcgJyk7XHJcblxyXG4gICAgICAgIGlmIChjdXIpIHtcclxuICAgICAgICAgIGogPSAwO1xyXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xyXG4gICAgICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xhenogKyAnICcpIDwgMCkge1xyXG4gICAgICAgICAgICAgIGN1ciArPSBjbGF6eiArICcgJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXHJcbiAgICAgICAgICBmaW5hbFZhbHVlID0gdGhpcy5zdHJpcEFuZENvbGxhcHNlKGN1cik7XHJcbiAgICAgICAgICBpZiAoY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUpIHtcclxuICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gTm9ybWFsaXplIHRoZSBhcmd1bWVudHMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xyXG4gIC8vIEFsbG93IGZvciBzZXZlcmFsIGNsYXNzIG5hbWVzIGxpa2UgXCJhIGIsIGNcIiBhbmQgc2V2ZXJhbCBwYXJhbWV0ZXJzXHJcbiAgYXJncyA9IChhcmdzOiBhbnksIG5vZGU6IGFueSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgYXJncyA9IGFyZ3Mobm9kZSwgaSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGFyZ3MgPSB0aGlzLnNsaWNlKGFyZ3MpLm1hcCh0aGlzLnN0cihub2RlLCBpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlbiBjb252ZXJ0IHRoYXQgc3RyaW5nIHRvIGFuIGFycmF5IG9mIG5vdC1udWxsIHN0cmluZ3NcclxuICAgIHJldHVybiBhcmdzLnRvU3RyaW5nKCkuc3BsaXQoL1tcXHMsXSsvKS5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gZS5sZW5ndGg7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RyID0gKG5vZGU6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKGFyZzogYW55KSA9PiB7XHJcbiAgICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbm9kZXNcclxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gYXJnLmNhbGwodGhpcywgbm9kZSwgaSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZyb20gYW4gYXJyYXkgb3Igb3RoZXIgJ3dlaXJkJyB0aGluZ3NcclxuICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xyXG4gICAgfTtcclxuICB9XHJcbiAgcmVtb3ZlQ2xhc3MgPSAodmFsdWU/OiBhbnkpID0+IHtcclxuICAgIGxldCBjbGFzc2VzOiBBcnJheTxhbnk+O1xyXG4gICAgbGV0IGVsZW07XHJcbiAgICBsZXQgY3VyO1xyXG4gICAgbGV0IGN1clZhbHVlOiBzdHJpbmc7XHJcbiAgICBsZXQgY2xheno7XHJcbiAgICBsZXQgajtcclxuICAgIGxldCBmaW5hbFZhbHVlO1xyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubm9kZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hdHRyKCdjbGFzcycsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGFzc2VzID0gdGhpcy5jbGFzc2VzVG9BcnJheSh2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcclxuICAgICAgICB3aGlsZSAoKGVsZW0gPSB0aGlzLm5vZGVzW2krK10pKSB7XHJcbiAgICAgICAgICBjdXJWYWx1ZSA9IHRoaXMuZ2V0Q2xhc3MoZWxlbSk7XHJcblxyXG4gICAgICAgICAgLy8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcclxuICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCcgJyArIHRoaXMuc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyAnICcpO1xyXG5cclxuICAgICAgICAgIGlmIChjdXIpIHtcclxuICAgICAgICAgICAgaiA9IDA7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxyXG4gICAgICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xyXG5cclxuICAgICAgICAgICAgICAvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXHJcbiAgICAgICAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKCcgJyArIGNsYXp6ICsgJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSgnICcgKyBjbGF6eiArICcgJywgJyAnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXHJcbiAgICAgICAgICAgIGZpbmFsVmFsdWUgPSB0aGlzLnN0cmlwQW5kQ29sbGFwc2UoY3VyKTtcclxuICAgICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0cmlwQW5kQ29sbGFwc2UgPSAodmFsOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IF90b2tlbiA9IHZhbC5tYXRjaCh0aGlzLnJub3RodG1sd2hpdGUpIHx8IFtdO1xyXG4gICAgcmV0dXJuIF90b2tlbi5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcyA9IChlbGVtOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSAmJiBlbGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIGhhc0NsYXNzID0gKHNlbGVjdG9yOiBhbnkpID0+IHtcclxuICAgIGxldCBjbGFzc05hbWU7XHJcbiAgICBsZXQgZWxlbTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNsYXNzTmFtZSA9ICcgJyArIHNlbGVjdG9yICsgJyAnO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICB3aGlsZSAoKGVsZW0gPSB0aGlzLm5vZGVzW2krK10pKSB7XHJcbiAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgICAgKCcgJyArIHRoaXMuc3RyaXBBbmRDb2xsYXBzZSh0aGlzLmdldENsYXNzKGVsZW0pKSArICcgJykuaW5kZXhPZihjbGFzc05hbWUpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX3NpYmxpbmdzID0gKG46IGFueSwgZWxlbTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGVkID0gW107XHJcblxyXG4gICAgZm9yICg7IG47IG4gPSBuLm5leHRTaWJsaW5nKSB7XHJcbiAgICAgIGlmIChuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0pIHtcclxuICAgICAgICBtYXRjaGVkLnB1c2gobik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF0Y2hlZDtcclxuICB9XHJcblxyXG4gIHNpYmxpbmdzID0gKHNlbGVjdG9yOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcCgoZWxlbTogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaWJsaW5ncygoZWxlbS5wYXJlbnROb2RlIHx8IHt9KS5maXJzdENoaWxkLCBlbGVtKTtcclxuICAgIH0pLmZpbHRlcihzZWxlY3Rvcik7XHJcblxyXG4gIH1cclxuICBjaGlsZHJlbiA9IChzZWxlY3RvcjogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5zbGljZShub2RlLmNoaWxkcmVuKTtcclxuICAgIH0pLmZpbHRlcihzZWxlY3Rvcik7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlyID0gKGVsZW06IGFueSwgZGlyOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IG1hdGNoZWQgPSBbXTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcclxuICAgIHdoaWxlICgoZWxlbSA9IGVsZW1bZGlyXSkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSkge1xyXG4gICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgIG1hdGNoZWQucHVzaChlbGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoZWQ7XHJcbiAgfVxyXG5cclxuICBfcGFyZW50ID0gKHNlbGVjdG9yPzogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoKGVsZW06IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XHJcbiAgICAgIHJldHVybiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxMSA/IHBhcmVudCA6IG51bGw7XHJcbiAgICB9KS5maWx0ZXIoc2VsZWN0b3IsIHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIHBhcmVudCA9IChzZWxlY3Rvcj86IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKChlbGVtOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xyXG4gICAgICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xyXG4gICAgfSkuZmlsdGVyKHNlbGVjdG9yKTtcclxuXHJcbiAgfVxyXG4gIHBhcmVudHMgPSAoc2VsZWN0b3I6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50czogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKChlbGVtOiBhbnkpID0+IHtcclxuICAgICAgcGFyZW50cy5wdXNoKHRoaXMuZGlyKGVsZW0sICdwYXJlbnROb2RlJykpO1xyXG4gICAgICByZXR1cm4gcGFyZW50cztcclxuICAgIH0pLmZpbHRlcihzZWxlY3Rvcik7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmbkRvbSA9IG5ldyBGbkRvbUxpYnJhcnkoKS5pbml0O1xyXG4iXX0=