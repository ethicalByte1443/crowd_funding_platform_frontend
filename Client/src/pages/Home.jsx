import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h2>Welcome to the Crowdfunding Platform</h2>
        <p>Discover, support, and engage with innovative ideas.</p>
        <button className="explore-button">Explore Campaigns</button>
      </div>
      <div className="campaigns">
        <h3>Featured Campaigns</h3>
        <div className="campaign-cards">
          <div className="campaign-card">
            <h4>Campaign 1</h4>
            <p>Support this amazing project and make a difference!</p>
          </div>
          <div className="campaign-card">
            <h4>Campaign 2</h4>
            <p>Be a part of this innovative idea for the future.</p>
          </div>
          <div className="campaign-card">
            <h4>Campaign 3</h4>
            <p>Help bring this visionary project to life.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
