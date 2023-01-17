import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const root = document.getElementById("root");
    createRoot(root).render(<App />);
  }
}