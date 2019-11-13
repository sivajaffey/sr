import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { CommonUseService } from '../service/common-use.service';
import { AuthService } from '../service/auth.service';

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
  constructor(private http: CommonUseService, private auth: AuthService) { }

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
    let uid = this.auth.uid();
    let data = {
      'user_id':uid,
      'question':this.question.value,
      'tags' : this.questionTag
    }
    this.http.post(this.http.apiUrl,data)
    .subscribe(data => {
      console.log(data)
    })
  }

}
