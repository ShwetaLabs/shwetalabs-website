import { valuesSpec, valueCardSpec } from '../../data/about';
import { isDesktop } from '../../utils';
import ValueCard from './valueCard';

interface valuesProp {
  values: valuesSpec;
}

export default function Values({ values }: valuesProp): JSX.Element {
  function createRows(values: valueCardSpec[]) {
    var rows: JSX.Element[] = [];
    var inRow: JSX.Element[] = [];
    for (var i = 0; i < values.length; i++) {
      inRow.push(
        <div style={{ margin: '1%', maxWidth: '48%', minWidth: '48%' }}>
          <ValueCard valueCard={values[i]} onLeft={true} />
        </div>,
      );
      if (inRow.length === 2) {
        rows.push(
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {inRow.concat()}
          </div>,
        );
        inRow = [];
      }
    }
    if (inRow.length > 0) {
      rows.push(
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {inRow.concat()}
        </div>,
      );
    }
    return rows;
  }
  return isDesktop() ? (
    <div>
      <div style={{ padding: '0px 17%', marginBottom: '48px' }}>
        <div
          className='title fs-larger'
          style={{ marginBottom: '24px', textAlign: 'center' }}
        >
          {values.title}
        </div>
      </div>
      <div> {createRows(values.cards)} </div>
    </div>
  ) : (
    <div>
      <div style={{}}>
        <p className='fs-x-large title' style={{ textAlign: 'center' }}>
          {values.title}
        </p>
      </div>
      <div>
        {values.cards.map(card => {
          return (
            <div style={{ marginTop: '32px' }}>
              <ValueCard valueCard={card} onLeft={false} key={card.title} />{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
}
