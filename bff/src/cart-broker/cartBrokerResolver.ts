import "reflect-metadata";
import {Resolver, Arg, Query} from "type-graphql"
import { Cart } from "./types/cart";

@Resolver(Cart)
export class CartBrokerResolver {
    
    @Query(returns => Cart)
    async cart(
        @Arg("id") id: string
    ): Promise<Cart> {
        return {
            id: "1234"
        }
    }
}