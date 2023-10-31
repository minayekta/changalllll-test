import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import girlImg from '../assets/girl.jpeg';
import { useHttp } from '../hooks/useHttp';
import Avatar from './Avatar';
import Breadcrumb from './BreadCrumb';
import Button from './Button';
import Card from './Card';
import CardBody from './Card/CardBody';
import CardHeader from './Card/CardHeader';
import Divider from './Divider';
import Input from './Input';
import Spinner from './Spinner';

const URL = 'https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/188';

function EditUser() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    zipcode: '',
    street: '',
    company: '',
  });

  const { id } = useParams();
  const { request, loading } = useHttp();

  useEffect(() => {
    const getUser = async () => {
      const data = await request(URL);

      setUser(data);
    };

    getUser();
  }, []);

  const handleInputChange = (e, name) => {
    const { value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

    await request(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  };

  const handleRemoveUser = async () => {
    const isOk = window.confirm('آیا مطمين هستید؟');

    if (isOk) {
      await request(URL, { method: 'DELETE' });
    }
  };

  return (
    <main>
      <Breadcrumb
        items={[
          { to: '/users', label: 'لیست کاربران', icon: '>' },
          {
            to: `/users/${id}`,
            label: 'ویرایش کاربر',
            icon: '>',
            isLast: true,
          },
        ]}
      />

      <section className='flex justify-center items-center'>
        <Card>
          <CardHeader />

          <Divider />

          <CardBody>
            <div className='flex justify-center mb-4'>
              <Avatar src={girlImg} size='xlarge' />
            </div>

            <form
              className='flex flex-col justify-center items-center'
              onSubmit={handleEditUser}
            >
              <div className='dark:bg-Blue-dark text-gray-500'>
                <div className='flex flex-row flex-nowrap gap-x-6 my-0'>
                  <Input
                    label='نام کاربر'
                    value={user.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                  />

                  <Input
                    label='سن'
                    value={user.age}
                    onChange={(e) => handleInputChange(e, 'age')}
                  />
                </div>

                <div className='flex flex-row flex-nowrap gap-x-6 my-6'>
                  <Input
                    label='ایمیل'
                    // type='email'
                    type='text'
                    value={user.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                  />

                  <Input
                    label='شماره تلفن'
                    type='tel'
                    value={user.phoneNumber}
                    onChange={(e) => handleInputChange(e, 'phoneNumber')}
                  />
                </div>

                <div className='flex flex-row flex-nowrap gap-x-6 my-6 '>
                  <Input
                    label='کشور'
                    className='basis-4/12'
                    value={user.country}
                    onChange={(e) => handleInputChange(e, 'country')}
                  />

                  <Input
                    label='شهر'
                    className='basis-4/12'
                    value={user.city}
                    onChange={(e) => handleInputChange(e, 'city')}
                  />

                  <Input
                    label='خیابان'
                    className='basis-4/12'
                    value={user.street}
                    onChange={(e) => handleInputChange(e, 'street')}
                  />

                  <Input
                    label='کد پستی'
                    type='number'
                    className='basis-4/12'
                    value={user.zipcode}
                    onChange={(e) => handleInputChange(e, 'zipcode')}
                  />
                </div>
                <div>
                  <Input
                    className='w-full'
                    label='شرکت'
                    value={user.company}
                    onChange={(e) => handleInputChange(e, 'company')}
                  />

                  <div className={'flex gap-x-4 mt-6'}>
                    <Button color='blue'>
                      {loading && <Spinner />}
                      ویرایش
                    </Button>
                    <Button
                      color='red'
                      type='button'
                      onClick={handleRemoveUser}
                    >
                      حذف
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default EditUser;
