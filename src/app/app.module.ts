import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditBrandComponent } from './components/addeditbrand.component';
import { BrandsComponent } from './components/brands.component';
import { DepartmentsComponent } from './components/departments.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';
import { FooterComponent } from './components/shared/footer.component';
import { HeaderComponent } from './components/shared/header.component';
import { AddEditDepartmentComponent } from './components/addeditdepartment.component';
import { AddEditProductComponent } from './components/addeditproduct.component';

import { BrandService } from './services/brand.service';
import { DepartmentService } from './services/department.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BrandsComponent,
    AddEditBrandComponent,
    DepartmentsComponent,
    AddEditDepartmentComponent,
    ProductsComponent,
    AddEditProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BrandService,
    DepartmentService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
