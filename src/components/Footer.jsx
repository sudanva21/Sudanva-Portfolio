import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: 'https://github.com/sudanva21',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/sudanva-shilannavar',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope size={24} />,
      href: 'mailto:sudanva7@gmail.com',
      label: 'Email'
    },
    {
      icon: <FaWhatsapp size={24} />,
      href: 'https://wa.me/918310491208',
      label: 'WhatsApp'
    }
  ]

  return (
    <footer className="bg-neo-light border-t border-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button p-4 hover:text-indigo-600 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-700 font-medium">
              Sudanva Shilannavar
            </p>
            <p className="text-gray-600 mt-2">
              Full-Stack Web Developer | Freelancer | Automation Expert
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Gokak, Belagavi, Karnataka
            </p>
          </div>

          <div className="text-gray-600 text-sm">
            &copy; {currentYear} Sudanva Shilannavar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
