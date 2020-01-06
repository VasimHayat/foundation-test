/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnDateFormatter = /** @class */ (function () {
    function FnDateFormatter() {
        this.weekFullEn = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"];
        this.weekJp = ["日", "月", "火", "水", "木", "金", "土"];
        this.monthFullEn = ["January", "February", "March", "ril", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.monthOldJp = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月",
            "文月", "葉月", "長月", "神無月", "霜月", "師走"];
        this.dateSuffix = [
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
            "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"
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
        if (langId == "undefined" || langId == null || langId.trim() == "") {
            langId = "NoLang";
        }
        if (typeof pattern != "string")
            return;
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
        var res = "";
        if (pattern === "RIB") {
            res = this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === "RIB_DT") {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + " " + this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (var i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                var c = pattern.charAt(i);
                switch (c) {
                    case "#":
                        if (i == len - 1)
                            break;
                        res += pattern.charAt(++i);
                        break;
                    case "Y":
                        res += dYear;
                        break;
                    case "y":
                        res += dYear.toString().substr(2, 2);
                        break;
                    case "m":
                        res += this.preZero(dMonth + 1);
                        break;
                    case "M":
                        res += dMonth + 1;
                        break;
                    case "d":
                        res += this.preZero(dDate);
                        break;
                    case "j":
                        res += dDate;
                        break;
                    case "w":
                        res += dDay;
                        break;
                    case "N":
                        res += this.isoDay(dDay);
                        break;
                    case "l":
                        if (langId != "NoLang") {
                            res += this.weekFullInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay];
                        break;
                    case "D":
                        if (langId != "NoLang") {
                            res += this.getDayInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 3);
                        break;
                    case "X":
                        if (langId != "NoLang") {
                            res += this.getDayInShortLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 1);
                        break;
                    case "J":
                        res += this.weekJp[dDay];
                        break;
                    case "F":
                        if (langId != "NoLang") {
                            res += this.getMonthInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth];
                        break;
                    case "R":
                        if (langId != "NoLang") {
                            res += this.getMonthAbbrInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth].substr(0, 3);
                        break;
                    case "O":
                        res += this.monthOldJp[dMonth];
                        break;
                    case "a":
                        res += this.ampm(dHours);
                        break;
                    case "P":
                        res += this.ap(dHours);
                        break;
                    case "A":
                        res += this.ampm(dHours).toUpperCase();
                        break;
                    case "H":
                        res += this.preZero(dHours);
                        break;
                    case "h":
                        res += this.preZero(this.from24to12(dHours));
                        break;
                    case "g":
                        res += this.from24to12(dHours);
                        break;
                    case "G":
                        res += dHours;
                        break;
                    case "i":
                        res += this.preZero(dMinutes);
                        break;
                    case "s":
                        res += this.preZero(dSeconds);
                        break;
                    case "t":
                        res += this.lastDayOfMonth(d);
                        break;
                    case "L":
                        res += this.isLeapYear(dYear);
                        break;
                    case "z":
                        res += this.dateCount(dYear, dMonth, dDate);
                        break;
                    case "S":
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
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    FnDateFormatter.prototype.preZero = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (parseInt(value) < 10) ? "0" + value : value;
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.from24to12 = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours > 12) ? hours - 12 : (hours == 0 ? 12 : hours);
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ampm = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? "am" : "pm";
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ap = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? "a" : "p";
    };
    ;
    /**
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.isoDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return (day == 0) ? "7" : day;
    };
    ;
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
    ;
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
        return (sum == 365) ? "0" : "1";
    };
    ;
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
    ;
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
            "es": ["ene", "feb", "mar", "abr", "may", "jun",
                "jul", "ago", "sep", "oct", "nov", "dic"],
            "en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "fr": ["&#106;&#97;&#110;&#118;", "&#102;&#101;&#118;&#114;", "&#109;&#97;&#114;&#115;", "&#97;&#118;&#114;&#105;&#108;", "&#109;&#97;&#105;", " &#106;&#117;&#105;&#110;",
                "&#106;&#117;&#105;&#108;", "&#97;&#111;&#117;&#116;", "&#115;&#101;&#112;&#116;", "&#111;&#99;&#116;", "&#110;&#111;&#118;", "&#100;&#101;&#99;"],
            "zh": ["&#19968;&#26376;", "&#20108;&#26376;", " &#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;",
                "&#19971;&#26376;", "&#19971;&#26376;", "&#20061;&#26376;", " &#21313;&#26376;", " &#21313;&#19968;&#26376;", " &#21313;&#20108;&#26376;"],
            "de": ["Jan", "Feb.", "März", "Apr.", "Mai", "Juni",
                "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez"],
            "it": ["genn", "febbr", "mar", "apr", "magg", "giugno",
                "luglio", "ag", "sett", "ott", "nov", "dic"]
        };
        return lagnHash[lngIID][month];
    };
    ;
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
            "es": ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            "en": ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            "fr": ["janvier", "février", "mars", "avril", "mai", "juin",
                "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            "zh": ["&#19968;&#26376;", "&#20108;&#26376;", " &#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;",
                "&#19971;&#26376;", "&#19971;&#26376;", "&#20061;&#26376;", " &#21313;&#26376;", " &#21313;&#19968;&#26376;", " &#21313;&#20108;&#26376;"],
            "de": ["Januar", "Februar", "Marz", "April", "Mai", "Juni",
                "Juli", "August", "September", "Oktober", "November", "Dezember"],
            "it": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
                "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
        };
        return lagnHash[lngIID][month];
    };
    ;
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
            "es": ["Dom", "Lu", "Ma", "Mx", "Ju", "Vi", "Sab"],
            "en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "fr": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "it": ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]
        };
        return lagnHash[lngIID][day];
    };
    ;
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
            "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "es": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            "fr": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            "zh": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "de": ["Sonntag", "Montag", "Dienstag	", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "it": ["domenica", "luned\u00ec", "marted\u00ec", "mercoled\u00ec", "gioved\u00ec", "venerd\u00ec", "sabato"]
        };
        return dayHashOnLang[langId][dayIndex];
    };
    ;
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
            "es": ["D", "L", "M", "M", "J", "V", "S"],
            "en": ["S", "M", "T", "W", "T", "F", "S"],
            "fr": ["D", "L", "M", "M", "J", "V", "S"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["S", "M", "D", "M", "D", "F", "S"],
            "it": ["d", "l", "m", "m", "g", "v", "s"]
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
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvdXRpbC9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO1FBOElJLGVBQVUsR0FBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUztZQUM1QyxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuRCxXQUFNLEdBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsRCxnQkFBVyxHQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO1lBQ3BFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEUsZUFBVSxHQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO1lBQ2xELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsZUFBVSxHQUFRO1lBQ2QsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQzFELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFF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QUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO1lBQ2xKLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN6QyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDNUM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBN1FELElBNlFDOzs7O0lBL0hHLHFDQUNtRDs7SUFFbkQsaUNBQWtEOztJQUVsRCxzQ0FDc0U7O0lBRXRFLHFDQUN5Qzs7SUFFekMscUNBR3NFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZuRGF0ZUZvcm1hdHRlciB7XHJcblxyXG4gICAgZm9ybWF0KGQ/OiBEYXRlLCBwYXR0ZXJuPzogYW55LCBsYW5nSWQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAobGFuZ0lkID09IFwidW5kZWZpbmVkXCIgfHwgbGFuZ0lkID09IG51bGwgfHwgbGFuZ0lkLnRyaW0oKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxhbmdJZCA9IFwiTm9MYW5nXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9IFwic3RyaW5nXCIpIHJldHVybjtcclxuICAgICAgICBsZXQgZFllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IGRNb250aCA9IGQuZ2V0TW9udGgoKTtcclxuICAgICAgICBsZXQgZERhdGUgPSBkLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgZERheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICAgICAgbGV0IGRIb3VycyA9IGQuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgZE1pbnV0ZXMgPSBkLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgZFNlY29uZHMgPSBkLmdldFNlY29uZHMoKTtcclxuICAgICAgICBsZXQgcmVzID0gXCJcIjtcclxuICAgICAgICBpZiAocGF0dGVybiA9PT0gXCJSSUJcIikge1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLmZyb20yNHRvMTIoZEhvdXJzKSArIChcIjpcIiArIHRoaXMucHJlWmVybyhkTWludXRlcykpICsgdGhpcy5hcChkSG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXR0ZXJuID09PSBcIlJJQl9EVFwiKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucHJlWmVybyhkTW9udGggKyAxKSArICcvJyArIHRoaXMucHJlWmVybyhkRGF0ZSkgKyAnLycgKyBkWWVhciArIFwiIFwiICsgdGhpcy5mcm9tMjR0bzEyKGRIb3VycykgKyAoXCI6XCIgKyB0aGlzLnByZVplcm8oZE1pbnV0ZXMpKSArIHRoaXMuYXAoZEhvdXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IHBhdHRlcm4uY2hhckF0KGkpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gbGVuIC0gMSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBwYXR0ZXJuLmNoYXJBdCgrK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiWVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZFllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkWWVhci50b1N0cmluZygpLnN1YnN0cigyLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkTW9udGggKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGRNb250aCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwialwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZERhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkRGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5pc29EYXkoZERheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5nSWQgIT0gXCJOb0xhbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxJbkxvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ0lkICE9IFwiTm9MYW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldERheUluTG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtGdWxsRW5bZERheV0uc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiWFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ0lkICE9IFwiTm9MYW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldERheUluU2hvcnRMb2NhbChsYW5nSWQsIGREYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XS5zdWJzdHIoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJKXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtKcFtkRGF5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkZcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmdJZCAhPSBcIk5vTGFuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXRNb250aEluTG9jYWwobGFuZ0lkLCBkTW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhGdWxsRW5bZE1vbnRoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmdJZCAhPSBcIk5vTGFuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXRNb250aEFiYnJJbkxvY2FsKGxhbmdJZCwgZE1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLm1vbnRoRnVsbEVuW2RNb250aF0uc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiT1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5tb250aE9sZEpwW2RNb250aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmFtcG0oZEhvdXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuYXAoZEhvdXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuYW1wbShkSG91cnMpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZEhvdXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyh0aGlzLmZyb20yNHRvMTIoZEhvdXJzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmZyb20yNHRvMTIoZEhvdXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGRIb3VycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkTWludXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZFNlY29uZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5sYXN0RGF5T2ZNb250aChkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuaXNMZWFwWWVhcihkWWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmRhdGVDb3VudChkWWVhciwgZE1vbnRoLCBkRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmRhdGVTdWZmaXhbZERhdGUgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHdlZWtGdWxsRW46IGFueSA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIixcclxuICAgICAgICBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XHJcblxyXG4gICAgd2Vla0pwOiBhbnkgPSBbXCLml6VcIiwgXCLmnIhcIiwgXCLngatcIiwgXCLmsLRcIiwgXCLmnKhcIiwgXCLph5FcIiwgXCLlnJ9cIl07XHJcblxyXG4gICAgbW9udGhGdWxsRW46IGFueSA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwicmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxyXG4gICAgICAgIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xyXG5cclxuICAgIG1vbnRoT2xkSnA6IGFueSA9IFtcIuedpuaciFwiLCBcIuWmguaciFwiLCBcIuW8peeUn1wiLCBcIuWNr+aciFwiLCBcIueakOaciFwiLCBcIuawtOeEoeaciFwiLFxyXG4gICAgICAgIFwi5paH5pyIXCIsIFwi6JGJ5pyIXCIsIFwi6ZW35pyIXCIsIFwi56We54Sh5pyIXCIsIFwi6Zyc5pyIXCIsIFwi5bir6LWwXCJdO1xyXG5cclxuICAgIGRhdGVTdWZmaXg6IGFueSA9IFtcclxuICAgICAgICBcInN0XCIsIFwibmRcIiwgXCJyZFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsXHJcbiAgICAgICAgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLFxyXG4gICAgICAgIFwic3RcIiwgXCJuZFwiLCBcInJkXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJzdFwiXTtcclxuXHJcbiAgICBwcmVaZXJvKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHZhbHVlKSA8IDEwKSA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgZnJvbTI0dG8xMihob3VyczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIChob3VycyA+IDEyKSA/IGhvdXJzIC0gMTIgOiAoaG91cnMgPT0gMCA/IDEyIDogaG91cnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhbXBtKGhvdXJzOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGhvdXJzIDwgMTIpID8gXCJhbVwiIDogXCJwbVwiO1xyXG4gICAgfTtcclxuICAgIGFwKGhvdXJzOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGhvdXJzIDwgMTIpID8gXCJhXCIgOiBcInBcIjtcclxuICAgIH07XHJcblxyXG4gICAgaXNvRGF5KGRheTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIChkYXkgPT0gMCkgPyBcIjdcIiA6IGRheTtcclxuICAgIH07XHJcblxyXG4gICAgbGFzdERheU9mTW9udGgoZGF0ZU9iajogYW55KSB7XHJcbiAgICAgICAgbGV0IHRtcCA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgZGF0ZU9iai5nZXRNb250aCgpICsgMSwgMSk7XHJcbiAgICAgICAgdG1wLnNldFRpbWUodG1wLmdldFRpbWUoKSAtIDEpO1xyXG4gICAgICAgIHJldHVybiB0bXAuZ2V0RGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpc0xlYXBZZWFyKHllYXI6IGFueSkge1xyXG4gICAgICAgIGxldCB0bXAgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdG1wLnNldE1vbnRoKGkpO1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5sYXN0RGF5T2ZNb250aCh0bXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHN1bSA9PSAzNjUpID8gXCIwXCIgOiBcIjFcIjtcclxuICAgIH07XHJcblxyXG4gICAgZGF0ZUNvdW50KHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF0ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHRtcCA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xyXG4gICAgICAgIGxldCBzdW0gPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbnRoOyBpKyspIHtcclxuICAgICAgICAgICAgdG1wLnNldE1vbnRoKGkpO1xyXG4gICAgICAgICAgICBzdW0gKz0gdGhpcy5sYXN0RGF5T2ZNb250aCh0bXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VtICsgZGF0ZTtcclxuICAgIH07XHJcbiAgICBnZXRNb250aEFiYnJJbkxvY2FsKGxuZ0lJRDogYW55LCBtb250aDogYW55KSB7XHJcbiAgICAgICAgbGV0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiZXNcIjogW1wiZW5lXCIsIFwiZmViXCIsIFwibWFyXCIsIFwiYWJyXCIsIFwibWF5XCIsIFwianVuXCIsXHJcbiAgICAgICAgICAgICAgICBcImp1bFwiLCBcImFnb1wiLCBcInNlcFwiLCBcIm9jdFwiLCBcIm5vdlwiLCBcImRpY1wiXSxcclxuICAgICAgICAgICAgXCJlblwiOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIixcclxuICAgICAgICAgICAgICAgIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxyXG4gICAgICAgICAgICBcImZyXCI6IFtcIiYjMTA2OyYjOTc7JiMxMTA7JiMxMTg7XCIsIFwiJiMxMDI7JiMxMDE7JiMxMTg7JiMxMTQ7XCIsIFwiJiMxMDk7JiM5NzsmIzExNDsmIzExNTtcIiwgXCImIzk3OyYjMTE4OyYjMTE0OyYjMTA1OyYjMTA4O1wiLCBcIiYjMTA5OyYjOTc7JiMxMDU7XCIsIFwiICYjMTA2OyYjMTE3OyYjMTA1OyYjMTEwO1wiLFxyXG4gICAgICAgICAgICAgICAgXCImIzEwNjsmIzExNzsmIzEwNTsmIzEwODtcIiwgXCImIzk3OyYjMTExOyYjMTE3OyYjMTE2O1wiLCBcIiYjMTE1OyYjMTAxOyYjMTEyOyYjMTE2O1wiLCBcIiYjMTExOyYjOTk7JiMxMTY7XCIsIFwiJiMxMTA7JiMxMTE7JiMxMTg7XCIsIFwiJiMxMDA7JiMxMDE7JiM5OTtcIl0sXHJcbiAgICAgICAgICAgIFwiemhcIjogW1wiJiMxOTk2ODsmIzI2Mzc2O1wiLCBcIiYjMjAxMDg7JiMyNjM3NjtcIiwgXCIgJiMxOTk3NzsmIzI2Mzc2O1wiLCBcIiYjMjIyMzU7JiMyNjM3NjtcIiwgXCImIzIwMTE2OyYjMjYzNzY7XCIsIFwiJiMyMDg0NTsmIzI2Mzc2O1wiLFxyXG4gICAgICAgICAgICAgICAgXCImIzE5OTcxOyYjMjYzNzY7XCIsIFwiJiMxOTk3MTsmIzI2Mzc2O1wiLCBcIiYjMjAwNjE7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMTk5Njg7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzIwMTA4OyYjMjYzNzY7XCJdLFxyXG4gICAgICAgICAgICBcImRlXCI6IFtcIkphblwiLCBcIkZlYi5cIiwgXCJNw6RyelwiLCBcIkFwci5cIiwgXCJNYWlcIiwgXCJKdW5pXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1bGlcIiwgXCJBdWcuXCIsIFwiU2VwdC5cIiwgXCJPa3QuXCIsIFwiTm92LlwiLCBcIkRlelwiXSxcclxuICAgICAgICAgICAgXCJpdFwiOiBbXCJnZW5uXCIsIFwiZmViYnJcIiwgXCJtYXJcIiwgXCJhcHJcIiwgXCJtYWdnXCIsIFwiZ2l1Z25vXCIsXHJcbiAgICAgICAgICAgICAgICBcImx1Z2xpb1wiLCBcImFnXCIsIFwic2V0dFwiLCBcIm90dFwiLCBcIm5vdlwiLCBcImRpY1wiXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVttb250aF07XHJcbiAgICB9O1xyXG4gICAgZ2V0TW9udGhJbkxvY2FsKGxuZ0lJRDogYW55LCBtb250aDogYW55KSB7XHJcbiAgICAgICAgbGV0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiZXNcIjogW1wiZW5lcm9cIiwgXCJmZWJyZXJvXCIsIFwibWFyem9cIiwgXCJhYnJpbFwiLCBcIm1heW9cIiwgXCJqdW5pb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJqdWxpb1wiLCBcImFnb3N0b1wiLCBcInNlcHRpZW1icmVcIiwgXCJvY3R1YnJlXCIsIFwibm92aWVtYnJlXCIsIFwiZGljaWVtYnJlXCJdLFxyXG4gICAgICAgICAgICBcImVuXCI6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcclxuICAgICAgICAgICAgXCJmclwiOiBbXCJqYW52aWVyXCIsIFwiZsOpdnJpZXJcIiwgXCJtYXJzXCIsIFwiYXZyaWxcIiwgXCJtYWlcIiwgXCJqdWluXCIsXHJcbiAgICAgICAgICAgICAgICBcImp1aWxsZXRcIiwgXCJhb8O7dFwiLCBcInNlcHRlbWJyZVwiLCBcIm9jdG9icmVcIiwgXCJub3ZlbWJyZVwiLCBcImTDqWNlbWJyZVwiXSxcclxuICAgICAgICAgICAgXCJ6aFwiOiBbXCImIzE5OTY4OyYjMjYzNzY7XCIsIFwiJiMyMDEwODsmIzI2Mzc2O1wiLCBcIiAmIzE5OTc3OyYjMjYzNzY7XCIsIFwiJiMyMjIzNTsmIzI2Mzc2O1wiLCBcIiYjMjAxMTY7JiMyNjM3NjtcIiwgXCImIzIwODQ1OyYjMjYzNzY7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiYjMTk5NzE7JiMyNjM3NjtcIiwgXCImIzE5OTcxOyYjMjYzNzY7XCIsIFwiJiMyMDA2MTsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMxOTk2ODsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMjAxMDg7JiMyNjM3NjtcIl0sXHJcbiAgICAgICAgICAgIFwiZGVcIjogW1wiSmFudWFyXCIsIFwiRmVicnVhclwiLCBcIk1hcnpcIiwgXCJBcHJpbFwiLCBcIk1haVwiLCBcIkp1bmlcIixcclxuICAgICAgICAgICAgICAgIFwiSnVsaVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9rdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlemVtYmVyXCJdLFxyXG4gICAgICAgICAgICBcIml0XCI6IFtcImdlbm5haW9cIiwgXCJmZWJicmFpb1wiLCBcIm1hcnpvXCIsIFwiYXByaWxlXCIsIFwibWFnZ2lvXCIsIFwiZ2l1Z25vXCIsXHJcbiAgICAgICAgICAgICAgICBcImx1Z2xpb1wiLCBcImFnb3N0b1wiLCBcInNldHRlbWJyZVwiLCBcIm90dG9icmVcIiwgXCJub3ZlbWJyZVwiLCBcImRpY2VtYnJlXCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW21vbnRoXTtcclxuICAgIH07XHJcbiAgICBnZXREYXlJbkxvY2FsKGxuZ0lJRDogYW55LCBkYXk6IGFueSkge1xyXG4gICAgICAgIGxldCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICAgICAgICBcImVzXCI6IFtcIkRvbVwiLCBcIkx1XCIsIFwiTWFcIiwgXCJNeFwiLCBcIkp1XCIsIFwiVmlcIiwgXCJTYWJcIl0sXHJcbiAgICAgICAgICAgIFwiZW5cIjogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxyXG4gICAgICAgICAgICBcImZyXCI6IFtcIkRpbVwiLCBcIkx1blwiLCBcIk1hclwiLCBcIk1lclwiLCBcIkpldVwiLCBcIlZlblwiLCBcIlNhbVwiXSxcclxuICAgICAgICAgICAgXCJ6aFwiOiBbXCImIzIxNjA4OyYjMjYwODU7XCIsIFwiJiMyMTYwODsmIzE5OTY4O1wiLCBcIiYjMjE2MDg7JiMyMDEwODtcIiwgXCImIzIxNjA4OyYjMTk5Nzc7XCIsIFwiJiMyMTYwODsmIzIyMjM1O1wiLCBcIiYjMjE2MDg7JiMyMDExNjtcIiwgXCImIzIxNjA4OyYjMjA4NDU7XCJdLFxyXG4gICAgICAgICAgICBcImRlXCI6IFtcIlNvXCIsIFwiTW9cIiwgXCJEaVwiLCBcIk1pXCIsIFwiRG9cIiwgXCJGclwiLCBcIlNhXCJdLFxyXG4gICAgICAgICAgICBcIml0XCI6IFtcImRvbVwiLCBcImx1blwiLCBcIm1hclwiLCBcIm1lclwiLCBcImdpb1wiLCBcInZlblwiLCBcInNhYlwiXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVtkYXldO1xyXG4gICAgfTtcclxuICAgIHdlZWtGdWxsSW5Mb2NhbChsYW5nSWQ6IGFueSwgZGF5SW5kZXg6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXlIYXNoT25MYW5nOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiZW5cIjogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXHJcbiAgICAgICAgICAgIFwiZXNcIjogW1wiZG9taW5nb1wiLCBcImx1bmVzXCIsIFwibWFydGVzXCIsIFwibWnDqXJjb2xlc1wiLCBcImp1ZXZlc1wiLCBcInZpZXJuZXNcIiwgXCJzw6FiYWRvXCJdLFxyXG4gICAgICAgICAgICBcImZyXCI6IFtcImRpbWFuY2hlXCIsIFwibHVuZGlcIiwgXCJtYXJkaVwiLCBcIm1lcmNyZWRpXCIsIFwiamV1ZGlcIiwgXCJ2ZW5kcmVkaVwiLCBcInNhbWVkaVwiXSxcclxuICAgICAgICAgICAgXCJ6aFwiOiBbXCLmmJ/mnJ/lpKlcIiwgXCLmmJ/mnJ/kuIBcIiwgXCLmmJ/mnJ/kuoxcIiwgXCLmmJ/mnJ/kuIlcIiwgXCLmmJ/mnJ/lm5tcIiwgXCLmmJ/mnJ/kupRcIiwgXCLmmJ/mnJ/lha1cIl0sXHJcbiAgICAgICAgICAgIFwiZGVcIjogW1wiU29ubnRhZ1wiLCBcIk1vbnRhZ1wiLCBcIkRpZW5zdGFnXHRcIiwgXCJNaXR0d29jaFwiLCBcIkRvbm5lcnN0YWdcIiwgXCJGcmVpdGFnXCIsIFwiU2Ftc3RhZ1wiXSxcclxuICAgICAgICAgICAgXCJpdFwiOiBbXCJkb21lbmljYVwiLCBcImx1bmVkXFx1MDBlY1wiLCBcIm1hcnRlZFxcdTAwZWNcIiwgXCJtZXJjb2xlZFxcdTAwZWNcIiwgXCJnaW92ZWRcXHUwMGVjXCIsIFwidmVuZXJkXFx1MDBlY1wiLCBcInNhYmF0b1wiXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF5SGFzaE9uTGFuZ1tsYW5nSWRdW2RheUluZGV4XVxyXG4gICAgfTtcclxuICAgIGdldERheUluU2hvcnRMb2NhbChsbmdJSUQ6IGFueSwgZGF5OiBhbnkpIHtcclxuICAgICAgICBsZXQgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJlc1wiOiBbXCJEXCIsIFwiTFwiLCBcIk1cIiwgXCJNXCIsIFwiSlwiLCBcIlZcIiwgXCJTXCJdLFxyXG4gICAgICAgICAgICBcImVuXCI6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXHJcbiAgICAgICAgICAgIFwiZnJcIjogW1wiRFwiLCBcIkxcIiwgXCJNXCIsIFwiTVwiLCBcIkpcIiwgXCJWXCIsIFwiU1wiXSxcclxuICAgICAgICAgICAgXCJ6aFwiOiBbXCImIzIxNjA4OyYjMjYwODU7XCIsIFwiJiMyMTYwODsmIzE5OTY4O1wiLCBcIiYjMjE2MDg7JiMyMDEwODtcIiwgXCImIzIxNjA4OyYjMTk5Nzc7XCIsIFwiJiMyMTYwODsmIzIyMjM1O1wiLCBcIiYjMjE2MDg7JiMyMDExNjtcIiwgXCImIzIxNjA4OyYjMjA4NDU7XCJdLFxyXG4gICAgICAgICAgICBcImRlXCI6IFtcIlNcIiwgXCJNXCIsIFwiRFwiLCBcIk1cIiwgXCJEXCIsIFwiRlwiLCBcIlNcIl0sXHJcbiAgICAgICAgICAgIFwiaXRcIjogW1wiZFwiLCBcImxcIiwgXCJtXCIsIFwibVwiLCBcImdcIiwgXCJ2XCIsIFwic1wiXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVtkYXldO1xyXG4gICAgfVxyXG59Il19