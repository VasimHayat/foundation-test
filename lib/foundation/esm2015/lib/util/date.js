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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvdXRpbC9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQThJSSxlQUFVLEdBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVM7WUFDNUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkQsV0FBTSxHQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEQsZ0JBQVcsR0FBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUNwRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLGVBQVUsR0FBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztZQUNsRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLGVBQVUsR0FBUTtZQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDMUQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFB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R0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN6QyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDNUM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7OztJQS9IRyxxQ0FDbUQ7O0lBRW5ELGlDQUFrRDs7SUFFbEQsc0NBQ3NFOztJQUV0RSxxQ0FDeUM7O0lBRXpDLHFDQUdzRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGbkRhdGVGb3JtYXR0ZXIge1xyXG5cclxuICAgIGZvcm1hdChkPzogRGF0ZSwgcGF0dGVybj86IGFueSwgbGFuZ0lkPzogYW55KSB7XHJcbiAgICAgICAgaWYgKGxhbmdJZCA9PSBcInVuZGVmaW5lZFwiIHx8IGxhbmdJZCA9PSBudWxsIHx8IGxhbmdJZC50cmltKCkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBsYW5nSWQgPSBcIk5vTGFuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0dGVybiAhPSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRZZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBkTW9udGggPSBkLmdldE1vbnRoKCk7XHJcbiAgICAgICAgbGV0IGREYXRlID0gZC5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGREYXkgPSBkLmdldERheSgpO1xyXG4gICAgICAgIGxldCBkSG91cnMgPSBkLmdldEhvdXJzKCk7XHJcbiAgICAgICAgbGV0IGRNaW51dGVzID0gZC5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IGRTZWNvbmRzID0gZC5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHBhdHRlcm4gPT09IFwiUklCXCIpIHtcclxuICAgICAgICAgICAgcmVzID0gdGhpcy5mcm9tMjR0bzEyKGRIb3VycykgKyAoXCI6XCIgKyB0aGlzLnByZVplcm8oZE1pbnV0ZXMpKSArIHRoaXMuYXAoZEhvdXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGF0dGVybiA9PT0gXCJSSUJfRFRcIikge1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLnByZVplcm8oZE1vbnRoICsgMSkgKyAnLycgKyB0aGlzLnByZVplcm8oZERhdGUpICsgJy8nICsgZFllYXIgKyBcIiBcIiArIHRoaXMuZnJvbTI0dG8xMihkSG91cnMpICsgKFwiOlwiICsgdGhpcy5wcmVaZXJvKGRNaW51dGVzKSkgKyB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBwYXR0ZXJuLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIjXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGxlbiAtIDEpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gcGF0dGVybi5jaGFyQXQoKytpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZFllYXIudG9TdHJpbmcoKS5zdWJzdHIoMiwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZE1vbnRoICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkTW9udGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImpcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGREYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gZERheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuaXNvRGF5KGREYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFuZ0lkICE9IFwiTm9MYW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtGdWxsSW5Mb2NhbChsYW5nSWQsIGREYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmdJZCAhPSBcIk5vTGFuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXREYXlJbkxvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrRnVsbEVuW2REYXldLnN1YnN0cigwLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhbmdJZCAhPSBcIk5vTGFuZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXREYXlJblNob3J0TG9jYWwobGFuZ0lkLCBkRGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtGdWxsRW5bZERheV0uc3Vic3RyKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy53ZWVrSnBbZERheV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5nSWQgIT0gXCJOb0xhbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0TW9udGhJbkxvY2FsKGxhbmdJZCwgZE1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLm1vbnRoRnVsbEVuW2RNb250aF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJSXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYW5nSWQgIT0gXCJOb0xhbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0TW9udGhBYmJySW5Mb2NhbChsYW5nSWQsIGRNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5tb250aEZ1bGxFbltkTW9udGhdLnN1YnN0cigwLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk9cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhPbGRKcFtkTW9udGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5hbXBtKGRIb3Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJQXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmFtcG0oZEhvdXJzKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRIb3Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8odGhpcy5mcm9tMjR0bzEyKGRIb3VycykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5mcm9tMjR0bzEyKGRIb3Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJHXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBkSG91cnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZE1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRTZWNvbmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHRoaXMubGFzdERheU9mTW9udGgoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSB0aGlzLmlzTGVhcFllYXIoZFllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwielwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5kYXRlQ291bnQoZFllYXIsIGRNb250aCwgZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgKz0gdGhpcy5kYXRlU3VmZml4W2REYXRlIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyArPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfTtcclxuXHJcbiAgICB3ZWVrRnVsbEVuOiBhbnkgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsXHJcbiAgICAgICAgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdO1xyXG5cclxuICAgIHdlZWtKcDogYW55ID0gW1wi5pelXCIsIFwi5pyIXCIsIFwi54GrXCIsIFwi5rC0XCIsIFwi5pyoXCIsIFwi6YeRXCIsIFwi5ZyfXCJdO1xyXG5cclxuICAgIG1vbnRoRnVsbEVuOiBhbnkgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcInJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcclxuICAgICAgICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcclxuXHJcbiAgICBtb250aE9sZEpwOiBhbnkgPSBbXCLnnabmnIhcIiwgXCLlpoLmnIhcIiwgXCLlvKXnlJ9cIiwgXCLlja/mnIhcIiwgXCLnmpDmnIhcIiwgXCLmsLTnhKHmnIhcIixcclxuICAgICAgICBcIuaWh+aciFwiLCBcIuiRieaciFwiLCBcIumVt+aciFwiLCBcIuelnueEoeaciFwiLCBcIumcnOaciFwiLCBcIuW4q+i1sFwiXTtcclxuXHJcbiAgICBkYXRlU3VmZml4OiBhbnkgPSBbXHJcbiAgICAgICAgXCJzdFwiLCBcIm5kXCIsIFwicmRcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLFxyXG4gICAgICAgIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIixcclxuICAgICAgICBcInN0XCIsIFwibmRcIiwgXCJyZFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwidGhcIiwgXCJ0aFwiLCBcInRoXCIsIFwic3RcIl07XHJcblxyXG4gICAgcHJlWmVybyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJzZUludCh2YWx1ZSkgPCAxMCkgPyBcIjBcIiArIHZhbHVlIDogdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb20yNHRvMTIoaG91cnM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAoaG91cnMgPiAxMikgPyBob3VycyAtIDEyIDogKGhvdXJzID09IDAgPyAxMiA6IGhvdXJzKTtcclxuICAgIH07XHJcblxyXG4gICAgYW1wbShob3VyczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIChob3VycyA8IDEyKSA/IFwiYW1cIiA6IFwicG1cIjtcclxuICAgIH07XHJcbiAgICBhcChob3VyczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIChob3VycyA8IDEyKSA/IFwiYVwiIDogXCJwXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGlzb0RheShkYXk6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAoZGF5ID09IDApID8gXCI3XCIgOiBkYXk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxhc3REYXlPZk1vbnRoKGRhdGVPYmo6IGFueSkge1xyXG4gICAgICAgIGxldCB0bXAgPSBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIGRhdGVPYmouZ2V0TW9udGgoKSArIDEsIDEpO1xyXG4gICAgICAgIHRtcC5zZXRUaW1lKHRtcC5nZXRUaW1lKCkgLSAxKTtcclxuICAgICAgICByZXR1cm4gdG1wLmdldERhdGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaXNMZWFwWWVhcih5ZWFyOiBhbnkpIHtcclxuICAgICAgICBsZXQgdG1wID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRtcC5zZXRNb250aChpKTtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMubGFzdERheU9mTW9udGgodG1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChzdW0gPT0gMzY1KSA/IFwiMFwiIDogXCIxXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGVDb3VudCh5ZWFyOiBhbnksIG1vbnRoOiBhbnksIGRhdGU6IGFueSkge1xyXG4gICAgICAgIGxldCB0bXAgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcclxuICAgICAgICBsZXQgc3VtID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb250aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRtcC5zZXRNb250aChpKTtcclxuICAgICAgICAgICAgc3VtICs9IHRoaXMubGFzdERheU9mTW9udGgodG1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1bSArIGRhdGU7XHJcbiAgICB9O1xyXG4gICAgZ2V0TW9udGhBYmJySW5Mb2NhbChsbmdJSUQ6IGFueSwgbW9udGg6IGFueSkge1xyXG4gICAgICAgIGxldCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICAgICAgICBcImVzXCI6IFtcImVuZVwiLCBcImZlYlwiLCBcIm1hclwiLCBcImFiclwiLCBcIm1heVwiLCBcImp1blwiLFxyXG4gICAgICAgICAgICAgICAgXCJqdWxcIiwgXCJhZ29cIiwgXCJzZXBcIiwgXCJvY3RcIiwgXCJub3ZcIiwgXCJkaWNcIl0sXHJcbiAgICAgICAgICAgIFwiZW5cIjogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcclxuICAgICAgICAgICAgXCJmclwiOiBbXCImIzEwNjsmIzk3OyYjMTEwOyYjMTE4O1wiLCBcIiYjMTAyOyYjMTAxOyYjMTE4OyYjMTE0O1wiLCBcIiYjMTA5OyYjOTc7JiMxMTQ7JiMxMTU7XCIsIFwiJiM5NzsmIzExODsmIzExNDsmIzEwNTsmIzEwODtcIiwgXCImIzEwOTsmIzk3OyYjMTA1O1wiLCBcIiAmIzEwNjsmIzExNzsmIzEwNTsmIzExMDtcIixcclxuICAgICAgICAgICAgICAgIFwiJiMxMDY7JiMxMTc7JiMxMDU7JiMxMDg7XCIsIFwiJiM5NzsmIzExMTsmIzExNzsmIzExNjtcIiwgXCImIzExNTsmIzEwMTsmIzExMjsmIzExNjtcIiwgXCImIzExMTsmIzk5OyYjMTE2O1wiLCBcIiYjMTEwOyYjMTExOyYjMTE4O1wiLCBcIiYjMTAwOyYjMTAxOyYjOTk7XCJdLFxyXG4gICAgICAgICAgICBcInpoXCI6IFtcIiYjMTk5Njg7JiMyNjM3NjtcIiwgXCImIzIwMTA4OyYjMjYzNzY7XCIsIFwiICYjMTk5Nzc7JiMyNjM3NjtcIiwgXCImIzIyMjM1OyYjMjYzNzY7XCIsIFwiJiMyMDExNjsmIzI2Mzc2O1wiLCBcIiYjMjA4NDU7JiMyNjM3NjtcIixcclxuICAgICAgICAgICAgICAgIFwiJiMxOTk3MTsmIzI2Mzc2O1wiLCBcIiYjMTk5NzE7JiMyNjM3NjtcIiwgXCImIzIwMDYxOyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzE5OTY4OyYjMjYzNzY7XCIsIFwiICYjMjEzMTM7JiMyMDEwODsmIzI2Mzc2O1wiXSxcclxuICAgICAgICAgICAgXCJkZVwiOiBbXCJKYW5cIiwgXCJGZWIuXCIsIFwiTcOkcnpcIiwgXCJBcHIuXCIsIFwiTWFpXCIsIFwiSnVuaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJKdWxpXCIsIFwiQXVnLlwiLCBcIlNlcHQuXCIsIFwiT2t0LlwiLCBcIk5vdi5cIiwgXCJEZXpcIl0sXHJcbiAgICAgICAgICAgIFwiaXRcIjogW1wiZ2VublwiLCBcImZlYmJyXCIsIFwibWFyXCIsIFwiYXByXCIsIFwibWFnZ1wiLCBcImdpdWdub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsdWdsaW9cIiwgXCJhZ1wiLCBcInNldHRcIiwgXCJvdHRcIiwgXCJub3ZcIiwgXCJkaWNcIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bbW9udGhdO1xyXG4gICAgfTtcclxuICAgIGdldE1vbnRoSW5Mb2NhbChsbmdJSUQ6IGFueSwgbW9udGg6IGFueSkge1xyXG4gICAgICAgIGxldCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICAgICAgICBcImVzXCI6IFtcImVuZXJvXCIsIFwiZmVicmVyb1wiLCBcIm1hcnpvXCIsIFwiYWJyaWxcIiwgXCJtYXlvXCIsIFwianVuaW9cIixcclxuICAgICAgICAgICAgICAgIFwianVsaW9cIiwgXCJhZ29zdG9cIiwgXCJzZXB0aWVtYnJlXCIsIFwib2N0dWJyZVwiLCBcIm5vdmllbWJyZVwiLCBcImRpY2llbWJyZVwiXSxcclxuICAgICAgICAgICAgXCJlblwiOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXHJcbiAgICAgICAgICAgIFwiZnJcIjogW1wiamFudmllclwiLCBcImbDqXZyaWVyXCIsIFwibWFyc1wiLCBcImF2cmlsXCIsIFwibWFpXCIsIFwianVpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJqdWlsbGV0XCIsIFwiYW/Du3RcIiwgXCJzZXB0ZW1icmVcIiwgXCJvY3RvYnJlXCIsIFwibm92ZW1icmVcIiwgXCJkw6ljZW1icmVcIl0sXHJcbiAgICAgICAgICAgIFwiemhcIjogW1wiJiMxOTk2ODsmIzI2Mzc2O1wiLCBcIiYjMjAxMDg7JiMyNjM3NjtcIiwgXCIgJiMxOTk3NzsmIzI2Mzc2O1wiLCBcIiYjMjIyMzU7JiMyNjM3NjtcIiwgXCImIzIwMTE2OyYjMjYzNzY7XCIsIFwiJiMyMDg0NTsmIzI2Mzc2O1wiLFxyXG4gICAgICAgICAgICAgICAgXCImIzE5OTcxOyYjMjYzNzY7XCIsIFwiJiMxOTk3MTsmIzI2Mzc2O1wiLCBcIiYjMjAwNjE7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzI2Mzc2O1wiLCBcIiAmIzIxMzEzOyYjMTk5Njg7JiMyNjM3NjtcIiwgXCIgJiMyMTMxMzsmIzIwMTA4OyYjMjYzNzY7XCJdLFxyXG4gICAgICAgICAgICBcImRlXCI6IFtcIkphbnVhclwiLCBcIkZlYnJ1YXJcIiwgXCJNYXJ6XCIsIFwiQXByaWxcIiwgXCJNYWlcIiwgXCJKdW5pXCIsXHJcbiAgICAgICAgICAgICAgICBcIkp1bGlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPa3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZXplbWJlclwiXSxcclxuICAgICAgICAgICAgXCJpdFwiOiBbXCJnZW5uYWlvXCIsIFwiZmViYnJhaW9cIiwgXCJtYXJ6b1wiLCBcImFwcmlsZVwiLCBcIm1hZ2dpb1wiLCBcImdpdWdub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsdWdsaW9cIiwgXCJhZ29zdG9cIiwgXCJzZXR0ZW1icmVcIiwgXCJvdHRvYnJlXCIsIFwibm92ZW1icmVcIiwgXCJkaWNlbWJyZVwiXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVttb250aF07XHJcbiAgICB9O1xyXG4gICAgZ2V0RGF5SW5Mb2NhbChsbmdJSUQ6IGFueSwgZGF5OiBhbnkpIHtcclxuICAgICAgICBsZXQgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJlc1wiOiBbXCJEb21cIiwgXCJMdVwiLCBcIk1hXCIsIFwiTXhcIiwgXCJKdVwiLCBcIlZpXCIsIFwiU2FiXCJdLFxyXG4gICAgICAgICAgICBcImVuXCI6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcclxuICAgICAgICAgICAgXCJmclwiOiBbXCJEaW1cIiwgXCJMdW5cIiwgXCJNYXJcIiwgXCJNZXJcIiwgXCJKZXVcIiwgXCJWZW5cIiwgXCJTYW1cIl0sXHJcbiAgICAgICAgICAgIFwiemhcIjogW1wiJiMyMTYwODsmIzI2MDg1O1wiLCBcIiYjMjE2MDg7JiMxOTk2ODtcIiwgXCImIzIxNjA4OyYjMjAxMDg7XCIsIFwiJiMyMTYwODsmIzE5OTc3O1wiLCBcIiYjMjE2MDg7JiMyMjIzNTtcIiwgXCImIzIxNjA4OyYjMjAxMTY7XCIsIFwiJiMyMTYwODsmIzIwODQ1O1wiXSxcclxuICAgICAgICAgICAgXCJkZVwiOiBbXCJTb1wiLCBcIk1vXCIsIFwiRGlcIiwgXCJNaVwiLCBcIkRvXCIsIFwiRnJcIiwgXCJTYVwiXSxcclxuICAgICAgICAgICAgXCJpdFwiOiBbXCJkb21cIiwgXCJsdW5cIiwgXCJtYXJcIiwgXCJtZXJcIiwgXCJnaW9cIiwgXCJ2ZW5cIiwgXCJzYWJcIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bZGF5XTtcclxuICAgIH07XHJcbiAgICB3ZWVrRnVsbEluTG9jYWwobGFuZ0lkOiBhbnksIGRheUluZGV4OiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF5SGFzaE9uTGFuZzogYW55ID0ge1xyXG4gICAgICAgICAgICBcImVuXCI6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxyXG4gICAgICAgICAgICBcImVzXCI6IFtcImRvbWluZ29cIiwgXCJsdW5lc1wiLCBcIm1hcnRlc1wiLCBcIm1pw6lyY29sZXNcIiwgXCJqdWV2ZXNcIiwgXCJ2aWVybmVzXCIsIFwic8OhYmFkb1wiXSxcclxuICAgICAgICAgICAgXCJmclwiOiBbXCJkaW1hbmNoZVwiLCBcImx1bmRpXCIsIFwibWFyZGlcIiwgXCJtZXJjcmVkaVwiLCBcImpldWRpXCIsIFwidmVuZHJlZGlcIiwgXCJzYW1lZGlcIl0sXHJcbiAgICAgICAgICAgIFwiemhcIjogW1wi5pif5pyf5aSpXCIsIFwi5pif5pyf5LiAXCIsIFwi5pif5pyf5LqMXCIsIFwi5pif5pyf5LiJXCIsIFwi5pif5pyf5ZubXCIsIFwi5pif5pyf5LqUXCIsIFwi5pif5pyf5YWtXCJdLFxyXG4gICAgICAgICAgICBcImRlXCI6IFtcIlNvbm50YWdcIiwgXCJNb250YWdcIiwgXCJEaWVuc3RhZ1x0XCIsIFwiTWl0dHdvY2hcIiwgXCJEb25uZXJzdGFnXCIsIFwiRnJlaXRhZ1wiLCBcIlNhbXN0YWdcIl0sXHJcbiAgICAgICAgICAgIFwiaXRcIjogW1wiZG9tZW5pY2FcIiwgXCJsdW5lZFxcdTAwZWNcIiwgXCJtYXJ0ZWRcXHUwMGVjXCIsIFwibWVyY29sZWRcXHUwMGVjXCIsIFwiZ2lvdmVkXFx1MDBlY1wiLCBcInZlbmVyZFxcdTAwZWNcIiwgXCJzYWJhdG9cIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRheUhhc2hPbkxhbmdbbGFuZ0lkXVtkYXlJbmRleF1cclxuICAgIH07XHJcbiAgICBnZXREYXlJblNob3J0TG9jYWwobG5nSUlEOiBhbnksIGRheTogYW55KSB7XHJcbiAgICAgICAgbGV0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiZXNcIjogW1wiRFwiLCBcIkxcIiwgXCJNXCIsIFwiTVwiLCBcIkpcIiwgXCJWXCIsIFwiU1wiXSxcclxuICAgICAgICAgICAgXCJlblwiOiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxyXG4gICAgICAgICAgICBcImZyXCI6IFtcIkRcIiwgXCJMXCIsIFwiTVwiLCBcIk1cIiwgXCJKXCIsIFwiVlwiLCBcIlNcIl0sXHJcbiAgICAgICAgICAgIFwiemhcIjogW1wiJiMyMTYwODsmIzI2MDg1O1wiLCBcIiYjMjE2MDg7JiMxOTk2ODtcIiwgXCImIzIxNjA4OyYjMjAxMDg7XCIsIFwiJiMyMTYwODsmIzE5OTc3O1wiLCBcIiYjMjE2MDg7JiMyMjIzNTtcIiwgXCImIzIxNjA4OyYjMjAxMTY7XCIsIFwiJiMyMTYwODsmIzIwODQ1O1wiXSxcclxuICAgICAgICAgICAgXCJkZVwiOiBbXCJTXCIsIFwiTVwiLCBcIkRcIiwgXCJNXCIsIFwiRFwiLCBcIkZcIiwgXCJTXCJdLFxyXG4gICAgICAgICAgICBcIml0XCI6IFtcImRcIiwgXCJsXCIsIFwibVwiLCBcIm1cIiwgXCJnXCIsIFwidlwiLCBcInNcIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bZGF5XTtcclxuICAgIH1cclxufSJdfQ==