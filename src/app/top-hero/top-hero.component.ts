import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.css']
})
export class TopHeroComponent implements OnInit {

  constructor() {
  }

  @Input() hero: Hero;

  ngOnInit() {
  }

}
