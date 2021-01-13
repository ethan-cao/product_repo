import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  // allow container component to pass data to this component
  @Input()
  rating: number;

  // allow this component to pass event to container component
  // can only decorate Event
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`clicked ${this.rating}`);
  }
}