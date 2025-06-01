import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { call, callInterface, callType, EmotionData } from '../modules/interface';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<call>('https://mocki.io/v1/9bb67814-aa26-47bd-b9e7-d1a1268504eb');
  }
  callValues() {
    return this.http.get<callType>('https://mocki.io/v1/15574347-adb9-4c72-9bbb-7bfef1c6fe7b');

  }
  getAllEmoji(){
    return this.http.get<EmotionData>('https://mocki.io/v1/c9a29714-dfb4-420d-b2a5-1f498d457b0e')
  }
}
