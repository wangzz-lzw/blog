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
  <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
    {props.posts.map((elt) => (
      <div
        key={elt.slug}
        className="rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg transition-shadow"
      >
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
          <a>
            <h2 className="text-lg font-bold text-blue-600 hover:underline">
              {elt.title}
            </h2>
          </a>
        </Link>
        <p className="mt-2 text-sm text-gray-500">
          {dayjs(new Date(elt.date)).format('YYYY-MM-DD')}
        </p>
      </div>
    ))}

    <div className="col-span-full mt-6">
      <Pagination {...props.pagination} />
    </div>
  </div>
);

export { BlogGallery };
