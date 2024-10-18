import { Body, Controller, Delete, Get, NotFoundException, Param, Put, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
#products = [
  {
    name: "Washing machine",
    price: 299000
  },
  {
    name: "Bastketball",
    price: 15000
  },
  {
    name: "Detergent",
    price: 4990
  }
]
 
  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
 
  @Get("products")
  listProducts() {
    return this.#products;
  }
 
  @Get("products/:id")
  getProduct(@Param("id") id: string) {
    return this.#products[id];
  }
 
  @Delete("products/:id")
  deleteProduct(@Param("id") id: string) {
    if(!this.#products[id]){
      throw new NotFoundException('No product found!')
    } 
    this.#products.splice(Number(id), 1);
  }
  @Put('products/:id')
  replaceProduct(@Param("id") id: string, @Body() data: ProductDto ) {
    if(!this.#products[id]){
      throw new NotFoundException('No product found!')
    } 
    this.#products[id] = data;
  }
}
 