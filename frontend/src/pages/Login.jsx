import React from 'react';
import background from '../assets/background.webp';

const Login = () => {
  return (
    <div
      className='flex flex-col min-h-screen bg-cover bg-no-repeat bg-top'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
    >
      <div className='mx-auto mt-32 p-10 rounded-lg bg-slate-700 py-12 w-[400px] h-auto'>
        <h1 className='text-white font-extrabold text-3xl mb-8'>Login</h1>
        <div className='mb-3'>
          <label
            className='font-semibold text-slate-200 text-sm mb-1'
            htmlFor=''
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            className='p-3 w-full rounded-lg bg-slate-600'
          />
        </div>
        <div className='mb-8'>
          <label
            className='font-semibold text-slate-200 text-sm mb-1'
            htmlFor=''
          >
            Password
          </label>
          <input
            type='password'
            placeholder='Password'
            className='p-3 w-full rounded-lg bg-slate-600'
          />
        </div>
        <button className='w-full bg-blue-600 p-3 text-white font-semibold text-lg rounded-lg'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
