import { Routes } from '@angular/router';
import { HomeComponent } from './features/layout/home/home.component';
import { DashboardComponent } from './features/layout/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,
        children: [
      { path: '', component: DashboardComponent },

    ]
    }
];
