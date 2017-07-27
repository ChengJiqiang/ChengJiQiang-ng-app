import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"name":"丰田",
    "name_en":"TOYOTA",
      "country":"Japan",
      "sub_name":"corrola",
      "sale_amount":8970},
    {"name":"本田",
      "name_en":"HONDA",
      "country":"Japan",
      "sub_name":"civic",
      "sale_amount":7779},
    {"name":"福特",
      "name_en":"FORD",
      "country":"USA",
      "sub_name":"focus",
      "sale_amount":6780},
    {"name":"大众",
      "name_en":"DASAUTO",
      "country":"German",
      "sub_name":"lavida",
      "sale_amount":9080}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "name":"日产",
      "name_en":"NISSAN",
      "country":"Japan",
      "sub_name":"Bluebird",
      "github":"new_user",
      "sale_amount":7980
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a,b){
      if (a.sale_amount >= b.sale_amount){
        return 1;
      } 
      if (a.sale_amount < b.sale_amount){}
        return -1;
    })
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a,b){
      if (a.sale_amount <= b.sale_amount){
        return 1;
      } 
      if (a.sale_amount > b.sale_amount){}
        return -1;
    })
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function(a,b){
      if (a.sale_amount * Math.random() >= b.sale_amount * Math.random()){
        return 1;
      }
      if (a.sale_amount * Math.random() < b.sale_amount * Math.random()){
        return -1;
      }
    })
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
