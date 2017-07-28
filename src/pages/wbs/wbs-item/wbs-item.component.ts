import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { WbsService } from '..//wbs.service';

@Component({
  selector: 'app-wbs-item',
  templateUrl: './wbs-item.component.html',
  styleUrls: ['./wbs-item.component.scss']
})
export class WbsItemComponent implements OnInit {
  @Input() wbs:any
  constructor(private wbsSur:WbsService) { 
  }

  ngOnInit() {
  }

}
