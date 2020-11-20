import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {IContinent} from '../interfaces';
import {GET_CONTINENTS} from '../constants';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  continents$: Observable<IContinent[]>;

  constructor(private apollo: Apollo) {
    this.continents$ = this.apollo
      .watchQuery<{ continents: IContinent[] }>({query: GET_CONTINENTS})
      .valueChanges
      .pipe(
        map(result => result.data),
        filter(data => !!data),
        map(({continents}) => continents)
      );
  }

  ngOnInit(): void {
  }

}
