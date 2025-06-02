import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit/*, OnDestroy */{
  currentStatus = signal<"online" | "offline" | "unknown">("offline");
  //private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef)
  
  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    })
  }
  
  ngOnInit(): void {
    console.log('OnInit')
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus.set('online');
      } else if (rand < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 2000)
    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  ngAfterViewInit(){
    console.log('AfterViewInit')
  }

  /*ngOnDestroy(){
    clearTimeout(this.interval)
  }*/
}
