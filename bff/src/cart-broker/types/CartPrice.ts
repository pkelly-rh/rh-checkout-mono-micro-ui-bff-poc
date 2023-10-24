import { ObjectType, Field } from "type-graphql";
import { Freight } from "./Freight";

@ObjectType("CartPriceType")
export class CartPrice {

  @Field({ nullable: true })
  public currencyCode?: string;


  @Field({ nullable: true })
  public itemTotal?: number;


  @Field({ nullable: true })
  public freightTotal?: number;


  @Field({ nullable: true })
  public feeTotal?: number;


  @Field({ nullable: true })
  public subtotal?: number;


  @Field({ nullable: true })
  public tax?: number;


  @Field({ nullable: true })
  public totalPrice?: number;


  @Field({ nullable: true })
  public freight?: Freight;


  @Field({ nullable: true })
  public preBillAmount?: number;


  @Field({ nullable: true })
  public memberSavings?: number;


  @Field({ nullable: true })
  public savingsWithMemberPurchase?: number;


  @Field({ nullable: true })
  public remainingToBill?: number;

}