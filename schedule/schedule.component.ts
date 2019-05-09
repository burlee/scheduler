import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  today: any = moment().subtract(7, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');
  days: Day[] = [];
  houers: Array<string> = [];
  schedules: Array<string | number> = [];
  constructor() { }

  ngOnInit() {
    this.getScheduleRange();
    moment.locale('pl');
  }

  getSchedule(day, h, i, row) {
    console.log(day, h, i);
    // this.days[row].houers[i] = !this.articles[index].isActive;
    console.log(this.days[row])
  }

  getScheduleRange() {
    for (let i = 0; i < 7; i++) {
      this.days.push({
        date: moment().subtract(i, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        houers: this.houers
      })
    }


    for (let i = 0; i < 24; i++) {
      if (this.houers.length < 10) {
        this.houers.push(`0${i}`);
      } else {
        this.houers.push(i.toString());
      }
    }

  }

  getNameOfDay(day): string {
    return moment(day).format('dddd');
  }
}


export interface Day {
  date: string;
  houers?: Array<string | number>;
  name?: string;
}