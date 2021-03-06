import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {LanguageComponent} from './language/language.component';
import {CountryComponent} from './country/country.component';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzEmptyModule} from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [LanguageComponent, CountryComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzListModule,
    NzGridModule,
    NzSkeletonModule,
    NzEmptyModule
  ],
  exports: [LanguageComponent, CountryComponent]
})
export class ComponentsModule {
}
