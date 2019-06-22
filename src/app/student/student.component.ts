import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  @Input() userName:String;
  array = [1,2,3,4,5]
  constructor() { }

  ngOnInit() {
  }

}
