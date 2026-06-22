import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: '💻',
      title: 'SAP Implementation',
      description: 'End-to-end SAP implementation services including requirement analysis, system configuration, deployment, and post-go-live support.',
      features: ['Discovery & Gap Analysis', 'System Configuration', 'Testing & QA', 'Data Migration', 'Go-Live Support']
    },
    {
      icon: '🔧',
      title: 'SAP Support & Maintenance',
      description: '24/7 SAP support services to ensure smooth system performance, bug fixing, upgrades, and continuous monitoring.',
      features: ['24/7 Technical Support', 'Performance Monitoring', 'System Upgrades', 'Patch Management', 'Preventive Maintenance']
    },
    {
      icon: '🔄',
      title: 'SAP Migration',
      description: 'Seamless migration from legacy systems to SAP including SAP S/4HANA migration with zero data loss and minimal downtime.',
      features: ['Legacy System Assessment', 'Data Extraction & Mapping', 'SAP S/4HANA Migration', 'Parallel Run Support', 'Zero Downtime Migration']
    },
    {
      icon: '📊',
      title: 'SAP FICO (Finance & Controlling)',
      description: 'Expert solutions in financial accounting, controlling, reporting, and compliance using SAP FICO modules.',
      features: ['General Ledger Setup', 'Accounts Payable/Receivable', 'Cost Center Management', 'Financial Reporting', 'Compliance & Audit']
    },
    {
      icon: '📦',
      title: 'SAP MM (Material Management)',
      description: 'Efficient procurement and inventory management solutions using SAP MM to optimize supply chain operations.',
      features: ['Procurement Process', 'Inventory Management', 'Warehouse Optimization', 'Vendor Management', 'Supply Chain Visibility']
    },
    {
      icon: '🚚',
      title: 'SAP SD (Sales & Distribution)',
      description: 'Complete sales cycle management including order processing, billing, shipping, and customer management using SAP SD.',
      features: ['Sales Order Processing', 'Inventory Allocation', 'Shipping & Delivery', 'Billing & Invoicing', 'Customer Management']
    },
    {
      icon: '👨‍💼',
      title: 'SAP HCM / SuccessFactors',
      description: 'Human resource management solutions including payroll, employee lifecycle, and cloud-based HR using SuccessFactors.',
      features: ['Payroll Processing', 'Employee Lifecycle', 'Talent Management', 'Performance Management', 'Learning & Development']
    },
    {
      icon: '🏭',
      title: 'SAP PP (Production Planning)',
      description: 'Streamline manufacturing processes with SAP PP for better production planning, scheduling, and execution.',
      features: ['Production Planning', 'Demand Forecasting', 'Manufacturing Execution', 'Quality Management', 'Resource Planning']
    },
    {
      icon: '🔗',
      title: 'SAP Integration Services',
      description: 'Integrate SAP with third-party applications, APIs, and cloud platforms for seamless business operations.',
      features: ['API Development', 'Third-party Integration', 'Cloud Integration', 'Data Synchronization', 'Middleware Solutions']
    }
  ];

  const whyChoose = [
    {
      number: '10+',
      label: 'Successful Projects',
      icon: '✓'
    },
    {
      number: '100+',
      label: 'Expert Consultants',
      icon: '👥'
    },
    {
      number: '10+ ',
      label: 'Clients Served',
      icon: '⭐'
    },
    {
      number: '24/7',
      label: 'Dedicated Support',
      icon: '🛡️'
    }
  ];

  const methodologies = [
    {
      icon: '🎯',
      title: 'ASAP Methodology',
      description: 'Proven SAP-recommended approach for faster, more efficient implementations'
    },
    {
      icon: '📋',
      title: 'Agile Approach',
      description: 'Flexible, iterative development ensuring quick responses to changes'
    },
    {
      icon: '💼',
      title: 'Best Practice',
      description: 'Implement industry-standard processes and optimized configurations'
    },
    {
      icon: '🔍',
      title: 'Quality Assurance',
      description: 'Rigorous testing and validation at every implementation stage'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h1>Our Services</h1>
        <p>ERPIANS delivers comprehensive SAP solutions tailored to your enterprise needs. Our expert team provides end-to-end services from implementation to ongoing optimization.</p>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div className="why-choose-section">
          <h2>Why Choose ERPIANS?</h2>
          <div className="why-choose-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-number">{item.number}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* METHODOLOGIES */}
        <div className="methodologies-section">
          <h2>Our Implementation Methodologies</h2>
          <div className="methodologies-grid">
            {methodologies.map((method, index) => (
              <div key={index} className="methodology-card">
                <div className="methodology-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;