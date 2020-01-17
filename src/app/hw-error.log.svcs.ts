 

// Import the core angular services. 
import { Injectable } from "@angular/core"; 
import { HttpClient } from '@angular/common/http'; 
import { FNExceptionJson,FNErrorLogSvcs } from 'foundation'; 

@Injectable({
    providedIn:'root'
})
export class HWErrorLogSvcs extends FNErrorLogSvcs { 
	public sendExceptionToServer:boolean;


	// I initialize the service.
	constructor( private http: HttpClient ) {
        
        super();
        this.sendExceptionToServer =true;
        
     }
  


	// I send the error to the server-side error tracking end-point.
	public sendToServer( fnExpJson: FNExceptionJson ) : void {
		console.log(fnExpJson)

      //  alert("DONGGGGGGGGGGG")

		// this.http
		// 	.post(
		// 		"./error-logging-endpoint", // Doesn't really exist in demo.
		// 		{
		// 			type: error.name,
		// 			message: error.message,
		// 			stack: error.stack,
		// 			location: window.location.href
		// 		}
		// 	)
		// 	.subscribe(
		// 		( httpResponse: Response ) : void => {

		// 			// ... nothing to do here.
		// 		},
		// 		( httpError: any ) : void => {

		// 			// NOTE: We know this will fail in the demo since there is no
		// 			// ability to accept POST requests on GitHub pages.
		// 			// --
		// 			// console.log( "Http error:", httpError );
		// 		}
		// 	)
		 

	}
 
}