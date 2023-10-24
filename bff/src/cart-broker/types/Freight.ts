import { ObjectType, Field } from "type-graphql";


@ObjectType("FreightType")
export class Freight {

  @Field({ nullable: true })
  public ground?: number;

}