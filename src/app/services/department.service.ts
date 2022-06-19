import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import Config from '../../appsettings';
import DepartmentModel from '../models/department.model';

@Injectable()
export class DepartmentService{

    departments:DepartmentModel[] = [];

    constructor(private httpClient: HttpClient){
       
    }

    getAllDepartments():Observable<DepartmentModel[]> {
        var apiUrl = Config.baseUrl + 'Department/GetAllDepartments';
        return this.httpClient.get<DepartmentModel[]>(apiUrl);
    }

    getAllActiveDepartments():Observable<DepartmentModel[]> {
        var apiUrl = Config.baseUrl + 'Department/GetAllActiveDepartments';
        return this.httpClient.get<DepartmentModel[]>(apiUrl);
    }

    addDepartment(departmentModel: DepartmentModel):Observable<DepartmentModel>{
        var apiUrl = Config.baseUrl + 'Department/Insert';
        return this.httpClient.post<DepartmentModel>(apiUrl, departmentModel);
    }

    updateDepartment(departmentModel: DepartmentModel):Observable<DepartmentModel>{
        var apiUrl = Config.baseUrl + 'Department/Update';
        return this.httpClient.put<DepartmentModel>(apiUrl, departmentModel);
    }

}