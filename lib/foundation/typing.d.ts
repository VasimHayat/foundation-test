
declare module 'foundation-config' {

    global {
        interface Date {
            formatter(formatterString: any, langId?: any): any;
            getFormattedTime(): any;
            addDays(days: number, useThis?: boolean): Date;
            isToday(): boolean;
            clone(): Date;
            isAnotherMonth(date: Date): boolean;
            isWeekend(): boolean;
            isSameDate(date: Date): boolean;
            getCurrentDate(): any;
            offsetMntsToBusiDate(minutes: any): any;
            timeForZoneOffset(offset: any): any;
            getMinutesOfDay(): any;
            getWeek(): any;
            dateOffset(offset: any): any;
            getNextPrevDates(numOfDays: any): any;

        }
        interface String {
            startsWith(str: string): any;
            getFirstChar(): any;
            removeSpaces(): any;
            endsWith(suffix: any): any;
            codePointBefore(str: string): any;
            insertCharAt(index: number, character: any): any;
            replaceAll(str1: any, str2: any, ignore: any): any;
            capitalizeFirstLetter(): any;
            includes(): any;
            contains(str: any, startIndex: any): any;
        }

        interface Window {
            File: any;
            FileReader: any;
            FileList: any
        }

    }
}