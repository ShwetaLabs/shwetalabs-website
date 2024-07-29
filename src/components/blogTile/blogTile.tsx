import { isDesktop } from '../../utils';
import { blogSpec } from '../../data/home';
import { LinkBox } from '../linkBox/LinkBox';

export interface IBlogProps {
  blog: blogSpec;
  showPreview: boolean;
  shaded?: boolean;
}

export function BlogTile({
  blog,
  showPreview,
  shaded,
}: IBlogProps): JSX.Element {
  return isDesktop() ? (
    <div className={shaded ? 'col bg2' : 'col'} style={{ marginInline: 16 }}>
      <div className='blogtile'>
        <img src={blog.image} />
      </div>
      <div style={shaded ? { margin: 24 } : {}}>
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
          {showPreview ? (
            <p
              className='shady-70 fs-smaller stripped'
              style={{ marginBottom: 12 }}
            >
              {' '}
              {blog.data}{' '}
            </p>
          ) : null}
          <LinkBox
            link={{ text: blog.buttonText, url: blog.url }}
            aClassName='caret-right button-pill fs-smaller'
          />
        </div>
      </div>
    </div>
  ) : (
    <div className='col' style={{ marginTop: 32 }}>
      <div className='blogtile'>
        <img src={blog.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
          link={{ text: blog.buttonText, url: blog.url }}
          aClassName='caret-right button-pill fs-smaller'
        />
      </div>
    </div>
  );
}
