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
        <div style={{ margin: '16px', width: '50%' }}>
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
    rows.push(
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {inRow.concat()}
      </div>,
    );
    return rows;
  }
  return isDesktop() ? (
    <div>
      <div style={{ padding: '0px 215px', marginBottom: '48px' }}>
        {/* <div style={{ fontSize: "20px" }} > {values.superTitle} </div> */}
        <div style={{ fontSize: '100px', marginBottom: '24px' }}>
          {values.title}
        </div>
        {/* <div style={{ opacity: '0.6' }}> {values.para} </div> */}
      </div>
      <div> {createRows(values.cards)} </div>
    </div>
  ) : (
    <div>
      <div style={{}}>
        <p className='fs-x-large title2'>{values.title}</p>
      </div>
      <div>
        {values.cards.map(card => {
          return <ValueCard valueCard={card} onLeft={false} key={card.title} />;
        })}
      </div>
    </div>
  );
}
