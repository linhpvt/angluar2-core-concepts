import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-longdescription',
  templateUrl: './course-longdescription.component.html',
  styleUrls: ['./course-longdescription.component.css'],
})
export class CourseLongdescriptionComponent implements OnInit {
  constructor() {}

  @Input('longdesc')
  longDescription: string;

  ngOnInit(): void {}
}
