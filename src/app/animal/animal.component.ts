import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
import { AnimalsService } from '../services/animals.service';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  animallist: Animal[] = [];
  constructor(private animalservice: AnimalsService) {}
  onlike(animal: Animal): void {
    window.alert(`I like the ${animal.name}`);
  }
  ngOnInit(): void {
    this.animallist = this.animalservice.getAnimals();
  }
}
