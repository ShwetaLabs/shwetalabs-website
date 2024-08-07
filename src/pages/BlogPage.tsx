import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { blogData } from '../data/blog';
import { parseHTML, removeTitle } from '../utils';

function getBlog(blogData: any, blogId: any) {
  if (blogId === 'featured') {
    return blogData.featured;
  } else if (blogId === 'top1') {
    return blogData.onTop[0];
  } else if (blogId === 'top2') {
    return blogData.onTop[1];
  } else {
    return blogData.blogSearch.blogs[Number(blogId)];
  }
}
export function BlogPage() {
  const params = useParams();
  const blog = getBlog(blogData, params.blogId);
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogPara, setBlogPara] = useState('');

  useEffect(() => {
    let [title, para] = parseHTML(blogContent);
    setBlogTitle(title);
    setBlogPara(para);
  }, [blogContent]);

  console.log(blog.data);
  useEffect(() => {
    fetch(blog.data)
      .then(r => r.text())
      .then(data => {
        setBlogContent(data);
      });
  }, []);

  if (blogContent == null) return <div />;
  return (
    <div style={{ padding: '0px 10%' }}>
      <div style={{ padding: '0px 17%', marginBottom: '30px' }}>
        <div className='row' style={{ justifyContent: 'space-between' }}>
          <p className='offwhite fs-smaller stripped'>{blog.date}</p>
          <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
        </div>
        <div className='fw-bold fs-x-large' style={{ lineHeight: '100%' }}>
          {' '}
          {blogTitle}{' '}
        </div>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <img src={blog.image} style={{ objectFit: 'contain', width: '100%' }} />
      </div>
      <div style={{ padding: '0px 17%' }}>
        <Markdown children={blogPara} />
      </div>
    </div>
  );
}
