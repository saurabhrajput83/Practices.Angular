import {Component, Output, EventEmitter} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import DepartmentModel from '../models/department.model';


@Component({
    selector: 'app-addeditdepartment',
    templateUrl: '../templates/addeditdepartment.component.html'
})
export class AddEditDepartmentComponent{

    @Output() modelCreated:EventEmitter<any> = new EventEmitter<any>();
    constructor(private departmentService: DepartmentService){

    }

    onSubmit(addAditEditDepartmentForm: NgForm):void{
        console.log(addAditEditDepartmentForm);
      
        if(addAditEditDepartmentForm.valid){
            let department = <DepartmentModel>addAditEditDepartmentForm.value;
            console.log(department);
            if(department.departmentId>0){
               
                this.departmentService.updateDepartment(department)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditDepartmentForm.reset();
                    },
                    (error)=> console.log(error)
                );
            } else {
                department.departmentId=0;
                this.departmentService.addDepartment(department)
                .subscribe(
                    (data)=>{
                        this.modelCreated.emit("true");
                        addAditEditDepartmentForm.reset();
                    },
                    (error)=> console.log(error)
                );
            }
        }
        else {

        }
    }
}