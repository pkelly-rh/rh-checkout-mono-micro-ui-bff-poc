import { ObjectType, Field } from "type-graphql";


@ObjectType("OptionsType")
export class Options {

  @Field({ nullable: true })
  public id?: number;


  @Field({ nullable: true })
  public type?: string;


  @Field({ nullable: true })
  public value?: string;


  @Field({ nullable: true })
  public sortPriority?: number;

}