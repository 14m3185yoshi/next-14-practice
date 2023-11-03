'use client';

import { useClerk } from '@clerk/nextjs';
import { deleteUserAction } from '@/app/_lib/action';
import { useState, useTransition } from 'react';

export default function DeleteUserButton({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();
  const { signOut } = useClerk();

  return (
    <>
      {isPending ? (
        <div>loading...</div>
      ) : (
        <div>
          <button
            type='button'
            onClick={() =>
              startTransition(() => {
                deleteUserAction(userId);
                signOut();
              })
            }
            className='rounded bg-orange-400 p-3 text-white hover:bg-orange-300'
          >
            アカウントを削除する
          </button>
        </div>
      )}
    </>
  );
}
