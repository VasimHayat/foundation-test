/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnBrowserDetail = /** @class */ (function () {
    function FnBrowserDetail() {
    }
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.captureJsVersion = /**
     * @return {?}
     */
    function () {
        //     function get_js_version() {
        /** @type {?} */
        var jsv = {
            versions: [
                "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0"
            ],
            version: ""
        };
        /** @type {?} */
        var d = document;
        // for (let i = 0; i <jsv.versions.length; i++) {
        //     var g = d.createElement('script'),
        //         s = d.getElementsByTagName('script')[0];
        //     g.setAttribute("language", "JavaScript" +jsv.versions[i]);
        //     g.text = "this.jsv.version='" +jsv.versions[i] + "';";
        //     s.parentNode.insertBefore(g, s);
        // }
        this.jsVersion = jsv.version;
    };
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.init = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var unknown = '-';
        // system
        /** @type {?} */
        var os = unknown;
        /** @type {?} */
        var osVersion = unknown;
        /** @type {?} */
        var screenSize = '';
        // browser
        /** @type {?} */
        var nVer = navigator.appVersion;
        /** @type {?} */
        var nAgt = navigator.userAgent;
        /** @type {?} */
        var browser = navigator.appName;
        /** @type {?} */
        var version = '' + parseFloat(navigator.appVersion);
        /** @type {?} */
        var majorVersion = parseInt(navigator.appVersion, 10);
        /** @type {?} */
        var nameOffset;
        /** @type {?} */
        var verOffset;
        /** @type {?} */
        var ix;
        // mobile version
        /** @type {?} */
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        // cookie
        /** @type {?} */
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;
        {
            // screen
            if (screen.width) {
                /** @type {?} */
                var width = (screen.width) ? screen.width : '';
                /** @type {?} */
                var height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }
            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Opera Next
            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1)
                version = version.substring(0, ix);
            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }
            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }
            /** @type {?} */
            var clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                /** @type {?} */
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }
            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
            this.captureJsVersion();
        }
        window['systemObject'] = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled
        };
    };
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.browserDetail = /**
     * @return {?}
     */
    function () {
        if (window['systemObject'] == undefined || window['systemObject'] == null) {
            this.init();
            return window['systemObject'];
        }
        else {
            return window['systemObject'];
        }
    };
    return FnBrowserDetail;
}());
export { FnBrowserDetail };
if (false) {
    /** @type {?} */
    FnBrowserDetail.prototype.jsVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnJvd3Nlci5kZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZm4tYnJvd3Nlci5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7SUF5TUEsQ0FBQzs7OztJQXJNUSwwQ0FBZ0I7OztJQUF2Qjs7O1lBRU0sR0FBRyxHQUFHO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7YUFDckU7WUFDRCxPQUFPLEVBQUUsRUFBRTtTQUNaOztZQUNHLENBQUMsR0FBRyxRQUFRO1FBQ2hCLGlEQUFpRDtRQUNqRCx5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELGlFQUFpRTtRQUNqRSw2REFBNkQ7UUFDN0QsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVNLDhCQUFJOzs7SUFBWDs7WUFFTSxPQUFPLEdBQUcsR0FBRzs7O1lBRWIsRUFBRSxHQUFHLE9BQU87O1lBQ1osU0FBUyxHQUFRLE9BQU87O1lBQ3hCLFVBQVUsR0FBRyxFQUFFOzs7WUFFZixJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVU7O1lBQzNCLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUzs7WUFDMUIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPOztZQUMzQixPQUFPLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDOztZQUMvQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDOztZQUNqRCxVQUFVOztZQUFFLFNBQVM7O1lBQUUsRUFBRTs7O1lBRXpCLE1BQU0sR0FBRywyQ0FBMkMs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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztZQUN2QixNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsT0FBTztZQUN2QixtQkFBbUIsRUFBRSxZQUFZO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsYUFBYTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHVDQUFhOzs7SUFBcEI7UUFDRSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBek1ELElBeU1DOzs7O0lBdk1DLG9DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGbkJyb3dzZXJEZXRhaWwge1xyXG5cclxuICBwdWJsaWMganNWZXJzaW9uO1xyXG5cclxuICBwdWJsaWMgY2FwdHVyZUpzVmVyc2lvbigpIHtcclxuICAgIC8vICAgICBmdW5jdGlvbiBnZXRfanNfdmVyc2lvbigpIHtcclxuICAgIGxldCBqc3YgPSB7XHJcbiAgICAgIHZlcnNpb25zOiBbXHJcbiAgICAgICAgXCIxLjFcIiwgXCIxLjJcIiwgXCIxLjNcIiwgXCIxLjRcIiwgXCIxLjVcIiwgXCIxLjZcIiwgXCIxLjdcIiwgXCIxLjhcIiwgXCIxLjlcIiwgXCIyLjBcIlxyXG4gICAgICBdLFxyXG4gICAgICB2ZXJzaW9uOiBcIlwiXHJcbiAgICB9O1xyXG4gICAgdmFyIGQgPSBkb2N1bWVudDtcclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDxqc3YudmVyc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICB2YXIgZyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXHJcbiAgICAvLyAgICAgICAgIHMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgIC8vICAgICBnLnNldEF0dHJpYnV0ZShcImxhbmd1YWdlXCIsIFwiSmF2YVNjcmlwdFwiICtqc3YudmVyc2lvbnNbaV0pO1xyXG4gICAgLy8gICAgIGcudGV4dCA9IFwidGhpcy5qc3YudmVyc2lvbj0nXCIgK2pzdi52ZXJzaW9uc1tpXSArIFwiJztcIjtcclxuICAgIC8vICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGcsIHMpO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5qc1ZlcnNpb24gPSBqc3YudmVyc2lvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG5cclxuICAgIGxldCB1bmtub3duID0gJy0nO1xyXG4gICAgLy8gc3lzdGVtXHJcbiAgICBsZXQgb3MgPSB1bmtub3duO1xyXG4gICAgbGV0IG9zVmVyc2lvbjogYW55ID0gdW5rbm93bjtcclxuICAgIGxldCBzY3JlZW5TaXplID0gJyc7XHJcbiAgICAvLyBicm93c2VyXHJcbiAgICBsZXQgblZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xyXG4gICAgbGV0IG5BZ3QgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgbGV0IGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgIGxldCB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgIGxldCBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgbGV0IG5hbWVPZmZzZXQsIHZlck9mZnNldCwgaXg7XHJcbiAgICAvLyBtb2JpbGUgdmVyc2lvblxyXG4gICAgbGV0IG1vYmlsZSA9IC9Nb2JpbGV8bWluaXxGZW5uZWN8QW5kcm9pZHxpUChhZHxvZHxob25lKS8udGVzdChuVmVyKTtcclxuXHJcbiAgICAvLyBjb29raWVcclxuICAgIGxldCBjb29raWVFbmFibGVkID0gKG5hdmlnYXRvci5jb29raWVFbmFibGVkKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICB7XHJcblxyXG4gICAgICAvLyBzY3JlZW5cclxuXHJcbiAgICAgIGlmIChzY3JlZW4ud2lkdGgpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2NyZWVuLndpZHRoKSA/IHNjcmVlbi53aWR0aCA6ICcnO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAoc2NyZWVuLmhlaWdodCkgPyBzY3JlZW4uaGVpZ2h0IDogJyc7XHJcbiAgICAgICAgc2NyZWVuU2l6ZSArPSAnJyArIHdpZHRoICsgXCIgeCBcIiArIGhlaWdodDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIE9wZXJhXHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdPcGVyYScpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnT3BlcmEnO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA2KTtcclxuICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xyXG4gICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBPcGVyYSBOZXh0XHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdPUFInKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ09wZXJhJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gTVNJRVxyXG4gICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdNU0lFJykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBDaHJvbWVcclxuICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ2hyb21lJykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdDaHJvbWUnO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBTYWZhcmlcclxuICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignU2FmYXJpJykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdTYWZhcmknO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xyXG4gICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBGaXJlZm94XHJcbiAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0ZpcmVmb3gnKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ0ZpcmVmb3gnO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBNU0lFIDExK1xyXG4gICAgICBlbHNlIGlmIChuQWd0LmluZGV4T2YoJ1RyaWRlbnQvJykgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKG5BZ3QuaW5kZXhPZigncnY6JykgKyAzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBPdGhlciBicm93c2Vyc1xyXG4gICAgICBlbHNlIGlmICgobmFtZU9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJyAnKSArIDEpIDwgKHZlck9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJy8nKSkpIHtcclxuICAgICAgICBicm93c2VyID0gbkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgMSk7XHJcbiAgICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gdHJpbSB0aGUgdmVyc2lvbiBzdHJpbmdcclxuICAgICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignOycpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignICcpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignKScpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuXHJcbiAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KCcnICsgdmVyc2lvbiwgMTApO1xyXG4gICAgICBpZiAoaXNOYU4obWFqb3JWZXJzaW9uKSkge1xyXG4gICAgICAgIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5jb29raWVFbmFibGVkID09ICd1bmRlZmluZWQnICYmICFjb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ3Rlc3Rjb29raWUnO1xyXG4gICAgICAgIGNvb2tpZUVuYWJsZWQgPSAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoJ3Rlc3Rjb29raWUnKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBsZXQgY2xpZW50U3RyaW5ncyA9IFtcclxuICAgICAgICB7czogJ1dpbmRvd3MgMTAnLCByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApL30sXHJcbiAgICAgICAge3M6ICdXaW5kb3dzIDguMScsIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpL30sXHJcbiAgICAgICAge3M6ICdXaW5kb3dzIDgnLCByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvfSxcclxuICAgICAgICB7czogJ1dpbmRvd3MgNycsIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS99LFxyXG4gICAgICAgIHtzOiAnV2luZG93cyBWaXN0YScsIHI6IC9XaW5kb3dzIE5UIDYuMC99LFxyXG4gICAgICAgIHtzOiAnV2luZG93cyBTZXJ2ZXIgMjAwMycsIHI6IC9XaW5kb3dzIE5UIDUuMi99LFxyXG4gICAgICAgIHtzOiAnV2luZG93cyBYUCcsIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvfSxcclxuICAgICAgICB7czogJ1dpbmRvd3MgMjAwMCcsIHI6IC8oV2luZG93cyBOVCA1LjB8V2luZG93cyAyMDAwKS99LFxyXG4gICAgICAgIHtzOiAnV2luZG93cyBNRScsIHI6IC8oV2luIDl4IDQuOTB8V2luZG93cyBNRSkvfSxcclxuICAgICAgICB7czogJ1dpbmRvd3MgOTgnLCByOiAvKFdpbmRvd3MgOTh8V2luOTgpL30sXHJcbiAgICAgICAge3M6ICdXaW5kb3dzIDk1JywgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpL30sXHJcbiAgICAgICAge3M6ICdXaW5kb3dzIE5UIDQuMCcsIHI6IC8oV2luZG93cyBOVCA0LjB8V2luTlQ0LjB8V2luTlR8V2luZG93cyBOVCkvfSxcclxuICAgICAgICB7czogJ1dpbmRvd3MgQ0UnLCByOiAvV2luZG93cyBDRS99LFxyXG4gICAgICAgIHtzOiAnV2luZG93cyAzLjExJywgcjogL1dpbjE2L30sXHJcbiAgICAgICAge3M6ICdBbmRyb2lkJywgcjogL0FuZHJvaWQvfSxcclxuICAgICAgICB7czogJ09wZW4gQlNEJywgcjogL09wZW5CU0QvfSxcclxuICAgICAgICB7czogJ1N1biBPUycsIHI6IC9TdW5PUy99LFxyXG4gICAgICAgIHtzOiAnTGludXgnLCByOiAvKExpbnV4fFgxMSkvfSxcclxuICAgICAgICB7czogJ2lPUycsIHI6IC8oaVBob25lfGlQYWR8aVBvZCkvfSxcclxuICAgICAgICB7czogJ01hYyBPUyBYJywgcjogL01hYyBPUyBYL30sXHJcbiAgICAgICAge3M6ICdNYWMgT1MnLCByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpL30sXHJcbiAgICAgICAge3M6ICdRTlgnLCByOiAvUU5YL30sXHJcbiAgICAgICAge3M6ICdVTklYJywgcjogL1VOSVgvfSxcclxuICAgICAgICB7czogJ0JlT1MnLCByOiAvQmVPUy99LFxyXG4gICAgICAgIHtzOiAnT1MvMicsIHI6IC9PU1xcLzIvfSxcclxuICAgICAgICB7czogJ1NlYXJjaCBCb3QnLCByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvfVxyXG4gICAgICBdO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBjbGllbnRTdHJpbmdzKSB7XHJcbiAgICAgICAgbGV0IGNzID0gY2xpZW50U3RyaW5nc1tpZF07XHJcbiAgICAgICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xyXG4gICAgICAgICAgb3MgPSBjcy5zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9XaW5kb3dzICguKikvLmV4ZWMob3MpWzFdO1xyXG4gICAgICAgIG9zID0gJ1dpbmRvd3MnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKG9zKSB7XHJcbiAgICAgICAgY2FzZSAnTWFjIE9TIFgnOlxyXG4gICAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnQW5kcm9pZCc6XHJcbiAgICAgICAgICBvc1ZlcnNpb24gPSAvQW5kcm9pZCAoW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdpT1MnOlxyXG4gICAgICAgICAgb3NWZXJzaW9uID0gL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vLmV4ZWMoblZlcik7XHJcbiAgICAgICAgICBvc1ZlcnNpb24gPSBvc1ZlcnNpb25bMV0gKyAnLicgKyBvc1ZlcnNpb25bMl0gKyAnLicgKyAob3NWZXJzaW9uWzNdIHwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYXB0dXJlSnNWZXJzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93WydzeXN0ZW1PYmplY3QnXSA9IHtcclxuICAgICAgc2NyZWVuOiBzY3JlZW5TaXplLFxyXG4gICAgICBicm93c2VyOiBicm93c2VyLFxyXG4gICAgICBicm93c2VyVmVyc2lvbjogdmVyc2lvbixcclxuICAgICAgYnJvd3Nlck1ham9yVmVyc2lvbjogbWFqb3JWZXJzaW9uLFxyXG4gICAgICBtb2JpbGU6IG1vYmlsZSxcclxuICAgICAgb3M6IG9zLFxyXG4gICAgICBvc1ZlcnNpb246IG9zVmVyc2lvbixcclxuICAgICAgY29va2llczogY29va2llRW5hYmxlZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBicm93c2VyRGV0YWlsKCkge1xyXG4gICAgaWYgKHdpbmRvd1snc3lzdGVtT2JqZWN0J10gPT0gdW5kZWZpbmVkIHx8IHdpbmRvd1snc3lzdGVtT2JqZWN0J10gPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgcmV0dXJuIHdpbmRvd1snc3lzdGVtT2JqZWN0J107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gd2luZG93WydzeXN0ZW1PYmplY3QnXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19