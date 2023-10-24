import { ObjectType, Field } from "type-graphql";
import { Guest } from "./Guest";
import { LineItems } from "./LineItems";
import { CartPrice } from "./CartPrice";

@ObjectType("CartType")
export class Cart {

  @Field({ nullable: true })
  public id?: string;


  @Field({ nullable: true })
  public createdAt?: string;


  @Field({ nullable: true })
  public lastModifiedAt?: string;


  @Field({ nullable: true })
  public coordGroupType?: string;


  @Field({ nullable: true })
  public coordGroupUserSelected?: boolean;


  @Field({ nullable: true })
  public coordGroupGroupable?: boolean;


  @Field({ nullable: true })
  public guest?: Guest;


  @Field({ nullable: true })
  public cartType?: string;


  @Field(type => [LineItems], { nullable: true })
  public lineItems?: LineItems[];


  @Field({ nullable: true })
  public cartPrice?: CartPrice;


  @Field({ nullable: true })
  public brand?: string;


  @Field({ nullable: true })
  public postalCode?: string;


  @Field({ nullable: true })
  public country?: string;


  @Field({ nullable: true })
  public shipVia?: string;


  @Field({ nullable: true })
  public totalLines?: number;


  @Field({ nullable: true })
  public totalItemQuantity?: number;


  @Field({ nullable: true })
  public orderNumber?: string;


  @Field({ nullable: true })
  public cartState?: string;


  @Field({ nullable: true })
  public rushShippable?: boolean;


  @Field({ nullable: true })
  public schedulableOrder?: boolean;


  @Field({ nullable: true })
  public preferredLanguage?: string;

}