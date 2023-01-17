import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times!</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)} >
                Button
            </button>
        </div>
    );
}

export default App;