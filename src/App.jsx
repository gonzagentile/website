import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav style={{ position: 'fixed', top: 0, right: 0, padding: '10px' }}>
        <a href="#logo">Logo</a> | 
        <a href="#services">Services</a> | 
        <a href="#about">About Us</a> | 
        <a href="#contact">Contact Us</a>
      </nav>
      <div id="logo" style={{ padding: '100px 20px 20px 20px', textAlign: 'center' }}>
        <h1>Company Logo</h1>
        <img src="path/to/logo.png" alt="Company Logo" />
      </div>
      <div id="services" style={{ padding: '20px' }}>
        <h2>Security Services</h2>
        <ul>
          <li>V-CISO</li>
          <li>Security Guidelines</li>
          <li>Security Policies</li>
          <li>Compliance with external regulations</li>
          <li>Infrastructure Recommendations and best practices</li>
          <li>Application Security and DevSecOps</li>
          <li>Security Champion</li>
          <li>Security tooling integration</li>
          <li>Vendor Risk Assessment</li>
          <li>Identity and Access Management</li>
          <li>Security Awareness</li>
        </ul>
        <h3>OnPrem/Cloud Security and Infrastructure</h3>
        <ul>
          <li>Cloud Scan</li>
          <li>Cloud Architecture Review</li>
          <li>IaC Scan</li>
          <li>Cloud security policies</li>
          <li>Cloud security services and tools for detection and remediation</li>
          <li>EndPoint security</li>
          <li>Secret Management</li>
          <li>Data Security</li>
          <li>WAF/Edge security</li>
          <li>Network isolation security</li>
          <li>Infrastructure Hardening</li>
          <li>Incident Response Playbooks</li>
          <li><a href="https://github.com/aws-samples/aws-incident-response-playbooks/tree/master/playbooks">AWS Incident Response Playbooks</a></li>
          <li><a href="https://github.com/aws-samples/aws-customer-playbook-framework/tree/main/docs">AWS Customer Playbook Framework</a></li>
          <li>Kubernetes Security</li>
          <li>Cluster Hardening</li>
          <li>Kubernetes Security Policies</li>
          <li>Cluster misconfiguration scan</li>
          <li>Threat real time detection</li>
          <li>Vulnerability Scan</li>
        </ul>
        <h3>Application Security</h3>
        <ul>
          <li>SAST</li>
          <li>SCA</li>
          <li>DAST</li>
          <li>Pentesting</li>
          <li>Vulnerability Management</li>
        </ul>
      </div>
      <div id="about" style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>Some text about the company.</p>
      </div>
      <div id="contact" style={{ padding: '20px' }}>
        <h2>Contact Us</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
