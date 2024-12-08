import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className='contact-header'>
        <h2>Contact Us</h2>
      </div>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdym4C-LP2F6Q7jvyVHXHStd22iW9JIVYTgW0hVy27xnIaa4g/viewform?embedded=true" 
        width="640" 
        height="915" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        title="Descriptive title for the iframe"
      >
        Loading…
      </iframe>
    </section>
  );
};

export default Contact;
