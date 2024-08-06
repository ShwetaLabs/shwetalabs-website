import { blogSpec } from '../../data/home';
import { BlogTile } from '../blogTile/blogTile';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { blogSearchSpec } from '../../data/blog';
import { useState } from 'react';
import Fuse from 'fuse.js';

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

  blogSearch.tabs.map(cat => (categoryToBlogs[cat] = []));
  blogSearch.blogs.map(blog => {
    blog.categories!.map(cat => {
      categoryToBlogs[cat].push(blog);
    });
  });

  function createRows(blogs: blogSpec[]) {
    var rows: JSX.Element[] = [];
    var inRow: JSX.Element[] = [];
    for (var i = 0; i < blogs.length; i++) {
      inRow.push(
        <div style={{ width: '33%' }}>
          <BlogTile blog={blogs[i]} showPreview={true} shaded={false} />
        </div>,
      );
      if (inRow.length === 3) {
        rows.push(
          <div
            style={{
              height: '100%',
              display: 'grid',
              justifyContent: 'space-between',
              gap: '30px',
              marginBottom: '5%',
            }}
          >
            {inRow.concat()}
          </div>,
        );
        inRow = [];
      }
    }
    if (inRow.length > 0) {
      rows.push(
        <div
          style={{
            height: '100%',
            display: 'grid',
            justifyContent: 'space-between',
            gap: '30px',
          }}
        >
          {inRow.concat()}
        </div>,
      );
    }
    return rows;
  }
  return (
    <div style={{ columnGap: '2vw' }}>
      <div className='row' style={{ marginBottom: '50px' }}>
        <Box sx={{ width: '70%', overflow: 'hidden', position: 'relative' }}>
          <Tabs
            textColor='inherit'
            value={chosenTab}
            onChange={(event: any, newValue: number) => {
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
            gridTemplateColumns: 'auto auto auto',
            columnGap: '2%',
            rowGap: '2%',
          }}
        >
          {shownBlogs.map((blog, id) => {
            return (
              <div>
                <BlogTile blog={blog} url={`/blog/${id}`} showPreview={true} shaded={false} />
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
