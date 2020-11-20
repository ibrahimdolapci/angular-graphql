import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContinentComponent} from './continent.component';
import {RouterModule, Routes} from '@angular/router';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {ComponentsModule} from '../../components';
import {NzModalModule} from 'ng-zorro-antd/modal';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'AF'},
  {path: ':continent', component: ContinentComponent}
];

@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzModalModule,
    ComponentsModule
  ]
})
export class ContinentModule {
}
