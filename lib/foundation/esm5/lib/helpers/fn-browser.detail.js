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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnJvd3Nlci5kZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZm4tYnJvd3Nlci5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBQUE7SUEyTUEsQ0FBQzs7OztJQXZNUSwwQ0FBZ0I7OztJQUF2Qjs7O1lBRU0sR0FBRyxHQUFHO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7YUFDckU7WUFDRCxPQUFPLEVBQUUsRUFBRTtTQUNaOztZQUNHLENBQUMsR0FBRyxRQUFRO1FBQ2hCLGlEQUFpRDtRQUNqRCx5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELGlFQUFpRTtRQUNqRSw2REFBNkQ7UUFDN0QsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLDhCQUFJOzs7SUFBWDs7WUFFTSxPQUFPLEdBQUcsR0FBRzs7O1lBRWIsRUFBRSxHQUFHLE9BQU87O1lBQ1osU0FBUyxHQUFRLE9BQU87O1lBQ3hCLFVBQVUsR0FBRyxFQUFFOzs7WUFFZixJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVU7O1lBQzNCLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUzs7WUFDMUIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPOztZQUMzQixPQUFPLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDOztZQUMvQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDOztZQUNqRCxVQUFVOztZQUFFLFNBQVM7O1lBQUUsRUFBRTs7O1lBRXpCLE1BQU0sR0FBRywyQ0FBMkMs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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRztZQUN2QixNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsT0FBTztZQUN2QixtQkFBbUIsRUFBRSxZQUFZO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsYUFBYTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHVDQUFhOzs7SUFBcEI7UUFDRSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBM01ELElBMk1DOzs7O0lBek1DLG9DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgRm5Ccm93c2VyRGV0YWlsIHtcclxuXHJcbiAgcHVibGljIGpzVmVyc2lvbjtcclxuXHJcbiAgcHVibGljIGNhcHR1cmVKc1ZlcnNpb24oKSB7XHJcbiAgICAvLyAgICAgZnVuY3Rpb24gZ2V0X2pzX3ZlcnNpb24oKSB7XHJcbiAgICBsZXQganN2ID0ge1xyXG4gICAgICB2ZXJzaW9uczogW1xyXG4gICAgICAgIFwiMS4xXCIsIFwiMS4yXCIsIFwiMS4zXCIsIFwiMS40XCIsIFwiMS41XCIsIFwiMS42XCIsIFwiMS43XCIsIFwiMS44XCIsIFwiMS45XCIsIFwiMi4wXCJcclxuICAgICAgXSxcclxuICAgICAgdmVyc2lvbjogXCJcIlxyXG4gICAgfTtcclxuICAgIHZhciBkID0gZG9jdW1lbnQ7XHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8anN2LnZlcnNpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgdmFyIGcgPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLFxyXG4gICAgLy8gICAgICAgICBzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICAvLyAgICAgZy5zZXRBdHRyaWJ1dGUoXCJsYW5ndWFnZVwiLCBcIkphdmFTY3JpcHRcIiAranN2LnZlcnNpb25zW2ldKTtcclxuICAgIC8vICAgICBnLnRleHQgPSBcInRoaXMuanN2LnZlcnNpb249J1wiICtqc3YudmVyc2lvbnNbaV0gKyBcIic7XCI7XHJcbiAgICAvLyAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShnLCBzKTtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuanNWZXJzaW9uID0ganN2LnZlcnNpb247XHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG5cclxuICAgIGxldCB1bmtub3duID0gJy0nO1xyXG4gICAgLy8gc3lzdGVtXHJcbiAgICBsZXQgb3MgPSB1bmtub3duO1xyXG4gICAgbGV0IG9zVmVyc2lvbjogYW55ID0gdW5rbm93bjtcclxuICAgIGxldCBzY3JlZW5TaXplID0gJyc7XHJcbiAgICAvLyBicm93c2VyXHJcbiAgICBsZXQgblZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xyXG4gICAgbGV0IG5BZ3QgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgbGV0IGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgIGxldCB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgIGxldCBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgbGV0IG5hbWVPZmZzZXQsIHZlck9mZnNldCwgaXg7XHJcbiAgICAvLyBtb2JpbGUgdmVyc2lvblxyXG4gICAgbGV0IG1vYmlsZSA9IC9Nb2JpbGV8bWluaXxGZW5uZWN8QW5kcm9pZHxpUChhZHxvZHxob25lKS8udGVzdChuVmVyKTtcclxuXHJcbiAgICAvLyBjb29raWVcclxuICAgIGxldCBjb29raWVFbmFibGVkID0gKG5hdmlnYXRvci5jb29raWVFbmFibGVkKSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICB7XHJcblxyXG4gICAgICAvLyBzY3JlZW5cclxuXHJcbiAgICAgIGlmIChzY3JlZW4ud2lkdGgpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2NyZWVuLndpZHRoKSA/IHNjcmVlbi53aWR0aCA6ICcnO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAoc2NyZWVuLmhlaWdodCkgPyBzY3JlZW4uaGVpZ2h0IDogJyc7XHJcbiAgICAgICAgc2NyZWVuU2l6ZSArPSAnJyArIHdpZHRoICsgXCIgeCBcIiArIGhlaWdodDtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAvLyBPcGVyYVxyXG4gICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT3BlcmEnKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ09wZXJhJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XHJcbiAgICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1ZlcnNpb24nKSkgIT0gLTEpIHtcclxuICAgICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gT3BlcmEgTmV4dFxyXG4gICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT1BSJykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdPcGVyYSc7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE1TSUVcclxuICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignTVNJRScpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQ2hyb21lXHJcbiAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0Nocm9tZScpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnQ2hyb21lJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gU2FmYXJpXHJcbiAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhZmFyaScpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnU2FmYXJpJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1ZlcnNpb24nKSkgIT0gLTEpIHtcclxuICAgICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gRmlyZWZveFxyXG4gICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdGaXJlZm94JykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdGaXJlZm94JztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gTVNJRSAxMStcclxuICAgICAgZWxzZSBpZiAobkFndC5pbmRleE9mKCdUcmlkZW50LycpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyhuQWd0LmluZGV4T2YoJ3J2OicpICsgMyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gT3RoZXIgYnJvd3NlcnNcclxuICAgICAgZWxzZSBpZiAoKG5hbWVPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcgJykgKyAxKSA8ICh2ZXJPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcvJykpKSB7XHJcbiAgICAgICAgYnJvd3NlciA9IG5BZ3Quc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlck9mZnNldCk7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDEpO1xyXG4gICAgICAgIGlmIChicm93c2VyLnRvTG93ZXJDYXNlKCkgPT0gYnJvd3Nlci50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRyaW0gdGhlIHZlcnNpb24gc3RyaW5nXHJcbiAgICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJzsnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyAnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyknKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcblxyXG4gICAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludCgnJyArIHZlcnNpb24sIDEwKTtcclxuICAgICAgaWYgKGlzTmFOKG1ham9yVmVyc2lvbikpIHtcclxuICAgICAgICB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgICAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgPT0gJ3VuZGVmaW5lZCcgJiYgIWNvb2tpZUVuYWJsZWQpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSAndGVzdGNvb2tpZSc7XHJcbiAgICAgICAgY29va2llRW5hYmxlZCA9IChkb2N1bWVudC5jb29raWUuaW5kZXhPZigndGVzdGNvb2tpZScpICE9IC0xKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGxldCBjbGllbnRTdHJpbmdzID0gW1xyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgMTAnLCByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgOC4xJywgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyA4JywgcjogLyhXaW5kb3dzIDh8V2luZG93cyBOVCA2LjIpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgNycsIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIFZpc3RhJywgcjogL1dpbmRvd3MgTlQgNi4wLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgU2VydmVyIDIwMDMnLCByOiAvV2luZG93cyBOVCA1LjIvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyBYUCcsIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyAyMDAwJywgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgTUUnLCByOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgOTgnLCByOiAvKFdpbmRvd3MgOTh8V2luOTgpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgOTUnLCByOiAvKFdpbmRvd3MgOTV8V2luOTV8V2luZG93c185NSkvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyBOVCA0LjAnLCByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgQ0UnLCByOiAvV2luZG93cyBDRS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDMuMTEnLCByOiAvV2luMTYvIH0sXHJcbiAgICAgICAgeyBzOiAnQW5kcm9pZCcsIHI6IC9BbmRyb2lkLyB9LFxyXG4gICAgICAgIHsgczogJ09wZW4gQlNEJywgcjogL09wZW5CU0QvIH0sXHJcbiAgICAgICAgeyBzOiAnU3VuIE9TJywgcjogL1N1bk9TLyB9LFxyXG4gICAgICAgIHsgczogJ0xpbnV4JywgcjogLyhMaW51eHxYMTEpLyB9LFxyXG4gICAgICAgIHsgczogJ2lPUycsIHI6IC8oaVBob25lfGlQYWR8aVBvZCkvIH0sXHJcbiAgICAgICAgeyBzOiAnTWFjIE9TIFgnLCByOiAvTWFjIE9TIFgvIH0sXHJcbiAgICAgICAgeyBzOiAnTWFjIE9TJywgcjogLyhNYWNQUEN8TWFjSW50ZWx8TWFjX1Bvd2VyUEN8TWFjaW50b3NoKS8gfSxcclxuICAgICAgICB7IHM6ICdRTlgnLCByOiAvUU5YLyB9LFxyXG4gICAgICAgIHsgczogJ1VOSVgnLCByOiAvVU5JWC8gfSxcclxuICAgICAgICB7IHM6ICdCZU9TJywgcjogL0JlT1MvIH0sXHJcbiAgICAgICAgeyBzOiAnT1MvMicsIHI6IC9PU1xcLzIvIH0sXHJcbiAgICAgICAgeyBzOiAnU2VhcmNoIEJvdCcsIHI6IC8obnVoa3xHb29nbGVib3R8WWFtbXlib3R8T3BlbmJvdHxTbHVycHxNU05Cb3R8QXNrIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS8gfVxyXG4gICAgICBdO1xyXG4gICAgICBmb3IgKGxldCBpZCBpbiBjbGllbnRTdHJpbmdzKSB7XHJcbiAgICAgICAgbGV0IGNzID0gY2xpZW50U3RyaW5nc1tpZF07XHJcbiAgICAgICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xyXG4gICAgICAgICAgb3MgPSBjcy5zO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIGlmICgvV2luZG93cy8udGVzdChvcykpIHtcclxuICAgICAgICBvc1ZlcnNpb24gPSAvV2luZG93cyAoLiopLy5leGVjKG9zKVsxXTtcclxuICAgICAgICBvcyA9ICdXaW5kb3dzJztcclxuICAgICAgfVxyXG5cclxuICAgICAgc3dpdGNoIChvcykge1xyXG4gICAgICAgIGNhc2UgJ01hYyBPUyBYJzpcclxuICAgICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ0FuZHJvaWQnOlxyXG4gICAgICAgICAgb3NWZXJzaW9uID0gL0FuZHJvaWQgKFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnaU9TJzpcclxuICAgICAgICAgIG9zVmVyc2lvbiA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5WZXIpO1xyXG4gICAgICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uWzFdICsgJy4nICsgb3NWZXJzaW9uWzJdICsgJy4nICsgKG9zVmVyc2lvblszXSB8IDApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2FwdHVyZUpzVmVyc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvd1snc3lzdGVtT2JqZWN0J10gPSB7XHJcbiAgICAgIHNjcmVlbjogc2NyZWVuU2l6ZSxcclxuICAgICAgYnJvd3NlcjogYnJvd3NlcixcclxuICAgICAgYnJvd3NlclZlcnNpb246IHZlcnNpb24sXHJcbiAgICAgIGJyb3dzZXJNYWpvclZlcnNpb246IG1ham9yVmVyc2lvbixcclxuICAgICAgbW9iaWxlOiBtb2JpbGUsXHJcbiAgICAgIG9zOiBvcyxcclxuICAgICAgb3NWZXJzaW9uOiBvc1ZlcnNpb24sXHJcbiAgICAgIGNvb2tpZXM6IGNvb2tpZUVuYWJsZWRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnJvd3NlckRldGFpbCgpIHtcclxuICAgIGlmICh3aW5kb3dbJ3N5c3RlbU9iamVjdCddID09IHVuZGVmaW5lZCB8fCB3aW5kb3dbJ3N5c3RlbU9iamVjdCddID09IG51bGwpIHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIHJldHVybiB3aW5kb3dbJ3N5c3RlbU9iamVjdCddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHdpbmRvd1snc3lzdGVtT2JqZWN0J107XHJcbiAgICB9XHJcbiAgfVxyXG59Il19