 
import { ErrorHandler } from "@angular/core"; 
import { Injectable } from "@angular/core"; 
import { FNErrorHandler, FNErrorLogSvcs } from 'foundation';
import { HWErrorLogSvcs } from './hw-error.log.svcs';
 

@Injectable({
	providedIn:'root'
})
export class HWErrorHandler extends FNErrorHandler { 
 
	constructor(errorLogService: HWErrorLogSvcs ) {
        super(errorLogService);
    } 

	// enable if want to do some extra activity during handle the given error.
	// public handleError( error: any ) : void {  
    //     this.errorLogService.logError(error);	


	// 	// Log to the console. or Send to the error-logging service.
	// 	// try {
    //     //     console.log(this.errorLogService.sendExceptionToServer)
	// 	// 	this.errorLogService.logError(error);		

	// 	// } catch ( handlingError ) {
	// 	// 	console.group( "ErrorHandler" );
	// 	// 	console.warn( "Error when trying to output error." );
	// 	// 	console.error( handlingError );
	// 	// 	console.groupEnd();

	// 	// } 

	// } 

}
 

 