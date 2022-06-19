import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands.component';
import { DepartmentsComponent } from './components/departments.component';
import { HomeComponent } from './components/home.component';
import { ProductsComponent } from './components/products.component';

const routes: Routes = [
  {path:'products', component:ProductsComponent},
  {path:'departments', component:DepartmentsComponent},
  {path:'brands', component:BrandsComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
