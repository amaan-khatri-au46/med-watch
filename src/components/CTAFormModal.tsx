import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  organization: string;
}

// CTAFormModal component for the "Request Early Access" modal
const CTAFormModal: React.FC = () => {
  // State to track modal open/close
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // State to track form field values
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: ''
  });

  // Open the modal
  const handleOpen = (): void => setIsOpen(true);

  // Close modal and reset form data
  const handleClose = (): void => {
    setIsOpen(false);
    setFormData({ name: '', email: '', organization: '' });
  };

  // Handle changes to any input field
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Submitted:', formData); // Replace with backend submission if needed
    handleClose(); // Close modal after submission
  };

  return (
    <div className="cta-modal-wrapper">
      {/* Main CTA button to trigger modal */}
      <button className="cta-button" onClick={handleOpen}>
        Request Early Access
      </button>

      {/* Modal structure */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Join the Early Access List</h2>

            {/* Modal form */}
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization (optional)"
                value={formData.organization}
                onChange={handleChange}
              />

              {/* Action buttons */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="modal-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTAFormModal;
