import { ObjectType, Field } from "type-graphql";
import { Price } from "./Price";
import { Options } from "./Options";

@ObjectType("LineItemsType")
export class LineItems {

  @Field({ nullable: true })
  public type?: string;

  @Field({ nullable: true })
  public lineId?: string;

  @Field({ nullable: true })
  public quantity?: number;

  @Field({ nullable: true })
  public sku?: string;

  @Field({ nullable: true })
  public skuType?: string;

  @Field({ nullable: true })
  public brand?: string;

  @Field({ nullable: true })
  public displayName?: string;

  @Field({ nullable: true })
  public shipVia?: string;

  @Field({ nullable: true })
  public shipViaCode?: number;

  @Field({ nullable: true })
  public giftWrap?: boolean;

  @Field({ nullable: true })
  public deliveryEta?: string;

  @Field({ nullable: true })
  public dc?: number;

  @Field({ nullable: true })
  public coordGroup?: number;

  @Field({ nullable: true })
  public groundFreightExempt?: boolean;

  @Field({ nullable: true })
  public price?: Price;

  @Field(type => [Options], { nullable: true })
  public options?: Options[];

  @Field({ nullable: true })
  public preBillCategory?: number;

  @Field({ nullable: true })
  public productId?: string;

  @Field({ nullable: true })
  public multiSku?: boolean;

  @Field({ nullable: true })
  public availabilityStatus?: string;

  @Field({ nullable: true })
  public maxCartQuantity?: number;

}