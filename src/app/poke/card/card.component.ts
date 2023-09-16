import { Component, Input, OnInit, inject } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _pokeService = inject(PokeService);
  @Input()info:any;
  url:string = "";
  name:string="";
  attack:number = 0;
  defense:number = 0;
  speed:number = 0;
  hp: number = 0;
  xp:number = 0;

  ngOnInit(): void {
    this._pokeService.getPokeData(this.info.name)
    .subscribe((data:any) =>{
      this.url = data.sprites.other.dream_world.front_default
      this.name = data.name;
      this.attack = data.stats[1].base_stat
      this.defense = data.stats[2].base_stat
      this.speed = data.stats[5].base_stat
      this.hp = data.stats[0].base_stat
      this.xp = data.base_experience
      console.log(data)
    })
  }

}
