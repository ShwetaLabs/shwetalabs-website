import { images } from '../rsrc';
import { capabilitiesSpec } from './capabilities';
import { linkSpec } from './navigation';

export interface sleuthHeadSpec {
  img: string;
  // title: string;
  paras: string;
  // buttonText: string;
}

export interface caseStudyCardSpec {
  image: string;
  text: string;
  button: linkSpec;
}

export interface caseStudySpec {
  title: string;
  caseStudyCards: caseStudyCardSpec[];
}

export interface productSpec {
  head: sleuthHeadSpec;
  title: string;
  capabilities: capabilitiesSpec;
  caseStudy: caseStudySpec;
}

export const productData = {
  head: {
    img: images.sleuthLogo,
    paras:
      'SLEUTH is a sophisticated CDR (Call Detail Record) and IPDR (Internet Protocol Detail Record) analysis tool. It helps agencies analyse CDRs or IPDRs - of individuals and to uncover patterns: such as who they spoke to most frequently, the timing of their last call, their location when the call was made.',
    // buttonText: 'Book a Demo',
  },
  title: "A Law Enforcement Officer's Best Friend.",
  capabilities: {
    capababilites: [
      {
        title: 'Enhanced Investigative Capabilites',
        image: images.investigativeLogo,
        subcap: [
          {
            image: images.call,
            title: 'Call Analysis',
            paras:
              'SLEUTH uses Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) to provide detailed maps connecting various callers, analysing call patterns and their possible meaning.',
          },
          {
            image: images.ai,
            title: 'AI Action Plan',
            paras:
              'Utilising state-of-the-art AI and machine learning algorithms, SLEUTH can pre-emptively detect threats and provide Law Enforcement Officers with AI interpretation and actionable inputs.',
          },
          {
            image: images.profile,
            title: 'Profiling',
            paras:
              'Sleuth provides information on the suspect from multiple sources. Names, Call records, Locations, the Suspect’s History, Social Media handles and Organisations they are connected to - forming a detailed Profile.',
          },
        ],
      },
      {
        title: 'User-Friendly Uses',
        image: images.userFriendly,
        subcap: [
          {
            image: images.easyLogo,
            title: 'Easy to Use interface',
            paras:
              'SLEUTH uses Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) to provide detailed maps connecting various callers, analysing call patterns and their possible meaning.',
          },
          {
            image: images.tailorLogo,
            title: 'Tailor-made Reports',
            paras:
              'Utilising state-of-the-art AI and machine learning algorithms, SLEUTH can pre-emptively detect threats and provide Law Enforcement Officers with AI interpretation and actionable inputs.',
          },
          {
            image: images.scalableLogo,
            title: 'Scalability',
            paras:
              'Sleuth provides information on the suspect from multiple sources. Names, Call records, Locations, the Suspect’s History, Social Media handles and Organisations they are connected to - forming a detailed Profile.',
          },
        ],
      },
      {
        title: 'Security Assurance',
        image: images.securityLogo,
        subcap: [
          {
            image: images.dataLogo,
            title: 'Data Security',
            paras:
              'SLEUTH uses Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) to provide detailed maps connecting various callers, analysing call patterns and their possible meaning.',
          },
          {
            image: images.complianceLogo,
            title: 'Compliance',
            paras:
              'Utilising state-of-the-art AI and machine learning algorithms, SLEUTH can pre-emptively detect threats and provide Law Enforcement Officers with AI interpretation and actionable inputs.',
          },
          {
            image: images.accessLogo,
            title: 'Authorised Access',
            paras:
              'Sleuth provides information on the suspect from multiple sources. Names, Call records, Locations, the Suspect’s History, Social Media handles and Organisations they are connected to - forming a detailed Profile.',
          },
        ],
      },
    ],
  },
  caseStudy: {
    title: 'Case Study',
    caseStudyCards: [
      {
        image: images.caseStudy,
        text: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
        button: {
          text: 'READ CASE STUDY >',
          url: '#',
        },
      },
      {
        image: images.caseStudy,
        text: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
        button: {
          text: 'READ CASE STUDY >',
          url: '#',
        },
      },
      {
        image: images.caseStudy,
        text: 'Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ',
        button: {
          text: 'READ CASE STUDY >',
          url: '#',
        },
      },
    ],
  },
};
