import { Routes } from '@angular/router';
import { HomeComponent } from './features/layout/home/home.component';
import { DashboardComponent } from './features/layout/dashboard/dashboard.component';
import { EmojiComponent } from './features/layout/emoji/emoji.component';
import { UserComponent } from './features/layout/user/user.component';
import { HistoryComponent } from './features/layout/history/history.component';
import { LoginComponent } from './features/layout/Auth/login/login.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'Dashboader', pathMatch: 'full' },
            { path: 'Dashboader', component: DashboardComponent },
            { path: 'users', component: UserComponent },
            { path: 'emoji', component: EmojiComponent },
             { path: 'history', component: HistoryComponent },

        ],
        
    },
             { path: 'login', component:LoginComponent },

];
