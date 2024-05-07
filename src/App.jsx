import { Fragment } from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/footer/Footer";



function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
