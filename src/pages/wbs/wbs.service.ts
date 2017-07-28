import { Injectable } from "@angular/core";

@Injectable()
export class WbsService{
    //isLogined:boolean = false;
    wbs: Array < any > = [{
      'id': '1225544',
     'name':'Allen',
     'taskId':'M0001',
     'startDay':'2017/5/6',
     'endDay':'2017/05/10',
     'startDay1': '2017/5/6', 
      'endDay1':'2017/05/10',
     'percent': '100%'
    },
    {
      'id': '1225545',
     'name':'Stone',
     'taskId':'M0002',
     'startDay':'2017/5/7',
     'endDay':'2017/05/12',
     'startDay1': '2017/5/6', 
      'endDay1':'2017/05/10',
     'percent': '100%'
    },
    {
      'id': '1225546',
     'name':'Kevin',
     'taskId':'M0003',
     'startDay':'2017/5/7',
     'endDay':'2017/05/12',
     'startDay1': '2017/5/6', 
      'endDay1':'2017/05/10',
     'percent': '100%'
    }
  ];

    constructor(){

    }

    getWbs(){
        return this.wbs;
    }

}

