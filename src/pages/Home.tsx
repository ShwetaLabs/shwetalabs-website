import Marquee from 'react-fast-marquee';
import {
  AwardTile,
  Feature,
  PodcastEpisodeTile,
  Product,
  Testimony,
} from '../components/misc';
import { BlogTile } from '../components/blogTile/blogTile';
import {
  advertData,
  awardsData,
  blogsAdvertData,
  caseStudiesData,
  ourProductsData,
  podcastAdvertData,
  strongholdsData,
  trustedPartnersData,
  whatWeHaveData,
} from '../data/home';
import { isDesktop } from '../utils';

export const Home: ({}) => JSX.Element = ({}) => {
  return (
    <div
      className='col home'
      style={
        isDesktop()
          ? {
              alignItems: 'stretch',
              width: '78%',
              marginInline: 'auto',
              rowGap: 160,
            }
          : { rowGap: 120 }
      }
    >
      <BriefAdvert />
      <WhatWeHave />
      <OurProducts />
      {/* <CaseStudies /> */}
      <TrustedPartners />
      {/* <Awards /> */}
      {/* <PodcastAdvert /> */}
      <BlogsAdvert />
      <Strongholds />
    </div>
  );
};

function BriefAdvert(): JSX.Element {
  return isDesktop() ? (
    <div
      className='col'
      style={{ alignItems: 'center', width: '70vw', marginInline: 'auto' }}
    >
      <p
        style={{ width: '50vw', marginBottom: '20px' }}
        className='title fs-larger'
        dangerouslySetInnerHTML={{ __html: advertData.title }}
      ></p>
      <p
        className='shady-70'
        style={{ textAlign: 'center', margin: 'auto 50px' }}
      >
        {advertData.description}
      </p>
      {/* <span style={{ marginTop: 40, textTransform: 'uppercase' }}>
        <LinkBox
          link={contactLink}
          aClassName={'button4 caret-right fs-small'}
        />
      </span> */}
      <div
        className='row'
        style={{
          width: '90%',
          marginTop: 40,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p className='shady-70' style={{ width: '35vw' }}>
            {advertData.descriptionBesideLogo}
          </p>
        </div>
        <div>
          <img style={{ width: '22.5vw' }} src={advertData.logo} />
        </div>
      </div>
    </div>
  ) : (
    <div className='col'>
      <p
        className='title fs-xx-large'
        dangerouslySetInnerHTML={{ __html: advertData.title }}
      ></p>
      <p className='shady-70 centered' style={{ marginTop: 24 }}>
        {advertData.description}
      </p>
      {/* <span style={{ marginTop: 40, textTransform: 'uppercase' }}>
        <LinkBox link={contactLink} aClassName='button4 caret-right fs-small' />
      </span> */}
      <img src={advertData.logo} style={{ marginTop: '10vh' }} />
      <p className='shady-70' style={{ marginTop: 40 }}>
        {advertData.descriptionBesideLogo}
      </p>
    </div>
  );
}
function TrustedPartners(): JSX.Element {
  return isDesktop() ? (
    <div
      className='col'
      style={{ width: '80%', marginInline: 'auto', alignItems: 'center' }}
    >
      <p className='title fs-larger'>{trustedPartnersData.title}</p>
      <div
        className='inline-fade'
        style={{ width: '68vw', overflow: 'hidden', marginTop: 50 }}
      >
        <span style={{ zIndex: 'inherit' }}>
          <Marquee speed={40}>
            <div className='row' style={{ alignItems: 'center' }}>
              {trustedPartnersData.logos.map(logo => {
                return (
                  <img style={{ paddingInline: '5vw' }} key={logo} src={logo} />
                );
              })}
            </div>
          </Marquee>
        </span>
      </div>
    </div>
  ) : (
    <div className='col'>
      <p className='title fs-larger'>{trustedPartnersData.title}</p>
      <div
        className='inline-fade'
        style={{ width: '90vw', overflow: 'hidden', marginTop: 50 }}
      >
        <span style={{ zIndex: 'inherit' }}>
          <Marquee>
            <div className='row' style={{ alignItems: 'center' }}>
              {trustedPartnersData.logos.map(logo => {
                return (
                  <img style={{ paddingInline: '5vw' }} key={logo} src={logo} />
                );
              })}
            </div>
          </Marquee>
        </span>
      </div>
    </div>
  );
}
function WhatWeHave(): JSX.Element {
  return isDesktop() ? (
    <div className='col'>
      <p
        className='title fs-larger'
        dangerouslySetInnerHTML={{ __html: whatWeHaveData.title }}
      ></p>
      <div className='col' style={{ marginTop: 40, rowGap: 10 }}>
        {whatWeHaveData.features.map((feature, index, arr) => {
          return (
            <Feature
              feature={feature}
              reverse={index % 2 === 1}
              key={feature.title}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div
      className='col'
      style={{ alignItems: 'center', alignContent: 'center' }}
    >
      <p
        className='title fs-larger'
        dangerouslySetInnerHTML={{ __html: whatWeHaveData.title }}
      ></p>
      {whatWeHaveData.features.map((feature, index, arr) => {
        return (
          <Feature
            feature={feature}
            reverse={index % 2 === 1}
            key={feature.title}
          />
        );
      })}
    </div>
  );
}

function OurProducts(): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ width: '80%' }}>
      <p className='title fs-larger' style={{ marginBottom: 30 }}>
        {ourProductsData.title}
      </p>
      {ourProductsData.products.map(product => {
        return <Product product={product} key={product.title} />;
      })}
    </div>
  ) : (
    <div className='col'>
      <p className='title fs-large' style={{ marginBottom: 24 }}>
        {ourProductsData.title}
      </p>
      {ourProductsData.products.map(product => {
        return <Product product={product} key={product.title} />;
      })}
    </div>
  );
}

function Awards(): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ width: '61.2vw', alignItems: 'center' }}>
      <p className='title fs-larger' style={{}}>
        {awardsData.title}
      </p>
      <p className='offwhite centered' style={{}}>
        {awardsData.description}
      </p>
      <div className='row' style={{ justifyContent: 'center' }}>
        {awardsData.awards.map(award => {
          return <AwardTile award={award} key={award.title} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <p className='title fs-larger'>{awardsData.title}</p>
      <p className='offwhite centered'>{awardsData.description}</p>
      <div
        className='grid d2xn'
        style={{
          justifyContent: 'center',
          rowGap: 8,
          columnGap: 8,
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {awardsData.awards.map(award => {
          return <AwardTile award={award} key={award.title} />;
        })}
      </div>
    </div>
  );
}
function CaseStudies(): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ width: '80%', alignContent: 'flex-start' }}>
      <p className='title fs-larger' style={{}}>
        {caseStudiesData.title}
      </p>
      {/* <p className='offwhite' style={{ width: '90%' }}>
        {caseStudiesData.description}
      </p> */}
      <div className='row' style={{ marginTop: 30 }}>
        {caseStudiesData.cases.map(testimony => {
          return <Testimony testimony={testimony} />;
        })}
      </div>
    </div>
  ) : (
    <div className='col' style={{ alignContent: 'flex-start' }}>
      <p className='title fs-larger' style={{ textAlign: 'left' }}>
        {caseStudiesData.title}
      </p>
      <p className='offwhite' style={{ width: '90%' }}>
        {caseStudiesData.description}
      </p>
      {caseStudiesData.cases.map(testimony => {
        return <Testimony testimony={testimony} />;
      })}
    </div>
  );
}

function PodcastAdvert(): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ width: '80%', alignItems: 'center' }}>
      <p className='title fs-larger' style={{ width: '95%' }}>
        {podcastAdvertData.title}
      </p>
      <div className='row' style={{ justifyContent: 'center', marginTop: 20 }}>
        {podcastAdvertData.episodes.map(episode => {
          return <PodcastEpisodeTile episode={episode} key={episode.title} />;
        })}
      </div>
    </div>
  ) : (
    <div className='col' style={{ alignItems: 'center' }}>
      <p className='title fs-larger' style={{ width: '95%', marginTop: 20 }}>
        {podcastAdvertData.title}
      </p>
      {podcastAdvertData.episodes.map(episode => {
        return <PodcastEpisodeTile episode={episode} key={episode.title} />;
      })}
    </div>
  );
}
function BlogsAdvert(): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ width: '80%', alignItems: 'center' }}>
      <p className='title fs-larger' style={{ marginBottom: 48 }}>
        {blogsAdvertData.title}
      </p>
      <div className='row' style={{ gap: '2%' }}>
        {blogsAdvertData.blogs.map(blog => {
          return <BlogTile blog={blog} showPreview={false} key={blog.title} />;
        })}
      </div>
    </div>
  ) : (
    <div className='col'>
      <p className='title fs-larger' style={{ marginBottom: 48 }}>
        {blogsAdvertData.title}
      </p>
      <div className='col'>
        {blogsAdvertData.blogs.map(blog => {
          return <BlogTile blog={blog} showPreview={false} key={blog.title} />;
        })}
      </div>
    </div>
  );
}
function Strongholds(): JSX.Element {
  return (
    <div
      className='col'
      style={{ width: isDesktop() ? '90%' : '100%', alignItems: 'center' }}
    >
      <p
        className='title fs-larger'
        style={{ width: isDesktop() ? '95%' : '100%' }}
      >
        {strongholdsData.title}
      </p>
      <img
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={strongholdsData.map}
      />
    </div>
  );
}
