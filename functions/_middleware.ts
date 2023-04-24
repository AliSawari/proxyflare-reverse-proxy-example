import { Route } from "@flaregun-net/proxyflare-for-pages/build/types"
import proxyflare from "@flaregun-net/proxyflare-for-pages"


const apiRoute: Route = {
  from: { pattern: "https://freedom-fighter.xyz/redirect", alsoMatchWWWSubdomain: true },
  to: { url: "https://hosted-service-test.ali-dragon-swr8371.workers.dev/" },
}

const routes = [apiRoute]


export const onRequest: PagesFunction[] = [
  (context) =>
    proxyflare({
      config: {
        global: { debug: true },
        routes,
      },
    })(context),
  // other Pages plugins and middleware
]