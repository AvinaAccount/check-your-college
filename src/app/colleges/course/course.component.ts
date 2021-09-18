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
      new Course(0, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
      new Course(1, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
      new Course(2, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
      new Course(3, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
      new Course(4, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
      new Course(5, 'Test', 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'),
    ]
  }

  ngOnInit(): void {
  }

}
