import { Component, OnInit } from '@angular/core';
import { College } from '../models/college';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {

  colleges: College[]


  constructor() {
    this.colleges = [
      new College("Test-1", "Test-1", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg"),
      new College("Test-2", "Test-2", "https://www.sapir.ac.il/sites/default/files/2020-03/Aguda.jpg")
    ]
  }

  ngOnInit(): void {
  }

}
