import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../model/Animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css'],
})
export class ZooAnimalComponent implements OnInit {
  @Input() animal: Animal;
  @Output() liked = new EventEmitter();
  constructor() {
    this.animal = {
      name: 'dog',
      age: 3,
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
