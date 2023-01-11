import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor() {}
  getAnimals() {
    return [
      {
        name: 'cat',
        age: 2,
      },
      {
        name: 'elephant',
        age: 50,
      },
    ];
  }
}
