import { useState,useEffect } from "react";


export default function useFetch(url, ...dependecies){
 const[data,setData] = useState();
    const getData= async()=>{
    const promise= await fetch(url);
    const json= await promise.json();
    setData(json);
 }
  useEffect(()=>{
    // ho inserito if perchè ritornava sempre undefined al primo caricamento della pagina
    if (!url) return;
    getData();
  },dependecies)
  return data;
}