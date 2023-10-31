import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';
import { ChevronIcon } from './Icons';

function Users() {
  const [users, setUsers] = useState([]);
  const [sortKey, setSortKey] = useState('age');
  const [sortOrder, setSortOrder] = useState('');
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://63c2988fe3abfa59bdaf89f6.mockapi.io/users')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      setShow(false);
    } else {
      setSortKey(key);
      setShow(true);
      setSortOrder('asc');
    }
  };

  const handleRowClick = (id) => {
    navigate(`/users/${id}`);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortKey] - b[sortKey];
    } else {
      return b[sortKey] - a[sortKey];
    }
  });

  return (
    <>
      <Breadcrumb
        items={[{ to: '/users', label: 'لیست کاربران', icon: '>' }]}
      />

      <div className='dark:bg-Blue-dark h-96 text-3xl rounded-2xl border-solid border-surface-300 border flex flex-col gap-0 items-end justify-start self-stretch flex-1 relative overflow-hidden'>
        <table className='min-w-full divide-y divide-slate-600 dark:bg-Blue-dark '>
          <thead>
            <tr>
              <th className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                نام کاربر
              </th>
              <th
                className='flex  justify-center px-6 py-3 text-center text-xs leading-4 bg-Blue-light font-medium text-gray-100 uppercase tracking-wider cursor-pointer'
                onClick={() => handleSort('age')}
              >
                <span className={show ? 'rotate-180 ps-2' : 'pl-2'}>
                  <ChevronIcon />
                </span>
                سن
              </th>
              <th className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                شماره تلفن
              </th>
              <th className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                ایمیل
              </th>
              <th className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                آدرس
              </th>
              <th className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                شرکت
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr
                onClick={() => handleRowClick(user.id)}
                className='dark:odd:bg-Blue-gray dark:even:bg-Blue-dark cursor-pointer'
                key={user.id}
              >
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider '>
                  {user.name}
                </td>
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  {user.age}
                </td>
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  {user.phoneNumber}
                </td>
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  {user.email}
                </td>
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  {user.country} {user.city} {user.street} {user.zipcode}
                </td>
                <td className='px-6 py-3 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                  {user.company}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
