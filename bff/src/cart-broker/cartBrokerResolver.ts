import 'reflect-metadata'
import { Resolver, Arg, Query } from 'type-graphql'
import { Cart } from './types/Cart'
import fetch from "node-fetch"
import { StopWatch } from '../util/StopWatch';
import https from 'https';



@Resolver(Cart)
export class CartBrokerResolver {
  @Query((returns) => Cart)
  async cart(@Arg('id') cartId: string): Promise<Cart> {
    const stopWatch = new StopWatch();
    const getAccessToken = async () => {
      const response = await fetch(
        'https://auth.rhnonprod.com/auth/realms/staging/protocol/openid-connect/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: [
            'grant_type=client_credentials',
            'client_id=rh-experience-layer',
            'client_secret=2119483c-ab18-42b4-9bdc-05d16720d173',
            'scope=rhapsody-user-svc',
          ].join('&'),
        }
      )
      const data = await response.json()
      console.log("after getAccessToken auth.rhnonprod.com", stopWatch.time())
      return data?.access_token
    }
    const access_token = await getAccessToken()

    const getCart = async () => {
        const response = await fetch(`https://staging.internal.rhapsodynonprod.com/rhdo-cart-broker-v1/carts/${cartId}`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${access_token}`
            },
            agent: new https.Agent({
              rejectUnauthorized: false,
            })
        })
        const data = await response.json()
        return data
    }
    const cart = await getCart()

    console.log("after getCart rhdo-cart-broker-v1/carts/${cart_id}", stopWatch.time())
    return cart
  }
}
