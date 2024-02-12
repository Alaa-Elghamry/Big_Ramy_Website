import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <h2>Connect with us</h2>
      <ul style={{ listStyleType: 'none', padding:  0 }}>
        <li style={{ display: 'inline', marginRight: '1rem' }}>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: '1rem' }}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: '1rem' }}>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: '1rem' }}>
          <a href="https://www.linkedin.com/company/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()}Big Ramy</p>
    </footer>
  );
};

export default Footer;
