import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";

export const { getClient } = registerApolloClient(() => {
  const cookieStore = cookies();
  const prepr_uid = cookieStore.get("__prepr_uid");
  const uid = prepr_uid.value ? prepr_uid.value : "";

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: process.env.PREPR_GRAPHQL_URL,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
      headers: {
        "Prepr-Customer-Id": uid,
      },
    }),
    // defaultOptions: {
    //   query: {
    //     fetchPolicy: "no-cache",
    //   },
    // },
  });
});
