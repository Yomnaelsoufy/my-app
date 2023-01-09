import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  animallist: Animal[] = [];
  constructor() {}
  ngOnInit(): void {
    this.animallist = [
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
