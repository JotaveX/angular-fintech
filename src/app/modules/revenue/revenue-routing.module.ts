import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../../core/modules/user/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent, // component
    data: { title: 'Revenue List' } // data
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
