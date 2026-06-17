import React from 'react';
import '../styles/Home.css';

function Home({ setCurrentPage }) {

  const features = [
    {
      icon: '💼',
      title: 'Enterprise Expertise',
      description: 'Deep expertise in SAP implementation and consulting for enterprise resource planning solutions across all industries.'
    },
    {
      icon: '⚡',
      title: 'Fast Deployment',
      description: 'Proven track record of rapid, successful SAP deployments with minimal downtime and business disruption.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'End-to-end support from implementation through ongoing maintenance and optimization.'
    }
  ];

  const benefits = [
    {
      icon: '📈',
      title: 'Increased Efficiency',
      description: 'Streamline your business processes and reduce operational costs by up to 30%'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Better resource allocation and inventory management saves significant expenses'
    },
    {
      icon: '🔒',
      title: 'Enhanced Security',
      description: 'Enterprise-grade security protocols protect your critical business data'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Make data-driven decisions with comprehensive business intelligence tools'
    },
    {
      icon: '🌍',
      title: 'Global Scalability',
      description: 'Expand your business globally with scalable SAP infrastructure'
    },
    {
      icon: '⚙️',
      title: 'Process Automation',
      description: 'Automate repetitive tasks and improve accuracy across all departments'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We analyze your current systems, identify gaps, and create a customized roadmap for your SAP transformation.'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'Our experts design a comprehensive solution architecture tailored to your business requirements and goals.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the implementation with minimal disruption, following industry best practices and proven methodologies.'
    },
    {
      number: '04',
      title: 'Testing & Training',
      description: 'Comprehensive testing ensures quality, and we provide extensive training for your team to maximize adoption.'
    },
    {
      number: '05',
      title: 'Go-Live Support',
      description: 'Our dedicated team provides 24/7 support during go-live to ensure smooth transition and rapid issue resolution.'
    },
    {
      number: '06',
      title: 'Optimization',
      description: 'Post-implementation, we optimize processes, identify improvements, and ensure ongoing system performance.'
    }
  ];

  const testimonials = [
    {
      message: 'ERPIANS transformed our operations. The SAP implementation was smooth and our efficiency increased by 40% in just 6 months.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      message: 'Outstanding team! Their expertise in SAP FICO helped us streamline our financial processes and improve compliance significantly.',
      rating: '⭐⭐⭐⭐⭐'
    },
    {
      message: 'Professional, responsive, and results-driven. ERPIANS delivered on time and on budget. Highly recommended!',
      rating: '⭐⭐⭐⭐⭐'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '500+', label: 'Expert Professionals' },
    { number: '50M+', label: 'Records Processed' }
  ];

  return (
    <section className="home">

      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>Enterprise Resource Solutions</h1>
          <p>Transform Your Business with Expert SAP Consulting & Implementation Services</p>
          <button
            className="cta-button"
            onClick={() => setCurrentPage("services")}
          >
            Explore Our Services
          </button>
        </div>
      </div>

      {/* QUICK STATS */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Why Choose ERPIANS</h2>
          <p>We are a trusted SAP consulting partner with proven expertise in delivering enterprise resource planning solutions that drive business transformation and operational excellence.</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <div className="container">
          <h2>Key Benefits of SAP Solutions</h2>
          <p>Unlock your business potential with transformative SAP implementation</p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="process-section">
        <div className="container">
          <h2>Our Implementation Process</h2>
          <p>A proven methodology that ensures success at every step</p>
          <div className="process-grid">
            {process.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p>Real success stories from our satisfied enterprise clients</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="rating">{testimonial.rating}</div>
                <p className="message">"{testimonial.message}"</p>
                <h4>{testimonial.name}</h4>
                <p className="title">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let our expert team guide you through a successful SAP transformation journey</p>
          <div className="cta-buttons">
            <button
              className="cta-button primary"
              onClick={() => setCurrentPage("contact")}
            >
              Get Started Today
            </button>
            <button
              className="cta-button secondary"
              onClick={() => setCurrentPage("services")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

    </section>
  );
}

export default Home;