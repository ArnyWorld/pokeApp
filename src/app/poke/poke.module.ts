import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { SharedComponent } from '../shared/shared.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    CardComponent,
    GridCardComponent,
    SharedComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    GridCardComponent
  ]
})
export class PokeModule { }
