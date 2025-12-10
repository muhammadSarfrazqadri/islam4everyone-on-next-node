"use client";

import { useState } from "react";
import AnimatedHeading from "@/components/AnimatedHeading";
import SearchBar from "@/components/SearchBar";
import AlphabetFilter from "@/components/AlphabetFilter";
import NameCard from "@/components/NameCard";
import ShowMoreButton from "@/components/ShowMoreButton";

const allNames = [
  { eng: "Ahmed", ur: "احمد", details: "/names/ahmed" },
  { eng: "Ahsan", ur: "احسن", details: "/names/ahsan" },
  { eng: "Bilal", ur: "بلال", details: "/names/bilal" },
  { eng: "Hassan", ur: "حسن", details: "/names/hassan" },
  { eng: "Hussain", ur: "حسین", details: "/names/hussain" },
];

export default function NamesPage() {
  const [query, setQuery] = useState("");
  const [selectedAlpha, setSelectedAlpha] = useState("");
  const [visible, setVisible] = useState(5);

  const filtered = allNames.filter((n) => {
    const name = n.eng || "";
    const matchesQuery = name.toLowerCase().includes(query.toLowerCase());
    const matchesAlpha = selectedAlpha ? name.startsWith(selectedAlpha) : true;
    return matchesQuery && matchesAlpha;
  });

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      
      <AnimatedHeading title="Islamic Names" />

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search name..."
      />

      <AlphabetFilter
        selected={selectedAlpha}
        setSelected={setSelectedAlpha}
        onClearAll={() => {
          setQuery("");
          setSelectedAlpha("");
        }}
      />

      {/* LIST */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {filtered.slice(0, visible).map((item, i) => (
          <NameCard
            key={i}
            eng={item.eng}
            ur={item.ur}
            details={item.details}
          />
        ))}
      </div>

      {/* SHOW MORE */}
      {visible < filtered.length && (
        <ShowMoreButton onClick={() => setVisible(visible + 5)} />
      )}
    </div>
  );
}
