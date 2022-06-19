import {Component, ViewChild} from '@angular/core';
import ProductModel from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: '../templates/products.component.html'
})
export class ProductsComponent{

    products: ProductModel[] = [];


    @ViewChild('divAddEditProductModalClose') divAddEditProductModalClose:any;

    constructor(private productService:ProductService){

    }

    ngOnInit():void{
        console.log("ngOnInit");
        this.loadProducts();

    }

    loadProducts():void{
        console.log("loadProducts");
        this.productService.getAllProducts()
        .subscribe(
            data=> this.products = data,
            error=> console.log(error)
        );

    }

    addToCart(event:any):void {
        console.log(event);
    }

    onmodelCreated(event:any):void{
        console.log("onmodelCreated");
        console.log(event);
        this.divAddEditProductModalClose.nativeElement.click();
        this.loadProducts();
    }
}

