import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Artemyx</h1>

        <p>
          Empowering awareness through data by mapping and analyzing
          crimes against women in India.
        </p>

        <p className="intro">
          Artemyx is an open-source civic-tech platform that visualizes
          official data on crimes against women in India through
          interactive maps, heatmaps, dashboards, and analytics.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>

        <p>
          To build India's most comprehensive data visualization platform
          for crimes against women, making official statistics accessible,
          understandable, and actionable for everyone.
        </p>
      </section>

      {/* Objectives */}
      <section className="about-section">
        <h2>Objectives</h2>

        <ul>
          <li>Visualize crimes against women across India using interactive maps.</li>
          <li>Display state-wise and district-wise analytics.</li>
          <li>Identify trends over multiple years.</li>
          <li>Promote awareness through data-driven insights.</li>
          <li>
            Build a transparent, open-source platform for researchers,
            students, journalists, and policymakers.
          </li>
        </ul>
      </section>

      {/* Planned Features */}
      <section className="about-section">
        <h2>Planned Features</h2>

        <div className="features">
          <div>🗺️ India Heatmap</div>
          <div>📍 State & District Heatmaps</div>
          <div>📊 Interactive Dashboard</div>
          <div>📈 Year-wise Trend Analysis</div>
          <div>🏆 State & District Rankings</div>
          <div>🔍 Filters</div>
          <div>📑 Downloadable Reports</div>
          <div>📉 Data Visualizations & Charts</div>
          <div>📚 Public Documentation</div>
        </div>
      </section>

      {/* Technology */}
      <section className="about-section">
        <h2>Technology Stack</h2>

        <div className="tech-grid">
          <div>
            <h3>Frontend</h3>
            <p>React</p>
            <p>Tailwind CSS</p>
            <p>Leaflet / MapLibre</p>
            <p>Apache ECharts</p>
          </div>

          <div>
            <h3>Backend</h3>
            <p>FastAPI (Python)</p>
          </div>

          <div>
            <h3>Database</h3>
            <p>PostgreSQL</p>
            <p>PostGIS</p>
          </div>

          <div>
            <h3>Data Processing</h3>
            <p>Python</p>
            <p>Pandas</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2>Our Team</h2>

        <div className="team-grid">
          <div>
            <h3>Sayooj Manikandan</h3>
            <p>Project Lead</p>
          </div>

          <div>
            <h3>Aadhilakshmi TN</h3>
            <p>Core Team Member</p>
          </div>

          <div>
            <h3>Akshay KP</h3>
            <p>Core Team Member</p>
          </div>

          <div>
            <h3>Anamika</h3>
            <p>Core Team Member</p>
          </div>

          <div>
            <h3>Anjali</h3>
            <p>Core Team Member</p>
          </div>

          <div>
            <h3>Haritha</h3>
            <p>Core Team Member</p>
          </div>

          <div>
            <h3>Hridhya TB</h3>
            <p>Core Team Member</p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="about-section">
        <h2>Data Sources</h2>

        <p>
          Artemyx will use publicly available official datasets,
          including:
        </p>

        <ul>
          <li>National Crime Records Bureau (NCRB)</li>
          <li>data.gov.in</li>
          <li>Other verified government datasets</li>
        </ul>

        <p>
          No personally identifiable information or victim-specific
          data will be collected or displayed.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="about-section disclaimer">
        <h2>Disclaimer</h2>

        <p>
          Artemyx visualizes officially reported crime statistics.
          The platform does not represent real-time incidents or the
          complete prevalence of crimes against women. Data accuracy
          depends on the source datasets published by relevant authorities.
        </p>
      </section>

    </div>
  );
}

export default About;SSSSSSSSSSS