import React from 'react';

import dayjs from 'dayjs';
import Link from 'next/link';

import { Pagination } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4 bg-gray-50">
    {props.posts.map((elt) => (
      <div
        key={elt.slug}
        className="rounded-lg border border-gray-300 p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
      >
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
          <a>
            <h2 className="text-base font-medium text-gray-800 hover:text-blue-500 hover:underline">
              {elt.title}
            </h2>
          </a>
        </Link>
        <p className="mt-1 text-xs text-gray-400">
          {dayjs(new Date(elt.date)).format('YYYY-MM-DD')}
        </p>
      </div>
    ))}

    <div className="col-span-full mt-4">
      <Pagination {...props.pagination} />
    </div>
  </div>
);

export { BlogGallery };
