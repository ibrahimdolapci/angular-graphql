import {Component, Input, OnInit} from '@angular/core';
import {ILanguage} from '../../interfaces';

const colors = ['geekblue', 'green', 'volcano', 'magenta', 'purple'];

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() set language({name}: ILanguage) {
    const index = name.length % colors.length;
    this.color = colors[index];
    this.name = name;
  }

  name: string | undefined;
  color = 'green';

  constructor() {
  }

  ngOnInit(): void {
  }
}
