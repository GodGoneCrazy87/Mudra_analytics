"use client";
import React, { useState } from "react";

export default function Report() {
  const [fileNames, setFileNames] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [extractedText, setExtractedText] = useState("");
  const [dataExtracted, setDataExtracted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [navigating, setNavigating] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const pdfFiles = files.filter((file) => file.type === "application/pdf");

    if (pdfFiles.length > 0) {
      setSelectedFiles(pdfFiles);
      setFileNames(pdfFiles.map((file) => file.name));
    } else {
      setSelectedFiles([]);
      setFileNames([]);
      alert("Please select valid PDF file(s).");
    }
  };

  const handleExtractData = () => {
    if (selectedFiles.length === 0) {
      alert("Please upload a file first.");
      return;
    }

    setIsLoading(true);
    setExtractedText("");

    // Simulate 10-second extraction delay
    setTimeout(() => {
      setExtractedText("✔️ Extraction complete. You may now see the results.");
      setDataExtracted(true);
      setIsLoading(false);
    }, 10000);
  };

  const handleSeeResults = () => {
    setNavigating(true);
    // Simulate 5-second delay before navigation
    setTimeout(() => {
      window.location.href = "/results";
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left text content */}
        <div className="flex-1 font-fceb text-center lg:text-left">
          <h1 className="text-[4rem] md:text-5xl lg:text-7xl font-extrabold mb-8 text-[#D66937] leading-tight">
            Extract Data From Report
          </h1>

          <div className="text-3xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-[isocp3] font-extrabold space-y-6">
            <p>
              Upload your health report PDF(s) to automatically extract key wellness indicators including:
            </p>
            <ul className="list-disc list-inside text-cyan-400 text-2xl space-y-2">
              <li>Chakra Energy Field Images & Alignment</li>
              <li>Stress and Relaxation Index</li>
              <li>Brainwave Data (Alpha, Beta, Theta)</li>
              <li>HRV (Heart Rate Variability)</li>
              <li>Pre- and Post-Yoga Comparisons</li>
            </ul>
          </div>

          {fileNames.length > 0 && (
            <div className="mt-8 text-cyan-400 font-semibold text-lg sm:text-xl space-y-1 text-left lg:text-left">
              <p>Selected file{fileNames.length > 1 ? "s" : ""}:</p>
              <ul className="list-disc list-inside">
                {fileNames.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right upload button */}
        <div className="w-full sm:w-auto flex justify-center lg:justify-end">
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block bg-[#D66937] hover:bg-[#bf5a2e] text-white font-fceb font-bold text-xl sm:text-2xl px-8 py-4 rounded-full transition text-center"
          >
            Upload Report{fileNames.length !== 1 ? "s" : ""}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Extract Data button */}
      <button
        onClick={handleExtractData}
        disabled={isLoading}
        className={`mt-12 sm:mt-16 ${
          isLoading ? "bg-gray-500" : "bg-cyan-500 hover:bg-cyan-600"
        } text-white font-fceb font-bold text-xl sm:text-2xl px-10 py-4 rounded-full transition`}
      >
        {isLoading ? "Extracting..." : "Extract Data"}
      </button>

      {/* Extracted Text Output */}
      {extractedText && (
        <div className="mt-10 max-w-4xl w-full bg-white text-black p-6 rounded shadow overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Extracted Text:</h2>
          <pre className="whitespace-pre-wrap text-sm sm:text-base">{extractedText}</pre>
        </div>
      )}

      {/* See Results button */}
      {dataExtracted && (
        <button
          onClick={handleSeeResults}
          disabled={navigating}
          className={`mt-6 ${
            navigating ? "bg-gray-500" : "bg-[#D66937] hover:bg-[#bf5a2e]"
          } text-white font-fceb font-bold text-xl sm:text-2xl px-10 py-4 rounded-full transition`}
        >
          {navigating ? "Loading Results..." : "See Results"}
        </button>
      )}
    </div>
  );
}
