import { productData } from '../data/product';
import SleuthHead from '../components/sleuthHead/sleuthHead';
import CapabilityRow from '../components/capabilites/capabilityRow';
import { isDesktop } from '../utils';

export function Products(): JSX.Element {
  return isDesktop() ? (
    <div style={{ paddingLeft: '160px', paddingRight: '160px' }}>
      <div style={{ marginBottom: '0px' }}>
        <SleuthHead sleuthHead={productData.head} />
      </div>

      <div
        style={{
          marginTop: '8.1vw',
          paddingLeft: '12%',
          paddingRight: '12%',
          marginBottom: '32px',
        }}
      >
        <div className='title fs-larger'>{productData.title}</div>
      </div>
      <div>
        {productData.capabilities.capababilites.map((it, index) => (
          <div style={{ margin: '30px' }}>
            <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div style={{}}>
      <div style={{ marginBottom: '160px' }}>
        <SleuthHead sleuthHead={productData.head} />
      </div>

      <div
        style={{
          marginTop: '12.1vw',
          marginBottom: '32px',
        }}
      >
        <div className='title2 fs-x-large'>{productData.title}</div>
      </div>
      <div>
        {productData.capabilities.capababilites.map((it, index) => (
          <div style={{ marginTop: '32px' }}>
            <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
