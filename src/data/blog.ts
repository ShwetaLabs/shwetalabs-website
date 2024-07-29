import { blogImages } from '../rsrc';
import { blogSpec } from './home';

interface blogPageSpec {
  title: string;
  description: string;
  featured: blogSpec;
  onTop: blogSpec[];
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
};
