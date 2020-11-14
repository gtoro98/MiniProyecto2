import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { take } from 'rxjs/operators'

import { Observable } from 'rxjs';

import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  character$: Observable<Character>;

  constructor(
    private route: ActivatedRoute, 
    private caracterService: CharacterService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) =>{
      const id = params['id'];
      this.character$ = this.caracterService.getDetails(id);
    })
  }

  goBack(): void{
    this.location.back();
  }

}
