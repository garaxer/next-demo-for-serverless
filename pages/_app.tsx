import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Auth0Provider } from "@auth0/auth0-react";
import envProps from '../env';

function MyApp({ Component, pageProps }: AppProps) {
  console.log("envs: " + process.env.AUTH0_ISSUER_BASE_URL);
  console.log("envs: " + process.env.REACT_APP_AUTH0_ISSUER_BASE_URL);
  
  return (
    <UserProvider>
      <Auth0Provider
        // domain={process.env.AUTH0_ISSUER_BASE_URL || process.env.REACT_APP_AUTH0_ISSUER_BASE_URL || "" }
        // clientId={process.env.AUTH0_CLIENT_ID || process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
        {...envProps}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </UserProvider>
  );
}

export default MyApp;
