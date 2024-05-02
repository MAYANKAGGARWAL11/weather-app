import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCsHY5hYvAFQsyAkq1Tk_HeKhx-06pAlNw');

function Appchat({ city }) {
  const [apiData, setApiData] = useState("");
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Write about the climate and weather of ${city}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        const words = text.split(" ");
        // Limit the text to 100 words if it exceeds
        if (words.length > 90) {
          text = words.slice(0, 90).join(" ") + "...";
        }
        setApiData(text);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, [city]);

  return (
  
      <div className="fixed bottom-4 right-4 w-80 h-85  bg-slate-200 rounded-lg border border-gray-300 shadow-lg">

        <div className="p-9">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p>{apiData}</p>
          )}
        </div>
      </div>
    
  );
}

export default Appchat;
