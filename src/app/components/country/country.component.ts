import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ICountry} from '../../interfaces';
import {Subject} from 'rxjs';
import {GET_COUNTRY} from '../../constants';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {
  @Input() code = '';
  country: ICountry | undefined;
  loading = true;
  destroy = new Subject();

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery<{ country: ICountry }>({query: GET_COUNTRY, variables: {code: this.code}})
      .valueChanges
      .subscribe(({loading, data}) => {
        console.log(loading);
        this.loading = loading;
        this.country = data && data.country;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
