import { Link, useLocation } from 'react-router-dom';
import { headerData } from '../../data/header';
import { linkSpec } from '../../data/navigation';
import { LinkBox } from '../linkBox/LinkBox';
import { isDesktop } from '../../utils';
import { icons } from '../../rsrc';
import { useEffect, useState } from 'react';
import { SocialLinks } from '../footer/Footer';
interface IHeaderProps {
  navBarVisible: any;
  setNavBarVisible: any;
}
export const Header: (props: IHeaderProps) => JSX.Element = ({
  navBarVisible,
  setNavBarVisible,
}) => {
  const location = useLocation();
  useEffect(() => {
    setNavBarVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  const toggleNavBar = () => {
    setNavBarVisible((isVisible: boolean) => !isVisible);
  };
  return isDesktop() ? (
    <div
      className='row'
      style={{
        justifyContent: 'space-between',
        paddingInline: '11vw',
        paddingBlock: '1.51vw',
        borderBottom: 'var(--lightgray) 0.5px solid',
        backgroundColor: 'black',
      }}
    >
      <Link to={headerData.logoLink.url}>
        <img src={headerData.logo} />
      </Link>
      <div
        className='row'
        style={{
          columnGap: '1.8vw',

          alignItems: 'center',
        }}
      >
        {headerData.navLinks.map(link => {
          return <HeaderButtonDesktop link={link} key={link.text} />;
        })}
      </div>
      {/* <div>
        <LinkBox
          link={headerData.requestDemoLink}
          aClassName='button2 fs-smaller'
        />
      </div> */}
    </div>
  ) : (
    /* Mobile page:*/
    <div
      className='col'
      style={
        navBarVisible
          ? {
              minHeight: '100vh',
              justifyContent: 'flex-start',
              backgroundColor: 'var(--accent)',
            }
          : { backgroundColor: 'black' }
      }
    >
      <div
        className={'row' + (navBarVisible ? ' bg-accent' : '')}
        style={{
          justifyContent: 'space-between',
          padding: '20px',
          borderBottom: 'var(--lightgray) 0.5px solid',
        }}
      >
        <Link to={headerData.logoLink.url}>
          <img src={headerData.logo} />
        </Link>
        <img
          className='pointable'
          onClick={toggleNavBar}
          src={navBarVisible ? icons.Cross : icons.List}
        />
      </div>
      {navBarVisible ? (
        <div
          className='col bg-accent'
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className='col' style={{ justifyContent: 'space-around' }}>
            {headerData.navLinks.map(link => (
              <HeaderButtonMobile link={link} key={link.text} />
            ))}
          </div>
          {/* <span style={{ marginTop: '25px' }}>
            <LinkBox link={headerData.requestDemoLink} aClassName='button2' />
          </span> */}
          <div
            className='row'
            style={{
              width: '98%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
              paddingBlock: 30,
              borderTop: 'var(--lightgray) 0.5px solid',
            }}
          >
            <SocialLinks />
          </div>
        </div>
      ) : null}
    </div>
  );
};
interface HeaderButtonDesktopSpec {
  link: linkSpec;
}
export function HeaderButtonDesktop({
  link,
}: HeaderButtonDesktopSpec): JSX.Element {
  return (
    <div
      style={{
        textTransform: 'uppercase',
      }}
    >
      <LinkBox link={link} aClassName='headerButton fs-small hoverUnderline' />
    </div>
  );
}

export function HeaderButtonMobile({
  link,
}: HeaderButtonDesktopSpec): JSX.Element {
  return (
    <div
      style={{
        textTransform: 'uppercase',
        marginInline: 'auto',
        marginBlock: '25px',
      }}
    >
      <LinkBox link={link} aClassName='headerButton' />
    </div>
  );
}
