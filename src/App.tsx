import React from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Hero title="Code Learner" />
      <Services />
      <Projects />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
