import React, { ReactNode } from 'react';

import Link from 'next/link';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased min-h-screen w-screen text-gray-800 bg-gray-50 px-10">
    {props.meta}
    <header className="py-10">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              <a className="text-gray-600 hover:text-gray-900">文章</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className="text-gray-600 hover:text-gray-900">介绍</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="bg-white shadow-md rounded-lg p-6 mb-10">
      {props.children}
    </main>
  </div>
);

export { Main };
