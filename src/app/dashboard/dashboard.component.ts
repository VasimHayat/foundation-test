import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {
  FnExceptionService,
  LoadSession,
  getCurrentSession,
  FnSessionStorage,
  FnSessionState,
  FnTableConfig,
  FnTableMetaData,
  TableAction,
  FnClickListner,
  FnUiFieldMetaDataService
} from 'foundation';

import {AppDataSvcs} from '../services/app.data.svcs';
import {List} from 'immutable';
import {Subject} from 'rxjs';
import {Store, select} from '@ngrx/store';

// extends FnClickListner

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.compone.scss']
})
export class DashboardComponent implements OnInit {
  metaData: any;

  constructor(
    private exceptionSvcs: FnExceptionService, private dataSvcs: AppDataSvcs, private store: Store<FnSessionState>,
    private metaDataSvcs: FnUiFieldMetaDataService) {
    // super(exceptionSvcs);
    // console.log( this.fnLog.logException("NEW ERROR>>>>"))
    this.interval();
    this.loadFiledMetaData();
    this.store.dispatch(new LoadSession({
      sauPK: 0,
      sccPK: 1,
      scaPK: 2,
      saPK: 3,
      scPK: 4,
      scuPK: 5
    }));
  }

  user = {
    isActive: true,
    email: 'jack@martin.com',
    password: ''
  };
  isDisabled = false;
  favColor = '#8db7a4';


  pageName = 'Table';
  isLoadingDone = false;
  config: FnTableConfig = {
    uniqueKey: 'id',
    defaultSortKey: 'country',
    tableAction: new Subject<TableAction>()
  };
  rowMetaArray: Array<FnTableMetaData> = [
    {
      key: 'id',
      description: 'Primary Key',
      isHidden: true,
      type: 'string'
    },
    {
      key: 'name',
      description: 'name',
      type: 'string'
    },
    {
      key: 'game',
      description: 'game',
      type: 'string'
    },
    {
      key: 'rating',
      description: 'rating',
      type: 'string'
    },
    {
      key: 'bankBalance',
      description: 'bankBalance',
      type: 'string'
    },
    {
      key: 'country',
      description: 'country',
      type: 'string'
    },
    {
      key: 'continent',
      description: 'continent',
      type: 'string'
    },

    {
      key: 'language',
      description: 'language',
      type: 'string'
    }
  ];
  dataArray: List<object>;

  dateObject =  {
    startDate: new Date('2019-12-10'),
    endDate: new Date('2019-12-17')
  };
  maxDate = new Date('2024-11-30');


  selectedAccount = [];
  accounts = [
    {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: {state: 'Active'}},
    {name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: {state: 'Active'}},
    {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: {state: 'Active'}},
    {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: {state: 'Active'}},
    {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: {state: 'Active'}},
    {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: {state: 'Active'}},
    {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: {state: 'Inactive'}},
    {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: {state: 'Inactive'}},
    {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: {state: 'Inactive'}},
    {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: {state: 'Inactive'}},
    {name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: {state: 'Inactive'}}
  ];


  execute(eventId: string, restParam) {
    console.log(eventId);


    // throw new Error("Method not implemented.");

    // for (var i = 0; i < 5000; i++) {
    //     console.log(i)
    // }
  }

  interval() {
    // setInterval(()=>{
    //     this.isDisabled = !this.isDisabled;
    // },1000)
  }

  click() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    console.log('D');
    this.dataSvcs.getData().subscribe(
      resp => {
        this.dataArray = resp;
        console.log(this.dataArray);
        this.isLoadingDone = true;

      }
    );
  }

  storeTrigger() {
    this.store.pipe(
      select(getCurrentSession)).subscribe(
      _fnSession => {
        console.log(_fnSession);
        console.log(FnSessionStorage.getFnSession());
      }
    );
  }

  onSubmit(loginForm) {
    console.log(loginForm);
  }

  loadFiledMetaData() {
    this.metaDataSvcs.setFieldMap(
      {
        email: {

          isRequired: true,
          isEnableOnUI: true,
          labelIDArray: [
            'Entity_EOEmpMain_Field_email_LBL',
            'Entity_EOEmpMain_Field_email_HVR'
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
          id: 'Entity_EOEmpMain_Field_email',
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

    this.metaData = this.metaDataSvcs.getFieldMap();
  }

  changeDate(event) {
  }

  disabledDate(obj) {
    //   obj.callback(obj.date < new Date("2019-12-20") && obj.date > new Date("2019-11-10") )  ;
  }

  nextDisable(dateObj: any) {
    const currentDate = dateObj.date;
    dateObj.callback(new Date(currentDate.setDate(currentDate.getDate() + 1)) > new Date('2019-12-19'));
  }

  prevDisable(dateObj: any) {
    const currentDate = dateObj.date;
  }

  nextPrevDate(dateObj: any) {
    console.log(dateObj);
  }
}
