import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  url:string='http://api.escuelajs.co/api/v1/products'
  title:any
  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.getProduct()
  }

  getProduct():void{
    this.http.get(this.url).subscribe((e)=>{
      this.title=e
      console.log(e)
    })
  }
}
