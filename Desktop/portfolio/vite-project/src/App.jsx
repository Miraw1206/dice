import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";



export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Cards />
      <Footer />
      <Contact />
      <About />

    </main>
  );
}