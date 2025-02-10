import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "@components/Footer";
import { poppins } from "@assets/fonts/poppins";
import SnackbarProvider from "@contexts/Snackbar";
import { appWithTranslation } from "next-i18next";
import nextI18next from "../../next-i18next.config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <div className={poppins.className}>
          <Component {...pageProps} />
          <Footer />
        </div>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp, nextI18next);
