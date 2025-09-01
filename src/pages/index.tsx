import { Header } from "@components/Public/Header";
import { AboutUs } from "@components/Public/Home/AboutUs";
import { Events } from "@components/Public/Home/Events";
import { FAQ } from "@components/Public/Home/FAQ";
import { Gallery } from "@components/Public/Home/Gallery";
import { Partners } from "@components/Public/Home/Partners";
import { Main } from "@components/Public/Home/Main";
import { Footer } from "@components/Public/Footer";
import { Subscribe } from "@components/Public/Home/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <AboutUs />
      <Events />
      <Gallery />
      <Partners />
      <FAQ />
      <Subscribe />
      <Footer type="DEFAULT" />
    </>
  );
}
