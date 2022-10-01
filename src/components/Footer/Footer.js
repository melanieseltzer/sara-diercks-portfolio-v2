import { BsGithub as GitHubIcon } from 'react-icons/bs';
import { HiOutlineMail as EmailIcon } from 'react-icons/hi';
import { ImLinkedin as LinkedInIcon } from 'react-icons/im';

import { MaxWidthContainer } from '../MaxWidthContainer';

const socials = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sara-diercks-623857a7/',
    icon: <LinkedInIcon color="#0072B1" size={30} />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/saradiercks',
    icon: <GitHubIcon size={30} />,
  },
  {
    name: 'Email',
    link: 'mailto:s.diercks31@gmail.com',
    icon: <EmailIcon size={36} />,
  },
];

export const Footer = () => (
  <footer className="mt-10 h-40 bg-slate-50">
    <MaxWidthContainer className="h-full flex flex-col items-center justify-center">
      <ul className="flex items-center space-x-6 mb-4">
        {socials.map(social => (
          <li key={social.name}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-slate-800">{`Copyright © ${new Date().getFullYear()} Sara Diercks`}</p>
    </MaxWidthContainer>
  </footer>
);
