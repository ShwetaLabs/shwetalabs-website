import {
  capabilityCardSpec,
  subCapabilitiesCardSpec,
} from '../../data/capabilities';
import { isDesktop } from '../../utils';

interface capabilitesProp {
  capability: capabilityCardSpec;
  imageOnLeft: boolean;
}

interface subCapabilityProp {
  subCapability: subCapabilitiesCardSpec;
  onLeft: boolean;
  last: boolean;
  first: boolean;
}

function SubcapabilityRow({
  first,
  subCapability,
  onLeft,
  last,
}: subCapabilityProp) {
  const leftBorder = onLeft ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  const rightBorder = !onLeft ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  const bottomBorder = !last ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  const topBorder = first ? '1px solid rgba(255, 255, 255, 0.3)' : '';
  return isDesktop() ? (
    <div
      style={{
        borderLeft: leftBorder,
        borderBottom: bottomBorder,
        borderRight: rightBorder,
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '52.5px',
          paddingLeft: '40px',
          paddingBottom: '52.5px',
        }}
      >
        <img src={subCapability.image} alt={subCapability.title} />
      </div>
      <div
        style={{
          paddingTop: '32px',
          paddingRight: '52px',
          paddingBottom: '32px',
        }}
      >
        <span className='fw-bold'> {subCapability.title} </span>
        <p
          className='fs-smaller shady-70 stripped'
          style={{ lineHeight: '1.4' }}
        >
          {' '}
          {subCapability.paras}{' '}
        </p>
      </div>
    </div>
  ) : (
    <div
      style={{
        borderTop: topBorder,
        borderBottom: bottomBorder,
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '52.5px',
          paddingLeft: '40px',
          paddingBottom: '52.5px',
        }}
      >
        <img src={subCapability.image} alt={subCapability.title} />
      </div>
      <div
        style={{
          paddingTop: '32px',
          paddingBottom: '32px',
          paddingRight: '10px',
        }}
      >
        <span className='fw-bold'> {subCapability.title} </span>
        <p className='fs-smaller shady-70 stripped'> {subCapability.paras} </p>
      </div>
    </div>
  );
}

export default function CapabilityRow({
  capability,
  imageOnLeft,
}: capabilitesProp) {
  if (isDesktop()) {
    return (
      <div
        className={imageOnLeft ? 'row' : 'rrow'}
        style={{
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          marginBottom: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            marginTop: 32,
          }}
        >
          <span
            className='fs-large fw-bold centered'
            style={{ width: '85%', marginInline: 'auto' }}
          >
            {capability.title}
          </span>
          <div
            className='row'
            style={{
              justifyContent: 'center',
              marginTop: '49px',
              height: '100%',
            }}
          >
            <img
              style={{ width: '50%' }}
              src={capability.image}
              alt={capability.title}
            />
          </div>
        </div>
        <div style={{ width: '60%', textAlign: 'left' }}>
          {capability.subcap.map((it, index) => (
            <SubcapabilityRow
              subCapability={it}
              onLeft={imageOnLeft}
              last={index === capability.subcap.length - 1}
              first={index === 0}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='col'
        style={{
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          className='col'
          style={{
            alignItems: 'center',
            marginTop: '32px',
          }}
        >
          <span
            className='fs-large fw-bold centered'
            style={{ width: '85%', marginInline: 'auto' }}
          >
            {capability.title}
          </span>
          <div
            style={{
              alignContent: 'center',
              marginTop: '49px',
              marginBottom: '30px',
              height: '100%',
            }}
          >
            <img
              style={{ objectFit: 'cover' }}
              src={capability.image}
              alt={capability.title}
            />
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          {capability.subcap.map((it, index) => (
            <SubcapabilityRow
              subCapability={it}
              onLeft={imageOnLeft}
              last={index === capability.subcap.length - 1}
              first={index === 0}
            />
          ))}
        </div>
      </div>
    );
  }
}
