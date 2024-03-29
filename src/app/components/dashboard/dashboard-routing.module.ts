import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StartComponent } from './start/start.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path:'',
        component: StartComponent
      },
      {
        path:'users',
        component: UserComponent
      },
      {
        path:'reports',
        component:ReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
