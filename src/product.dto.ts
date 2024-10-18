import { IsDefined, IsNumber, IsString, Min } from "class-validator"

export class ProductDto{
    @IsDefined({
        message: "Name field must be filled!"
    })
    @IsString()
    name : string
    @IsDefined({
        message: "Price field must be filled!"
    })
    @IsNumber()
    @Min(1)
    price : number
}