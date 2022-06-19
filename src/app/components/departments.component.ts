import {Component, ViewChild} from '@angular/core';
import DepartmentModel from '../models/department.model';
import { DepartmentService } from '../services/department.service';

@Component({
    selector: 'app-departments',
    templateUrl: '../templates/departments.component.html'
})
export class DepartmentsComponent{

    departments: DepartmentModel[] = [];
    @ViewChild('divAddEditDepartmentModalClose') divAddEditDepartmentModalClose:any;

    constructor(private departmentService:DepartmentService){

    }

    ngOnInit():void{
        console.log("ngOnInit");
        this.loadDepartments();

    }

    loadDepartments():void{
        console.log("loadBrands");
        this.departmentService.getAllDepartments()
        .subscribe(
            data=> this.departments = data,
            error=> console.log(error)
        );

    }

    onmodelCreated(event:any):void{
        console.log("onmodelCreated");
        console.log(event);
        this.divAddEditDepartmentModalClose.nativeElement.click();
        this.loadDepartments();
    }
}
