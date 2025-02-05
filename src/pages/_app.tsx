import { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "@components/Footer";
import { poppins } from "@assets/fonts/poppins";

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
      <div className={poppins.className}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
