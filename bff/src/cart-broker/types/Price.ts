import { ObjectType, Field } from "type-graphql";


@ObjectType("PriceType")
export class Price {

  @Field({ nullable: true })
  public itemPrice?: number;


  @Field({ nullable: true })
  public finalPrice?: number;


  @Field({ nullable: true })
  public totalPrice?: number;


  @Field({ nullable: true })
  public originalPrice?: number;


  @Field({ nullable: true })
  public memberPrice?: number;


  @Field({ nullable: true })
  public currencyCode?: string;


  @Field({ nullable: true })
  public priceStatus?: string;


  @Field({ nullable: true })
  public priceType?: string;

}