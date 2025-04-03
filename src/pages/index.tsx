import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => {
  return (
    <Main meta={<Meta title="blog" description={AppConfig.description} />}>
      <BlogGallery posts={props.posts} pagination={props.pagination} />
    </Main>
  );
};

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination = {
    currentPage: 1,
    totalPages: 1,
  };
  return {
    props: {
      posts,
      pagination,
    },
  };
};

export default Index;
