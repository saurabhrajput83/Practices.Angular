import {Component, OnInit, ViewChild} from '@angular/core';
import BrandModel from '../models/brand.model';
import { BrandService } from '../services/brand.service';

@Component({
    selector: 'app-brands',
    templateUrl: '../templates/brands.component.html'
})
export class BrandsComponent implements OnInit{

    brands: BrandModel[] = [];
    @ViewChild('divAddEditBrandModalClose') divAddEditBrandModalClose:any;

    constructor(private brandService:BrandService){

    }

    ngOnInit():void{
        console.log("ngOnInit");
        this.loadBrands();

    }

    loadBrands():void{
        console.log("loadBrands");
        this.brandService.getAllBrands()
        .subscribe(
            data=> this.brands = data,
            error=> console.log(error)
        );

    }

    onmodelCreated(event:any):void{
        console.log("onmodelCreated");
        console.log(event);
        this.divAddEditBrandModalClose.nativeElement.click();
        this.loadBrands();
    }
}