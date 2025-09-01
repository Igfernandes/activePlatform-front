import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { poppins } from "@assets/fonts/poppins";
import SnackbarProvider from "@contexts/Snackbar";
import Head from "@components/shared/settings/Head";
import { I18nProvider } from "@contexts/I18n";

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
    <>
      <I18nProvider>
        <Head />

        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <div className={poppins.className}>
              <Component {...pageProps} />
            </div>
          </SnackbarProvider>
        </QueryClientProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;
