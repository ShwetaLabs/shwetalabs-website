import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Cookies } from '../pages/legal/Cookies';
import { Privacy } from '../pages/legal/Privacy';
import { Terms } from '../pages/legal/Terms';
import { Podcast } from '../pages/Podcast';
import { Products } from '../pages/Products';
import { Services } from '../pages/Services';
import { icons } from '../rsrc';
export interface linkSpec {
  text: string;
  url: string;
  icon?: string;
  iconOnly?: boolean;
  element?: ({}: any) => JSX.Element;
}
//spec for routes within the website.
export interface routeSpec {
  path: string;
  element: ({}: any) => JSX.Element;
}
export const aboutLink = {
  text: 'About',
  url: '/about',
  element: About,
};
export const productsLink = {
  text: 'Products',
  url: '/products',
  element: Products,
};

const servicesLink = {
  text: 'Services',
  url: '/services',
  element: Services,
};
export const blogLink = {
  text: 'Blog',
  url: '/blog',
  element: Blog,
};
export const podcastLink = {
  text: 'Podcast',
  url: '/podcast',
  element: Podcast,
};
export const contactLink = {
  text: 'Contact',
  url: '/contact',
  element: Contact,
};
export const policyLink = {
  text: 'Policy',
  url: '/',
};
/**@private*/
const staticHeaderLinks: linkSpec[] = [
  aboutLink,
  productsLink,
  servicesLink,
  podcastLink,
  blogLink,
  contactLink,
];
const socialLinks: linkSpec[] = [
  {
    text: 'Youtube',
    url: 'https://www.youtube.com/@ShwetaLabs',
    icon: icons.youtube,
    //todo: fill social links
  },
  {
    text: 'Github',
    url: 'https://github.com/ShwetaLabs',
    icon: icons.github,
  },
  {
    text: 'Medium',
    url: 'https://shwetalabs.medium.com/',
    icon: icons.medium,
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shwetalabs/',
    icon: icons.linkedin,
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/ShwetaLabs',
    icon: icons.twitter,
  },
];
export const quickLinks: linkSpec[] = [...getHeaderNavLinks()];
const termsLink = {
  text: 'Terms',
  url: `/terms`,
  element: Terms,
};
const privacyAndSecurityLink = {
  text: 'Privacy and Security',
  url: `/privacy`,
  element: Privacy,
};
const cookiesLink = {
  text: 'Cookies',
  url: '/cookies',
  element: Cookies,
};
const patentsLink = {
  text: 'Patents',
  url: '',
};
// may change this to button, onclick if action is too wild.
export const requestDemoLink: linkSpec = {
  text: 'CONTACT',
  url: '/contact',
};
export const policyLinks: linkSpec[] = [
  termsLink,
  privacyAndSecurityLink,
  cookiesLink,
];
export function getSocialIconOnlyLinks(): linkSpec[] {
  return socialLinks.map(link => {
    return { ...link, iconOnly: true };
  });
}
export const homeLink: linkSpec = {
  text: 'Home',
  url: '/home',
  element: Home,
};

export function getHeaderNavLinks(): linkSpec[] {
  //using a function to allow dynamic/programmed collection of links.
  return staticHeaderLinks;
}

export function getMainAppRoutes(): routeSpec[] {
  //using a function to allow dynamic/programmed collection of links.
  const routes: routeSpec[] = [];
  routes.push(...getHeaderNavLinks().map(link => linkToRoute(link)));
  routes.push(linkToRoute(homeLink));
  routes.push(linkToRoute(contactLink));
  routes.push(...policyLinks.map(link => linkToRoute(link)));
  return routes;
}

function linkToRoute(link: linkSpec): routeSpec {
  if (!link.element) {
    throw 'Links passed to linkToRoute must specify a react element!';
  }
  return { path: link.url, element: link.element };
}
