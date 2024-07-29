import { sleuthHeadSpec } from '../../data/product';
import { isDesktop } from '../../utils';
import { LinkBox } from '../linkBox/LinkBox';

interface SleuthHeadProp {
  sleuthHead: sleuthHeadSpec;
}

export default function SleuthHead({ sleuthHead }: SleuthHeadProp) {
  return isDesktop() ? (
    <div className='col' style={{ alignItems: 'center' }}>
      <div
        style={{
          paddingLeft: '9%',
          paddingRight: '9%',
          marginBottom: '32px',
        }}
      >
        <img
          style={{ objectFit: 'scale-down' }}
          src={sleuthHead.img}
          alt='Sleuth'
        />
      </div>
      <div style={{ paddingLeft: '9%', paddingRight: '9%' }}>
        <div style={{ paddingBottom: '32px' }}>
          <p className='shady-70 centered'>{sleuthHead.paras}</p>
        </div>
        {/* <span className='fw-bold' style={{ textTransform: 'uppercase' }}>
          <LinkBox
            link={{ text: sleuthHead.buttonText, url: '/contact' }}
            aClassName='button4 caret-right'
          />
        </span> */}
      </div>
    </div>
  ) : (
    <div className='col' style={{ alignItems: 'center' }}>
      <div
        style={{
          marginBottom: '32px',
        }}
      >
        <img
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          src={sleuthHead.img}
          alt='Sleuth'
        />
      </div>
      <div style={{}}>
        <div style={{ paddingBottom: '32px' }}>
          <p className='shady-70 centered'>{sleuthHead.paras}</p>
        </div>
        {/* <span className='fw-bold' style={{ textTransform: 'uppercase' }}>
          <LinkBox
            link={{ text: sleuthHead.buttonText, url: '/contact' }}
            aClassName='button4 caret-right'
          />
        </span> */}
      </div>
    </div>
  );
}
