import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICountry} from '../../interfaces';
import {Observable} from 'rxjs';
import {GET_COUNTRIES} from '../../constants';
import {filter, map, switchMap} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {NzModalService} from 'ng-zorro-antd/modal';
import {CountryComponent} from '../../components/country/country.component';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {

  countries$: Observable<ICountry[]>;
  isVisible = false;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private cd: ChangeDetectorRef,
    private modalService: NzModalService
  ) {

    const continent$ = this.route.paramMap.pipe(map(params => params.get('continent')));

    this.countries$ = continent$.pipe(
      switchMap(continent => {
        const options = {query: GET_COUNTRIES, variables: {continent}};
        return this.apollo.watchQuery<{ countries: ICountry[] }>(options).valueChanges;
      }),
      map(result => result.data),
      filter(data => !!data),
      map(({countries}) => countries)
    );
  }

  showModal(country: ICountry): void {
    this.modalService.create({
      nzTitle: 'Country Detail',
      nzContent: CountryComponent,
      nzComponentParams: {code: country.code},
      nzFooter: null
    });
    this.cd.markForCheck();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
  }

}
