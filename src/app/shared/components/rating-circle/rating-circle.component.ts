import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-rating-circle',
  templateUrl: './rating-circle.component.html',
  styleUrls: ['./rating-circle.component.scss'],
})
export class RatingCircleComponent {
  @Input() customClass: string

  @Input() set rating(value: number) {
    const decimalNumber = value / 10
    this.ratingScore = +value.toFixed(1)
    this.strokeOffset = this.circumference * (1 - decimalNumber)
  }

  public circleRadius = 40
  public circumference = 2 * Math.PI * this.circleRadius
  public ratingScore: number
  public strokeOffset: number
}
