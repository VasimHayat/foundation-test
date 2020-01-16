import { Component } from '@angular/core';
import { FnUiFieldMetaDataService, FnI18nService } from 'foundation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = {
    isActive: true,
    email: 'jack@martin.com',
    password: ''
  };

  constructor(private metaDataSvcs: FnUiFieldMetaDataService,private transService:FnI18nService) {
    this.loadFiledMetaData();
  }

  selectLanguage(lang){
    this.transService.setLanguage(lang);
  }



  loadFiledMetaData() {
    this.metaDataSvcs.setFieldMap(
      {
        email: {

          isRequired: true,
          isEnableOnUI: true,
          labelIDArray: [
            'Entity_EOEmpMain_Field_jobCodeDescription_LBL',
            'Entity_EOEmpMain_Field_jobCodeDescription_HVR'
          ],
          minLength: 5,
          isInitialized: true,
          isShowInfo: false,
          labelPosition: 'left',
          recalAccess: false,
          typeID: {
            iid: 'EMAIL',
            isNumber: false,
            defaultTableWidth: 50,
            defaultEditWidth: 20
          },
          applicablePK: 0,
          id: 'Entity_EOEmpMain_Field_jobCodeDescription',
          isDisabled: false,
          key: 'email',
          maxLength: 255,
          isDynDetailKey: false,
          hideLabel: false
        },
        password: {

          isRequired: true,
          isEnableOnUI: true,
          labelIDArray: [
            'Entity_EOEmpMain_Field_jobCodeDescription_LBL',
            'Entity_EOEmpMain_Field_jobCodeDescription_HVR'
          ],
          minLength: 8,
          isInitialized: true,
          isShowInfo: false,
          labelPosition: 'left',
          recalAccess: false,
          typeID: {
            iid: 'PASSWORD',
            isNumber: false,
            defaultTableWidth: 50,
            defaultEditWidth: 20
          },
          applicablePK: 0,
          id: 'Entity_EOEmpMain_Field_PASSWORD',
          isDisabled: false,
          key: 'password',
          maxLength: 255,
          isDynDetailKey: false,
          hideLabel: false
        }
      },
    );
  }

  onSubmit(_form) {

  }

  dateObject = {
    startDate: new Date("2019-12-10"),
    endDate: new Date("2019-12-17")
  }
  maxDate = new Date("2024-11-30");
  changeDate(event) {
  }
  disabledDate(obj) {
    //   obj.callback(obj.date < new Date("2019-12-20") && obj.date > new Date("2019-11-10") )  ;
  }
  nextDisable(dateObj: any) {
    let currentDate = dateObj.date;
    dateObj.callback(new Date(currentDate.setDate(currentDate.getDate() + 1)) > new Date("2019-12-19"));
  }
  prevDisable(dateObj: any) {
    let currentDate = dateObj.date;
    //obj.callback(new Date(currentDate.setDate(currentDate.getDate() -1)) < new Date("2019-11-10"));
  }
  nextPrevDate(dateObj: any) {
    console.log(dateObj)
  }

}
