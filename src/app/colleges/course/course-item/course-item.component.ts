import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() id: number
  @Input() course: Course = new Course(0, '','')
  
  constructor() {
    this.id = 0
  }

  ngOnInit(): void {
  }

}
