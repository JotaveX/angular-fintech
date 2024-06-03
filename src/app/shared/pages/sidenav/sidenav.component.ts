import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TittleService } from '../../services/tittle.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatButtonModule,MatIconModule, MatToolbarModule, RouterOutlet, RouterModule],
  exportAs: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit, OnChanges  {
  constructor(private titleService: TittleService) {}

  title: string = this.titleService.getTitle();

  ngOnInit() {
    this.title = this.titleService.getTitle();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.title = this.titleService.getTitle();
  }

} 
