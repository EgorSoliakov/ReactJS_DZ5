// ThemeToggle.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        background: isDarkTheme ? "#333" : "#FFF",
        color: isDarkTheme ? "#FFF" : "#000",
        padding: "20px",
        textAlign: "center",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <h1>{isDarkTheme ? "Темная тема" : "Светлая тема"}</h1>
      <button onClick={handleToggle}>
        Переключить на {isDarkTheme ? "светлую" : "темную"} тему
      </button>
    </div>
  );
};

export default ThemeToggle;
