import React from "react";
import Navbar from "./components/Navabar";
import ProfileSection from "./components/Profile";
import ContactForm from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="bg-white text-black dark:bg-[#222] dark:text-gray-700 min-h-screen">
    <Navbar />
    <section id="home">

    </section>
    <section id="about" className="h-screen min-h-screen  flex items-center justify-center">
      <ProfileSection/>
      </section>
    <section id="projects" className="h-screen">
      Projects Section
      </section>      
    <section id="contact" className="min-h-fit min-w-full p-4 justify-self-center">
      <ContactForm/>
    </section>
    </div>
  );
}

export default App;
