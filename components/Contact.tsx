'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@app/utils/send-email';
import { FormData } from '@types';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className='max-w-[600px] md:max-w-full w-full mx-auto'>
      <div className='contact-form pt-4' id='contact'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col '
          noValidate
        >
          <label className='text-center py-2'>
            <input
              type='text'
              id='name'
              className='p-1 w-full bg-slate-200'
              {...register('username', { required: 'Username Required' })}
              name='username'
              autoComplete='name'
            />
            <div className='label-div text-start'>
              {errors.username?.message ? (
                <p className='text-red-500'>{errors.username?.message}</p>
              ) : (
                <p>Full Name</p>
              )}
            </div>
          </label>

          <label>
            <input
              type='email'
              id='email'
              className='p-1 w-full bg-slate-200'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid Email format',
                },
              })}
              name='email'
              autoComplete='email'
            />
            <div className='label-div text-start'>
              {errors.email?.message ? (
                <p className='text-red-500'>{errors.email?.message}</p>
              ) : (
                <p>Email</p>
              )}
            </div>
          </label>

          <label className='text-start content-start py-2'>
            <textarea
              cols={20}
              rows={5}
              className='p-1 w-full bg-slate-200'
              {...register('message', { required: true })}
              name='message'
              autoComplete='message'
            ></textarea>
            Anything to add? (Optional)
          </label>
          <button
            type='submit'
            className='py-2 px-6 bg-red-600 text-white text-lg md:text-xl font-semibold hover:opacity-80'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
