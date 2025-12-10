"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import AlphabetFilter from "@/components/AlphabetFilter";
import ListCard from "@/components/ListCard";
import { allNaats } from "../data";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function WrittenNaatsPage() {
  const [query, setQuery] = useState("");
  const [selectedAlpha, setSelectedAlpha] = useState("");

  const filtered = allNaats.filter((n) => {
    const matchQuery =
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.poet.toLowerCase().includes(query.toLowerCase());

    const matchAlpha = selectedAlpha
      ? n.title.toUpperCase().startsWith(selectedAlpha)
      : true;

    return matchQuery && matchAlpha;
  });

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 dark:from-gray-900 dark:via-gray-800 dark:to-black">

      <AnimatedHeading
        title="Written Naats"
      />

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search Naat or Poet..."
      />

      <AlphabetFilter
        selected={selectedAlpha}
        setSelected={setSelectedAlpha}
        onClearAll={() => {
          setQuery("");
          setSelectedAlpha("");
        }}
      />

      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {filtered.map((n) => (
          <ListCard
            key={n.slug}
            title={n.title}
            subtitle={`Poet: ${n.poet}`}
            link={`/naats/${n.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
