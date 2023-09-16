"use client"
import APIAxios from "./pages/API/APIAxios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
 return(
  <>
  <APIAxios />
  </>
 )
}
