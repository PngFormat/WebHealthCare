import React from 'react';
import { router } from 'next/client';
import { useRouter } from 'next/router';

const ButtonAuth = () => {
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push('/auth-page')}>
        Log in
      </button>
      <button type="button" onClick={() => router.push('/registration')}>
        Sign in
      </button>
    </div>
  );
};

export default ButtonAuth;
