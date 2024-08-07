import { blogSpec } from '../../data/home';
import { BlogTile } from '../blogTile/blogTile';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { blogSearchSpec } from '../../data/blog';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { parseHTML } from '../../utils';

interface blogSearchProp {
  blogSearch: blogSearchSpec;
}

export function BlogSearch({ blogSearch }: blogSearchProp) {
  let [chosenTab, setChosenTab] = useState(0);
  let [shownBlogs, setShownBlogs] = useState<blogSpec[] | null>(
    blogSearch.blogs,
  );
  let categoryToBlogs: { [category: string]: blogSpec[] } = {};
  let fuse = new Fuse(blogSearch.blogs, { keys: ['title'] });

  // useEffect(() => {
  blogSearch.tabs.map(cat => (categoryToBlogs[cat] = []));
  blogSearch.blogs.map(blog => {
    fetch(blog.data)
      .then(res => res.text())
      .then(data => {
        let temp;
        [blog.title, temp] = parseHTML(data);
      });
    blog.categories!.map(cat => {
      categoryToBlogs[cat].push(blog);
    });
  });
  // }, [blogSearch])

  return (
    <div style={{ columnGap: '2vw' }}>
      <div className='row' style={{ marginBottom: '50px' }}>
        <Box sx={{ width: '70%', overflow: 'hidden', position: 'relative' }}>
          <Tabs
            textColor='inherit'
            value={chosenTab}
            onChange={(event: any, newValue: number) => {
              console.log(newValue);
              console.log(categoryToBlogs);
              console.log(categoryToBlogs[blogSearch.tabs[newValue]]);
              setChosenTab(newValue);
              setShownBlogs(categoryToBlogs[blogSearch.tabs[newValue]]);
            }}
            variant='scrollable'
            scrollButtons='auto'
            allowScrollButtonsMobile
            // went crazy learning this much css
            sx={{
              '& .MuiTab-root': {
                borderBottom: '3px solid rgb(50, 50, 50)',
              },
              '& .MuiTabs-scrollButtons': {
                position: 'absolute',
                top: 0,
                bottom: 0,
                zIndex: 10,
                opacity: 1,
              },
              '& .MuiTabs-scrollButtons:first-of-type': {
                left: 0,
              },
              '& .MuiTabs-scrollButtons:last-of-type': {
                right: 0,
              },
              '& .MuiTabs-scrollButtons:last-of-type::before, & .MuiTabs-scrollButtons:first-of-type::after':
                {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '200%',
                  pointerEvents: 'none',
                  zIndex: 2,
                },
              '& .MuiTabs-scrollButtons:last-of-type::before': {
                right: 0,
                background: `linear-gradient(to left, rgba(0,0,0,255) 60%,rgba(0,0,0,0) 100%);`,
              },
              '& .MuiTabs-scrollButtons:first-of-type::after': {
                left: 0,
                background: `linear-gradient(to right, rgba(0,0,0,255) 60%,rgba(0,0,0,0) 100%);`,
              },
              '.MuiSvgIcon-root': {
                zIndex: 5,
              },
              [`& .${tabsClasses.indicator}`]: {
                backgroundColor: '#ffffff',
              },
            }}
          >
            {blogSearch.tabs.map(id => (
              <Tab className='fs-x-large' label={id} />
            ))}
          </Tabs>
        </Box>

        <div style={{ width: '30%' }}>
          <input
            className='field input searchIcon'
            placeholder='Search Topic'
            onChange={ev => {
              const result = fuse.search(ev.target.value);
              const resultList = result.map(res => res.item);
              setShownBlogs(
                resultList.length > 0
                  ? resultList
                  : ev.target.value.length > 0
                    ? null
                    : categoryToBlogs[blogSearch.tabs[chosenTab]],
              );
            }}
          />
        </div>
      </div>
      {shownBlogs != null ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            columnGap: '2%',
            rowGap: '2%',
          }}
        >
          {shownBlogs.map((blog, id) => {
            return (
              <div>
                <BlogTile
                  blog={blog}
                  url={`/blog/${id}`}
                  showPreview={true}
                  shaded={false}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className='fs-x-large centered' style={{ width: '100%' }}>
          {' '}
          No Blog Found{' '}
        </div>
      )}
    </div>
  );
}
