'use client';

import React from 'react';
import axios from 'axios';
import { SHOTS_PER_PAGE, dribbble_api } from '@/lib/constants';
import Marquee from './ui/marquee';
import PostImageCard from './post-image-card';
import Link from 'next/link';
import ShinyButton from './ui/shiny-button';

const DribbbleGallery = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [dribbblePage, setDribbblePage] = React.useState<any>(1);
  const [dribbblePosts, setDribbblePosts] = React.useState<any>([]);

  React.useEffect(() => {
    async function getDribbblePosts() {
      try {
        const dribbbleRes = await axios.get(
          `https://api.dribbble.com/v2/user/shots?access_token=${dribbble_api.ACCESS_TOKEN}&page=${dribbblePage}&per_page=${SHOTS_PER_PAGE}`
        );

        setDribbblePosts([...dribbblePosts, ...dribbbleRes?.data]);

        if (isLoading) setIsLoading(false);
      } catch (error) {
        console.warn(error);
        if (isLoading) setIsLoading(false);
        setIsError(true);
      }
    }

    getDribbblePosts();
  }, []);

  const firstRow = dribbblePosts?.slice(0, 6);
  const secondRow = dribbblePosts?.slice(6, 12);

  return (
    <div className='flex flex-col items-center'>
      <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background'>
        <Marquee pauseOnHover className='[--duration:20s]'>
          {firstRow.map((review: any) => (
            <Link target='_blank' key={review.id} href={review?.html_url}>
              <PostImageCard
                image={review?.images?.teaser}
                title={review?.title}
              />
            </Link>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:20s]'>
          {secondRow.map((review: any) => (
            <Link target='_blank' key={review.id} href={review?.html_url}>
              <PostImageCard
                image={review?.images?.teaser}
                title={review?.title}
              />
            </Link>
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background max-sm:dark:from-background'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background max-sm:dark:from-background'></div>
      </div>
      <Link
        href='https://ibirdagency.com'
        target='_blank'
        data-type='link'
        data-text="Let\'s go"
      >
        <ShinyButton>open website</ShinyButton>
      </Link>
    </div>
  );
};

export default DribbbleGallery;
