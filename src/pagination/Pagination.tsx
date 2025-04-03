import React from 'react';

import Link from 'next/link';

export type IPaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination = (props: IPaginationProps) => {
  const { currentPage, totalPages } = props;

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <Link
          key={index + 1}
          href={`?page=${index + 1}`}
          as={`?page=${index + 1}`}
        >
          <a
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {index + 1}
          </a>
        </Link>
      ))}
    </div>
  );
};

export { Pagination };
