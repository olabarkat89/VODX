import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {
    private _events$ = new BehaviorSubject<any[]>([]);
    public events$ = this._events$.asObservable();
    private eventList: any[] = [];

    constructor(private http: HttpClient) {
        this.loadEventsFromJson();
    }

    get currentEvents() {
        return this._events$.getValue();
    }

    private loadEventsFromJson() {
        this.http.get<any[]>('assets/events.json').subscribe(res => {
            const mapped = res.map(e => ({
                id: e.id,
                start: new Date(e.start),
                title: e.title,
                users: e.users
            }));
            this.eventList = mapped;
            this._events$.next([...this.eventList]);
        });
    }

    addEvent(event: any) {
        const Event = {
            id: this.currentEvents.length + 1,
            start: new Date(event.start),
            title: event.title,
            users: event.users
        }
        const updated = [...this.currentEvents, Event];

        this._events$.next(updated);
    }

    updateEvent(index: number, event: any) {
        this.currentEvents.filter((res: any) => {
            res.id == index
        })
        const updated = this.currentEvents.map((item: any) => {
            if (item.id === index) {
                return { ...item, ...event }; 
            }
            return item;
        });

        this._events$.next(updated); 
    }
}
