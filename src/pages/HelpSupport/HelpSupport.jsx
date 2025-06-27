import React, { useEffect } from 'react';
import FaQ from './FaQ/FaQ';
import ContactUs from './ContactUs';


const HelpSupport = () => {
  useEffect(() => {
      document.title = `Help & Support | Freeleza`;
      return () => {
        document.title = "Freeleza";
      };
    }, []);
  return (
    <div>
      <FaQ></FaQ>
      <ContactUs></ContactUs>
    </div>
  );
};

export default HelpSupport;