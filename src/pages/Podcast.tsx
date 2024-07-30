import { ComingSoon } from '../components/misc';
import { podcastData } from '../data/podcast';
import { isDesktop } from '../utils';

export function Podcast(): JSX.Element {
  return isDesktop() ? (
    <div
      className='col'
      style={{ width: '80vw', marginInline: 'auto', alignItems: 'center' }}
    >
      <p className='title2 fs-x-large'>{podcastData.title}</p>
      <p
        className='shady-70 centered'
        style={{ marginTop: '2.4vw', width: '90%' }}
      >
        {podcastData.description}
      </p>
      <div className='row' style={{ justifyContent: 'center' }}>
        <ComingSoon />
      </div>
    </div>
  ) : (
    <div style={{ width: '90vw', marginInline: 'auto' }}>
      <p className='title2 fs-x-large'>{podcastData.title}</p>
      <p className='shady-70 centered' style={{ marginTop: '2.4vw' }}>
        {podcastData.description}
      </p>
      <span
        className='row'
        style={{ justifyContent: 'center', paddingTop: '5vh' }}
      >
        <ComingSoon />
      </span>
    </div>
  );
}
