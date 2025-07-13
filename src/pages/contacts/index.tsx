//import defaultPage from '@/styles/DefaultPage.module.scss';
//import styles from '@/styles/contacts/Contacts.module.scss';
import React, { useState } from 'react';
import FAQ from '@/components/contacts/FAQ';

const initBody = { name: '', email: '', mobile: '', message: '' };

export default function Contacts() {
  const [body, setBody] = useState(initBody);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'invalid-email'

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(body.email)) {
      setSubmitStatus('invalid-email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      // URL do seu Google Apps Script (substitua pelo seu)
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw70clzSYRz5XVUK7RolqFLJ4X-nxv7VqctHNkQszO4Sp-hWvrWiLEdbvCnveHBdCfp/exec';
      
      const formData = new URLSearchParams();
      formData.append('name', body.name);
      formData.append('email', body.email);
      formData.append('mobile', body.mobile || '');
      formData.append('message', body.message);
      formData.append('timestamp', new Date().toISOString());
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });

      const result = await response.text();
      
      if (result.toLowerCase().includes('success')) {
        setSubmitStatus('success');
        setBody(initBody); // Reset form
        setTimeout(() => setSubmitStatus(null), 3000); // Hide success message after 3s
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={defaultPage.container}>
      <div className={defaultPage.background}></div>
      <div className={styles.row}>
        <div className={styles.formContainer}>
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Diogo Martins"
              value={body.name}
              onChange={handleChange}
              required
            />

            <div className={styles.flexRow}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="diogomartins@gmail.com"
                  value={body.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="912345678"
                  value={body.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={body.message}
              onChange={handleChange}
              required
              minLength={10}
            ></textarea>

            {/* Honeypot field, usado para prevenir bots */}
            <input
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              value=""
              onChange={() => {}}
            />

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {submitStatus && (
              <div className={styles.statusMessage}>
                {submitStatus === 'success' && (
                  <p className={styles.success}>Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className={styles.error}>Failed to send message. Please try again later.</p>
                )}
                {submitStatus === 'invalid-email' && (
                  <p className={styles.error}>Please enter a valid email address.</p>
                )}
                {submitStatus === 'sending' && (
                  <p className={styles.sending}>Sending your message...</p>
                )}
              </div>
            )}
          </form>
        </div>
        
        <div className={styles.column}>
          <div className={styles.infoContainer}>
            <h3>Contact Info</h3>
            <p>
              <strong>Pavilhão de Mecânica I I I</strong>
            </p>
            <p>Avenida Rovisco Pais, 1 1049-001</p>
            <p>Lisboa, Portugal</p>
            <p>Email: info@tlmoto.tecnico.ulisboa.pt</p>
            <p>Phone: +351 218 419 556</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.528704837498!2d-9.140627224030416!3d38.73670337155637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193381fefb1f6d%3A0xe4c8c04a8e06df26!2sPavilh%C3%A3o%20de%20Mec%C3%A2nica%20III!5e0!3m2!1sen!2spt!4v1647583982827!5m2!1sen!2spt"
            className={styles.mapFrame}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <FAQ />
    </div>
  );
}