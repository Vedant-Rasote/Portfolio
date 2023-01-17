import React, { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div id="page-top">
            <Header />
            <Project />
            <About />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;