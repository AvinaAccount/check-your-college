import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseComment } from 'src/app/models/comment';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  @ViewChild('f') msgForm: NgForm | undefined
  comment: CourseComment = new CourseComment(0, '', '','')
  comments: CourseComment[]
  msg: string = ''

  constructor() {
    this.comments = [
      new CourseComment(0, 'Test', 'Test',''),
      new CourseComment(1, 'Test', 'Test',''),
      new CourseComment(2, 'Test', 'Test',''),
      new CourseComment(3, 'Test', 'Test',''),
    ]

  }

  ngOnInit(): void {
  }

  checkF() {
    console.log(this.msgForm);
    this.comments.push(this.comment)
    this.comment = new CourseComment(0, '', '','')

  }

  addComment(comment: CourseComment) {
    this.comments.push(comment)
  }

}
