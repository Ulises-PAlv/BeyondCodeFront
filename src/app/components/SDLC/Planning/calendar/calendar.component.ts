import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: []
})
export class CalendarComponent implements OnInit {
    constructor( private http: HttpClient ) { }


    ngOnInit(): void {
        
    }
}


