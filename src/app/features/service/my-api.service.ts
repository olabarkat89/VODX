import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { call, callInterface, callType, EmotionData } from '../modules/interface';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<call>('assets/call.json');
  }
  callValues() {
    return this.http.get<callType>('assets/callType.json');

  }
  getAllEmoji(){
    return this.http.get<EmotionData>('assets/emojis.json')
  }
  getAllEvent(){
    return this.http.get<EmotionData>('assets/events.json')
  }
}
