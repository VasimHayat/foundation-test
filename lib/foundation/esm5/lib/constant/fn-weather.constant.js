/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
var FnWeatherConstatnt = /** @class */ (function () {
    function FnWeatherConstatnt() {
    }
    FnWeatherConstatnt.WEATHER_ICONS = {
        Chance_of_Flurries: 'wi-day-cloudy-gusts',
        Chance_of_Rain: 'wi-rain',
        Chance_of_Freezing_Rain: 'wi-rain-wind',
        Chance_of_Sleet: 'wi-storm-showers',
        Chance_of_Snow: 'wi-snow',
        Chance_of_Thunderstorms: 'wi-thunderstorm',
        Chance_of_a_Thunderstorm: 'wi-thunderstorm',
        Clear: 'wi-day-sunny',
        Cloudy: 'wi-cloudy',
        Flurries: 'wi-day-cloudy-gusts',
        Fog: 'wi-fog',
        Haze: 'wi-day-fog',
        Mostly_Cloudy: 'wi-day-cloudy',
        Mostly_Sunny: 'wi-day-sunny-overcast',
        Partly_Cloudy: 'wi-day-cloudy',
        Partly_Sunny: 'wi-day-sunny-overcast',
        Freezing_Rain: 'wi-rain-wind',
        Rain: 'wi-rain',
        Sleet: 'wi-storm-showers',
        Snow: 'wi-snow',
        Sunny: 'wi-day-sunny',
        Thunderstorms: 'wi-thunderstorm',
        Thunderstorm: 'wi-thunderstorm',
        Overcast: 'wi-day-sunny-overcast',
        Rain_Showers: 'wi-showers',
        Snow_Showers: 'wi-snow',
        Scattered_Clouds: 'wi-day-lightning',
        'Light Rain': 'wi-rain-mix',
        'Light Freezing Rain': 'wi-hail ',
        'Light Snow': 'wi-snow',
        'Light Drizzle': 'wi-rain-mix',
        Ice_Pellets: 'wi-rain-mix '
    };
    FnWeatherConstatnt.WEATHER_STRINGS = {
        en: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
        es: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
        fr: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
        zh: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
        it: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
        de: {
            Chance_of_Flurries: 'Chance of Flurries',
            Chance_of_Rain: 'Chance of Rain',
            Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
            Chance_of_Sleet: 'Chance of Sleet',
            Chance_of_Snow: 'Chance of Snow',
            Chance_of_Thunderstorms: 'Chance of Thunderstorms',
            Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
            Clear: 'Clear',
            Cloudy: 'Cloudy',
            Flurries: 'Flurries',
            Fog: 'Fog',
            Haze: 'Haze',
            Mostly_Cloudy: 'Mostly Cloudy',
            Mostly_Sunny: 'Mostly Sunny',
            Partly_Cloudy: 'Partly Cloudy',
            Partly_Sunny: 'Partly Sunny',
            Freezing_Rain: 'Freezing Rain',
            Rain: 'Rain',
            Sleet: 'Sleet',
            Snow: 'Snow',
            Sunny: 'Sunny',
            Thunderstorms: 'Thunderstorms',
            Thunderstorm: 'Thunderstorm',
            Overcast: 'Overcast',
            Snow_Showers: 'Snow Showers',
            'N/A': 'N/A',
            Scattered_Clouds: 'Scattered Clouds',
            'Light Rain': 'Light Rain',
            'Light Freezing Rain': 'Light Freezing Rain',
            'Light Snow': 'Light Snow',
            'Light Drizzle': 'Light Drizzle',
            Ice_Pellets: 'wi-rain-mix '
        },
    };
    return FnWeatherConstatnt;
}());
export { FnWeatherConstatnt };
if (false) {
    /** @type {?} */
    FnWeatherConstatnt.WEATHER_ICONS;
    /** @type {?} */
    FnWeatherConstatnt.WEATHER_STRINGS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4td2VhdGhlci5jb25zdGFudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29uc3RhbnQvZm4td2VhdGhlci5jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7SUFBQTtJQW9QQSxDQUFDO0lBbFB3QixnQ0FBYSxHQUFHO1FBQ3JDLGtCQUFrQixFQUFFLHFCQUFxQjtRQUN6QyxjQUFjLEVBQUUsU0FBUztRQUN6Qix1QkFBdUIsRUFBRSxjQUFjO1FBQ3ZDLGVBQWUsRUFBRSxrQkFBa0I7UUFDbkMsY0FBYyxFQUFFLFNBQVM7UUFDekIsdUJBQXVCLEVBQUUsaUJBQWlCO1FBQzFDLHdCQUF3QixFQUFFLGlCQUFpQjtRQUMzQyxLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLEVBQUUsV0FBVztRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLEdBQUcsRUFBRSxRQUFRO1FBQ2IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsYUFBYSxFQUFFLGVBQWU7UUFDOUIsWUFBWSxFQUFFLHVCQUF1QjtRQUNyQyxhQUFhLEVBQUUsZUFBZTtRQUM5QixZQUFZLEVBQUUsdUJBQXVCO1FBQ3JDLGFBQWEsRUFBRSxjQUFjO1FBQzdCLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixJQUFJLEVBQUUsU0FBUztRQUNmLEtBQUssRUFBRSxjQUFjO1FBQ3JCLGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsWUFBWSxFQUFFLGlCQUFpQjtRQUMvQixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFlBQVksRUFBRSxZQUFZO1FBQzFCLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGdCQUFnQixFQUFFLGtCQUFrQjtRQUNwQyxZQUFZLEVBQUUsYUFBYTtRQUMzQixxQkFBcUIsRUFBRSxVQUFVO1FBQ2pDLFlBQVksRUFBRSxTQUFTO1FBQ3ZCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLFdBQVcsRUFBRSxjQUFj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UUFDRCxFQUFFLEVBQUU7WUFDRixrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyx1QkFBdUIsRUFBRSx5QkFBeUI7WUFDbEQsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLHVCQUF1QixFQUFFLHlCQUF5QjtZQUNsRCx3QkFBd0IsRUFBRSwwQkFBMEI7WUFDcEQsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsS0FBSztZQUNWLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLGVBQWU7WUFDOUIsWUFBWSxFQUFFLGNBQWM7WUFDNUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsWUFBWSxFQUFFLGNBQWM7WUFDNUIsYUFBYSxFQUFFLGVBQWU7WUFDOUIsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87WUFDZCxhQUFhLEVBQUUsZUFBZTtZQUM5QixZQUFZLEVBQUUsY0FBYztZQUM1QixRQUFRLEVBQUUsVUFBVTtZQUNwQixZQUFZLEVBQUUsY0FBYztZQUM1QixLQUFLLEVBQUUsS0FBSztZQUNaLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxZQUFZLEVBQUUsWUFBWTtZQUMxQixxQkFBcUIsRUFBRSxxQkFBcUI7WUFDNUMsWUFBWSxFQUFFLFlBQVk7WUFDMUIsZUFBZSxFQUFFLGVBQWU7WUFDaEMsV0FBVyxFQUFFLGNBQWM7U0FDNUI7S0FDRixDQUFDO0lBQ0oseUJBQUM7Q0FBQSxBQXBQRCxJQW9QQztTQXBQWSxrQkFBa0I7OztJQUU3QixpQ0FpQ0U7O0lBR0YsbUNBNk1FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFZhc2ltIEhheWF0IEAgMi8xMC8yMDE4XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEZuV2VhdGhlckNvbnN0YXRudCB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0VBVEhFUl9JQ09OUyA9IHtcclxuICAgIENoYW5jZV9vZl9GbHVycmllczogJ3dpLWRheS1jbG91ZHktZ3VzdHMnLFxyXG4gICAgQ2hhbmNlX29mX1JhaW46ICd3aS1yYWluJyxcclxuICAgIENoYW5jZV9vZl9GcmVlemluZ19SYWluOiAnd2ktcmFpbi13aW5kJyxcclxuICAgIENoYW5jZV9vZl9TbGVldDogJ3dpLXN0b3JtLXNob3dlcnMnLFxyXG4gICAgQ2hhbmNlX29mX1Nub3c6ICd3aS1zbm93JyxcclxuICAgIENoYW5jZV9vZl9UaHVuZGVyc3Rvcm1zOiAnd2ktdGh1bmRlcnN0b3JtJyxcclxuICAgIENoYW5jZV9vZl9hX1RodW5kZXJzdG9ybTogJ3dpLXRodW5kZXJzdG9ybScsXHJcbiAgICBDbGVhcjogJ3dpLWRheS1zdW5ueScsXHJcbiAgICBDbG91ZHk6ICd3aS1jbG91ZHknLFxyXG4gICAgRmx1cnJpZXM6ICd3aS1kYXktY2xvdWR5LWd1c3RzJyxcclxuICAgIEZvZzogJ3dpLWZvZycsXHJcbiAgICBIYXplOiAnd2ktZGF5LWZvZycsXHJcbiAgICBNb3N0bHlfQ2xvdWR5OiAnd2ktZGF5LWNsb3VkeScsXHJcbiAgICBNb3N0bHlfU3Vubnk6ICd3aS1kYXktc3Vubnktb3ZlcmNhc3QnLFxyXG4gICAgUGFydGx5X0Nsb3VkeTogJ3dpLWRheS1jbG91ZHknLFxyXG4gICAgUGFydGx5X1N1bm55OiAnd2ktZGF5LXN1bm55LW92ZXJjYXN0JyxcclxuICAgIEZyZWV6aW5nX1JhaW46ICd3aS1yYWluLXdpbmQnLFxyXG4gICAgUmFpbjogJ3dpLXJhaW4nLFxyXG4gICAgU2xlZXQ6ICd3aS1zdG9ybS1zaG93ZXJzJyxcclxuICAgIFNub3c6ICd3aS1zbm93JyxcclxuICAgIFN1bm55OiAnd2ktZGF5LXN1bm55JyxcclxuICAgIFRodW5kZXJzdG9ybXM6ICd3aS10aHVuZGVyc3Rvcm0nLFxyXG4gICAgVGh1bmRlcnN0b3JtOiAnd2ktdGh1bmRlcnN0b3JtJyxcclxuICAgIE92ZXJjYXN0OiAnd2ktZGF5LXN1bm55LW92ZXJjYXN0JyxcclxuICAgIFJhaW5fU2hvd2VyczogJ3dpLXNob3dlcnMnLFxyXG4gICAgU25vd19TaG93ZXJzOiAnd2ktc25vdycsXHJcbiAgICBTY2F0dGVyZWRfQ2xvdWRzOiAnd2ktZGF5LWxpZ2h0bmluZycsXHJcbiAgICAnTGlnaHQgUmFpbic6ICd3aS1yYWluLW1peCcsXHJcbiAgICAnTGlnaHQgRnJlZXppbmcgUmFpbic6ICd3aS1oYWlsICcsXHJcbiAgICAnTGlnaHQgU25vdyc6ICd3aS1zbm93JyxcclxuICAgICdMaWdodCBEcml6emxlJzogJ3dpLXJhaW4tbWl4JyxcclxuICAgIEljZV9QZWxsZXRzOiAnd2ktcmFpbi1taXggJ1xyXG4gIH07XHJcblxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdFQVRIRVJfU1RSSU5HUyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgIENoYW5jZV9vZl9GbHVycmllczogJ0NoYW5jZSBvZiBGbHVycmllcycsXHJcbiAgICAgIENoYW5jZV9vZl9SYWluOiAnQ2hhbmNlIG9mIFJhaW4nLFxyXG4gICAgICBDaGFuY2Vfb2ZfRnJlZXppbmdfUmFpbjogJ0NoYW5jZSBvZiBGcmVlemluZyBSYWluJyxcclxuICAgICAgQ2hhbmNlX29mX1NsZWV0OiAnQ2hhbmNlIG9mIFNsZWV0JyxcclxuICAgICAgQ2hhbmNlX29mX1Nub3c6ICdDaGFuY2Ugb2YgU25vdycsXHJcbiAgICAgIENoYW5jZV9vZl9UaHVuZGVyc3Rvcm1zOiAnQ2hhbmNlIG9mIFRodW5kZXJzdG9ybXMnLFxyXG4gICAgICBDaGFuY2Vfb2ZfYV9UaHVuZGVyc3Rvcm06ICdDaGFuY2Ugb2YgYSBUaHVuZGVyc3Rvcm0nLFxyXG4gICAgICBDbGVhcjogJ0NsZWFyJyxcclxuICAgICAgQ2xvdWR5OiAnQ2xvdWR5JyxcclxuICAgICAgRmx1cnJpZXM6ICdGbHVycmllcycsXHJcbiAgICAgIEZvZzogJ0ZvZycsXHJcbiAgICAgIEhhemU6ICdIYXplJyxcclxuICAgICAgTW9zdGx5X0Nsb3VkeTogJ01vc3RseSBDbG91ZHknLFxyXG4gICAgICBNb3N0bHlfU3Vubnk6ICdNb3N0bHkgU3VubnknLFxyXG4gICAgICBQYXJ0bHlfQ2xvdWR5OiAnUGFydGx5IENsb3VkeScsXHJcbiAgICAgIFBhcnRseV9TdW5ueTogJ1BhcnRseSBTdW5ueScsXHJcbiAgICAgIEZyZWV6aW5nX1JhaW46ICdGcmVlemluZyBSYWluJyxcclxuICAgICAgUmFpbjogJ1JhaW4nLFxyXG4gICAgICBTbGVldDogJ1NsZWV0JyxcclxuICAgICAgU25vdzogJ1Nub3cnLFxyXG4gICAgICBTdW5ueTogJ1N1bm55JyxcclxuICAgICAgVGh1bmRlcnN0b3JtczogJ1RodW5kZXJzdG9ybXMnLFxyXG4gICAgICBUaHVuZGVyc3Rvcm06ICdUaHVuZGVyc3Rvcm0nLFxyXG4gICAgICBPdmVyY2FzdDogJ092ZXJjYXN0JyxcclxuICAgICAgU25vd19TaG93ZXJzOiAnU25vdyBTaG93ZXJzJyxcclxuICAgICAgJ04vQSc6ICdOL0EnLFxyXG4gICAgICBTY2F0dGVyZWRfQ2xvdWRzOiAnU2NhdHRlcmVkIENsb3VkcycsXHJcbiAgICAgICdMaWdodCBSYWluJzogJ0xpZ2h0IFJhaW4nLFxyXG4gICAgICAnTGlnaHQgRnJlZXppbmcgUmFpbic6ICdMaWdodCBGcmVlemluZyBSYWluJyxcclxuICAgICAgJ0xpZ2h0IFNub3cnOiAnTGlnaHQgU25vdycsXHJcbiAgICAgICdMaWdodCBEcml6emxlJzogJ0xpZ2h0IERyaXp6bGUnLFxyXG4gICAgICBJY2VfUGVsbGV0czogJ3dpLXJhaW4tbWl4ICdcclxuICAgIH0sXHJcbiAgICBlczoge1xyXG4gICAgICBDaGFuY2Vfb2ZfRmx1cnJpZXM6ICdDaGFuY2Ugb2YgRmx1cnJpZXMnLFxyXG4gICAgICBDaGFuY2Vfb2ZfUmFpbjogJ0NoYW5jZSBvZiBSYWluJyxcclxuICAgICAgQ2hhbmNlX29mX0ZyZWV6aW5nX1JhaW46ICdDaGFuY2Ugb2YgRnJlZXppbmcgUmFpbicsXHJcbiAgICAgIENoYW5jZV9vZl9TbGVldDogJ0NoYW5jZSBvZiBTbGVldCcsXHJcbiAgICAgIENoYW5jZV9vZl9Tbm93OiAnQ2hhbmNlIG9mIFNub3cnLFxyXG4gICAgICBDaGFuY2Vfb2ZfVGh1bmRlcnN0b3JtczogJ0NoYW5jZSBvZiBUaHVuZGVyc3Rvcm1zJyxcclxuICAgICAgQ2hhbmNlX29mX2FfVGh1bmRlcnN0b3JtOiAnQ2hhbmNlIG9mIGEgVGh1bmRlcnN0b3JtJyxcclxuICAgICAgQ2xlYXI6ICdDbGVhcicsXHJcbiAgICAgIENsb3VkeTogJ0Nsb3VkeScsXHJcbiAgICAgIEZsdXJyaWVzOiAnRmx1cnJpZXMnLFxyXG4gICAgICBGb2c6ICdGb2cnLFxyXG4gICAgICBIYXplOiAnSGF6ZScsXHJcbiAgICAgIE1vc3RseV9DbG91ZHk6ICdNb3N0bHkgQ2xvdWR5JyxcclxuICAgICAgTW9zdGx5X1N1bm55OiAnTW9zdGx5IFN1bm55JyxcclxuICAgICAgUGFydGx5X0Nsb3VkeTogJ1BhcnRseSBDbG91ZHknLFxyXG4gICAgICBQYXJ0bHlfU3Vubnk6ICdQYXJ0bHkgU3VubnknLFxyXG4gICAgICBGcmVlemluZ19SYWluOiAnRnJlZXppbmcgUmFpbicsXHJcbiAgICAgIFJhaW46ICdSYWluJyxcclxuICAgICAgU2xlZXQ6ICdTbGVldCcsXHJcbiAgICAgIFNub3c6ICdTbm93JyxcclxuICAgICAgU3Vubnk6ICdTdW5ueScsXHJcbiAgICAgIFRodW5kZXJzdG9ybXM6ICdUaHVuZGVyc3Rvcm1zJyxcclxuICAgICAgVGh1bmRlcnN0b3JtOiAnVGh1bmRlcnN0b3JtJyxcclxuICAgICAgT3ZlcmNhc3Q6ICdPdmVyY2FzdCcsXHJcbiAgICAgIFNub3dfU2hvd2VyczogJ1Nub3cgU2hvd2VycycsXHJcbiAgICAgICdOL0EnOiAnTi9BJyxcclxuICAgICAgU2NhdHRlcmVkX0Nsb3VkczogJ1NjYXR0ZXJlZCBDbG91ZHMnLFxyXG4gICAgICAnTGlnaHQgUmFpbic6ICdMaWdodCBSYWluJyxcclxuICAgICAgJ0xpZ2h0IEZyZWV6aW5nIFJhaW4nOiAnTGlnaHQgRnJlZXppbmcgUmFpbicsXHJcbiAgICAgICdMaWdodCBTbm93JzogJ0xpZ2h0IFNub3cnLFxyXG4gICAgICAnTGlnaHQgRHJpenpsZSc6ICdMaWdodCBEcml6emxlJyxcclxuICAgICAgSWNlX1BlbGxldHM6ICd3aS1yYWluLW1peCAnXHJcbiAgICB9LFxyXG4gICAgZnI6IHtcclxuICAgICAgQ2hhbmNlX29mX0ZsdXJyaWVzOiAnQ2hhbmNlIG9mIEZsdXJyaWVzJyxcclxuICAgICAgQ2hhbmNlX29mX1JhaW46ICdDaGFuY2Ugb2YgUmFpbicsXHJcbiAgICAgIENoYW5jZV9vZl9GcmVlemluZ19SYWluOiAnQ2hhbmNlIG9mIEZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICBDaGFuY2Vfb2ZfU2xlZXQ6ICdDaGFuY2Ugb2YgU2xlZXQnLFxyXG4gICAgICBDaGFuY2Vfb2ZfU25vdzogJ0NoYW5jZSBvZiBTbm93JyxcclxuICAgICAgQ2hhbmNlX29mX1RodW5kZXJzdG9ybXM6ICdDaGFuY2Ugb2YgVGh1bmRlcnN0b3JtcycsXHJcbiAgICAgIENoYW5jZV9vZl9hX1RodW5kZXJzdG9ybTogJ0NoYW5jZSBvZiBhIFRodW5kZXJzdG9ybScsXHJcbiAgICAgIENsZWFyOiAnQ2xlYXInLFxyXG4gICAgICBDbG91ZHk6ICdDbG91ZHknLFxyXG4gICAgICBGbHVycmllczogJ0ZsdXJyaWVzJyxcclxuICAgICAgRm9nOiAnRm9nJyxcclxuICAgICAgSGF6ZTogJ0hhemUnLFxyXG4gICAgICBNb3N0bHlfQ2xvdWR5OiAnTW9zdGx5IENsb3VkeScsXHJcbiAgICAgIE1vc3RseV9TdW5ueTogJ01vc3RseSBTdW5ueScsXHJcbiAgICAgIFBhcnRseV9DbG91ZHk6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgICAgUGFydGx5X1N1bm55OiAnUGFydGx5IFN1bm55JyxcclxuICAgICAgRnJlZXppbmdfUmFpbjogJ0ZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICBSYWluOiAnUmFpbicsXHJcbiAgICAgIFNsZWV0OiAnU2xlZXQnLFxyXG4gICAgICBTbm93OiAnU25vdycsXHJcbiAgICAgIFN1bm55OiAnU3VubnknLFxyXG4gICAgICBUaHVuZGVyc3Rvcm1zOiAnVGh1bmRlcnN0b3JtcycsXHJcbiAgICAgIFRodW5kZXJzdG9ybTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICAgIE92ZXJjYXN0OiAnT3ZlcmNhc3QnLFxyXG4gICAgICBTbm93X1Nob3dlcnM6ICdTbm93IFNob3dlcnMnLFxyXG4gICAgICAnTi9BJzogJ04vQScsXHJcbiAgICAgIFNjYXR0ZXJlZF9DbG91ZHM6ICdTY2F0dGVyZWQgQ2xvdWRzJyxcclxuICAgICAgJ0xpZ2h0IFJhaW4nOiAnTGlnaHQgUmFpbicsXHJcbiAgICAgICdMaWdodCBGcmVlemluZyBSYWluJzogJ0xpZ2h0IEZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICAnTGlnaHQgU25vdyc6ICdMaWdodCBTbm93JyxcclxuICAgICAgJ0xpZ2h0IERyaXp6bGUnOiAnTGlnaHQgRHJpenpsZScsXHJcbiAgICAgIEljZV9QZWxsZXRzOiAnd2ktcmFpbi1taXggJ1xyXG4gICAgfSxcclxuICAgIHpoOiB7XHJcbiAgICAgIENoYW5jZV9vZl9GbHVycmllczogJ0NoYW5jZSBvZiBGbHVycmllcycsXHJcbiAgICAgIENoYW5jZV9vZl9SYWluOiAnQ2hhbmNlIG9mIFJhaW4nLFxyXG4gICAgICBDaGFuY2Vfb2ZfRnJlZXppbmdfUmFpbjogJ0NoYW5jZSBvZiBGcmVlemluZyBSYWluJyxcclxuICAgICAgQ2hhbmNlX29mX1NsZWV0OiAnQ2hhbmNlIG9mIFNsZWV0JyxcclxuICAgICAgQ2hhbmNlX29mX1Nub3c6ICdDaGFuY2Ugb2YgU25vdycsXHJcbiAgICAgIENoYW5jZV9vZl9UaHVuZGVyc3Rvcm1zOiAnQ2hhbmNlIG9mIFRodW5kZXJzdG9ybXMnLFxyXG4gICAgICBDaGFuY2Vfb2ZfYV9UaHVuZGVyc3Rvcm06ICdDaGFuY2Ugb2YgYSBUaHVuZGVyc3Rvcm0nLFxyXG4gICAgICBDbGVhcjogJ0NsZWFyJyxcclxuICAgICAgQ2xvdWR5OiAnQ2xvdWR5JyxcclxuICAgICAgRmx1cnJpZXM6ICdGbHVycmllcycsXHJcbiAgICAgIEZvZzogJ0ZvZycsXHJcbiAgICAgIEhhemU6ICdIYXplJyxcclxuICAgICAgTW9zdGx5X0Nsb3VkeTogJ01vc3RseSBDbG91ZHknLFxyXG4gICAgICBNb3N0bHlfU3Vubnk6ICdNb3N0bHkgU3VubnknLFxyXG4gICAgICBQYXJ0bHlfQ2xvdWR5OiAnUGFydGx5IENsb3VkeScsXHJcbiAgICAgIFBhcnRseV9TdW5ueTogJ1BhcnRseSBTdW5ueScsXHJcbiAgICAgIEZyZWV6aW5nX1JhaW46ICdGcmVlemluZyBSYWluJyxcclxuICAgICAgUmFpbjogJ1JhaW4nLFxyXG4gICAgICBTbGVldDogJ1NsZWV0JyxcclxuICAgICAgU25vdzogJ1Nub3cnLFxyXG4gICAgICBTdW5ueTogJ1N1bm55JyxcclxuICAgICAgVGh1bmRlcnN0b3JtczogJ1RodW5kZXJzdG9ybXMnLFxyXG4gICAgICBUaHVuZGVyc3Rvcm06ICdUaHVuZGVyc3Rvcm0nLFxyXG4gICAgICBPdmVyY2FzdDogJ092ZXJjYXN0JyxcclxuICAgICAgU25vd19TaG93ZXJzOiAnU25vdyBTaG93ZXJzJyxcclxuICAgICAgJ04vQSc6ICdOL0EnLFxyXG4gICAgICBTY2F0dGVyZWRfQ2xvdWRzOiAnU2NhdHRlcmVkIENsb3VkcycsXHJcbiAgICAgICdMaWdodCBSYWluJzogJ0xpZ2h0IFJhaW4nLFxyXG4gICAgICAnTGlnaHQgRnJlZXppbmcgUmFpbic6ICdMaWdodCBGcmVlemluZyBSYWluJyxcclxuICAgICAgJ0xpZ2h0IFNub3cnOiAnTGlnaHQgU25vdycsXHJcbiAgICAgICdMaWdodCBEcml6emxlJzogJ0xpZ2h0IERyaXp6bGUnLFxyXG4gICAgICBJY2VfUGVsbGV0czogJ3dpLXJhaW4tbWl4ICdcclxuICAgIH0sXHJcbiAgICBpdDoge1xyXG4gICAgICBDaGFuY2Vfb2ZfRmx1cnJpZXM6ICdDaGFuY2Ugb2YgRmx1cnJpZXMnLFxyXG4gICAgICBDaGFuY2Vfb2ZfUmFpbjogJ0NoYW5jZSBvZiBSYWluJyxcclxuICAgICAgQ2hhbmNlX29mX0ZyZWV6aW5nX1JhaW46ICdDaGFuY2Ugb2YgRnJlZXppbmcgUmFpbicsXHJcbiAgICAgIENoYW5jZV9vZl9TbGVldDogJ0NoYW5jZSBvZiBTbGVldCcsXHJcbiAgICAgIENoYW5jZV9vZl9Tbm93OiAnQ2hhbmNlIG9mIFNub3cnLFxyXG4gICAgICBDaGFuY2Vfb2ZfVGh1bmRlcnN0b3JtczogJ0NoYW5jZSBvZiBUaHVuZGVyc3Rvcm1zJyxcclxuICAgICAgQ2hhbmNlX29mX2FfVGh1bmRlcnN0b3JtOiAnQ2hhbmNlIG9mIGEgVGh1bmRlcnN0b3JtJyxcclxuICAgICAgQ2xlYXI6ICdDbGVhcicsXHJcbiAgICAgIENsb3VkeTogJ0Nsb3VkeScsXHJcbiAgICAgIEZsdXJyaWVzOiAnRmx1cnJpZXMnLFxyXG4gICAgICBGb2c6ICdGb2cnLFxyXG4gICAgICBIYXplOiAnSGF6ZScsXHJcbiAgICAgIE1vc3RseV9DbG91ZHk6ICdNb3N0bHkgQ2xvdWR5JyxcclxuICAgICAgTW9zdGx5X1N1bm55OiAnTW9zdGx5IFN1bm55JyxcclxuICAgICAgUGFydGx5X0Nsb3VkeTogJ1BhcnRseSBDbG91ZHknLFxyXG4gICAgICBQYXJ0bHlfU3Vubnk6ICdQYXJ0bHkgU3VubnknLFxyXG4gICAgICBGcmVlemluZ19SYWluOiAnRnJlZXppbmcgUmFpbicsXHJcbiAgICAgIFJhaW46ICdSYWluJyxcclxuICAgICAgU2xlZXQ6ICdTbGVldCcsXHJcbiAgICAgIFNub3c6ICdTbm93JyxcclxuICAgICAgU3Vubnk6ICdTdW5ueScsXHJcbiAgICAgIFRodW5kZXJzdG9ybXM6ICdUaHVuZGVyc3Rvcm1zJyxcclxuICAgICAgVGh1bmRlcnN0b3JtOiAnVGh1bmRlcnN0b3JtJyxcclxuICAgICAgT3ZlcmNhc3Q6ICdPdmVyY2FzdCcsXHJcbiAgICAgIFNub3dfU2hvd2VyczogJ1Nub3cgU2hvd2VycycsXHJcbiAgICAgICdOL0EnOiAnTi9BJyxcclxuICAgICAgU2NhdHRlcmVkX0Nsb3VkczogJ1NjYXR0ZXJlZCBDbG91ZHMnLFxyXG4gICAgICAnTGlnaHQgUmFpbic6ICdMaWdodCBSYWluJyxcclxuICAgICAgJ0xpZ2h0IEZyZWV6aW5nIFJhaW4nOiAnTGlnaHQgRnJlZXppbmcgUmFpbicsXHJcbiAgICAgICdMaWdodCBTbm93JzogJ0xpZ2h0IFNub3cnLFxyXG4gICAgICAnTGlnaHQgRHJpenpsZSc6ICdMaWdodCBEcml6emxlJyxcclxuICAgICAgSWNlX1BlbGxldHM6ICd3aS1yYWluLW1peCAnXHJcbiAgICB9LFxyXG4gICAgZGU6IHtcclxuICAgICAgQ2hhbmNlX29mX0ZsdXJyaWVzOiAnQ2hhbmNlIG9mIEZsdXJyaWVzJyxcclxuICAgICAgQ2hhbmNlX29mX1JhaW46ICdDaGFuY2Ugb2YgUmFpbicsXHJcbiAgICAgIENoYW5jZV9vZl9GcmVlemluZ19SYWluOiAnQ2hhbmNlIG9mIEZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICBDaGFuY2Vfb2ZfU2xlZXQ6ICdDaGFuY2Ugb2YgU2xlZXQnLFxyXG4gICAgICBDaGFuY2Vfb2ZfU25vdzogJ0NoYW5jZSBvZiBTbm93JyxcclxuICAgICAgQ2hhbmNlX29mX1RodW5kZXJzdG9ybXM6ICdDaGFuY2Ugb2YgVGh1bmRlcnN0b3JtcycsXHJcbiAgICAgIENoYW5jZV9vZl9hX1RodW5kZXJzdG9ybTogJ0NoYW5jZSBvZiBhIFRodW5kZXJzdG9ybScsXHJcbiAgICAgIENsZWFyOiAnQ2xlYXInLFxyXG4gICAgICBDbG91ZHk6ICdDbG91ZHknLFxyXG4gICAgICBGbHVycmllczogJ0ZsdXJyaWVzJyxcclxuICAgICAgRm9nOiAnRm9nJyxcclxuICAgICAgSGF6ZTogJ0hhemUnLFxyXG4gICAgICBNb3N0bHlfQ2xvdWR5OiAnTW9zdGx5IENsb3VkeScsXHJcbiAgICAgIE1vc3RseV9TdW5ueTogJ01vc3RseSBTdW5ueScsXHJcbiAgICAgIFBhcnRseV9DbG91ZHk6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgICAgUGFydGx5X1N1bm55OiAnUGFydGx5IFN1bm55JyxcclxuICAgICAgRnJlZXppbmdfUmFpbjogJ0ZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICBSYWluOiAnUmFpbicsXHJcbiAgICAgIFNsZWV0OiAnU2xlZXQnLFxyXG4gICAgICBTbm93OiAnU25vdycsXHJcbiAgICAgIFN1bm55OiAnU3VubnknLFxyXG4gICAgICBUaHVuZGVyc3Rvcm1zOiAnVGh1bmRlcnN0b3JtcycsXHJcbiAgICAgIFRodW5kZXJzdG9ybTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICAgIE92ZXJjYXN0OiAnT3ZlcmNhc3QnLFxyXG4gICAgICBTbm93X1Nob3dlcnM6ICdTbm93IFNob3dlcnMnLFxyXG4gICAgICAnTi9BJzogJ04vQScsXHJcbiAgICAgIFNjYXR0ZXJlZF9DbG91ZHM6ICdTY2F0dGVyZWQgQ2xvdWRzJyxcclxuICAgICAgJ0xpZ2h0IFJhaW4nOiAnTGlnaHQgUmFpbicsXHJcbiAgICAgICdMaWdodCBGcmVlemluZyBSYWluJzogJ0xpZ2h0IEZyZWV6aW5nIFJhaW4nLFxyXG4gICAgICAnTGlnaHQgU25vdyc6ICdMaWdodCBTbm93JyxcclxuICAgICAgJ0xpZ2h0IERyaXp6bGUnOiAnTGlnaHQgRHJpenpsZScsXHJcbiAgICAgIEljZV9QZWxsZXRzOiAnd2ktcmFpbi1taXggJ1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdfQ==