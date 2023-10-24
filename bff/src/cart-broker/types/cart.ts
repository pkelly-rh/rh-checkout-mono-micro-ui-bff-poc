import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Cart {
  @Field((type) => String)
  id!: string
}
