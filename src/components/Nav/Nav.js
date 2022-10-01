import { Link } from '../Link';

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
  <nav className="text-base font-medium text-gray-600">
    <ul className="flex justify-center space-x-8">
      {routes.map(route => (
        <li key={route.name}>
          <Link
            className="hover:text-cyan-500 hover:underline transition-all"
            href={route.path}
            {...(route.name === 'Resume' && { target: '_blank' })}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
