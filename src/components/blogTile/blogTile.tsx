import { isDesktop, stripHTML } from '../../utils';
import { blogSpec } from '../../data/home';
import { LinkBox } from '../linkBox/LinkBox';
import { useEffect, useState } from 'react';

export interface IBlogProps {
    blog: blogSpec;
    showPreview: boolean;
    shaded?: boolean;
    url?: string
}

export function BlogTile({
    blog,
    showPreview,
    shaded,
    url,
}: IBlogProps): JSX.Element {
    const [blogData, setBlogData] = useState("");
    useEffect(() => {
        fetch(blog.data)
            .then(r => r.text())
            .then(data => setBlogData(data))
    }
        , [blog]
    )
    return isDesktop() ? (
        <div className={shaded ? 'col bg2' : 'col'} style={{ height: '100%' }}>
            <div className='blogtile' style={{ height: '56%' }}>
                <img
                    style={{ objectFit: 'cover', overflow: 'hidden', width: '100%' }}
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
                        {blog.title}
                    </p>
                    {showPreview ? (
                        <p
                            className='shady-70 fs-smaller stripped ellipsised'
                            style={{
                                lineHeight: '1.4',
                                WebkitLineClamp: '4',
                                marginBottom: 12,
								whiteSpace: 'pre-wrap'
                            }}
                        >
						{stripHTML(blogData)}
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
                    link={{ text: blog.buttonText, url: url! }}
                    aClassName='caret-right button-pill fs-smaller'
                />
            </div>
        </div>
    );
}
