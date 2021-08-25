import { CourseComment } from './../../../../models/comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: CourseComment = new CourseComment(0, '', '','')
  myDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
