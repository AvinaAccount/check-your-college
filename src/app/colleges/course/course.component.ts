import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[]

  constructor() {
    this.courses = [
      new Course(0, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
      new Course(1, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
      new Course(2, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
      new Course(3, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
      new Course(4, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
      new Course(5, 'Test', 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg'),
    ]
  }

  ngOnInit(): void {
  }

}
