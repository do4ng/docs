'use client';

import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';

import '@/styles/global.scss';
import config from '@/config';
import './style.scss';
import './[category]/[slug]/post.scss';
import './[category]/[slug]/style.scss';
import { Header } from './header';
import { CategoryMenu } from './[category]/[slug]/category';

function toggleTheme(to: 'dark' | 'white' = 'dark') {
  if (typeof window === 'undefined') return;
  document.querySelector('html').setAttribute('class', to);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname().split('/')[1];
  const isDocs = path === 'docs' || path === 'plugins';

  if (typeof window !== 'undefined') {
    toggleTheme((localStorage.getItem('theme') as any) || 'white');
  }

  const target = config.find((category) => category.title.toLowerCase() === path);

  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} height={2} color="#9934eb" />
        <script src="/theme.js" async></script>
        <div className="app">
          <Header></Header>

          {isDocs ? (
            <>
              <div className="documentation">
                <div className="menu">
                  <div className="menu-layout">
                    {target ? (
                      target.category.map((category) => (
                        <CategoryMenu
                          category={category as any}
                          key={category.name}
                        ></CategoryMenu>
                      ))
                    ) : (
                      <>page not found</>
                    )}
                  </div>
                  <div className="menu-bottom">
                    <i className="ri-sun-line"></i>
                    <select
                      onChange={(e) => {
                        localStorage.setItem('theme', e.target.value);
                        toggleTheme(e.target.value as any);
                      }}
                    >
                      <option key="dark" value="dark">
                        Dark
                      </option>
                      <option key="white" value="white">
                        White
                      </option>
                    </select>
                  </div>
                </div>
                <div className="content">{children}</div>
              </div>
            </>
          ) : (
            children
          )}
        </div>
      </body>
    </html>
  );
}
