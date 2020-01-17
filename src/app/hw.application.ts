import { FnApplication, FnApplicationHelper, FnExceptionService } from 'foundation';
import { Injectable } from '@angular/core';

@Injectable()
export class HwApplication extends FnApplication {
  constructor(fnAppHelp: FnApplicationHelper, fnExp: FnExceptionService) {
    super(fnAppHelp, fnExp);
  }

  // enable this if want to tackel manual error's manualy 
  // sendExceptionToServer(exception:any){
  //     // doing ajax...
  //     console.error(exception);
  //     console.log("Sending to server......")

  // }

}