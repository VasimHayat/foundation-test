/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnDateFormatter = /** @class */ (function () {
    function FnDateFormatter() {
        this.weekFullEn = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.weekJp = ['日', '月', '火', '水', '木', '金', '土'];
        this.monthFullEn = ['January', 'February', 'March', 'ril', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthOldJp = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月',
            '文月', '葉月', '長月', '神無月', '霜月', '師走'];
        this.dateSuffix = [
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'
        ];
    }
    /**
     * @param {?=} d
     * @param {?=} pattern
     * @param {?=} langId
     * @return {?}
     */
    FnDateFormatter.prototype.format = /**
     * @param {?=} d
     * @param {?=} pattern
     * @param {?=} langId
     * @return {?}
     */
    function (d, pattern, langId) {
        // tslint:disable-next-line:triple-equals
        if (langId == 'undefined' || langId == null || langId.trim() == '') {
            langId = 'NoLang';
        }
        if (typeof pattern !== 'string') {
            return;
        }
        /** @type {?} */
        var dYear = d.getFullYear();
        /** @type {?} */
        var dMonth = d.getMonth();
        /** @type {?} */
        var dDate = d.getDate();
        /** @type {?} */
        var dDay = d.getDay();
        /** @type {?} */
        var dHours = d.getHours();
        /** @type {?} */
        var dMinutes = d.getMinutes();
        /** @type {?} */
        var dSeconds = d.getSeconds();
        /** @type {?} */
        var res = '';
        if (pattern === 'RIB') {
            res = this.from24to12(dHours) + (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === 'RIB_DT') {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + ' ' + this.from24to12(dHours) +
                (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (var i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                var c = pattern.charAt(i);
                switch (c) {
                    case '#':
                        if (i === len - 1) {
                            break;
                        }
                        res += pattern.charAt(++i);
                        break;
                    case 'Y':
                        res += dYear;
                        break;
                    case 'y':
                        res += dYear.toString().substr(2, 2);
                        break;
                    case 'm':
                        res += this.preZero(dMonth + 1);
                        break;
                    case 'M':
                        res += dMonth + 1;
                        break;
                    case 'd':
                        res += this.preZero(dDate);
                        break;
                    case 'j':
                        res += dDate;
                        break;
                    case 'w':
                        res += dDay;
                        break;
                    case 'N':
                        res += this.isoDay(dDay);
                        break;
                    case 'l':
                        if (langId !== 'NoLang') {
                            res += this.weekFullInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay];
                        break;
                    case 'D':
                        if (langId !== 'NoLang') {
                            res += this.getDayInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 3);
                        break;
                    case 'X':
                        if (langId !== 'NoLang') {
                            res += this.getDayInShortLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 1);
                        break;
                    case 'J':
                        res += this.weekJp[dDay];
                        break;
                    case 'F':
                        if (langId !== 'NoLang') {
                            res += this.getMonthInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth];
                        break;
                    case 'R':
                        if (langId !== 'NoLang') {
                            res += this.getMonthAbbrInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth].substr(0, 3);
                        break;
                    case 'O':
                        res += this.monthOldJp[dMonth];
                        break;
                    case 'a':
                        res += this.ampm(dHours);
                        break;
                    case 'P':
                        res += this.ap(dHours);
                        break;
                    case 'A':
                        res += this.ampm(dHours).toUpperCase();
                        break;
                    case 'H':
                        res += this.preZero(dHours);
                        break;
                    case 'h':
                        res += this.preZero(this.from24to12(dHours));
                        break;
                    case 'g':
                        res += this.from24to12(dHours);
                        break;
                    case 'G':
                        res += dHours;
                        break;
                    case 'i':
                        res += this.preZero(dMinutes);
                        break;
                    case 's':
                        res += this.preZero(dSeconds);
                        break;
                    case 't':
                        res += this.lastDayOfMonth(d);
                        break;
                    case 'L':
                        res += this.isLeapYear(dYear);
                        break;
                    case 'z':
                        res += this.dateCount(dYear, dMonth, dDate);
                        break;
                    case 'S':
                        res += this.dateSuffix[dDate - 1];
                        break;
                    default:
                        res += c;
                        break;
                }
            }
        }
        return res;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnDateFormatter.prototype.preZero = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // tslint:disable-next-line:radix
        return (parseInt(value) < 10) ? '0' + value : value;
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.from24to12 = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours > 12) ? hours - 12 : (hours === 0 ? 12 : hours);
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ampm = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? 'am' : 'pm';
    };
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ap = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? 'a' : 'p';
    };
    /**
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.isoDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return (day === 0) ? '7' : day;
    };
    /**
     * @param {?} dateObj
     * @return {?}
     */
    FnDateFormatter.prototype.lastDayOfMonth = /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        /** @type {?} */
        var tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
        tmp.setTime(tmp.getTime() - 1);
        return tmp.getDate();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FnDateFormatter.prototype.isLeapYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var tmp = new Date(year, 0, 1);
        /** @type {?} */
        var sum = 0;
        for (var i = 0; i < 12; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return (sum === 365) ? '0' : '1';
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    FnDateFormatter.prototype.dateCount = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        /** @type {?} */
        var tmp = new Date(year, 0, 1);
        /** @type {?} */
        var sum = -1;
        for (var i = 0; i < month; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return sum + date;
    };
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    FnDateFormatter.prototype.getMonthAbbrInLocal = /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    function (lngIID, month) {
        /** @type {?} */
        var lagnHash = {
            es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            fr: ['&#106;&#97;&#110;&#118;', '&#102;&#101;&#118;&#114;', '&#109;&#97;&#114;&#115;', '&#97;&#118;&#114;&#105;&#108;',
                '&#109;&#97;&#105;', ' &#106;&#117;&#105;&#110;',
                '&#106;&#117;&#105;&#108;', '&#97;&#111;&#117;&#116;', '&#115;&#101;&#112;&#116;', '&#111;&#99;&#116;',
                '&#110;&#111;&#118;', '&#100;&#101;&#99;'],
            zh: ['&#19968;&#26376;', '&#20108;&#26376;', ' &#19977;&#26376;', '&#22235;&#26376;', '&#20116;&#26376;',
                '&#20845;&#26376;',
                '&#19971;&#26376;', '&#19971;&#26376;', '&#20061;&#26376;', ' &#21313;&#26376;', ' &#21313;&#19968;&#26376;',
                ' &#21313;&#20108;&#26376;'],
            de: ['Jan', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni',
                'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez'],
            it: ['genn', 'febbr', 'mar', 'apr', 'magg', 'giugno',
                'luglio', 'ag', 'sett', 'ott', 'nov', 'dic']
        };
        return lagnHash[lngIID][month];
    };
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    FnDateFormatter.prototype.getMonthInLocal = /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    function (lngIID, month) {
        /** @type {?} */
        var lagnHash = {
            es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            en: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
            fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            zh: ['&#19968;&#26376;', '&#20108;&#26376;', ' &#19977;&#26376;', '&#22235;&#26376;', '&#20116;&#26376;',
                '&#20845;&#26376;',
                '&#19971;&#26376;', '&#19971;&#26376;', '&#20061;&#26376;', ' &#21313;&#26376;', ' &#21313;&#19968;&#26376;',
                ' &#21313;&#20108;&#26376;'],
            de: ['Januar', 'Februar', 'Marz', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
                'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
        };
        return lagnHash[lngIID][month];
    };
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.getDayInLocal = /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    function (lngIID, day) {
        /** @type {?} */
        var lagnHash = {
            es: ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            it: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
        };
        return lagnHash[lngIID][day];
    };
    /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    FnDateFormatter.prototype.weekFullInLocal = /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    function (langId, dayIndex) {
        /** @type {?} */
        var dayHashOnLang = {
            en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            es: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            zh: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            de: ['Sonntag', 'Montag', 'Dienstag	', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            it: ['domenica', 'luned\u00ec', 'marted\u00ec', 'mercoled\u00ec', 'gioved\u00ec', 'venerd\u00ec', 'sabato']
        };
        return dayHashOnLang[langId][dayIndex];
    };
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.getDayInShortLocal = /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    function (lngIID, day) {
        /** @type {?} */
        var lagnHash = {
            es: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            fr: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
            it: ['d', 'l', 'm', 'm', 'g', 'v', 's']
        };
        return lagnHash[lngIID][day];
    };
    return FnDateFormatter;
}());
export { FnDateFormatter };
if (false) {
    /** @type {?} */
    FnDateFormatter.prototype.weekFullEn;
    /** @type {?} */
    FnDateFormatter.prototype.weekJp;
    /** @type {?} */
    FnDateFormatter.prototype.monthFullEn;
    /** @type {?} */
    FnDateFormatter.prototype.monthOldJp;
    /** @type {?} */
    FnDateFormatter.prototype.dateSuffix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvdXRpbC9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO1FBRUUsZUFBVSxHQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTO1lBQzlDLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRWpELFdBQU0sR0FBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxELGdCQUFXLEdBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU07WUFDdEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRSxlQUFVLEdBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7WUFDcEQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QyxlQUFVLEdBQVE7WUFDaEIsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQzFELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFF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RUFBRSxrQkFBa0IsQ0FBQztZQUN6QyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDdkMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWhTRCxJQWdTQzs7OztJQTlSQyxxQ0FDaUQ7O0lBRWpELGlDQUFrRDs7SUFFbEQsc0NBQ29FOztJQUVwRSxxQ0FDdUM7O0lBRXZDLHFDQUdvRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGbkRhdGVGb3JtYXR0ZXIge1xyXG5cclxuICB3ZWVrRnVsbEVuOiBhbnkgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsXHJcbiAgICAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG5cclxuICB3ZWVrSnA6IGFueSA9IFsn5pelJywgJ+aciCcsICfngasnLCAn5rC0JywgJ+acqCcsICfph5EnLCAn5ZyfJ107XHJcblxyXG4gIG1vbnRoRnVsbEVuOiBhbnkgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAncmlsJywgJ01heScsICdKdW5lJyxcclxuICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICBtb250aE9sZEpwOiBhbnkgPSBbJ+edpuaciCcsICflpoLmnIgnLCAn5byl55SfJywgJ+WNr+aciCcsICfnmpDmnIgnLCAn5rC054Sh5pyIJyxcclxuICAgICfmlofmnIgnLCAn6JGJ5pyIJywgJ+mVt+aciCcsICfnpZ7nhKHmnIgnLCAn6Zyc5pyIJywgJ+W4q+i1sCddO1xyXG5cclxuICBkYXRlU3VmZml4OiBhbnkgPSBbXHJcbiAgICAnc3QnLCAnbmQnLCAncmQnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLFxyXG4gICAgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJyxcclxuICAgICdzdCcsICduZCcsICdyZCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICdzdCddO1xyXG5cclxuICBmb3JtYXQoZD86IERhdGUsIHBhdHRlcm4/OiBhbnksIGxhbmdJZD86IGFueSkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgIGlmIChsYW5nSWQgPT0gJ3VuZGVmaW5lZCcgfHwgbGFuZ0lkID09IG51bGwgfHwgbGFuZ0lkLnRyaW0oKSA9PSAnJykge1xyXG4gICAgICBsYW5nSWQgPSAnTm9MYW5nJztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZFllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBkTW9udGggPSBkLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkRGF0ZSA9IGQuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgZERheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICBjb25zdCBkSG91cnMgPSBkLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBkTWludXRlcyA9IGQuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3QgZFNlY29uZHMgPSBkLmdldFNlY29uZHMoKTtcclxuICAgIGxldCByZXMgPSAnJztcclxuICAgIGlmIChwYXR0ZXJuID09PSAnUklCJykge1xyXG4gICAgICByZXMgPSB0aGlzLmZyb20yNHRvMTIoZEhvdXJzKSArICgnOicgKyB0aGlzLnByZVplcm8oZE1pbnV0ZXMpKSArIHRoaXMuYXAoZEhvdXJzKTtcclxuICAgIH0gZWxzZSBpZiAocGF0dGVybiA9PT0gJ1JJQl9EVCcpIHtcclxuICAgICAgcmVzID0gdGhpcy5wcmVaZXJvKGRNb250aCArIDEpICsgJy8nICsgdGhpcy5wcmVaZXJvKGREYXRlKSArICcvJyArIGRZZWFyICsgJyAnICsgdGhpcy5mcm9tMjR0bzEyKGRIb3VycykgK1xyXG4gICAgICAgICgnOicgKyB0aGlzLnByZVplcm8oZE1pbnV0ZXMpKSArIHRoaXMuYXAoZEhvdXJzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHBhdHRlcm4uY2hhckF0KGkpO1xyXG4gICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHBhdHRlcm4uY2hhckF0KCsraSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnWSc6XHJcbiAgICAgICAgICAgIHJlcyArPSBkWWVhcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgICAgcmVzICs9IGRZZWFyLnRvU3RyaW5nKCkuc3Vic3RyKDIsIDIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRNb250aCArIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgICByZXMgKz0gZE1vbnRoICsgMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkRGF0ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaic6XHJcbiAgICAgICAgICAgIHJlcyArPSBkRGF0ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgICAgcmVzICs9IGREYXk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnTic6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmlzb0RheShkRGF5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdsJzpcclxuICAgICAgICAgICAgaWYgKGxhbmdJZCAhPT0gJ05vTGFuZycpIHtcclxuICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEluTG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICBpZiAobGFuZ0lkICE9PSAnTm9MYW5nJykge1xyXG4gICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldERheUluTG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldLnN1YnN0cigwLCAzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgaWYgKGxhbmdJZCAhPT0gJ05vTGFuZycpIHtcclxuICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXREYXlJblNob3J0TG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldLnN1YnN0cigwLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdKJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0pwW2REYXldO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0YnOlxyXG4gICAgICAgICAgICBpZiAobGFuZ0lkICE9PSAnTm9MYW5nJykge1xyXG4gICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldE1vbnRoSW5Mb2NhbChsYW5nSWQsIGRNb250aCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhGdWxsRW5bZE1vbnRoXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdSJzpcclxuICAgICAgICAgICAgaWYgKGxhbmdJZCAhPT0gJ05vTGFuZycpIHtcclxuICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXRNb250aEFiYnJJbkxvY2FsKGxhbmdJZCwgZE1vbnRoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5tb250aEZ1bGxFbltkTW9udGhdLnN1YnN0cigwLCAzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdPJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhPbGRKcFtkTW9udGhdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5hbXBtKGRIb3Vycyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnUCc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnQSc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmFtcG0oZEhvdXJzKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRIb3Vycyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8odGhpcy5mcm9tMjR0bzEyKGRIb3VycykpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2cnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5mcm9tMjR0bzEyKGRIb3Vycyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgICAgIHJlcyArPSBkSG91cnM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZE1pbnV0ZXMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRTZWNvbmRzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd0JzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMubGFzdERheU9mTW9udGgoZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmlzTGVhcFllYXIoZFllYXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3onOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5kYXRlQ291bnQoZFllYXIsIGRNb250aCwgZERhdGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5kYXRlU3VmZml4W2REYXRlIC0gMV07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHByZVplcm8odmFsdWU6IGFueSkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJhZGl4XHJcbiAgICByZXR1cm4gKHBhcnNlSW50KHZhbHVlKSA8IDEwKSA/ICcwJyArIHZhbHVlIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBmcm9tMjR0bzEyKGhvdXJzOiBhbnkpIHtcclxuICAgIHJldHVybiAoaG91cnMgPiAxMikgPyBob3VycyAtIDEyIDogKGhvdXJzID09PSAwID8gMTIgOiBob3Vycyk7XHJcbiAgfVxyXG5cclxuICBhbXBtKGhvdXJzOiBhbnkpIHtcclxuICAgIHJldHVybiAoaG91cnMgPCAxMikgPyAnYW0nIDogJ3BtJztcclxuICB9XHJcblxyXG4gIGFwKGhvdXJzOiBhbnkpIHtcclxuICAgIHJldHVybiAoaG91cnMgPCAxMikgPyAnYScgOiAncCc7XHJcbiAgfVxyXG5cclxuICBpc29EYXkoZGF5OiBhbnkpIHtcclxuICAgIHJldHVybiAoZGF5ID09PSAwKSA/ICc3JyA6IGRheTtcclxuICB9XHJcblxyXG4gIGxhc3REYXlPZk1vbnRoKGRhdGVPYmo6IGFueSkge1xyXG4gICAgY29uc3QgdG1wID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCBkYXRlT2JqLmdldE1vbnRoKCkgKyAxLCAxKTtcclxuICAgIHRtcC5zZXRUaW1lKHRtcC5nZXRUaW1lKCkgLSAxKTtcclxuICAgIHJldHVybiB0bXAuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNMZWFwWWVhcih5ZWFyOiBhbnkpIHtcclxuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgdG1wLnNldE1vbnRoKGkpO1xyXG4gICAgICBzdW0gKz0gdGhpcy5sYXN0RGF5T2ZNb250aCh0bXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChzdW0gPT09IDM2NSkgPyAnMCcgOiAnMSc7XHJcbiAgfVxyXG5cclxuICBkYXRlQ291bnQoeWVhcjogYW55LCBtb250aDogYW55LCBkYXRlOiBhbnkpIHtcclxuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xyXG4gICAgbGV0IHN1bSA9IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb250aDsgaSsrKSB7XHJcbiAgICAgIHRtcC5zZXRNb250aChpKTtcclxuICAgICAgc3VtICs9IHRoaXMubGFzdERheU9mTW9udGgodG1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdW0gKyBkYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhBYmJySW5Mb2NhbChsbmdJSUQ6IGFueSwgbW9udGg6IGFueSkge1xyXG4gICAgY29uc3QgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgZXM6IFsnZW5lJywgJ2ZlYicsICdtYXInLCAnYWJyJywgJ21heScsICdqdW4nLFxyXG4gICAgICAgICdqdWwnLCAnYWdvJywgJ3NlcCcsICdvY3QnLCAnbm92JywgJ2RpYyddLFxyXG4gICAgICBlbjogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsXHJcbiAgICAgICAgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXHJcbiAgICAgIGZyOiBbJyYjMTA2OyYjOTc7JiMxMTA7JiMxMTg7JywgJyYjMTAyOyYjMTAxOyYjMTE4OyYjMTE0OycsICcmIzEwOTsmIzk3OyYjMTE0OyYjMTE1OycsICcmIzk3OyYjMTE4OyYjMTE0OyYjMTA1OyYjMTA4OycsXHJcbiAgICAgICAgJyYjMTA5OyYjOTc7JiMxMDU7JywgJyAmIzEwNjsmIzExNzsmIzEwNTsmIzExMDsnLFxyXG4gICAgICAgICcmIzEwNjsmIzExNzsmIzEwNTsmIzEwODsnLCAnJiM5NzsmIzExMTsmIzExNzsmIzExNjsnLCAnJiMxMTU7JiMxMDE7JiMxMTI7JiMxMTY7JywgJyYjMTExOyYjOTk7JiMxMTY7JyxcclxuICAgICAgICAnJiMxMTA7JiMxMTE7JiMxMTg7JywgJyYjMTAwOyYjMTAxOyYjOTk7J10sXHJcbiAgICAgIHpoOiBbJyYjMTk5Njg7JiMyNjM3NjsnLCAnJiMyMDEwODsmIzI2Mzc2OycsICcgJiMxOTk3NzsmIzI2Mzc2OycsICcmIzIyMjM1OyYjMjYzNzY7JywgJyYjMjAxMTY7JiMyNjM3NjsnLFxyXG4gICAgICAgICcmIzIwODQ1OyYjMjYzNzY7JyxcclxuICAgICAgICAnJiMxOTk3MTsmIzI2Mzc2OycsICcmIzE5OTcxOyYjMjYzNzY7JywgJyYjMjAwNjE7JiMyNjM3NjsnLCAnICYjMjEzMTM7JiMyNjM3NjsnLCAnICYjMjEzMTM7JiMxOTk2ODsmIzI2Mzc2OycsXHJcbiAgICAgICAgJyAmIzIxMzEzOyYjMjAxMDg7JiMyNjM3NjsnXSxcclxuICAgICAgZGU6IFsnSmFuJywgJ0ZlYi4nLCAnTcOkcnonLCAnQXByLicsICdNYWknLCAnSnVuaScsXHJcbiAgICAgICAgJ0p1bGknLCAnQXVnLicsICdTZXB0LicsICdPa3QuJywgJ05vdi4nLCAnRGV6J10sXHJcbiAgICAgIGl0OiBbJ2dlbm4nLCAnZmViYnInLCAnbWFyJywgJ2FwcicsICdtYWdnJywgJ2dpdWdubycsXHJcbiAgICAgICAgJ2x1Z2xpbycsICdhZycsICdzZXR0JywgJ290dCcsICdub3YnLCAnZGljJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVttb250aF07XHJcbiAgfVxyXG5cclxuICBnZXRNb250aEluTG9jYWwobG5nSUlEOiBhbnksIG1vbnRoOiBhbnkpIHtcclxuICAgIGNvbnN0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgIGVzOiBbJ2VuZXJvJywgJ2ZlYnJlcm8nLCAnbWFyem8nLCAnYWJyaWwnLCAnbWF5bycsICdqdW5pbycsXHJcbiAgICAgICAgJ2p1bGlvJywgJ2Fnb3N0bycsICdzZXB0aWVtYnJlJywgJ29jdHVicmUnLCAnbm92aWVtYnJlJywgJ2RpY2llbWJyZSddLFxyXG4gICAgICBlbjogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcclxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICAgICAgZnI6IFsnamFudmllcicsICdmw6l2cmllcicsICdtYXJzJywgJ2F2cmlsJywgJ21haScsICdqdWluJyxcclxuICAgICAgICAnanVpbGxldCcsICdhb8O7dCcsICdzZXB0ZW1icmUnLCAnb2N0b2JyZScsICdub3ZlbWJyZScsICdkw6ljZW1icmUnXSxcclxuICAgICAgemg6IFsnJiMxOTk2ODsmIzI2Mzc2OycsICcmIzIwMTA4OyYjMjYzNzY7JywgJyAmIzE5OTc3OyYjMjYzNzY7JywgJyYjMjIyMzU7JiMyNjM3NjsnLCAnJiMyMDExNjsmIzI2Mzc2OycsXHJcbiAgICAgICAgJyYjMjA4NDU7JiMyNjM3NjsnLFxyXG4gICAgICAgICcmIzE5OTcxOyYjMjYzNzY7JywgJyYjMTk5NzE7JiMyNjM3NjsnLCAnJiMyMDA2MTsmIzI2Mzc2OycsICcgJiMyMTMxMzsmIzI2Mzc2OycsICcgJiMyMTMxMzsmIzE5OTY4OyYjMjYzNzY7JyxcclxuICAgICAgICAnICYjMjEzMTM7JiMyMDEwODsmIzI2Mzc2OyddLFxyXG4gICAgICBkZTogWydKYW51YXInLCAnRmVicnVhcicsICdNYXJ6JywgJ0FwcmlsJywgJ01haScsICdKdW5pJyxcclxuICAgICAgICAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLCAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXSxcclxuICAgICAgaXQ6IFsnZ2VubmFpbycsICdmZWJicmFpbycsICdtYXJ6bycsICdhcHJpbGUnLCAnbWFnZ2lvJywgJ2dpdWdubycsXHJcbiAgICAgICAgJ2x1Z2xpbycsICdhZ29zdG8nLCAnc2V0dGVtYnJlJywgJ290dG9icmUnLCAnbm92ZW1icmUnLCAnZGljZW1icmUnXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW21vbnRoXTtcclxuICB9XHJcblxyXG4gIGdldERheUluTG9jYWwobG5nSUlEOiBhbnksIGRheTogYW55KSB7XHJcbiAgICBjb25zdCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICBlczogWydEb20nLCAnTHUnLCAnTWEnLCAnTXgnLCAnSnUnLCAnVmknLCAnU2FiJ10sXHJcbiAgICAgIGVuOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG4gICAgICBmcjogWydEaW0nLCAnTHVuJywgJ01hcicsICdNZXInLCAnSmV1JywgJ1ZlbicsICdTYW0nXSxcclxuICAgICAgemg6IFsnJiMyMTYwODsmIzI2MDg1OycsICcmIzIxNjA4OyYjMTk5Njg7JywgJyYjMjE2MDg7JiMyMDEwODsnLCAnJiMyMTYwODsmIzE5OTc3OycsICcmIzIxNjA4OyYjMjIyMzU7JyxcclxuICAgICAgICAnJiMyMTYwODsmIzIwMTE2OycsICcmIzIxNjA4OyYjMjA4NDU7J10sXHJcbiAgICAgIGRlOiBbJ1NvJywgJ01vJywgJ0RpJywgJ01pJywgJ0RvJywgJ0ZyJywgJ1NhJ10sXHJcbiAgICAgIGl0OiBbJ2RvbScsICdsdW4nLCAnbWFyJywgJ21lcicsICdnaW8nLCAndmVuJywgJ3NhYiddXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bZGF5XTtcclxuICB9XHJcblxyXG4gIHdlZWtGdWxsSW5Mb2NhbChsYW5nSWQ6IGFueSwgZGF5SW5kZXg6IGFueSkge1xyXG4gICAgY29uc3QgZGF5SGFzaE9uTGFuZzogYW55ID0ge1xyXG4gICAgICBlbjogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxyXG4gICAgICBlczogWydkb21pbmdvJywgJ2x1bmVzJywgJ21hcnRlcycsICdtacOpcmNvbGVzJywgJ2p1ZXZlcycsICd2aWVybmVzJywgJ3PDoWJhZG8nXSxcclxuICAgICAgZnI6IFsnZGltYW5jaGUnLCAnbHVuZGknLCAnbWFyZGknLCAnbWVyY3JlZGknLCAnamV1ZGknLCAndmVuZHJlZGknLCAnc2FtZWRpJ10sXHJcbiAgICAgIHpoOiBbJ+aYn+acn+WkqScsICfmmJ/mnJ/kuIAnLCAn5pif5pyf5LqMJywgJ+aYn+acn+S4iScsICfmmJ/mnJ/lm5snLCAn5pif5pyf5LqUJywgJ+aYn+acn+WFrSddLFxyXG4gICAgICBkZTogWydTb25udGFnJywgJ01vbnRhZycsICdEaWVuc3RhZ1x0JywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXHJcbiAgICAgIGl0OiBbJ2RvbWVuaWNhJywgJ2x1bmVkXFx1MDBlYycsICdtYXJ0ZWRcXHUwMGVjJywgJ21lcmNvbGVkXFx1MDBlYycsICdnaW92ZWRcXHUwMGVjJywgJ3ZlbmVyZFxcdTAwZWMnLCAnc2FiYXRvJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gZGF5SGFzaE9uTGFuZ1tsYW5nSWRdW2RheUluZGV4XTtcclxuICB9XHJcblxyXG4gIGdldERheUluU2hvcnRMb2NhbChsbmdJSUQ6IGFueSwgZGF5OiBhbnkpIHtcclxuICAgIGNvbnN0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgIGVzOiBbJ0QnLCAnTCcsICdNJywgJ00nLCAnSicsICdWJywgJ1MnXSxcclxuICAgICAgZW46IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxyXG4gICAgICBmcjogWydEJywgJ0wnLCAnTScsICdNJywgJ0onLCAnVicsICdTJ10sXHJcbiAgICAgIHpoOiBbJyYjMjE2MDg7JiMyNjA4NTsnLCAnJiMyMTYwODsmIzE5OTY4OycsICcmIzIxNjA4OyYjMjAxMDg7JywgJyYjMjE2MDg7JiMxOTk3NzsnLCAnJiMyMTYwODsmIzIyMjM1OycsXHJcbiAgICAgICAgJyYjMjE2MDg7JiMyMDExNjsnLCAnJiMyMTYwODsmIzIwODQ1OyddLFxyXG4gICAgICBkZTogWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sXHJcbiAgICAgIGl0OiBbJ2QnLCAnbCcsICdtJywgJ20nLCAnZycsICd2JywgJ3MnXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW2RheV07XHJcbiAgfVxyXG59XHJcbiJdfQ==