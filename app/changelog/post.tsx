'use client';

import { useState } from 'react';

import { Content } from '@/mdx/content';

export function ChangelogPost(props: { content: string; closed: boolean }) {
  const [closed, setClosed] = useState(props.closed);

  return (
    <>
      <div className="post">
        <div className="flex">
          <div className={`post-container ${closed ? 'closed' : ''}`}>
            <Content content={props.content}></Content>
          </div>
        </div>

        {closed ? (
          <button
            onClick={() => {
              setClosed(false);
            }}
            className="no-btn text-inter a"
          >
            Read more..
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
