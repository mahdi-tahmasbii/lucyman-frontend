import "@/styles/globals.css";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider session={...pageProps}>
    <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp;
