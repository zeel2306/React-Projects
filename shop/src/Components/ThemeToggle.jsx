import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.body;

    if (isDark) {
      body.classList.add("bg-dark", "text-light");
      body.classList.remove("bg-light", "text-dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.add("bg-light", "text-dark");
      body.classList.remove("bg-dark", "text-light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className="btn btn-outline-secondary m-2"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
