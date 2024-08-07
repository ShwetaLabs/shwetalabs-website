import { isDesktop, parseHTML } from '../../utils';
import { blogSpec } from '../../data/home';
import { LinkBox } from '../linkBox/LinkBox';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

export interface IBlogProps {
  blog: blogSpec;
  showPreview: boolean;
  shaded?: boolean;
  url?: string;
}

export function BlogTile({
  blog,
  showPreview,
  shaded,
  url,
}: IBlogProps): JSX.Element {
  url = url || blog.url;
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogPara, setBlogPara] = useState('');
  useEffect(() => {
    fetch(blog.data)
      .then(r => r.text())
      .then(data => setBlogContent(data));
  }, [blog]);

  useEffect(() => {
    let [title, para] = parseHTML(blogContent);
    setBlogTitle(title);
    setBlogPara(para);
  }, [blogContent]);

  return isDesktop() ? (
    <div className={shaded ? 'col bg2' : 'col'} style={{ height: '100%' }}>
      <div className='blogtile' style={{ overflow: 'hidden' }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          src={blog.image}
        />
      </div>
      <div
        style={shaded ? { margin: '0px 24px 10px 24px' } : { height: '44%' }}
      >
        <div
          className='row'
          style={{ justifyContent: 'space-between', marginTop: '4%' }}
        >
          <p className='offwhite fs-smaller stripped'>{blog.date}</p>
          <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
        </div>
        <div className='col' style={{ alignItems: 'flex-start' }}>
          <p
            className='stripped ellipsised'
            style={{ WebkitLineClamp: '2', marginBottom: 12 }}
          >
            {blogTitle}
          </p>
          {showPreview ? (
            <p
              className='shady-70 fs-smaller stripped ellipsised'
              style={{
                lineHeight: '1.4',
                WebkitLineClamp: '4',
                marginBottom: 12,
                whiteSpace: 'pre-wrap',
              }}
            >
              <Markdown>{blogPara}</Markdown>
            </p>
          ) : null}
          <LinkBox
            link={{ text: blog.buttonText, url: url! }}
            aClassName='caret-right button-pill fs-smaller'
          />
        </div>
      </div>
    </div>
  ) : (
    <div className='col' style={{ marginTop: 32, height: '100%' }}>
      <div className='blogtile'>
        <img
          src={blog.image}
          style={{ objectFit: 'cover', overflow: 'hidden', width: '100%' }}
        />
      </div>
      <div
        className='row'
        style={{ justifyContent: 'space-between', marginTop: 24 }}
      >
        <p className='offwhite fs-smaller stripped'>{blog.date}</p>
        <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
      </div>
      <div className='col' style={{ alignItems: 'flex-start' }}>
        <p className='stripped' style={{ marginBottom: 12 }}>
          {blog.title}
        </p>
        <LinkBox
          link={{ text: blog.buttonText, url: url! }}
          aClassName='caret-right button-pill fs-smaller'
        />
      </div>
    </div>
  );
}
