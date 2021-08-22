import { Component, Input, OnInit } from '@angular/core';
import { College } from 'src/app/models/college';

@Component({
  selector: 'app-college-item',
  templateUrl: './college-item.component.html',
  styleUrls: ['./college-item.component.css']
})
export class CollegeItemComponent implements OnInit {
  @Input() id: number
  @Input() college: College = new College(0, "", "", "")

  constructor() {
    this.id = 0
  }

  ngOnInit(): void {

  }

}
