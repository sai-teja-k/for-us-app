import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css'
})
export class CountdownComponent implements OnInit {
  daysSince: number = 0;
  
  ngOnInit(): void {
    const startDate = new Date('2024-08-02');
    const currentDate = new Date();
    const diffDate = Math.abs(currentDate.getTime() - startDate.getTime());
    this.daysSince = Math.floor(diffDate / (24*60*60*1000));
  }
}
