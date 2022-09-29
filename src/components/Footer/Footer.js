const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sara-diercks-623857a7/',
    // icon: faLinkedin,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/saradiercks',
    // icon: faGithub,
  },
  {
    name: 'Email',
    link: 'mailto:s.diercks31@gmail.com',
    // icon: faEnvelope,
  },
];

export const Footer = () => (
  <footer>
    <div>
      {socials.map(social => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          Insert icon here
          {/* <Icon size="lg" icon={social.icon} /> */}
        </a>
      ))}

      <p>{`Copyright © ${new Date().getFullYear()} Sara Diercks`}</p>
    </div>
  </footer>
);
