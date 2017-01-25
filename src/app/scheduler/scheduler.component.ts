import {Component, OnInit, HostListener} from '@angular/core';
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  private sub: Subscription;
  private timer;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:blur', ['$event'])
  blurEvent(event) {
    if (this.sub !== undefined && this.sub != null) {
      this.sub.unsubscribe();
      this.timer = null;
    }
  }

  @HostListener('window:focus', ['$event'])
  focusEvent(event) {
    if (this.timer == null) {
      this.timer = Observable.timer(2000, 6000);
      this.sub = this.timer.subscribe(t => this.notifyUser());
    }
  }

  notifyUser() {
    // You can make any operation you want periodically like REST API call, any calculation, etc.
    console.log("called !");
    alert("Hello, I am called @ " + new Date());
  }
}
