import React, { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or email)
    alert('Form submitted!');
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4"
        />
        
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4"
        />
        
        <Textarea
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mb-4"
        />

        <Button type="submit" color="primary" fullWidth>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
