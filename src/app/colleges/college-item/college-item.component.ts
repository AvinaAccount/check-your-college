import { Component, Input, OnInit } from '@angular/core';
import { College } from 'src/app/models/college';

@Component({
  selector: 'app-college-item',
  templateUrl: './college-item.component.html',
  styleUrls: ['./college-item.component.css']
})
export class CollegeItemComponent implements OnInit {

  @Input() college: College = new College("", "", "")

  constructor() { }

  ngOnInit(): void {
  }

}
