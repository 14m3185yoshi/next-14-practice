'use server';

import { clerkClient } from '@clerk/nextjs';

export async function deleteUserAction(userId: string) {
  if (!userId) return;
  await clerkClient.users.deleteUser(userId); // アカウント削除
}
