'use client';

import React, { ReactNode } from 'react';

type HobbyCardProps = {
  icon?: any;
  title: string;
  description: string;
};

const HobbyCard = ({ title, description, icon }: HobbyCardProps) => {
  return (
    <div className='flex flex-col gap-1'>
      {icon}
      <h3 className='text-xs font-semibold leading-none text-black dark:text-white sm:text-sm'>
        {title}
      </h3>
      <span className='font-sans text-xs text-muted-foreground sm:text-sm'>
        {description}
      </span>
    </div>
  );
};

export default HobbyCard;
