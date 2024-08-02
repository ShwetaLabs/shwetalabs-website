import { valueCardSpec } from '../../data/about';

interface valueCardProp {
  valueCard: valueCardSpec;
  onLeft: boolean;
}

export default function ValueCard({ valueCard, onLeft }: valueCardProp) {
  return onLeft ? (
    <div
      style={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
        }}
      >
        <div
          style={{
            margin: 'auto',
            alignItems: 'center',
            minWidth: '25%',
            maxWidth: '25%',
            padding: '0px 10%',
          }}
        >
          <img
            style={{ objectFit: 'scale-down', width: '90%' }}
            src={valueCard.image}
            alt={valueCard.title}
          />
        </div>
        <div style={{ marginTop: '16px', marginRight: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span className='fw-bold' style={{ marginBottom: '16px' }}>
              {valueCard.title}
            </span>
          </div>
          <p
            className='fs-smaller'
            style={{ lineHeight: '1.4', textAlign: 'left', opacity: '0.6' }}
          >
            {valueCard.para}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className='col bg-accent'
      style={{
        height: '100%',
        padding: '2% 2% 0% 2%',
        alignItems: 'center',
      }}
    >
      <div>
        <img
          style={{
            margin: 'auto',
            display: 'block',
            objectFit: 'cover',
            width: '80%',
          }}
          src={valueCard.image}
          alt={valueCard.title}
        />
      </div>
      <p style={{ marginBlock: 10 }} className='fs-some-large fw-bold stripped'>
        {valueCard.title}
      </p>
      <p
        className='fs-small'
        style={{
          lineHeight: '1.4',
          whiteSpace: 'pre-line',
          textAlign: 'center',
          opacity: '0.6',
        }}
      >
        {valueCard.para}
      </p>
    </div>
  );
}
