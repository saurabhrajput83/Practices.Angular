import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import Config from '../../appsettings';
import BrandModel from '../models/brand.model';

@Injectable()
export class BrandService{

    brands:BrandModel[] = [];

    constructor(private httpClient: HttpClient){
       
    }

    getAllBrands():Observable<BrandModel[]>{
       var apiUrl = Config.baseUrl + 'Brand/GetAllBrands';
       return this.httpClient.get<BrandModel[]>(apiUrl);
    }

    getAllActiveBrands():Observable<BrandModel[]>{
        var apiUrl = Config.baseUrl + 'Brand/GetAllActiveBrands';
        return this.httpClient.get<BrandModel[]>(apiUrl);
    }

    addBrand(brandModel: BrandModel):Observable<BrandModel> {
        var apiUrl = Config.baseUrl + 'Brand/Insert';
        return this.httpClient.post<BrandModel>(apiUrl, brandModel);
    }

    updateBrand(brandModel: BrandModel):Observable<BrandModel> {
        var apiUrl = Config.baseUrl + 'Brand/Update';
        return this.httpClient.put<BrandModel>(apiUrl, brandModel);
    }


}