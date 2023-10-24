import { ObjectType, Field } from "type-graphql";


@ObjectType("GuestType")
export class Guest {

  @Field({ nullable: true })
  public userId?: string;


  @Field({ nullable: true })
  public email?: string;


  @Field({ nullable: true })
  public type?: string;


  @Field({ nullable: true })
  public shopperRef?: string;


  @Field({ nullable: true })
  public userServiceVersion?: string;

}