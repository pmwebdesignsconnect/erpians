import React from 'react';
import '../styles/Founding.css';

function Founding() {
  const founders = [
    {
      icon: '👨‍💼',
      name: 'Visionary Leadership',
      description: 'Founded with a clear vision to transform enterprise operations through expert SAP consulting and implementation services.'
    },
    {
      icon: '🎓',
      name: 'Expert Founding Team',
      description: 'Started by industry veterans with 100+ years of combined SAP expertise and proven implementation track record.'
    },
    {
      icon: '🚀',
      name: 'Mission-Driven',
      description: 'Established to bridge the gap between complex SAP technology and business success for mid-market enterprises.'
    }
  ];


  const values = [
    {
      icon: '💪',
      title: 'Strong Foundation',
      description: 'Built on years of SAP expertise and proven success in enterprise implementations.'
    },
    {
      icon: '🎯',
      title: 'Clear Purpose',
      description: 'Founded with a specific mission to solve enterprise resource planning challenges.'
    },
    {
      icon: '👥',
      title: 'Team Excellence',
      description: 'Gathered the best SAP minds to deliver exceptional consulting and implementation services.'
    },
    {
      icon: '🌱',
      title: 'Sustainable Growth',
      description: 'Committed to growing responsibly while maintaining quality and client satisfaction.'
    }
  ];

  const journeyPoints = [
    {
      title: 'ERPIANS Founded',
      description: 'The journey begins with a vision to transform enterprise operations. Founded by industry veterans with deep SAP expertise.',
      icon: '🚀'
    },
    {
      title: 'First Success',
      description: 'Completed first major SAP implementation, establishing credibility and building strong client relationships.',
      icon: '✓'
    },
    {
      title: 'Team Growth',
      description: 'Expanded to 50+ SAP consultants with diverse expertise across all major SAP modules.',
      icon: '👥'
    },
    {
      title: 'SAP Partnership',
      description: 'Achieved official SAP Partner certification, validating our expertise and commitment to excellence.',
      icon: '🏆'
    },
    {
      title: 'Regional Expansion',
      description: 'Opened regional offices and expanded operations to serve more enterprises globally.',
      icon: '🌍'
    },
    {
      title: 'Market Leadership',
      description: 'Recognized as a leading SAP consulting partner with 10+ successful projects.',
      icon: '⭐'
    }
  ];

  return (
    <section className="founding">
      <div className="container">

        {/* FOUNDING PILLARS */}
        <div className="founding-pillars">
          <h2>Built on Three Pillars</h2>
          <div className="pillars-grid">
            {founders.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.name}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDING VALUES */}
        <div className="founding-values">
          <h2>Founded on Strong Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JOURNEY TIMELINE */}
        <div className="journey-section">
          <h2>Our Journey Since Founding</h2>
          <p className="section-subtitle">From Day One to Market Leadership</p>
          <div className="journey-timeline">
            {journeyPoints.map((point, index) => (
              <div key={index} className="journey-item">
                <div className="journey-marker">
                  <div className="journey-icon">{point.icon}</div>
                </div>
                <div className="journey-content">
                  <span className="journey-date">{point.date}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDING MESSAGE */}
        <div className="founding-message">
          <div className="message-box">
            <h2>Our Founding Promise</h2>
            <p>
              When ERPIANS was founded on May 10, 2022, we made a commitment to our clients:
              to deliver exceptional SAP consulting and implementation services that drive real business
              transformation. From our first project to our 10+ current engagements, this promise has
              remained unwavering.
            </p>
            <p>
              We didn't start as the largest or the oldest. We started with the deepest passion,
              the strongest expertise, and the clearest commitment to client success. Every day since
              our founding, we've worked to prove that commitment.
            </p>
            <div className="message-stats">
              <div className="message-stat">
                <h4>100+</h4>
                <p>Expert Team Members</p>
              </div>
              <div className="message-stat">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="message-stat">
                <h4>10+</h4>
                <p>Clients Served</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* FOUNDING VISION */}
        <div className="founding-vision">
          <h2>Our Vision Has Come True</h2>
          <div className="vision-grid">
            <div className="vision-card">
              <h3>✓ Global Presence</h3>
              <p>From a single office to operations across multiple countries, serving enterprises worldwide.</p>
            </div>
            <div className="vision-card">
              <h3>✓ Expert Team</h3>
              <p>Grew from founders to 100+ certified SAP consultants with deep industry expertise.</p>
            </div>
            <div className="vision-card">
              <h3>✓ Industry Recognition</h3>
              <p>Achieved SAP Gold Partner status and multiple industry certifications and awards.</p>
            </div>
            <div className="vision-card">
              <h3>✓ Client Success</h3>
              <p>Delivered measurable results for 10+ clients.</p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="founding-cta">
          <h2>Be Part of Our Growing Story</h2>
          <p>Since our founding on May 10, 2022, we've been on an incredible journey. Join us as we continue to transform enterprises through exceptional SAP consulting.</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Let's Transform Your Business</button>
            <button className="cta-btn secondary">Learn More About Us</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Founding;
