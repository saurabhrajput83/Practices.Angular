import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ProductService } from '../services/product.service';
import ProductModel from '../models/product.model';
import BrandModel from '../models/brand.model';
import DepartmentModel from '../models/department.model';
import { BrandService } from '../services/brand.service';
import { DepartmentService } from '../services/department.service';

@Component({
    selector: 'app-addeditproduct',
    templateUrl: '../templates/addeditproduct.component.html'
})
export class AddEditProductComponent implements OnInit{

    activeBrands: BrandModel[] = [];
    activeDepartments: DepartmentModel[] = [];
    @Output() modelCreated:EventEmitter<any> = new EventEmitter<any>();
    
    constructor(private productService: ProductService,
        private brandService: BrandService,
        private departmentService: DepartmentService){

    }

    ngOnInit(): void {
       this.loadActiveBrands();
       this.loadActiveDepartments(); 
    }

    loadActiveBrands(): void {
        this.brandService.getAllActiveBrands()
        .subscribe(
            data=>this.activeBrands=data,
            error=>console.log(error)
        );
        console.log( this.activeBrands);
    }

    loadActiveDepartments(): void {
        this.departmentService.getAllActiveDepartments()
        .subscribe(
            data=>this.activeDepartments=data,
            error=>console.log(error)
        );
        console.log( this.activeDepartments);
    }

    onSubmit(addAditEditProductForm: NgForm):void{
        console.log(addAditEditProductForm);
      
        if(addAditEditProductForm.valid){
            let product = <ProductModel>addAditEditProductForm.value;
            console.log(product);
            if(product.productId>0){
               
                this.productService.updateProduct(product)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditProductForm.reset();
                    },
                    (error)=> console.log(error)
                );
            } else {
                product.productId=0;
                this.productService.addProduct(product)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditProductForm.reset();
                    },
                    (error)=> console.log(error)
                );
            }
        }
        else {

        }
    }
}