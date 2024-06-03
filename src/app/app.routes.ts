import { Routes } from '@angular/router';
import { SidenavComponent } from './shared/pages/sidenav/sidenav.component';
import { DashboardComponent } from './core/modules/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: SidenavComponent},

    {
        path: 'dashboard',
        component: DashboardComponent
    },

    {path: 'user', component: SidenavComponent, loadChildren: () => import('./core/modules/user/user.module').then(m => m.UserModule), data: {title: '151651'}},

    {path: 'revenue', component: SidenavComponent, loadChildren: () => import('./modules/revenue/revenue.module').then(m => m.RevenueModule)},

    {path: 'scheduled-revenue', component: SidenavComponent, loadChildren: () => import('./modules/scheduled-revenue/scheduled-revenue.module').then(m => m.ScheduledRevenueModule)},

    {path: 'wallet', component: SidenavComponent, loadChildren: () => import('./modules/wallet/wallet.module').then(m => m.WalletModule)},
]
