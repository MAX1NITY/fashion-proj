import '../App.css';
import { Best, Collections, Contact, Footer, Header, Products } from "../components";

function Home() {
  return (
    <>
      <Header />
      <Collections />
      <Products />
      <Best />
      <Contact />
      <Footer />   
    </>
  );
}

export default Home;
