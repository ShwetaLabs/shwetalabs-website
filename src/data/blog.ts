import { blogImages } from '../rsrc';
import { blogSpec } from './home';

interface blogPageSpec {
  title: string;
  description: string;
  featured: blogSpec;
  onTop: blogSpec[];
  blogSearch: blogSearchSpec;
}

export interface blogSearchSpec {
  blogs: blogSpec[];
  tabs: string[];
}

export const blogData: blogPageSpec = {
  title: `Shweta Labs Blogs`,
  description: `Our blogs from our founders, analysts and experts analyze the latest developments in cyber-security, providing a variety of perspectives on this intriguing, exciting and challenging world. There are multiple lenses to see threats through and a single-minded aim – how to eliminate them.`,
  featured: {
    image: blogImages.featuredBlog,
    date: '12 March, 2024',
    length: '3 min',
    title:
      'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
    buttonText: 'Read Full Article',
    data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
    url: '/contact',
  },
  onTop: [
    {
      image: blogImages.blog3,
      date: '12 March, 2024',
      length: '3 min',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
      buttonText: 'Read Full Article',
      data: '',
      url: '/contact',
    },
    {
      image: blogImages.blog1,
      date: '12 March, 2024',
      length: '3 min',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
      buttonText: 'Read Full Article',
      data: '',
      url: '/contact',
    },
  ],

  blogSearch: {
    tabs: [
      'Latest Post',
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
      'Category 6',
    ],
    blogs: [
      {
        image: blogImages.blog1,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'sanchit Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 3'],
      },
      {
        image: blogImages.blog2,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'hardik Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 2'],
      },
      {
        image: blogImages.blog3,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'naveen Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 1'],
      },
      {
        image: blogImages.blog1,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'hello Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 6'],
      },
      {
        image: blogImages.blog2,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'sanchit Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 5'],
      },
      {
        image: blogImages.blog3,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 4'],
      },
      {
        image: blogImages.blog1,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 3'],
      },
      {
        image: blogImages.blog2,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 2'],
      },
      {
        image: blogImages.blog3,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 1'],
      },
      {
        image: blogImages.blog3,
        date: '12 March, 2024',
        length: '3 min',
        title:
          'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        buttonText: 'Read Full Article',
        data: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Alias et commodi repellat. Nostrum autem ut molestias accusamus iure.',
        url: '/contact',
        categories: ['Latest Post', 'Category 1'],
      },
    ],
  },
};
