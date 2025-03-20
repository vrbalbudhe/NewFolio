"use client";
import React, { useState } from 'react'

type TaglineType = {
    line: string;
  };
  const Taglines: TaglineType[] = [
    { line: "1" },
    { line: "2" },
    { line: "3" },
    { line: "4" },
    { line: "5" },
  ];
  
  const Tagline = () => {
    return <p></p>;
  };
  
export default function TaglineChange() {
    const [tagline,setTagline]= useState("1");
  return (
    <div>TaglineChange</div>
  )
}
