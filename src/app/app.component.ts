import { Component } from '@angular/core';
import { FnApplication, FnExceptionService, FnModalService, FnThemeService } from 'foundation';
import { HwApplication } from './hw.application';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private hwApp: HwApplication, private fnLog: FnExceptionService, private dialogSvcs: FnModalService, private themeService: FnThemeService, private http: HttpClient) {
    console.log(this.fnLog.logException("Error"))
  }
  title = 'foundation-test';

  openCngMdl() {
    //this.dialogSvcs.openModal(AppHomeComponent, { data: { id: 'name' }, hasBackdrop: true });
    this.dialogSvcs.openConfirmModal();
  }
  ngOnInit(){
    this.useTheme('theme1');

  }
   public useTheme(themeID: string) {
        this.http.get(`assets/theme/${themeID}.json`).subscribe((res) => {
            this.themeService.setTheme(res);
            console.log(res);
        });
    }
}
