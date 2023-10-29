'use client';

import { useUserStore } from '@/store/user';

export default function Dashboard() {
  const userLogin = useUserStore((state) => state.state.login);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div
        className="z-10
          justify-between
          w-full
          max-w-5xl
          font-mono
          text-sm
          items-center
          lg:flex"
      >
        <h1>{`Login ${userLogin}`}</h1>
      </div>
    </main>
  );
}
