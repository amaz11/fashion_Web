import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Nabvar from "../components/Nabvar";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Nabvar />
      <div className="mt-0 sm:mt-24 "></div>
      <Slider />
      <Feature />
      <Footer />
    </>
  );
}
