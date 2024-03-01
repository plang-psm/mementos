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
    <div className='max-w-[350px] md:max-w-full w-full mx-auto'>
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
              className='p-1 w-full'
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
              className='p-1 w-full'
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
              className='p-1 w-full '
              {...register('message', { required: true })}
              name='message'
              autoComplete='message'
            ></textarea>
            Anything to add? (Optional)
          </label>
          <button
            type='submit'
            className='bg-[#1F54D9] p-1 text-white hover:bg-opacity-70'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
