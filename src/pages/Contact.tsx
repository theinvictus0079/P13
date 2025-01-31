import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl  my-10  mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bento-grid1">
        <div className="bento-item neu-shadow col-span-full">
          <h2 className="text-3xl font-bold  mb-6" style={{ color: 'var(--text-primary)' }}>Contact Me</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="bento-item neu-shadow ">
          <form onSubmit={handleSubmit} className="space-y-4  " >
            <div >
              <label htmlFor="name" className="block text-gray-700 mb-2" >Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg neu-pressed bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg neu-pressed bg-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-lg neu-pressed bg-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg neu-shadow text-indigo-600 hover:text-indigo-700 transition-colors"style={{ color: 'var(--text-primary)' }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bento-item neu-shadow  ">
          <div className="space-y-6 flex flex-col mt-10 ">
            <div className="flex items-center gap-4">
              <div className="p-3 neu-shadow rounded-lg">
                <Mail size={24} className="text-indigo-600" style={{ color: 'var(--text-primary)' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 neu-shadow rounded-lg">
                <Phone size={24} className=""style={{ color: 'var(--text-primary)' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 neu-shadow rounded-lg">
                <MapPin size={24} className="text-indigo-600"style={{ color: 'var(--text-primary)' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}