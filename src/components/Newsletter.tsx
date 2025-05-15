import React, { useState, FormEvent } from 'react';

// Newsletter subscription section
const Newsletter: React.FC = () => {
  // State to store email input
  const [email, setEmail] = useState<string>('');

  // State to show success message after submission
  const [message, setMessage] = useState<string>('');

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Placeholder: simulate success message
    // In production, you’d call your backend API (e.g., /api/subscribe)
    setMessage('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="newsletter">
      {/* Section heading */}
      <h2>Be Among the First to Experience the Future of Glucose Monitoring</h2>

      {/* Subscription form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)} // Update state on input
        />
        <button type="submit">Join The Waitlist</button>
      </form>

      {/* Confirmation message */}
      {message && <p className="form-message">{message}</p>}
    </section>
  );
};

export default Newsletter;
