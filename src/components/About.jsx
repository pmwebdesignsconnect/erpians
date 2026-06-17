import React from 'react';
import '../styles/About.css';

function About() {
  const stats = [
    { number: '500+', label: 'Employees' },
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty, transparency, and ethical practices in all our dealings with clients and partners.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions that drive business transformation.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We view our clients as partners, working collaboratively to understand their unique needs and deliver customized solutions.'
    },
    {
      icon: '📈',
      title: 'Excellence',
      description: 'We are committed to delivering superior quality in every project, ensuring measurable business impact and client success.'
    }
  ];

  const expertise = [
    {
      category: 'SAP Modules',
      skills: ['FICO', 'MM', 'SD', 'PP', 'HCM', 'SuccessFactors', 'PM', 'QM']
    },
    {
      category: 'Implementation',
      skills: ['S/4HANA Migration', 'Cloud Implementation', 'Greenfield Projects', 'System Upgrades']
    },
    {
      category: 'Industries',
      skills: ['Manufacturing', 'Finance', 'Retail', 'Logistics', 'Healthcare', 'Pharma', 'Energy']
    },
    {
      category: 'Technologies',
      skills: ['SAP HANA', 'Cloud Systems', 'Analytics', 'Integration', 'Mobile Solutions']
    }
  ];

  const whyChoose = [
    {
      number: '01',
      title: 'Proven Track Record',
      description: 'Over 150 successful projects completed across industries with consistent delivery of measurable results.'
    },
    {
      number: '02',
      title: 'Expert Team',
      description: 'Team of 500+ certified SAP consultants with deep industry knowledge and best practice expertise.'
    },
    {
      number: '03',
      title: 'Custom Solutions',
      description: 'Tailored implementations that align with your unique business requirements, not one-size-fits-all approaches.'
    },
    {
      number: '04',
      title: '24/7 Support',
      description: 'Dedicated support team available round-the-clock to ensure smooth operations and rapid issue resolution.'
    },
    {
      number: '05',
      title: 'Transparent Partnership',
      description: 'Clear communication, realistic timelines, and transparent pricing with no hidden costs or surprises.'
    },
    {
      number: '06',
      title: 'Future-Ready Solutions',
      description: 'Implement modern SAP solutions that scale with your business and prepare you for future growth.'
    }
  ];

  const certifications = [
    'SAP Gold Partner',
    'CMMI Level 3',
    'SAP S/4HANA Certified',
    'Cloud Solutions Expert'
  ];

  return (
    <section className="about">
      <div className="container">
        <h1>About ERPIANS</h1>

        {/* MAIN ABOUT SECTION */}
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              ERPIANS TECHNOLOGY SOLUTIONS PRIVATE LIMITED is a leading SAP consulting and implementation partner dedicated to helping mid-market and enterprise organizations optimize their operations through cutting-edge enterprise resource planning solutions. Founded in 2019, we have rapidly grown to become a trusted partner for organizations seeking digital transformation across multiple continents.
            </p>
            <p>
              Our journey began with a simple vision: to bridge the gap between complex SAP technology and business success. Today, with over 500 talented professionals and 150+ successful projects completed, we continue to deliver exceptional value to our clients while maintaining the highest standards of integrity and excellence.
            </p>

            <h2>Our Mission</h2>
            <p>
              To deliver exceptional SAP consulting and implementation services that drive business transformation, enhance operational efficiency, and maximize return on investment through strategic technology solutions. We are committed to understanding our clients' unique challenges and delivering customized solutions that exceed expectations.
            </p>

            <h2>Our Vision</h2>
            <p>
              To be the most trusted and innovative SAP consulting partner, recognized for delivering excellence, technical expertise, and measurable business impact in every engagement. We envision a future where our clients achieve unprecedented operational excellence through intelligent SAP implementations.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES SECTION */}
        <div className="values-section">
          <h2>Our Core Values</h2>
          <p className="section-description">These principles guide everything we do and shape our company culture</p>
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

        {/* EXPERTISE SECTION */}
        <div className="expertise-section">
          <h2>Our Expertise</h2>
          <p className="section-description">Comprehensive SAP knowledge across modules, industries, and technologies</p>
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h3>{area.category}</h3>
                <div className="skills-list">
                  {area.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OUR JOURNEY SECTION */}
        <div className="journey-section">
          <h2>Our Journey</h2>
          <p className="section-description">From vision to market leadership</p>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">🌱</div>
              </div>
              <div className="journey-content">
                <h3>Company Founded</h3>
                <p>ERPIANS was founded with a vision to revolutionize SAP consulting and implementation across emerging markets.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">📈</div>
              </div>
              <div className="journey-content">
                <h3>Rapid Growth</h3>
                <p>Successfully delivered 25+ projects, building reputation for quality and customer-centric solutions.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">🌟</div>
              </div>
              <div className="journey-content">
                <h3>Industry Recognition</h3>
                <p>Achieved SAP Gold Partner status and expanded to serve global clients across multiple continents.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">🚀</div>
              </div>
              <div className="journey-content">
                <h3>Scaling Operations</h3>
                <p>Expanded team to 300+ consultants, established centers of excellence for specialized services.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">💎</div>
              </div>
              <div className="journey-content">
                <h3>Premium Solutions</h3>
                <p>Launched advanced SAP S/4HANA and cloud migration services, becoming comprehensive solutions provider.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-icon">🏅</div>
              </div>
              <div className="journey-content">
                <h3>Market Leader</h3>
                <p>Recognized as trusted partner for 500+ employees, 150+ successful projects, and expanding global presence.</p>
              </div>
            </div>
          </div>
        </div>


        {/* WHY CHOOSE US SECTION */}
        <div className="why-choose-section">
          <h2>Why Choose ERPIANS?</h2>
          <p className="section-description">Six compelling reasons to partner with us for your SAP journey</p>
          <div className="why-choose-grid">
            {whyChoose.map((reason, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-number">{reason.number}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="certifications-section">
          <h2>Industry Recognitions & Certifications</h2>
          <p className="section-description">Trusted and certified by industry leaders worldwide</p>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-badge">
                <div className="badge-icon">✓</div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMMITMENT SECTION */}
        <div className="commitment-section">
          <h2>Our Commitment to You</h2>
          <div className="commitment-grid">
            <div className="commitment-card">
              <h3>Quality Delivery</h3>
              <p>We never compromise on quality. Every project is delivered with rigorous testing and quality assurance processes.</p>
            </div>
            <div className="commitment-card">
              <h3>On-Time, On-Budget</h3>
              <p>We respect your timeline and budget. Our proven methodologies ensure predictable delivery and costs.</p>
            </div>
            <div className="commitment-card">
              <h3>Ongoing Support</h3>
              <p>Our partnership doesn't end at go-live. We provide continuous support and optimization for long-term success.</p>
            </div>
            <div className="commitment-card">
              <h3>Knowledge Transfer</h3>
              <p>We empower your team with comprehensive training and documentation for sustainable, independent operations.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;