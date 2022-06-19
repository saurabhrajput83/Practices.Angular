import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Config from '../../appsettings';
import ProductModel from '../models/product.model';

@Injectable()
export class ProductService{

    products:ProductModel[] = [];

    constructor(private httpClient: HttpClient){
        
    }

    getAllProducts():Observable<ProductModel[]>{
        var apiUrl = Config.baseUrl + 'Product/GetAllProducts';
        return this.httpClient.get<ProductModel[]>(apiUrl);
    }

    getAllActiveProducts():Observable<ProductModel[]> {
        var apiUrl = Config.baseUrl + 'Product/GetAllActiveProducts';
        return this.httpClient.get<ProductModel[]>(apiUrl);
    }

    addProduct(productModel: ProductModel):Observable<ProductModel>{
        var apiUrl = Config.baseUrl + 'Product/Insert';
        return this.httpClient.post<ProductModel>(apiUrl, productModel);
    }

    updateProduct(productModel: ProductModel):Observable<ProductModel>{
        var apiUrl = Config.baseUrl + 'Product/Update';
        return this.httpClient.put<ProductModel>(apiUrl, productModel);
    }

}