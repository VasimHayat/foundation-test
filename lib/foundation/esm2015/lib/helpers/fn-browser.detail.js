/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FnBrowserDetail {
    /**
     * @return {?}
     */
    captureJsVersion() {
        //     function get_js_version() {
        /** @type {?} */
        let jsv = {
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
    }
    /**
     * @return {?}
     */
    init() {
        /** @type {?} */
        let unknown = '-';
        // system
        /** @type {?} */
        let os = unknown;
        /** @type {?} */
        let osVersion = unknown;
        /** @type {?} */
        let screenSize = '';
        // browser
        /** @type {?} */
        let nVer = navigator.appVersion;
        /** @type {?} */
        let nAgt = navigator.userAgent;
        /** @type {?} */
        let browser = navigator.appName;
        /** @type {?} */
        let version = '' + parseFloat(navigator.appVersion);
        /** @type {?} */
        let majorVersion = parseInt(navigator.appVersion, 10);
        /** @type {?} */
        let nameOffset;
        /** @type {?} */
        let verOffset;
        /** @type {?} */
        let ix;
        // mobile version
        /** @type {?} */
        let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        // cookie
        /** @type {?} */
        let cookieEnabled = (navigator.cookieEnabled) ? true : false;
        {
            // screen
            if (screen.width) {
                /** @type {?} */
                let width = (screen.width) ? screen.width : '';
                /** @type {?} */
                let height = (screen.height) ? screen.height : '';
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
            let clientStrings = [
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
            for (let id in clientStrings) {
                /** @type {?} */
                let cs = clientStrings[id];
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
    }
    /**
     * @return {?}
     */
    browserDetail() {
        if (window['systemObject'] == undefined || window['systemObject'] == null) {
            this.init();
            return window['systemObject'];
        }
        else {
            return window['systemObject'];
        }
    }
}
if (false) {
    /** @type {?} */
    FnBrowserDetail.prototype.jsVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnJvd3Nlci5kZXRhaWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZm4tYnJvd3Nlci5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU0sT0FBTyxlQUFlOzs7O0lBSW5CLGdCQUFnQjs7O1lBRWpCLEdBQUcsR0FBRztZQUNSLFFBQVEsRUFBRTtnQkFDUixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2FBQ3JFO1lBQ0QsT0FBTyxFQUFFLEVBQUU7U0FDWjs7WUFDRyxDQUFDLEdBQUcsUUFBUTtRQUNoQixpREFBaUQ7UUFDakQseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCxpRUFBaUU7UUFDakUsNkRBQTZEO1FBQzdELHVDQUF1QztRQUN2QyxJQUFJO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxJQUFJOztZQUVMLE9BQU8sR0FBRyxHQUFHOzs7WUFFYixFQUFFLEdBQUcsT0FBTzs7WUFDWixTQUFTLEdBQVEsT0FBTzs7WUFDeEIsVUFBVSxHQUFHLEVBQUU7OztZQUVmLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVTs7WUFDM0IsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTOztZQUMxQixPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU87O1lBQzNCLE9BQU8sR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7O1lBQy9DLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7O1lBQ2pELFVBQVU7O1lBQUUsU0FBUzs7WUFBRSxFQUFFOzs7WUFFekIsTUFBTSxHQUFHLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxJ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QUFDLENBQUM7b0JBQ3pFLE1BQU07YUFDVDtZQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxPQUFPO1lBQ3ZCLG1CQUFtQixFQUFFLFlBQVk7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxFQUFFLEVBQUUsRUFBRTtZQUNOLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6RSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7OztJQXpNQyxvQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIEZuQnJvd3NlckRldGFpbCB7XHJcblxyXG4gIHB1YmxpYyBqc1ZlcnNpb247XHJcblxyXG4gIHB1YmxpYyBjYXB0dXJlSnNWZXJzaW9uKCkge1xyXG4gICAgLy8gICAgIGZ1bmN0aW9uIGdldF9qc192ZXJzaW9uKCkge1xyXG4gICAgbGV0IGpzdiA9IHtcclxuICAgICAgdmVyc2lvbnM6IFtcclxuICAgICAgICBcIjEuMVwiLCBcIjEuMlwiLCBcIjEuM1wiLCBcIjEuNFwiLCBcIjEuNVwiLCBcIjEuNlwiLCBcIjEuN1wiLCBcIjEuOFwiLCBcIjEuOVwiLCBcIjIuMFwiXHJcbiAgICAgIF0sXHJcbiAgICAgIHZlcnNpb246IFwiXCJcclxuICAgIH07XHJcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPGpzdi52ZXJzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIHZhciBnID0gZC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxcclxuICAgIC8vICAgICAgICAgcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG4gICAgLy8gICAgIGcuc2V0QXR0cmlidXRlKFwibGFuZ3VhZ2VcIiwgXCJKYXZhU2NyaXB0XCIgK2pzdi52ZXJzaW9uc1tpXSk7XHJcbiAgICAvLyAgICAgZy50ZXh0ID0gXCJ0aGlzLmpzdi52ZXJzaW9uPSdcIiAranN2LnZlcnNpb25zW2ldICsgXCInO1wiO1xyXG4gICAgLy8gICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZywgcyk7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLmpzVmVyc2lvbiA9IGpzdi52ZXJzaW9uO1xyXG4gIH1cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuXHJcbiAgICBsZXQgdW5rbm93biA9ICctJztcclxuICAgIC8vIHN5c3RlbVxyXG4gICAgbGV0IG9zID0gdW5rbm93bjtcclxuICAgIGxldCBvc1ZlcnNpb246IGFueSA9IHVua25vd247XHJcbiAgICBsZXQgc2NyZWVuU2l6ZSA9ICcnO1xyXG4gICAgLy8gYnJvd3NlclxyXG4gICAgbGV0IG5WZXIgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcclxuICAgIGxldCBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGxldCBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICBsZXQgdmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICBsZXQgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIGxldCBuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQsIGl4O1xyXG4gICAgLy8gbW9iaWxlIHZlcnNpb25cclxuICAgIGxldCBtb2JpbGUgPSAvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QoblZlcik7XHJcblxyXG4gICAgLy8gY29va2llXHJcbiAgICBsZXQgY29va2llRW5hYmxlZCA9IChuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAge1xyXG5cclxuICAgICAgLy8gc2NyZWVuXHJcblxyXG4gICAgICBpZiAoc2NyZWVuLndpZHRoKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHNjcmVlbi53aWR0aCkgPyBzY3JlZW4ud2lkdGggOiAnJztcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNjcmVlbi5oZWlnaHQpID8gc2NyZWVuLmhlaWdodCA6ICcnO1xyXG4gICAgICAgIHNjcmVlblNpemUgKz0gJycgKyB3aWR0aCArIFwiIHggXCIgKyBoZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLy8gT3BlcmFcclxuICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ09wZXJhJykpICE9IC0xKSB7XHJcbiAgICAgICAgYnJvd3NlciA9ICdPcGVyYSc7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xyXG4gICAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIE9wZXJhIE5leHRcclxuICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ09QUicpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnT3BlcmEnO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA0KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBNU0lFXHJcbiAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ01TSUUnKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIENocm9tZVxyXG4gICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdDaHJvbWUnKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ0Nocm9tZSc7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNhZmFyaVxyXG4gICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdTYWZhcmknKSkgIT0gLTEpIHtcclxuICAgICAgICBicm93c2VyID0gJ1NhZmFyaSc7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xyXG4gICAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRmlyZWZveCcpKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnRmlyZWZveCc7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE1TSUUgMTErXHJcbiAgICAgIGVsc2UgaWYgKG5BZ3QuaW5kZXhPZignVHJpZGVudC8nKSAhPSAtMSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcobkFndC5pbmRleE9mKCdydjonKSArIDMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE90aGVyIGJyb3dzZXJzXHJcbiAgICAgIGVsc2UgaWYgKChuYW1lT2Zmc2V0ID0gbkFndC5sYXN0SW5kZXhPZignICcpICsgMSkgPCAodmVyT2Zmc2V0ID0gbkFndC5sYXN0SW5kZXhPZignLycpKSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSBuQWd0LnN1YnN0cmluZyhuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQpO1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcclxuICAgICAgICBpZiAoYnJvd3Nlci50b0xvd2VyQ2FzZSgpID09IGJyb3dzZXIudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyB0cmltIHRoZSB2ZXJzaW9uIHN0cmluZ1xyXG4gICAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCc7JykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcgJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcpJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG5cclxuICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyB2ZXJzaW9uLCAxMCk7XHJcbiAgICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgdmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5jb29raWVFbmFibGVkID09ICd1bmRlZmluZWQnICYmICFjb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ3Rlc3Rjb29raWUnO1xyXG4gICAgICAgIGNvb2tpZUVuYWJsZWQgPSAoZG9jdW1lbnQuY29va2llLmluZGV4T2YoJ3Rlc3Rjb29raWUnKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICBsZXQgY2xpZW50U3RyaW5ncyA9IFtcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDEwJywgcjogLyhXaW5kb3dzIDEwLjB8V2luZG93cyBOVCAxMC4wKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDguMScsIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgOCcsIHI6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDcnLCByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyBWaXN0YScsIHI6IC9XaW5kb3dzIE5UIDYuMC8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIFNlcnZlciAyMDAzJywgcjogL1dpbmRvd3MgTlQgNS4yLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgWFAnLCByOiAvKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgMjAwMCcsIHI6IC8oV2luZG93cyBOVCA1LjB8V2luZG93cyAyMDAwKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIE1FJywgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDk4JywgcjogLyhXaW5kb3dzIDk4fFdpbjk4KS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIDk1JywgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpLyB9LFxyXG4gICAgICAgIHsgczogJ1dpbmRvd3MgTlQgNC4wJywgcjogLyhXaW5kb3dzIE5UIDQuMHxXaW5OVDQuMHxXaW5OVHxXaW5kb3dzIE5UKS8gfSxcclxuICAgICAgICB7IHM6ICdXaW5kb3dzIENFJywgcjogL1dpbmRvd3MgQ0UvIH0sXHJcbiAgICAgICAgeyBzOiAnV2luZG93cyAzLjExJywgcjogL1dpbjE2LyB9LFxyXG4gICAgICAgIHsgczogJ0FuZHJvaWQnLCByOiAvQW5kcm9pZC8gfSxcclxuICAgICAgICB7IHM6ICdPcGVuIEJTRCcsIHI6IC9PcGVuQlNELyB9LFxyXG4gICAgICAgIHsgczogJ1N1biBPUycsIHI6IC9TdW5PUy8gfSxcclxuICAgICAgICB7IHM6ICdMaW51eCcsIHI6IC8oTGludXh8WDExKS8gfSxcclxuICAgICAgICB7IHM6ICdpT1MnLCByOiAvKGlQaG9uZXxpUGFkfGlQb2QpLyB9LFxyXG4gICAgICAgIHsgczogJ01hYyBPUyBYJywgcjogL01hYyBPUyBYLyB9LFxyXG4gICAgICAgIHsgczogJ01hYyBPUycsIHI6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvIH0sXHJcbiAgICAgICAgeyBzOiAnUU5YJywgcjogL1FOWC8gfSxcclxuICAgICAgICB7IHM6ICdVTklYJywgcjogL1VOSVgvIH0sXHJcbiAgICAgICAgeyBzOiAnQmVPUycsIHI6IC9CZU9TLyB9LFxyXG4gICAgICAgIHsgczogJ09TLzInLCByOiAvT1NcXC8yLyB9LFxyXG4gICAgICAgIHsgczogJ1NlYXJjaCBCb3QnLCByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvIH1cclxuICAgICAgXTtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gY2xpZW50U3RyaW5ncykge1xyXG4gICAgICAgIGxldCBjcyA9IGNsaWVudFN0cmluZ3NbaWRdO1xyXG4gICAgICAgIGlmIChjcy5yLnRlc3QobkFndCkpIHtcclxuICAgICAgICAgIG9zID0gY3MucztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XHJcbiAgICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XHJcbiAgICAgICAgb3MgPSAnV2luZG93cyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAob3MpIHtcclxuICAgICAgICBjYXNlICdNYWMgT1MgWCc6XHJcbiAgICAgICAgICBvc1ZlcnNpb24gPSAvTWFjIE9TIFggKDEwW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdBbmRyb2lkJzpcclxuICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2lPUyc6XHJcbiAgICAgICAgICBvc1ZlcnNpb24gPSAvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8uZXhlYyhuVmVyKTtcclxuICAgICAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvblsxXSArICcuJyArIG9zVmVyc2lvblsyXSArICcuJyArIChvc1ZlcnNpb25bM10gfCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhcHR1cmVKc1ZlcnNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3dbJ3N5c3RlbU9iamVjdCddID0ge1xyXG4gICAgICBzY3JlZW46IHNjcmVlblNpemUsXHJcbiAgICAgIGJyb3dzZXI6IGJyb3dzZXIsXHJcbiAgICAgIGJyb3dzZXJWZXJzaW9uOiB2ZXJzaW9uLFxyXG4gICAgICBicm93c2VyTWFqb3JWZXJzaW9uOiBtYWpvclZlcnNpb24sXHJcbiAgICAgIG1vYmlsZTogbW9iaWxlLFxyXG4gICAgICBvczogb3MsXHJcbiAgICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uLFxyXG4gICAgICBjb29raWVzOiBjb29raWVFbmFibGVkXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJyb3dzZXJEZXRhaWwoKSB7XHJcbiAgICBpZiAod2luZG93WydzeXN0ZW1PYmplY3QnXSA9PSB1bmRlZmluZWQgfHwgd2luZG93WydzeXN0ZW1PYmplY3QnXSA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICByZXR1cm4gd2luZG93WydzeXN0ZW1PYmplY3QnXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3dbJ3N5c3RlbU9iamVjdCddO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==