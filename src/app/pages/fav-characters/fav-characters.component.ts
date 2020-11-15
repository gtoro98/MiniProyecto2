import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-fav-characters',
  templateUrl: './fav-characters.component.html',
  styleUrls: ['./fav-characters.component.scss']
})
export class FavCharactersComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  }

  showGoUpButton = false;
  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll', [])
  @Input() isAuthenticated = false;

  onWindowScroll(): void{
    const yOffset = window.pageYOffset;

    if((yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight){
      this.showGoUpButton = true;
    }
    else if(this.showGoUpButton && (yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = true;
    }
  }

  onScrollDowm(): void{
    if(this.info.next){
      this.pageNum++;
      this.getCharacters();

    }
  }

  onScrollTop(): void{
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private getCharactersByQuery(): void{

    this.route.queryParams.pipe().subscribe((params: ParamMap) => {
      console.log("Params -->", params)
      this.query = params['q'];
      console.log(this.query)
      this.getCharacters();
      
    })
  }

  private getCharacters(): void{
    this.characterService.searchCharacters(this.query, this.pageNum)
    .pipe().subscribe((res: any) => {
 
      if(res?.results?.length){
        console.log("scrolling down")
        const {info, results} = res;  
        this.characters = [...this.characters, ...results];
        this.info = info
 
      }
      else{
        this.characters = [];
      } 
    })
  }

}
