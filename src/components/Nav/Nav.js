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
  <nav className="text-base font-medium text-gray-900 mx-auto w-full sm:w-auto sm:m-0">
    <ul className="flex justify-center space-x-8">
      {routes.map(route => (
        <li key={route.name}>
          <Link
            className="hover:text-sky-600"
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
