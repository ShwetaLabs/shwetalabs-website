import { BlogTile } from '../components/blogTile/blogTile';
import { blogData } from '../data/blog';
import { isDesktop } from '../utils';

export function Blog(): JSX.Element {
  return (
    <div style={{ paddingLeft: '11vw', paddingRight: '11vw' }}>
      <div
        className='col'
        style={{ width: '55vw', marginInline: 'auto', alignItems: 'center' }}
      >
        <p className='title2 fs-x-large'>{blogData.title}</p>
        <p
          className='shady-70 centered'
          style={{ width: '45vw', marginTop: '2.4vw' }}
        >
          {blogData.description}
        </p>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '65%' }}>
          <BlogTile blog={blogData.featured} showPreview={true} shaded={true} />
        </div>

        <div
          style={{
            width: '35%',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
          }}
        >
          <div style={{ height: '50%' }}>
            <BlogTile blog={blogData.onTop[0]} showPreview={false} />
          </div>
          <div style={{ height: '50%' }}>
            <BlogTile blog={blogData.onTop[1]} showPreview={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
