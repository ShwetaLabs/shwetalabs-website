import { blogImages, images, people } from '../rsrc';
import { contactLink } from './navigation';

export const advertData = {
  title: 'For Enforcement <br> and Enforcers',
  description: `Shweta Labs Cyber-Security tools are made for law enforcement agencies - keeping the end user - the investigating officer or “enforcer” - in mind. Our tools are easy-to-use and “enforcer-friendly".`,
  descriptionBesideLogo: `Our services coalesce into a single point - designed to meet all Law Enforcement Needs in Cyber Security. Our products and services are meant to support requirements as diverse as tracking suspects and profiling perpetrators. In other words – we aim to be a holistic, all-encompassing cyber support for our clients and customers.`,
  logo: images.footerLogo,
};

export const trustedPartnersData = {
  title: 'Our Partners',
  logos: [images.iitkgp, images.dell, images.aws, images.nvidia],
};
export interface featureSpec {
  title: string;
  description: string;
  image: string;
  learnMoreUrl?: string;
}
export interface whatWeHaveSpec {
  learnMore: string;
  title: string;
  features: featureSpec[];
}
export const whatWeHaveData: whatWeHaveSpec = {
  learnMore: 'Learn More',
  title: `Secure and Speed-up
  <br>your Investigation`,
  features: [
    {
      title: `Next Gen Defence`,
      description: `Our belief is that the threats of the future will be in cyberspace. Our services work proactively to discover threats before they happen; or reactively, in eliminating them as they occur.`,
      image: images.shieldCircuit,
    },
    {
      title: `Digital Detectives`,
      description: `Our tools use language that you and I would, They interpret and convey their findings in relatable and understandable language.`,
      image: images.detective,
    },
    {
      title: `Complexity and Simplicity`,
      description: `Our services are designed to handle vast amounts of investigative data and decode them in simple and implementation-friendly language to a Law Enforcement Officer.`,
      image: images.decoding,
    },
    {
      title: `Multi-purpose and Multi-dimensional`,
      description: `Shweta Labs is a full-circle cyber security company. Each of our tools are meant to be a spokes of a wheel of investigation - providing end-to-end - investigation and threat-elimination - services.`,
      image: images.gear,
    },
  ],
};
export interface ourProductsSpec {
  title: string;
  products: featureSpec[];
}
export const ourProductsData: ourProductsSpec = {
  title: 'Our Products and Services' /*👊 Abhishek*/,
  products: [
    {
      title: 'Sleuth',
      description:
        'SLEUTH is a sophisticated CDR (Call Detail Record) and IPDR (Internet Protocol Detail Record) analysis tool.',
      image: images.sleuthLogo,
      learnMoreUrl: '/contact',
    },
  ],
};
export interface userSpec {
  name: string;
  image: string;
  designation: string;
}

export interface testimonySpec {
  quoteImage: string;
  description: string;
  user: userSpec;
}
export const caseStudiesData = {
  title: 'Appreciated By',
  description:
    'Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium dolorum. Consequatur sint cum illo eum harum odit delectus sed. Quis deleniti aut alias.',
  cases: [
    {
      quoteImage: images.quotes,
      description:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem.',
      user: {
        name: 'Harry Kerluke',
        image: people.harryKerluke,
        designation: 'Designation',
      },
    },
    {
      quoteImage: images.quotes,
      description:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem.',
      user: {
        name: 'Harry Kerluke',
        image: people.harryKerluke,
        designation: 'Designation',
      },
    },
    {
      quoteImage: images.quotes,
      description:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. Placeat quisquam ipsum minus accusantium inventore quis consectetur rem.',
      user: {
        name: 'Harry Kerluke',
        image: people.harryKerluke,
        designation: 'Designation',
      },
    },
  ],
};
export interface blogSpec {
  image: string;
  date: string;
  length: string;
  title: string;
  data: string;
  buttonText: string;
  url: string;
  categories?: string[];
}
export const blogsAdvertData = {
  title: 'Our Blogs',
  readArticle: 'Read Article',
  blogs: [
    {
      // can also be urls of images online.
      image: blogImages.blog1,
      length: '3 min',
      date: '12 March, 2024',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
      buttonText: 'Read Article',
      data: '',
      url: '/contact',
    },
    {
      // can also be urls of images online.
      image: blogImages.blog2,
      length: '3 min',
      date: '12 March, 2024',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
      buttonText: 'Read Article',
      data: '',
      url: '/contact',
    },
    {
      // can also be urls of images online.
      image: blogImages.blog3,
      length: '3 min',
      date: '12 March, 2024',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
      buttonText: 'Read Article',
      data: '',
      url: '/contact',
    },
  ],
};

export interface awardSpec {
  title: string;
  logo: string;
  category: string;
}
export const awardsData = {
  title: 'Recognizing Excellence in Innovation and Dedication',
  description:
    'Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium dolorum. Consequatur sint cum illo eum harum odit delectus sed. Quis deleniti aut alias.',
  awards: [
    {
      title: 'Award Title',
      logo: images.awardLogo,
      category: 'Category',
    },
    {
      title: 'Award Title',
      logo: images.awardLogo,
      category: 'Category',
    },
    {
      title: 'Award Title',
      logo: images.awardLogo,
      category: 'Category',
    },
    {
      title: 'Award Title',
      logo: images.awardLogo,
      category: 'Category',
    },
  ],
};

export interface podcastEpisodeSpec {
  episode: string;
  title: string;
  date: string;
  length: string;
  thumbnail: string;
  link: string;
}

export const podcastAdvertData = {
  title: 'Watch our Podcast Series',
  episodes: [
    {
      episode: 'Episode 9',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
      length: '48 min',
      date: '12 March, 2024',
      thumbnail: images.thumbnail,
      link: '/contact',
    },
    {
      episode: 'Episode 9',
      title:
        'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
      length: '48 min',
      date: '12 March, 2024',
      thumbnail: images.thumbnail,
      link: '/contact',
    },
  ],
};

export const strongholdsData = {
  title: 'Global Strongholds Worldwide',
  map: images.strongholdsMap,
};
