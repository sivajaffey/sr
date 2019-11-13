import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { CommonUseService } from '../service/common-use.service';

@Component({
  selector: 'app-add-ques',
  templateUrl: './add-ques.component.html',
  styleUrls: ['./add-ques.component.css']
})
export class AddQuesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  questionTag = [];
  question = new FormControl('');
  questionFound: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private http: CommonUseService) { }

  ngOnInit() {
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.questionTag.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.questionTag.indexOf(tag);

    if (index >= 0) {
      this.questionTag.splice(index, 1);
    }
  }
  submitQuestion() {
    console.log(this.questionTag)
    console.log(this.question.value)
    let data = {
      'question':this.question.value,
      'tags' : this.questionTag
    }
    this.http.post('http://localhost:8081/question/',data)
    .subscribe(data => {
      console.log(data)
    })
  }

}
