import {Component, Output, EventEmitter} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import BrandModel from '../models/brand.model';
import { BrandService } from '../services/brand.service';
//import BrandModel from '../models/brand.model';

@Component({
    selector: 'app-addeditbrand',
    templateUrl: '../templates/addeditbrand.component.html'
})
export class AddEditBrandComponent{

    @Output() modelCreated:EventEmitter<any> = new EventEmitter<any>();
    constructor(private brandService: BrandService){

    }

    onSubmit(addAditEditBrandForm: NgForm):void{
        console.log(addAditEditBrandForm);
      
        if(addAditEditBrandForm.valid){
            var brand = <BrandModel>addAditEditBrandForm.value;
            console.log(brand);
            if(brand.brandId>0){
               
                this.brandService.updateBrand(brand)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditBrandForm.reset();
                    },
                    (error)=> console.log(error)
                );
            } else {
                brand.brandId=0;
                this.brandService.addBrand(brand)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditBrandForm.reset();
                    },
                    (error)=> console.log(error)
                );
            }
        }
        else {

        }
    }
}