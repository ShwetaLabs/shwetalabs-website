import Squad from '../components/squad/squad';
import TitleInfo from '../components/titleInfo/titleInfo';
import { aboutData, valueCardSpec } from '../data/about';
import Values from '../components/values/values';
import ValueCard from '../components/values/valueCard';
import { isDesktop } from '../utils';

export function About(): JSX.Element {
  function createRows(values: valueCardSpec[]) {
    var rows: JSX.Element[] = [];
    var inRow: JSX.Element[] = [];
    for (var i = 0; i < values.length; i++) {
      inRow.push(
        <div style={{ width: 'calc(50% - 16px)' }}>
          <ValueCard valueCard={values[i]} onLeft={false} />
        </div>,
      );
      if (inRow.length === 2) {
        rows.push(
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
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
    <div
      style={{
        padding: '160px',
        paddingTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '160px',
      }}
    >
      <TitleInfo titleInfo={aboutData.titleInfo} />
      <div style={{ height: '467px' }}>{createRows(aboutData.visions)}</div>
      <Values values={aboutData.values} />
      <Squad squad={aboutData.squad} />
    </div>
  ) : (
    <div
      className='col'
      style={{
        gap: '160px',
      }}
    >
      <TitleInfo titleInfo={aboutData.titleInfo} />
      <div style={{ border: '2px solid red' }}>
        {aboutData.visions.map(visionCard => {
          return (
            <div
              className='col bg-accent'
              style={{ alignItems: 'center', marginTop: 24 }}
            >
              <div>
                <img src={visionCard.image} />
              </div>
              <p className='fs-larger fw-bold'>{visionCard.title}</p>
              <p className='shady-70 centered'>{visionCard.para}</p>
            </div>
          );
        })}
      </div>
      <Values values={aboutData.values} />
      <Squad squad={aboutData.squad} />
    </div>
  );
}
