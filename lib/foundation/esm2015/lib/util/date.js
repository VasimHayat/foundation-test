/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FnDateFormatter {
    constructor() {
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
    format(d, pattern, langId) {
        // tslint:disable-next-line:triple-equals
        if (langId == 'undefined' || langId == null || langId.trim() == '') {
            langId = 'NoLang';
        }
        if (typeof pattern !== 'string') {
            return;
        }
        /** @type {?} */
        const dYear = d.getFullYear();
        /** @type {?} */
        const dMonth = d.getMonth();
        /** @type {?} */
        const dDate = d.getDate();
        /** @type {?} */
        const dDay = d.getDay();
        /** @type {?} */
        const dHours = d.getHours();
        /** @type {?} */
        const dMinutes = d.getMinutes();
        /** @type {?} */
        const dSeconds = d.getSeconds();
        /** @type {?} */
        let res = '';
        if (pattern === 'RIB') {
            res = this.from24to12(dHours) + (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === 'RIB_DT') {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + ' ' + this.from24to12(dHours) +
                (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (let i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                const c = pattern.charAt(i);
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    preZero(value) {
        // tslint:disable-next-line:radix
        return (parseInt(value) < 10) ? '0' + value : value;
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    from24to12(hours) {
        return (hours > 12) ? hours - 12 : (hours === 0 ? 12 : hours);
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    ampm(hours) {
        return (hours < 12) ? 'am' : 'pm';
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    ap(hours) {
        return (hours < 12) ? 'a' : 'p';
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isoDay(day) {
        return (day === 0) ? '7' : day;
    }
    /**
     * @param {?} dateObj
     * @return {?}
     */
    lastDayOfMonth(dateObj) {
        /** @type {?} */
        const tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
        tmp.setTime(tmp.getTime() - 1);
        return tmp.getDate();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    isLeapYear(year) {
        /** @type {?} */
        const tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return (sum === 365) ? '0' : '1';
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    dateCount(year, month, date) {
        /** @type {?} */
        const tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = -1;
        for (let i = 0; i < month; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return sum + date;
    }
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthAbbrInLocal(lngIID, month) {
        /** @type {?} */
        const lagnHash = {
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
    }
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthInLocal(lngIID, month) {
        /** @type {?} */
        const lagnHash = {
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
    }
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInLocal(lngIID, day) {
        /** @type {?} */
        const lagnHash = {
            es: ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            it: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
        };
        return lagnHash[lngIID][day];
    }
    /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    weekFullInLocal(langId, dayIndex) {
        /** @type {?} */
        const dayHashOnLang = {
            en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            es: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            zh: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            de: ['Sonntag', 'Montag', 'Dienstag	', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            it: ['domenica', 'luned\u00ec', 'marted\u00ec', 'mercoled\u00ec', 'gioved\u00ec', 'venerd\u00ec', 'sabato']
        };
        return dayHashOnLang[langId][dayIndex];
    }
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInShortLocal(lngIID, day) {
        /** @type {?} */
        const lagnHash = {
            es: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            fr: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
            it: ['d', 'l', 'm', 'm', 'g', 'v', 's']
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvdXRpbC9kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUVFLGVBQVUsR0FBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUztZQUM5QyxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVqRCxXQUFNLEdBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsRCxnQkFBVyxHQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO1lBQ3RFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFcEUsZUFBVSxHQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLO1lBQ3BELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkMsZUFBVSxHQUFRO1lBQ2hCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDMUQsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFB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LENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGOzs7SUE5UkMscUNBQ2lEOztJQUVqRCxpQ0FBa0Q7O0lBRWxELHNDQUNvRTs7SUFFcEUscUNBQ3VDOztJQUV2QyxxQ0FHb0UiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRm5EYXRlRm9ybWF0dGVyIHtcclxuXHJcbiAgd2Vla0Z1bGxFbjogYW55ID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLFxyXG4gICAgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuXHJcbiAgd2Vla0pwOiBhbnkgPSBbJ+aXpScsICfmnIgnLCAn54GrJywgJ+awtCcsICfmnKgnLCAn6YeRJywgJ+WcnyddO1xyXG5cclxuICBtb250aEZ1bGxFbjogYW55ID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ3JpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuXHJcbiAgbW9udGhPbGRKcDogYW55ID0gWyfnnabmnIgnLCAn5aaC5pyIJywgJ+W8peeUnycsICflja/mnIgnLCAn55qQ5pyIJywgJ+awtOeEoeaciCcsXHJcbiAgICAn5paH5pyIJywgJ+iRieaciCcsICfplbfmnIgnLCAn56We54Sh5pyIJywgJ+mcnOaciCcsICfluKvotbAnXTtcclxuXHJcbiAgZGF0ZVN1ZmZpeDogYW55ID0gW1xyXG4gICAgJ3N0JywgJ25kJywgJ3JkJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJywgJ3RoJyxcclxuICAgICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsICd0aCcsXHJcbiAgICAnc3QnLCAnbmQnLCAncmQnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAndGgnLCAnc3QnXTtcclxuXHJcbiAgZm9ybWF0KGQ/OiBEYXRlLCBwYXR0ZXJuPzogYW55LCBsYW5nSWQ/OiBhbnkpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXHJcbiAgICBpZiAobGFuZ0lkID09ICd1bmRlZmluZWQnIHx8IGxhbmdJZCA9PSBudWxsIHx8IGxhbmdJZC50cmltKCkgPT0gJycpIHtcclxuICAgICAgbGFuZ0lkID0gJ05vTGFuZyc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRZZWFyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgZE1vbnRoID0gZC5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZERhdGUgPSBkLmdldERhdGUoKTtcclxuICAgIGNvbnN0IGREYXkgPSBkLmdldERheSgpO1xyXG4gICAgY29uc3QgZEhvdXJzID0gZC5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgZE1pbnV0ZXMgPSBkLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IGRTZWNvbmRzID0gZC5nZXRTZWNvbmRzKCk7XHJcbiAgICBsZXQgcmVzID0gJyc7XHJcbiAgICBpZiAocGF0dGVybiA9PT0gJ1JJQicpIHtcclxuICAgICAgcmVzID0gdGhpcy5mcm9tMjR0bzEyKGRIb3VycykgKyAoJzonICsgdGhpcy5wcmVaZXJvKGRNaW51dGVzKSkgKyB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm4gPT09ICdSSUJfRFQnKSB7XHJcbiAgICAgIHJlcyA9IHRoaXMucHJlWmVybyhkTW9udGggKyAxKSArICcvJyArIHRoaXMucHJlWmVybyhkRGF0ZSkgKyAnLycgKyBkWWVhciArICcgJyArIHRoaXMuZnJvbTI0dG8xMihkSG91cnMpICtcclxuICAgICAgICAoJzonICsgdGhpcy5wcmVaZXJvKGRNaW51dGVzKSkgKyB0aGlzLmFwKGRIb3Vycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBwYXR0ZXJuLmNoYXJBdChpKTtcclxuICAgICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuIC0gMSkge1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcyArPSBwYXR0ZXJuLmNoYXJBdCgrK2kpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1knOlxyXG4gICAgICAgICAgICByZXMgKz0gZFllYXI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgIHJlcyArPSBkWWVhci50b1N0cmluZygpLnN1YnN0cigyLCAyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkTW9udGggKyAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgcmVzICs9IGRNb250aCArIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLnByZVplcm8oZERhdGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2onOlxyXG4gICAgICAgICAgICByZXMgKz0gZERhdGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICAgIHJlcyArPSBkRGF5O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ04nOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5pc29EYXkoZERheSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbCc6XHJcbiAgICAgICAgICAgIGlmIChsYW5nSWQgIT09ICdOb0xhbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxJbkxvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgaWYgKGxhbmdJZCAhPT0gJ05vTGFuZycpIHtcclxuICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXREYXlJbkxvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgICAgIGlmIChsYW5nSWQgIT09ICdOb0xhbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0RGF5SW5TaG9ydExvY2FsKGxhbmdJZCwgZERheSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHRoaXMud2Vla0Z1bGxFbltkRGF5XS5zdWJzdHIoMCwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnSic6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLndlZWtKcFtkRGF5XTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdGJzpcclxuICAgICAgICAgICAgaWYgKGxhbmdJZCAhPT0gJ05vTGFuZycpIHtcclxuICAgICAgICAgICAgICByZXMgKz0gdGhpcy5nZXRNb250aEluTG9jYWwobGFuZ0lkLCBkTW9udGgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLm1vbnRoRnVsbEVuW2RNb250aF07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnUic6XHJcbiAgICAgICAgICAgIGlmIChsYW5nSWQgIT09ICdOb0xhbmcnKSB7XHJcbiAgICAgICAgICAgICAgcmVzICs9IHRoaXMuZ2V0TW9udGhBYmJySW5Mb2NhbChsYW5nSWQsIGRNb250aCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzICs9IHRoaXMubW9udGhGdWxsRW5bZE1vbnRoXS5zdWJzdHIoMCwgMyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnTyc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLm1vbnRoT2xkSnBbZE1vbnRoXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMuYW1wbShkSG91cnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1AnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5hcChkSG91cnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0EnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5hbXBtKGRIb3VycykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkSG91cnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKHRoaXMuZnJvbTI0dG8xMihkSG91cnMpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdnJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMuZnJvbTI0dG8xMihkSG91cnMpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICAgICAgICByZXMgKz0gZEhvdXJzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5wcmVaZXJvKGRNaW51dGVzKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMucHJlWmVybyhkU2Vjb25kcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzLmxhc3REYXlPZk1vbnRoKGQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgICAgICByZXMgKz0gdGhpcy5pc0xlYXBZZWFyKGRZZWFyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd6JzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMuZGF0ZUNvdW50KGRZZWFyLCBkTW9udGgsIGREYXRlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdTJzpcclxuICAgICAgICAgICAgcmVzICs9IHRoaXMuZGF0ZVN1ZmZpeFtkRGF0ZSAtIDFdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcyArPSBjO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBwcmVaZXJvKHZhbHVlOiBhbnkpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgcmV0dXJuIChwYXJzZUludCh2YWx1ZSkgPCAxMCkgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnJvbTI0dG8xMihob3VyczogYW55KSB7XHJcbiAgICByZXR1cm4gKGhvdXJzID4gMTIpID8gaG91cnMgLSAxMiA6IChob3VycyA9PT0gMCA/IDEyIDogaG91cnMpO1xyXG4gIH1cclxuXHJcbiAgYW1wbShob3VyczogYW55KSB7XHJcbiAgICByZXR1cm4gKGhvdXJzIDwgMTIpID8gJ2FtJyA6ICdwbSc7XHJcbiAgfVxyXG5cclxuICBhcChob3VyczogYW55KSB7XHJcbiAgICByZXR1cm4gKGhvdXJzIDwgMTIpID8gJ2EnIDogJ3AnO1xyXG4gIH1cclxuXHJcbiAgaXNvRGF5KGRheTogYW55KSB7XHJcbiAgICByZXR1cm4gKGRheSA9PT0gMCkgPyAnNycgOiBkYXk7XHJcbiAgfVxyXG5cclxuICBsYXN0RGF5T2ZNb250aChkYXRlT2JqOiBhbnkpIHtcclxuICAgIGNvbnN0IHRtcCA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgZGF0ZU9iai5nZXRNb250aCgpICsgMSwgMSk7XHJcbiAgICB0bXAuc2V0VGltZSh0bXAuZ2V0VGltZSgpIC0gMSk7XHJcbiAgICByZXR1cm4gdG1wLmdldERhdGUoKTtcclxuICB9XHJcblxyXG4gIGlzTGVhcFllYXIoeWVhcjogYW55KSB7XHJcbiAgICBjb25zdCB0bXAgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIHRtcC5zZXRNb250aChpKTtcclxuICAgICAgc3VtICs9IHRoaXMubGFzdERheU9mTW9udGgodG1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoc3VtID09PSAzNjUpID8gJzAnIDogJzEnO1xyXG4gIH1cclxuXHJcbiAgZGF0ZUNvdW50KHllYXI6IGFueSwgbW9udGg6IGFueSwgZGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCB0bXAgPSBuZXcgRGF0ZSh5ZWFyLCAwLCAxKTtcclxuICAgIGxldCBzdW0gPSAtMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9udGg7IGkrKykge1xyXG4gICAgICB0bXAuc2V0TW9udGgoaSk7XHJcbiAgICAgIHN1bSArPSB0aGlzLmxhc3REYXlPZk1vbnRoKHRtcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtICsgZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoQWJickluTG9jYWwobG5nSUlEOiBhbnksIG1vbnRoOiBhbnkpIHtcclxuICAgIGNvbnN0IGxhZ25IYXNoOiBhbnkgPSB7XHJcbiAgICAgIGVzOiBbJ2VuZScsICdmZWInLCAnbWFyJywgJ2FicicsICdtYXknLCAnanVuJyxcclxuICAgICAgICAnanVsJywgJ2FnbycsICdzZXAnLCAnb2N0JywgJ25vdicsICdkaWMnXSxcclxuICAgICAgZW46IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLFxyXG4gICAgICAgICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxyXG4gICAgICBmcjogWycmIzEwNjsmIzk3OyYjMTEwOyYjMTE4OycsICcmIzEwMjsmIzEwMTsmIzExODsmIzExNDsnLCAnJiMxMDk7JiM5NzsmIzExNDsmIzExNTsnLCAnJiM5NzsmIzExODsmIzExNDsmIzEwNTsmIzEwODsnLFxyXG4gICAgICAgICcmIzEwOTsmIzk3OyYjMTA1OycsICcgJiMxMDY7JiMxMTc7JiMxMDU7JiMxMTA7JyxcclxuICAgICAgICAnJiMxMDY7JiMxMTc7JiMxMDU7JiMxMDg7JywgJyYjOTc7JiMxMTE7JiMxMTc7JiMxMTY7JywgJyYjMTE1OyYjMTAxOyYjMTEyOyYjMTE2OycsICcmIzExMTsmIzk5OyYjMTE2OycsXHJcbiAgICAgICAgJyYjMTEwOyYjMTExOyYjMTE4OycsICcmIzEwMDsmIzEwMTsmIzk5OyddLFxyXG4gICAgICB6aDogWycmIzE5OTY4OyYjMjYzNzY7JywgJyYjMjAxMDg7JiMyNjM3NjsnLCAnICYjMTk5Nzc7JiMyNjM3NjsnLCAnJiMyMjIzNTsmIzI2Mzc2OycsICcmIzIwMTE2OyYjMjYzNzY7JyxcclxuICAgICAgICAnJiMyMDg0NTsmIzI2Mzc2OycsXHJcbiAgICAgICAgJyYjMTk5NzE7JiMyNjM3NjsnLCAnJiMxOTk3MTsmIzI2Mzc2OycsICcmIzIwMDYxOyYjMjYzNzY7JywgJyAmIzIxMzEzOyYjMjYzNzY7JywgJyAmIzIxMzEzOyYjMTk5Njg7JiMyNjM3NjsnLFxyXG4gICAgICAgICcgJiMyMTMxMzsmIzIwMTA4OyYjMjYzNzY7J10sXHJcbiAgICAgIGRlOiBbJ0phbicsICdGZWIuJywgJ03DpHJ6JywgJ0Fwci4nLCAnTWFpJywgJ0p1bmknLFxyXG4gICAgICAgICdKdWxpJywgJ0F1Zy4nLCAnU2VwdC4nLCAnT2t0LicsICdOb3YuJywgJ0RleiddLFxyXG4gICAgICBpdDogWydnZW5uJywgJ2ZlYmJyJywgJ21hcicsICdhcHInLCAnbWFnZycsICdnaXVnbm8nLFxyXG4gICAgICAgICdsdWdsaW8nLCAnYWcnLCAnc2V0dCcsICdvdHQnLCAnbm92JywgJ2RpYyddXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGxhZ25IYXNoW2xuZ0lJRF1bbW9udGhdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhJbkxvY2FsKGxuZ0lJRDogYW55LCBtb250aDogYW55KSB7XHJcbiAgICBjb25zdCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICBlczogWydlbmVybycsICdmZWJyZXJvJywgJ21hcnpvJywgJ2FicmlsJywgJ21heW8nLCAnanVuaW8nLFxyXG4gICAgICAgICdqdWxpbycsICdhZ29zdG8nLCAnc2VwdGllbWJyZScsICdvY3R1YnJlJywgJ25vdmllbWJyZScsICdkaWNpZW1icmUnXSxcclxuICAgICAgZW46IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXHJcbiAgICAgIGZyOiBbJ2phbnZpZXInLCAnZsOpdnJpZXInLCAnbWFycycsICdhdnJpbCcsICdtYWknLCAnanVpbicsXHJcbiAgICAgICAgJ2p1aWxsZXQnLCAnYW/Du3QnLCAnc2VwdGVtYnJlJywgJ29jdG9icmUnLCAnbm92ZW1icmUnLCAnZMOpY2VtYnJlJ10sXHJcbiAgICAgIHpoOiBbJyYjMTk5Njg7JiMyNjM3NjsnLCAnJiMyMDEwODsmIzI2Mzc2OycsICcgJiMxOTk3NzsmIzI2Mzc2OycsICcmIzIyMjM1OyYjMjYzNzY7JywgJyYjMjAxMTY7JiMyNjM3NjsnLFxyXG4gICAgICAgICcmIzIwODQ1OyYjMjYzNzY7JyxcclxuICAgICAgICAnJiMxOTk3MTsmIzI2Mzc2OycsICcmIzE5OTcxOyYjMjYzNzY7JywgJyYjMjAwNjE7JiMyNjM3NjsnLCAnICYjMjEzMTM7JiMyNjM3NjsnLCAnICYjMjEzMTM7JiMxOTk2ODsmIzI2Mzc2OycsXHJcbiAgICAgICAgJyAmIzIxMzEzOyYjMjAxMDg7JiMyNjM3NjsnXSxcclxuICAgICAgZGU6IFsnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTWFyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsXHJcbiAgICAgICAgJ0p1bGknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPa3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ10sXHJcbiAgICAgIGl0OiBbJ2dlbm5haW8nLCAnZmViYnJhaW8nLCAnbWFyem8nLCAnYXByaWxlJywgJ21hZ2dpbycsICdnaXVnbm8nLFxyXG4gICAgICAgICdsdWdsaW8nLCAnYWdvc3RvJywgJ3NldHRlbWJyZScsICdvdHRvYnJlJywgJ25vdmVtYnJlJywgJ2RpY2VtYnJlJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVttb250aF07XHJcbiAgfVxyXG5cclxuICBnZXREYXlJbkxvY2FsKGxuZ0lJRDogYW55LCBkYXk6IGFueSkge1xyXG4gICAgY29uc3QgbGFnbkhhc2g6IGFueSA9IHtcclxuICAgICAgZXM6IFsnRG9tJywgJ0x1JywgJ01hJywgJ014JywgJ0p1JywgJ1ZpJywgJ1NhYiddLFxyXG4gICAgICBlbjogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuICAgICAgZnI6IFsnRGltJywgJ0x1bicsICdNYXInLCAnTWVyJywgJ0pldScsICdWZW4nLCAnU2FtJ10sXHJcbiAgICAgIHpoOiBbJyYjMjE2MDg7JiMyNjA4NTsnLCAnJiMyMTYwODsmIzE5OTY4OycsICcmIzIxNjA4OyYjMjAxMDg7JywgJyYjMjE2MDg7JiMxOTk3NzsnLCAnJiMyMTYwODsmIzIyMjM1OycsXHJcbiAgICAgICAgJyYjMjE2MDg7JiMyMDExNjsnLCAnJiMyMTYwODsmIzIwODQ1OyddLFxyXG4gICAgICBkZTogWydTbycsICdNbycsICdEaScsICdNaScsICdEbycsICdGcicsICdTYSddLFxyXG4gICAgICBpdDogWydkb20nLCAnbHVuJywgJ21hcicsICdtZXInLCAnZ2lvJywgJ3ZlbicsICdzYWInXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBsYWduSGFzaFtsbmdJSURdW2RheV07XHJcbiAgfVxyXG5cclxuICB3ZWVrRnVsbEluTG9jYWwobGFuZ0lkOiBhbnksIGRheUluZGV4OiBhbnkpIHtcclxuICAgIGNvbnN0IGRheUhhc2hPbkxhbmc6IGFueSA9IHtcclxuICAgICAgZW46IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcclxuICAgICAgZXM6IFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXHJcbiAgICAgIGZyOiBbJ2RpbWFuY2hlJywgJ2x1bmRpJywgJ21hcmRpJywgJ21lcmNyZWRpJywgJ2pldWRpJywgJ3ZlbmRyZWRpJywgJ3NhbWVkaSddLFxyXG4gICAgICB6aDogWyfmmJ/mnJ/lpKknLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcclxuICAgICAgZGU6IFsnU29ubnRhZycsICdNb250YWcnLCAnRGllbnN0YWdcdCcsICdNaXR0d29jaCcsICdEb25uZXJzdGFnJywgJ0ZyZWl0YWcnLCAnU2Ftc3RhZyddLFxyXG4gICAgICBpdDogWydkb21lbmljYScsICdsdW5lZFxcdTAwZWMnLCAnbWFydGVkXFx1MDBlYycsICdtZXJjb2xlZFxcdTAwZWMnLCAnZ2lvdmVkXFx1MDBlYycsICd2ZW5lcmRcXHUwMGVjJywgJ3NhYmF0byddXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRheUhhc2hPbkxhbmdbbGFuZ0lkXVtkYXlJbmRleF07XHJcbiAgfVxyXG5cclxuICBnZXREYXlJblNob3J0TG9jYWwobG5nSUlEOiBhbnksIGRheTogYW55KSB7XHJcbiAgICBjb25zdCBsYWduSGFzaDogYW55ID0ge1xyXG4gICAgICBlczogWydEJywgJ0wnLCAnTScsICdNJywgJ0onLCAnVicsICdTJ10sXHJcbiAgICAgIGVuOiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcclxuICAgICAgZnI6IFsnRCcsICdMJywgJ00nLCAnTScsICdKJywgJ1YnLCAnUyddLFxyXG4gICAgICB6aDogWycmIzIxNjA4OyYjMjYwODU7JywgJyYjMjE2MDg7JiMxOTk2ODsnLCAnJiMyMTYwODsmIzIwMTA4OycsICcmIzIxNjA4OyYjMTk5Nzc7JywgJyYjMjE2MDg7JiMyMjIzNTsnLFxyXG4gICAgICAgICcmIzIxNjA4OyYjMjAxMTY7JywgJyYjMjE2MDg7JiMyMDg0NTsnXSxcclxuICAgICAgZGU6IFsnUycsICdNJywgJ0QnLCAnTScsICdEJywgJ0YnLCAnUyddLFxyXG4gICAgICBpdDogWydkJywgJ2wnLCAnbScsICdtJywgJ2cnLCAndicsICdzJ11cclxuICAgIH07XHJcbiAgICByZXR1cm4gbGFnbkhhc2hbbG5nSUlEXVtkYXldO1xyXG4gIH1cclxufVxyXG4iXX0=