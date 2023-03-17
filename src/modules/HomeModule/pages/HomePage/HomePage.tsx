import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import "./HomePage.scss";



export const HomePage: React.FC = () => {
  return (
    <div className="homePage">      
      <Header/>
      <Hero/>
      <Section title="Docenione przez krytyków"/>
      <Section title="Popularne teraz"/>
    </div>
  );
};
