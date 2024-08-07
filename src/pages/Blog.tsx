import { BlogTile } from '../components/blogTile/blogTile';
import { ComingSoon } from '../components/misc';
import { blogData } from '../data/blog';
import { isDesktop } from '../utils';
import { BlogSearch } from '../components/blogSearch/blogSearch';

export function Blog(): JSX.Element {
  return isDesktop() ? (
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

      <div className='row' style={{ gap: '1%' }}>
        <div className='col' style={{ width: '65%', height: '100%' }}>
          <div>
            <BlogTile
              blog={blogData.featured}
              url={blogData.featured.url}
              showPreview={true}
              shaded={true}
            />
          </div>
        </div>

        <div
          className='col'
          style={{
            width: '35%',
            rowGap: '2vw',
          }}
        >
          <div style={{ flexBasis: '0px', flexGrow: '1', overflow: 'hidden' }}>
            <div style={{ height: '50%' }}>
              <BlogTile
                blog={blogData.onTop[0]}
                url={blogData.onTop[0].url}
                showPreview={false}
              />
            </div>
            <div style={{ height: '50%' }}>
              <BlogTile
                blog={blogData.onTop[1]}
                url={blogData.onTop[1].url}
                showPreview={false}
              />
            </div>
          </div>
        </div>
      </div>

      <BlogSearch blogSearch={blogData.blogSearch} />
    </div>
  ) : (
    <div style={{ paddingLeft: '1vw', paddingRight: '1vw' }}>
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
      <ComingSoon />
    </div>
  );
}
