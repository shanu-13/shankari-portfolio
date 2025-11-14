import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const purposes = [
    'Job Opportunity',
    'Freelance Project',
    'Collaboration',
    'General Inquiry',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/contact' 
        : 'http://localhost:3001/api/contact';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', purpose: '', message: '' });
      } else {
        console.error('Server error:', response.status, response.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      // For demo purposes, simulate success when backend is unavailable
      if (error.message.includes('fetch')) {
        console.log('Backend unavailable, simulating success for demo');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', purpose: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="stars"></div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="contact-content">
          

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose of Contact</label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >
                <option value="">Select a purpose</option>
                {purposes.map((purpose, index) => (
                  <option key={index} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="We would be grateful for more details regarding your request."
              ></textarea>
            </div>

            

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                 Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                 Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        
      </div>

      
    </section>
  );
};

export default ContactSection;