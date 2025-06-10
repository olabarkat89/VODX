import { Routes } from '@angular/router';
import { HomeComponent } from './features/layout/home/home.component';
import { DashboardComponent } from './features/layout/dashboard/dashboard.component';
import { EmojiComponent } from './features/layout/emoji/emoji.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,
        children: [
              { path: '', redirectTo: 'Dashboader', pathMatch: 'full' },
      { path: 'Dashboader', component: DashboardComponent },
{ path: 'emoji', component: EmojiComponent },
    ]
    }
];
