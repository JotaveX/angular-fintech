import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TittleService } from './services/tittle.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  providers: [TittleService]
})
export class SharedModule { }
