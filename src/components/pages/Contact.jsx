import { useState } from 'react';
import '../../styles/style.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [email, setEmail] = useState('');
    const [fullName, setfullName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
    const [modalfullName, setModalfullName] = useState(''); // New state variable


    const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target);

    if (inputType === 'email') {
        setEmail(inputValue);
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
          }
        setErrorMessage('')
        return;
        // setEmail(inputValue);
      } else if (inputType === 'fullName') {
        if (target.value.length === 0) {
            setErrorMessage('fullName is empty');
          }
        else {
            setErrorMessage('')
        }
        setfullName(inputValue);
        // setErrorMessage('')
        return;
      } else {
        setMessage(inputValue);
      }

    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
    
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      console.log(backendUrl);
    
      try {
        const response = await fetch(`${backendUrl}/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, fullName, message }),
        });
    
        if (response.ok) {
          setModalfullName(fullName);
          setIsModalOpen(true);
          setfullName('');
          setMessage('');
          setEmail('');
        } else {
          setErrorMessage('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setErrorMessage('Failed to send message. Please try again.');
      }
    };
    
      

      const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div className="container text-center contact-page">
          <form className="form wrapper" onSubmit={handleFormSubmit}>
            <h1 className="form-header">Get in Contact with me</h1>
              <div className="input-field">
                  <input
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Email"
                      required
                  />
              </div>

              <div className="input-field">
                  <input
                      value={fullName}
                      name="fullName"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Full Name"
                  />
              </div>

              <div className="input-field">
                  <textarea
                      value={message}
                      name="message"
                      onChange={handleInputChange}
                      placeholder="Feel free to write me a message here."
                      rows="10"
                  />
              </div>
            <button type="submit">Submit</button>
            {errorMessage && (
            <div className="error-container">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          </form>
          {/* Modal */}
          {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Hello {modalfullName || "Stranger"}!</h2>
                        <p>Your message has been received.</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
      );
}

export default Contact;