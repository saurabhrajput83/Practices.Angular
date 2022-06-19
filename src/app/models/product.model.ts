import BrandModel from "./brand.model";
import DepartmentModel from "./department.model";

export default interface ProductModel{
    productId: number,
    productName: string,
    productDescription: string,
    isActive: boolean,
    listPrice: number,
    sellingPrice: number,
    quantity: number,
    brandId: number,
    departmentId: number,
    brand: BrandModel,
    department: DepartmentModel
}