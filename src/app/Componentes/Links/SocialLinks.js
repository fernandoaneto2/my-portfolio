

import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
<div style={{display: 'flex', gap: '25px', alignItems: 'center',}}>
      <a href="https://www.linkedin.com/in/fernando-amorim-33860624a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{transition: 'transform 0.3s ease, color 0.3s ease', color: 'inherit' }}>
        <FaLinkedin size={35} color="white" />
      </a>
      <a href="https://github.com/fernandoaneto2" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ transition: 'transform 0.3s ease, color 0.3s ease', color: 'inherit'}}>
        <FaGithub size={35} color="white" />
      </a>
      <a href="https://wa.me/+5583998661293" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ transition: 'transform 0.3s ease, color 0.3s ease', color: 'inherit'}}>
        <FaWhatsapp size={35} color="white" />
      </a>
      <a href="https://www.instagram.com/fernandoaneto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{transition: 'transform 0.3s ease, color 0.3s ease', color: 'inherit'}}>
        <FaInstagram size={35} color="white"/>
      </a>
    </div>
  );


};


export default SocialLinks;
