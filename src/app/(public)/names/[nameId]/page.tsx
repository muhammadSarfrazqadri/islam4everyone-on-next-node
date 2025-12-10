"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Download } from "lucide-react";

interface NameDetails {
eng: string;
ur: string;
meaning: string;
pronunciation: string;
isIslamic: boolean;
origin: string;
gender: string;
notes?: string;
}

// Simulated database for demo purposes
const namesData: Record<string, NameDetails> = {
ahmed: {
eng: "Ahmed",
ur: "احمد",
meaning: "Highly praised, one who constantly thanks Allah",
pronunciation: "Ah-med",
isIslamic: true,
origin: "Arabic",
gender: "Male",
notes: "One of the names of Prophet Muhammad (PBUH)"
},
bilal: {
eng: "Bilal",
ur: "بلال",
meaning: "Moisture, refreshing, or a name of the first muezzin",
pronunciation: "Bi-lal",
isIslamic: true,
origin: "Arabic",
gender: "Male",
notes: "Famous companion of Prophet Muhammad (PBUH)"
}
// Add more names here
};

interface Props {
params: { name: string };
}

export default function NameDetailPage({ params }: Props) {
const nameKey = params.name       //.toLowerCase();
const data = namesData[nameKey] || namesData["ahmed"]; // fallback
const [lang, setLang] = useState<"eng" | "ur" | "both">("both");

const renderField = (label: string, valueEng: string, valueUr: string) => {
if (lang === "eng") return <p className="text-gray-700 dark:text-gray-300"><strong>{label}:</strong> {valueEng}</p>;
if (lang === "ur") return <p className="text-gray-700 dark:text-gray-300"><strong>{label}:</strong> {valueUr}</p>;
return <p className="text-gray-700 dark:text-gray-300"><strong>{label}:</strong> {valueEng} / {valueUr}</p>;
};

const downloadPDF = () => {
alert("PDF download will be implemented here");
};

const shareLink = () => {
navigator.clipboard.writeText(window.location.href);
alert("Link copied to clipboard!");
};

if (!data) {
  return <p className="text-center text-red-500">No data found.</p>;
}


return (
  <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 dark:from-gray-900 dark:via-gray-800 dark:to-black transition">

    {/* Header */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-300 mb-6"
    >
      {data.eng} / {data.ur}
    </motion.h1>

    {/* Language Toggle */}
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => setLang("eng")}
        className={`px-4 py-2 rounded-lg border ${lang === "eng" ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"}`}
      >
        English
      </button>
      <button
        onClick={() => setLang("ur")}
        className={`px-4 py-2 rounded-lg border ${lang === "ur" ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"}`}
      >
        Urdu
      </button>
      <button
        onClick={() => setLang("both")}
        className={`px-4 py-2 rounded-lg border ${lang === "both" ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"}`}
      >
        Both
      </button>
    </div>

    {/* Details Card */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow space-y-4"
    >
      {renderField("Meaning", data.meaning, data.meaning)}
      {renderField("Pronunciation", data.pronunciation, data.pronunciation)}
      {renderField("Islamic Name?", data.isIslamic ? "Yes" : "No", data.isIslamic ? "ہاں" : "نہیں")}
      {renderField("Origin", data.origin, data.origin)}
      {renderField("Gender", data.gender, data.gender)}
      {renderField("Notes", data.notes || "-", data.notes || "-")}
    </motion.div>

    {/* Actions */}
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={downloadPDF}
        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow hover:opacity-90"
      >
        <Download size={18} /> Download PDF
      </button>
      <button
        onClick={shareLink}
        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-xl shadow hover:opacity-90"
      >
        <Share2 size={18} /> Share
      </button>
    </div>

  </div>
);
}