/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FnDateFormatter {
    constructor() {
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
    format(d, pattern, langId) {
        if (langId == "undefined" || langId == null || langId.trim() == "") {
            langId = "NoLang";
        }
        if (typeof pattern != "string")
            return;
        /** @type {?} */
        let dYear = d.getFullYear();
        /** @type {?} */
        let dMonth = d.getMonth();
        /** @type {?} */
        let dDate = d.getDate();
        /** @type {?} */
        let dDay = d.getDay();
        /** @type {?} */
        let dHours = d.getHours();
        /** @type {?} */
        let dMinutes = d.getMinutes();
        /** @type {?} */
        let dSeconds = d.getSeconds();
        /** @type {?} */
        let res = "";
        if (pattern === "RIB") {
            res = this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === "RIB_DT") {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + " " + this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (let i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                let c = pattern.charAt(i);
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
    }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    preZero(value) {
        return (parseInt(value) < 10) ? "0" + value : value;
    }
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    from24to12(hours) {
        return (hours > 12) ? hours - 12 : (hours == 0 ? 12 : hours);
    }
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    ampm(hours) {
        return (hours < 12) ? "am" : "pm";
    }
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    ap(hours) {
        return (hours < 12) ? "a" : "p";
    }
    ;
    /**
     * @param {?} day
     * @return {?}
     */
    isoDay(day) {
        return (day == 0) ? "7" : day;
    }
    ;
    /**
     * @param {?} dateObj
     * @return {?}
     */
    lastDayOfMonth(dateObj) {
        /** @type {?} */
        let tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
        tmp.setTime(tmp.getTime() - 1);
        return tmp.getDate();
    }
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    isLeapYear(year) {
        /** @type {?} */
        let tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return (sum == 365) ? "0" : "1";
    }
    ;
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    dateCount(year, month, date) {
        /** @type {?} */
        let tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = -1;
        for (let i = 0; i < month; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return sum + date;
    }
    ;
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthAbbrInLocal(lngIID, month) {
        /** @type {?} */
        let lagnHash = {
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
    }
    ;
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthInLocal(lngIID, month) {
        /** @type {?} */
        let lagnHash = {
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
    }
    ;
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInLocal(lngIID, day) {
        /** @type {?} */
        let lagnHash = {
            "es": ["Dom", "Lu", "Ma", "Mx", "Ju", "Vi", "Sab"],
            "en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "fr": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "it": ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]
        };
        return lagnHash[lngIID][day];
    }
    ;
    /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    weekFullInLocal(langId, dayIndex) {
        /** @type {?} */
        let dayHashOnLang = {
            "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "es": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            "fr": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            "zh": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "de": ["Sonntag", "Montag", "Dienstag	", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "it": ["domenica", "luned\u00ec", "marted\u00ec", "mercoled\u00ec", "gioved\u00ec", "venerd\u00ec", "sabato"]
        };
        return dayHashOnLang[langId][dayIndex];
    }
    ;
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInShortLocal(lngIID, day) {
        /** @type {?} */
        let lagnHash = {
            "es": ["D", "L", "M", "M", "J", "V", "S"],
            "en": ["S", "M", "T", "W", "T", "F", "S"],
            "fr": ["D", "L", "M", "M", "J", "V", "S"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["S", "M", "D", "M", "D", "F", "S"],
            "it": ["d", "l", "m", "m", "g", "v", "s"]
        };
        return lagnHash[lngIID][day];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvdXRpbC9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQThJSSxlQUFVLEdBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVM7WUFDNUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkQsV0FBTSxHQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEQsZ0JBQVcsR0FBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUNwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLGVBQVUsR0FBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztZQUNsRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLGVBQVUsR0FBUTtZQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDMUQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFB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R0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN6QyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDNUM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7OztJQS9IRyxxQ0FDbUQ7O0lBRW5ELGlDQUFrRDs7SUFFbEQsc0NBQ3NFOztJQUV0RSxxQ0FDeUM7O0lBRXpDLHFDQUdzRSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgRm5EYXRlRm9ybWF0dGVyIHtcclxuXHJcbiAgICBmb3JtYXQoZD86IERhdGUsIHBhdHRlcm4/OiBhbnksIGxhbmdJZD86IGFueSkge1xyXG4gICAgICAgIGlmIChsYW5nSWQgPT0gXCJ1bmRlZmluZWRcIiB8fCBsYW5nSWQgPT0gbnVsbCB8fCBsYW5nSWQudHJpbSgpID09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGFuZ0lkID0gXCJOb0xhbmdcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHBhdHRlcm4gIT0gXCJzdHJpbmdcIikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkWWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgZE1vbnRoID0gZC5nZXRNb250aCgpO1xyXG4gICAgICAgIGxldCBkRGF0ZSA9IGQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBkRGF5ID0gZC5nZXREYXkoKTtcclxuICAgICAgICBsZXQgZEhvdXJzID0gZC5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBkTWludXRlcyA9IGQuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBkU2Vjb25kcyA9IGQuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIGxldCByZXMgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwYXR0ZXJuID09PSBcIlJJQlwiKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuZnJvbTI0dG8xMihkSG91cnMpICsgKFwiOlwiICsgdGhpcy5wcmVaZXJvKGRNaW51dGVzKSkgKyB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhdHRlcm4gPT09IFwiUklCX0RUXCIpIHtcclxuICAgICAgICAgICAgcmVzID0gdGhpcy5wcmVaZXJvKGRNb250aCArIDEpICsgJy8nICsgdGhpcy5wcmVaZXJvKGREYXRlKSArICcvJyArIGRZZWFyICsgXCIgXCIgKyB0aGlzLmZyb20yNHRvMTIoZEhvdXJzKSArIChcIjpcIiArIHRoaXMucHJlWmVybyhkTWludXRlcykpICsgdGhpcy5hcChkSG91cnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gcGF0dGVybi5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiI1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBsZW4gLSAxKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHBhdHRlcm4uY2hhckF0KCsraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJZXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkWWVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGRZZWFyLnRvU3RyaW5nKCkuc3Vic3RyKDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRNb250aCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZE1vbnRoICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGREYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJOXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmlzb0RheShkRGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmdJZCAhPSBcIk5vTGFuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEluTG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtGdWxsRW5bZERheV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5nSWQgIT0gXCJOb0xhbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0RGF5SW5Mb2NhbChsYW5nSWQsIGREYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJYXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5nSWQgIT0gXCJOb0xhbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0RGF5SW5TaG9ydExvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldLnN1YnN0cigwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0pwW2REYXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ0lkICE9IFwiTm9MYW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldE1vbnRoSW5Mb2NhbChsYW5nSWQsIGRNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5tb250aEZ1bGxFbltkTW9udGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ0lkICE9IFwiTm9MYW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmdldE1vbnRoQWJickluTG9jYWwobGFuZ0lkLCBkTW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhGdWxsRW5bZE1vbnRoXS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJPXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLm1vbnRoT2xkSnBbZE1vbnRoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuYW1wbShkSG91cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5hcChkSG91cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5hbXBtKGRIb3VycykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkSG91cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKHRoaXMuZnJvbTI0dG8xMihkSG91cnMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZnJvbTI0dG8xMihkSG91cnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZEhvdXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRNaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkU2Vjb25kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmxhc3REYXlPZk1vbnRoKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5pc0xlYXBZZWFyKGRZZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZGF0ZUNvdW50KGRZZWFyLCBkTW9udGgsIGREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZGF0ZVN1ZmZpeFtkRGF0ZSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcblxyXG4gICAgd2Vla0Z1bGxFbjogYW55ID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLFxyXG4gICAgICAgIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcclxuXHJcbiAgICB3ZWVrSnA6IGFueSA9IFtcIuaXpVwiLCBcIuaciFwiLCBcIueBq1wiLCBcIuawtFwiLCBcIuacqFwiLCBcIumHkVwiLCBcIuWcn1wiXTtcclxuXHJcbiAgICBtb250aEZ1bGxFbjogYW55ID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJyaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsXHJcbiAgICAgICAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XHJcblxyXG4gICAgbW9udGhPbGRKcDogYW55ID0gW1wi552m5pyIXCIsIFwi5aaC5pyIXCIsIFwi5byl55SfXCIsIFwi5Y2v5pyIXCIsIFwi55qQ5pyIXCIsIFwi5rC054Sh5pyIXCIsXHJcbiAgICAgICAgXCLmlofmnIhcIiwgXCLokYnmnIhcIiwgXCLplbfmnIhcIiwgXCLnpZ7nhKHmnIhcIiwgXCLpnJzmnIhcIiwgXCLluKvotbBcIl07XHJcblxyXG4gICAgZGF0ZVN1ZmZpeDogYW55ID0gW1xyXG4gICAgICAgIFwic3RcIiwgXCJuZFwiLCBcInJkXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIixcclxuICAgICAgICBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsXHJcbiAgICAgICAgXCJzdFwiLCBcIm5kXCIsIFwicmRcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInN0XCJdO1xyXG5cclxuICAgIHByZVplcm8odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAocGFyc2VJbnQodmFsdWUpIDwgMTApID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBmcm9tMjR0bzEyKGhvdXJzOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGhvdXJzID4gMTIpID8gaG91cnMgLSAxMiA6IChob3VycyA9PSAwID8gMTIgOiBob3Vycyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFtcG0oaG91cnM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAoaG91cnMgPCAxMikgPyBcImFtXCIgOiBcInBtXCI7XHJcbiAgICB9O1xyXG4gICAgYXAoaG91cnM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAoaG91cnMgPCAxMikgPyBcImFcIiA6IFwicFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBpc29EYXkoZGF5OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGRheSA9PSAwKSA/IFwiN1wiIDogZGF5O1xyXG4gICAgfTtcclxuXHJcbiAgICBsYXN0RGF5T2ZNb250aChkYXRlT2JqOiBhbnkpIHtcclxuICAgICAgICBsZXQgdG1wID0gbmV3IERhdGUoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCBkYXRlT2JqLmdldE1vbnRoKCkgKyAxLCAxKTtcclxuICAgICAgICB0bXAuc2V0VGltZSh0bXAuZ2V0VGltZSgpIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHRtcC5nZXREYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlzTGVhcFllYXIoeWVhcjogYW55KSB7XHJcbiAgICAgICAgbGV0IHRtcCA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgICAgICB0bXAuc2V0TW9udGgoaSk7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLmxhc3REYXlPZk1vbnRoKHRtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoc3VtID09IDM2NSkgPyBcIjBcIiA6IFwiMVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBkYXRlQ291bnQoeWVhcjogYW55LCBtb250aDogYW55LCBkYXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgdG1wID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XHJcbiAgICAgICAgbGV0IHN1bSA9IC0xO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9udGg7IGkrKykge1xyXG4gICAgICAgICAgICB0bXAuc2V0TW9udGgoaSk7XHJcbiAgICAgICAgICAgIHN1bSArPSB0aGlzLmxhc3REYXlPZk1vbnRoKHRtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW0gKyBkYXRlO1xyXG4gICAgfTtcclxuICAgIGdldE1vbnRoQWJickluTG9jYWwobG5nSUlEOiBhbnksIG1vbnRoOiBhbnkpIHtcclxuICAgICAgICBsZXQgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJlc1wiOiBbXCJlbmVcIiwgXCJmZWJcIiwgXCJtYXJcIiwgXCJhYnJcIiwgXCJtYXlcIiwgXCJqdW5cIixcclxuICAgICAgICAgICAgICAgIFwianVsXCIsIFwiYWdvXCIsIFwic2VwXCIsIFwib2N0XCIsIFwibm92XCIsIFwiZGljXCJdLFxyXG4gICAgICAgICAgICBcImVuXCI6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLFxyXG4gICAgICAgICAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXHJcbiAgICAgICAgICAgIFwiZnJcIjogW1wiJiMxMDY7JiM5NzsmIzExMDsmIzExODtcIiwgXCImIzEwMjsmIzEwMTsmIzExODsmIzExNDtcIiwgXCImIzEwOTsmIzk3OyYjMTE0OyYjMTE1O1wiLCBcIiYjOTc7JiMxMTg7JiMxMTQ7JiMxMDU7JiMxMDg7XCIsIFwiJiMxMDk7JiM5NzsmIzEwNTtcIiwgXCIgJiMxMDY7JiMxMTc7JiMxMDU7JiMxMTA7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiYjMTA2OyYjMTE3OyYjMTA1OyYjMTA4O1wiLCBcIiYjOTc7JiMxMTE7JiMxMTc7JiMxMTY7XCIsIFwiJiMxMTU7JiMxMDE7JiMxMTI7JiMxMTY7XCIsIFwiJiMxMTE7JiM5OTsmIzExNjtcIiwgXCImIzExMDsmIzExMTsmIzExODtcIiwgXCImIzEwMDsmIzEwMTsmIzk5O1wiXSxcclxuICAgICAgICAgICAgXCJ6aFwiOiBbXCImIzE5OTY4OyYjMjYzNzY7XCIsIFwiJiMyMDEwODsmIzI2Mzc2O1wiLCBcIiAmIzE5OTc3OyYjMjYzNzY7XCIsIFwiJiMyMjIzNTsmIzI2Mzc2O1wiLCBcIiYjMjAxMTY7JiMyNjM3NjtcIiwgXCImIzIwODQ1OyYjMjYzNzY7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiYjMTk5NzE7JiMyNjM3NjtcIiwgXCImIzE5OTcxOyYjMjYzNzY7XCIsIFwiJiMyMDA2MTsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMxOTk2ODsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMjAxMDg7JiMyNjM3NjtcIl0sXHJcbiAgICAgICAgICAgIFwiZGVcIjogW1wiSmFuXCIsIFwiRmViLlwiLCBcIk3DpHJ6XCIsIFwiQXByLlwiLCBcIk1haVwiLCBcIkp1bmlcIixcclxuICAgICAgICAgICAgICAgIFwiSnVsaVwiLCBcIkF1Zy5cIiwgXCJTZXB0LlwiLCBcIk9rdC5cIiwgXCJOb3YuXCIsIFwiRGV6XCJdLFxyXG4gICAgICAgICAgICBcIml0XCI6IFtcImdlbm5cIiwgXCJmZWJiclwiLCBcIm1hclwiLCBcImFwclwiLCBcIm1hZ2dcIiwgXCJnaXVnbm9cIixcclxuICAgICAgICAgICAgICAgIFwibHVnbGlvXCIsIFwiYWdcIiwgXCJzZXR0XCIsIFwib3R0XCIsIFwibm92XCIsIFwiZGljXCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW21vbnRoXTtcclxuICAgIH07XHJcbiAgICBnZXRNb250aEluTG9jYWwobG5nSUlEOiBhbnksIG1vbnRoOiBhbnkpIHtcclxuICAgICAgICBsZXQgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJlc1wiOiBbXCJlbmVyb1wiLCBcImZlYnJlcm9cIiwgXCJtYXJ6b1wiLCBcImFicmlsXCIsIFwibWF5b1wiLCBcImp1bmlvXCIsXHJcbiAgICAgICAgICAgICAgICBcImp1bGlvXCIsIFwiYWdvc3RvXCIsIFwic2VwdGllbWJyZVwiLCBcIm9jdHVicmVcIiwgXCJub3ZpZW1icmVcIiwgXCJkaWNpZW1icmVcIl0sXHJcbiAgICAgICAgICAgIFwiZW5cIjogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcclxuICAgICAgICAgICAgICAgIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxyXG4gICAgICAgICAgICBcImZyXCI6IFtcImphbnZpZXJcIiwgXCJmw6l2cmllclwiLCBcIm1hcnNcIiwgXCJhdnJpbFwiLCBcIm1haVwiLCBcImp1aW5cIixcclxuICAgICAgICAgICAgICAgIFwianVpbGxldFwiLCBcImFvw7t0XCIsIFwic2VwdGVtYnJlXCIsIFwib2N0b2JyZVwiLCBcIm5vdmVtYnJlXCIsIFwiZMOpY2VtYnJlXCJdLFxyXG4gICAgICAgICAgICBcInpoXCI6IFtcIiYjMTk5Njg7JiMyNjM3NjtcIiwgXCImIzIwMTA4OyYjMjYzNzY7XCIsIFwiICYjMTk5Nzc7JiMyNjM3NjtcIiwgXCImIzIyMjM1OyYjMjYzNzY7XCIsIFwiJiMyMDExNjsmIzI2Mzc2O1wiLCBcIiYjMjA4NDU7JiMyNjM3NjtcIixcclxuICAgICAgICAgICAgICAgIFwiJiMxOTk3MTsmIzI2Mzc2O1wiLCBcIiYjMTk5NzE7JiMyNjM3NjtcIiwgXCImIzIwMDYxOyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzE5OTY4OyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMyMDEwODsmIzI2Mzc2O1wiXSxcclxuICAgICAgICAgICAgXCJkZVwiOiBbXCJKYW51YXJcIiwgXCJGZWJydWFyXCIsIFwiTWFyelwiLCBcIkFwcmlsXCIsIFwiTWFpXCIsIFwiSnVuaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJKdWxpXCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2t0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGV6ZW1iZXJcIl0sXHJcbiAgICAgICAgICAgIFwiaXRcIjogW1wiZ2VubmFpb1wiLCBcImZlYmJyYWlvXCIsIFwibWFyem9cIiwgXCJhcHJpbGVcIiwgXCJtYWdnaW9cIiwgXCJnaXVnbm9cIixcclxuICAgICAgICAgICAgICAgIFwibHVnbGlvXCIsIFwiYWdvc3RvXCIsIFwic2V0dGVtYnJlXCIsIFwib3R0b2JyZVwiLCBcIm5vdmVtYnJlXCIsIFwiZGljZW1icmVcIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bbW9udGhdO1xyXG4gICAgfTtcclxuICAgIGdldERheUluTG9jYWwobG5nSUlEOiBhbnksIGRheTogYW55KSB7XHJcbiAgICAgICAgbGV0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiZXNcIjogW1wiRG9tXCIsIFwiTHVcIiwgXCJNYVwiLCBcIk14XCIsIFwiSnVcIiwgXCJWaVwiLCBcIlNhYlwiXSxcclxuICAgICAgICAgICAgXCJlblwiOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXHJcbiAgICAgICAgICAgIFwiZnJcIjogW1wiRGltXCIsIFwiTHVuXCIsIFwiTWFyXCIsIFwiTWVyXCIsIFwiSmV1XCIsIFwiVmVuXCIsIFwiU2FtXCJdLFxyXG4gICAgICAgICAgICBcInpoXCI6IFtcIiYjMjE2MDg7JiMyNjA4NTtcIiwgXCImIzIxNjA4OyYjMTk5Njg7XCIsIFwiJiMyMTYwODsmIzIwMTA4O1wiLCBcIiYjMjE2MDg7JiMxOTk3NztcIiwgXCImIzIxNjA4OyYjMjIyMzU7XCIsIFwiJiMyMTYwODsmIzIwMTE2O1wiLCBcIiYjMjE2MDg7JiMyMDg0NTtcIl0sXHJcbiAgICAgICAgICAgIFwiZGVcIjogW1wiU29cIiwgXCJNb1wiLCBcIkRpXCIsIFwiTWlcIiwgXCJEb1wiLCBcIkZyXCIsIFwiU2FcIl0sXHJcbiAgICAgICAgICAgIFwiaXRcIjogW1wiZG9tXCIsIFwibHVuXCIsIFwibWFyXCIsIFwibWVyXCIsIFwiZ2lvXCIsIFwidmVuXCIsIFwic2FiXCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW2RheV07XHJcbiAgICB9O1xyXG4gICAgd2Vla0Z1bGxJbkxvY2FsKGxhbmdJZDogYW55LCBkYXlJbmRleDogYW55KSB7XHJcbiAgICAgICAgbGV0IGRheUhhc2hPbkxhbmc6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJlblwiOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcclxuICAgICAgICAgICAgXCJlc1wiOiBbXCJkb21pbmdvXCIsIFwibHVuZXNcIiwgXCJtYXJ0ZXNcIiwgXCJtacOpcmNvbGVzXCIsIFwianVldmVzXCIsIFwidmllcm5lc1wiLCBcInPDoWJhZG9cIl0sXHJcbiAgICAgICAgICAgIFwiZnJcIjogW1wiZGltYW5jaGVcIiwgXCJsdW5kaVwiLCBcIm1hcmRpXCIsIFwibWVyY3JlZGlcIiwgXCJqZXVkaVwiLCBcInZlbmRyZWRpXCIsIFwic2FtZWRpXCJdLFxyXG4gICAgICAgICAgICBcInpoXCI6IFtcIuaYn+acn+WkqVwiLCBcIuaYn+acn+S4gFwiLCBcIuaYn+acn+S6jFwiLCBcIuaYn+acn+S4iVwiLCBcIuaYn+acn+Wbm1wiLCBcIuaYn+acn+S6lFwiLCBcIuaYn+acn+WFrVwiXSxcclxuICAgICAgICAgICAgXCJkZVwiOiBbXCJTb25udGFnXCIsIFwiTW9udGFnXCIsIFwiRGllbnN0YWdcdFwiLCBcIk1pdHR3b2NoXCIsIFwiRG9ubmVyc3RhZ1wiLCBcIkZyZWl0YWdcIiwgXCJTYW1zdGFnXCJdLFxyXG4gICAgICAgICAgICBcIml0XCI6IFtcImRvbWVuaWNhXCIsIFwibHVuZWRcXHUwMGVjXCIsIFwibWFydGVkXFx1MDBlY1wiLCBcIm1lcmNvbGVkXFx1MDBlY1wiLCBcImdpb3ZlZFxcdTAwZWNcIiwgXCJ2ZW5lcmRcXHUwMGVjXCIsIFwic2FiYXRvXCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXlIYXNoT25MYW5nW2xhbmdJZF1bZGF5SW5kZXhdXHJcbiAgICB9O1xyXG4gICAgZ2V0RGF5SW5TaG9ydExvY2FsKGxuZ0lJRDogYW55LCBkYXk6IGFueSkge1xyXG4gICAgICAgIGxldCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICAgICAgICBcImVzXCI6IFtcIkRcIiwgXCJMXCIsIFwiTVwiLCBcIk1cIiwgXCJKXCIsIFwiVlwiLCBcIlNcIl0sXHJcbiAgICAgICAgICAgIFwiZW5cIjogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcclxuICAgICAgICAgICAgXCJmclwiOiBbXCJEXCIsIFwiTFwiLCBcIk1cIiwgXCJNXCIsIFwiSlwiLCBcIlZcIiwgXCJTXCJdLFxyXG4gICAgICAgICAgICBcInpoXCI6IFtcIiYjMjE2MDg7JiMyNjA4NTtcIiwgXCImIzIxNjA4OyYjMTk5Njg7XCIsIFwiJiMyMTYwODsmIzIwMTA4O1wiLCBcIiYjMjE2MDg7JiMxOTk3NztcIiwgXCImIzIxNjA4OyYjMjIyMzU7XCIsIFwiJiMyMTYwODsmIzIwMTE2O1wiLCBcIiYjMjE2MDg7JiMyMDg0NTtcIl0sXHJcbiAgICAgICAgICAgIFwiZGVcIjogW1wiU1wiLCBcIk1cIiwgXCJEXCIsIFwiTVwiLCBcIkRcIiwgXCJGXCIsIFwiU1wiXSxcclxuICAgICAgICAgICAgXCJpdFwiOiBbXCJkXCIsIFwibFwiLCBcIm1cIiwgXCJtXCIsIFwiZ1wiLCBcInZcIiwgXCJzXCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW2RheV07XHJcbiAgICB9XHJcbn0iXX0=