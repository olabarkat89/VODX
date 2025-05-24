import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-geography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './geography.component.html',
  styleUrl: './geography.component.scss'
})
export class GeographyComponent {
  map: any;

  addresses = [
    { lat: 24.774265, lng: 46.738586 },
    { lat: 24.799265, lng: 46.728586 },
    { lat: 24.769265, lng: 46.748586 }
  ];

  ngOnInit(): void {
    this.map = L.map('map').setView([24.774265, 46.738586], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.addresses.forEach(pos => {
      L.circle([pos.lat, pos.lng], {
        color: '#6E62E5',
        fillColor: '#6E62E5',
        fillOpacity: 1,
        radius: 100 
      }).addTo(this.map);
    });
  }
}