/* eslint-disable react/no-unescaped-entities */

import Index from '@/app/components';
import Link from 'next/link';
import './style.scss';
import docs from '@/docs';

export default function Product() {
  return (
    <>
      <div className="product-container">
        <div className="title">
          <h1 dangerouslySetInnerHTML={{ __html: docs.description }}></h1>
          <div className="actions">
            {docs.index.map((item) => (
              <Link href={item.href} key={item.href}>
                <button className="btn text">{item.content}</button>
              </Link>
            ))}
          </div>
        </div>
        <div className="title-example">
          <div className="code-example">
            <div className="code-block-example">
              <p className="code-line">
                <span className="code-line-highlight">git</span> clone
                https://github.com/do4ng/docs.git
              </p>
            </div>
          </div>
        </div>
      </div>
      <Index></Index>
    </>
  );
}
