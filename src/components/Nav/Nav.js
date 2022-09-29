import Link from 'next/link';

const routes = [
  {
    name: 'Projects',
    path: '#projects',
  },
  {
    name: 'Resume',
    path: '/Diercks_Sara_Web_Resume012722.pdf',
  },
  {
    name: 'About',
    path: '#about',
  },
  {
    name: 'Contact',
    path: '#contact',
  },
];

export const Nav = () => (
  <nav>
    <ul>
      {routes.map(route => (
        <li key={route.name}>
          <Link href={route.path} passHref>
            {/* Resume needs to be opened in new tab */}
            <a {...(route.name === 'Resume' && { target: '_blank' })}>
              {route.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
