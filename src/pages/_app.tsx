import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { poppins } from "@assets/fonts/poppins";
import SnackbarProvider from "@contexts/Snackbar";
import Head from "@components/shared/settings/Head";

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
      <Head />
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <div className={poppins.className}>
            <Component {...pageProps} />
          </div>
        </SnackbarProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
