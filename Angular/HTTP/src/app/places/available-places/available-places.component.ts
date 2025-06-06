import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false)
  private httpClient = inject(HttpClient)
  private destroyRef = inject(DestroyRef)
  localHost = 'http://localhost:3000'

  ngOnInit(){
    this.isFetching.set(true)
    const sub = this.httpClient
    .get<{places: Place[]}>(this.localHost+'/places').subscribe({
      next: (resData) => {
        this.places.set(resData.places)
      },
      complete: () => {
        this.isFetching.set(false)
      }
    })
    this.destroyRef.onDestroy(()=>{
      sub.unsubscribe()
    })
  }
}
