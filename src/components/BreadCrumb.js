import { Link } from 'react-router-dom';

const BreadcrumbItem = ({ to, label, isLast, icon }) => (
  <li className={`inline-flex items-center`}>
    {icon && (
      <span
        className={`mx-2 ${
          isLast
            ? 'dark:text-gray-300 text-gray-900 '
            : 'dark:text-gray-600 text-gray-500'
        }`}
      >
        {icon}
      </span>
    )}
    {isLast ? (
      <span className='dark:text-gray-300 text-gray-900'>{label}</span>
    ) : (
      <Link
        to={to}
        className='font-normal p-2 dark:text-gray-600 text-gray-500'
      >
        {label}
      </Link>
    )}
  </li>
);

const Breadcrumb = ({ items }) => (
  <nav className='my-4'>
    <ul className='flex'>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={item.to}
          to={item.to}
          label={item.label}
          icon={item.icon}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
