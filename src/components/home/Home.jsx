import React from "react"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import Services from "../pages/Services"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />   
      <Contact />
    </>
  )
}
