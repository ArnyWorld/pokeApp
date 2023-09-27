import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input() public pokeUrl!:string;
  @Input() public pokeAlt!:string;
  public hasLoaded:boolean = false;

  ngOnInit(): void {
    if(!this.pokeUrl)throw new Error('Method not implemented.');
  }

  onLoad(){
    this.hasLoaded = true;
  }

}
