import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule,TranslateModule,PersonalInfoComponent,RouterOutlet,RouterModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
tabs = [
  { label: 'Personal-Information', route: 'personal' },
  { label: 'Audio and video', route: 'audio' },
  { label: 'Working-hours', route: 'workHourse' }
];  
constructor(private router: Router, private route: ActivatedRoute){}
    selectTab(tab: any) {
    // this.activeTab = tab.label;
    this.router.navigate([tab.route], { relativeTo: this.route });
    }

}
