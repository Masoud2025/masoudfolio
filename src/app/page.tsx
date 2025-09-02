 'use client'
 import Cards from "@/components/layout/grid/cards";
import HeaderBanner from "@/components/layout/header/Banner";
import Navbar from "@/components/layout/header/Navbar";
import type { NextPage } from "next";
 const Home:NextPage = ()=> {
  return (
  <div>
    <HeaderBanner/>
    <Navbar/>
    <Cards/>
  </div>
  );
}
export default Home;