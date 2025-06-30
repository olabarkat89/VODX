import { Routes } from '@angular/router';
import { HomeComponent } from './features/layout/home/home.component';
import { DashboardComponent } from './features/layout/dashboard/dashboard.component';
import { EmojiComponent } from './features/layout/emoji/emoji.component';
import { UserComponent } from './features/layout/user/user.component';
import { HistoryComponent } from './features/layout/history/history.component';
import { LoginComponent } from './features/layout/Auth/login/login.component';
import { SettingComponent } from './features/layout/setting/setting.component';
import { ChangePasswordComponent } from './features/layout/setting/personal-info/change-password/change-password.component';
import { PersonalInfoComponent } from './features/layout/setting/personal-info/personal-info.component';
import { AudioComponent } from './features/layout/setting/audio/audio.component';
import { UserDataComponent } from './features/layout/setting/personal-info/user-data/user-data.component';
import { WORKHOURSComponent } from './features/layout/setting/workhours/workhours.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'Dashboader', pathMatch: 'full' },
            { path: 'Dashboader', component: DashboardComponent },
            { path: 'users', component: UserComponent },
            { path: 'emoji', component: EmojiComponent },
            { path: 'history', component: HistoryComponent },
            {
                path: 'Setting', component: SettingComponent,
                children: [

                    { path: '', redirectTo: 'personal', pathMatch: 'full' }, 
                    {
                        path: 'personal', component: PersonalInfoComponent,
                        children: [
                            { path: '', component: UserDataComponent },

                            { path: 'changePassword', component: ChangePasswordComponent }
                        ]
                    },
                

                    { path: 'audio', component: AudioComponent },
                   { path: 'workHourse', component:WORKHOURSComponent }
                ]
            },



        ],

    },
    { path: 'login', component: LoginComponent },

];
