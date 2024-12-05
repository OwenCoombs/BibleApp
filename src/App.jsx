import { Link } from "react-router-dom"
import React from "react";

const App = () => {
  return (
    <div className="app">
      <main className="main-content">
        <section className="verse-section">
          <div className="verse-card">
            <h2 className="verse-text">"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11</h2>
            <p className="verse-reference">- Jeremiah 29:11</p>
          </div>
        </section>
        <button className="qr-button">
          <span role="img" aria-label="Scan QR">📷</span>
        </button>
      </main>
    </div>
  );
};

export default App;