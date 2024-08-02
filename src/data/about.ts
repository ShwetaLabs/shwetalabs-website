import { squadData, squadSpec } from './squad';
import { titleInfoSpec } from './utils';
import { images } from '../rsrc';

export interface valueCardSpec {
  image: string;
  title: string;
  para: string;
}

export interface valuesSpec {
  superTitle: string;
  title: string;
  para: string;
  cards: valueCardSpec[];
}

export interface aboutSpec {
  titleInfo: titleInfoSpec;
  visions: valueCardSpec[];
  squad: squadSpec;
  values: valuesSpec;
}

export const aboutData: aboutSpec = {
  titleInfo: {
    title: 'Our Story',
    paras: `We want to make the bad guys pay!!
That’s not a cheesy movie line - that’s what we want to do; and this is our story.

Founder, Naveen A. witnessed first-hand the hurdles law enforcement faced in his own family of police officials; and that sparked the idea of making a range of cyber tools to aid police, military and law enforcement.The end of our start - up story - is the beginning of the next one.The one in which we ‘want to make the bad guys pay’ a reality.
`,
  },
  visions: [
    {
      image: images.visionLogo,
      title: 'Our Vision',
      para: 'To make the world fearless, empowered and free; and to remove the obstacles that get in the way of our freedom and flourishing.',
    },
    {
      image: images.missionLogo,
      title: 'Our Mission',
      para: `To provide the software and services needed for 
		  a secure and fearless world.`,
    },
  ],
  squad: squadData,
  values: {
    superTitle: 'Qui numquam',
    title: 'Our Values',
    para: ` Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium dolorum. Consequatur sint cum illo eum harum odit delectus sed. Quis deleniti aut alias.`,
    cards: [
      {
        image: images.accessibilityLogo,
        title: 'Accessibility',
        para: 'We believe all great products and great philosophies are simple and accessible. Shweta Labs is a de-jargonized IT solution provider that makes everyone empowered and not just the tech-savvy.',
      },
      {
        image: images.careLogo,
        title: 'Care',
        para: 'We are not here to achieve the highest sales or generate the biggest profits. We are here for the victims who suffer cyber crimes. The profits will follow.',
      },
      {
        image: images.intelligentLogo,
        title: 'Intelligent',
        para: 'We are a company that believes in Character and Competence. Our character comes from adhering to our mission and values. While our competence is based on intelligence, imagination and innovation.',
      },
      {
        image: images.proactiveLogo,
        title: 'Proactive',
        para: 'We believe in imagining threats before they happen and then using our imagination and technical expertise in combating them.',
      },
    ],
  },
};
