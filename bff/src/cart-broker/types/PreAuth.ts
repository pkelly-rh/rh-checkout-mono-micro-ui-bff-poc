import { ObjectType, Field } from "type-graphql";
import { Cart } from "./Cart";

@ObjectType("PreAuthType")
export class PreAuth {

  @Field({ nullable: true })
  public cart?: Cart;

}