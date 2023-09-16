import { Component, OnInit, inject } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {
  private _pokeService = inject(PokeService);
  pokeList: Array<any> = [];
  page:number = 0;
  state:boolean = true;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._pokeService.getList(this.page).subscribe(
      (data:any)=>{
        console.log(data)
        this.pokeList = data.results
        this.state = false;
      }
    )
  }

  nextPage(){
    this.page+=8;
   this.getData();
   }

   prevPage(){
    this.page-=8;
    this.getData();
  }

}
