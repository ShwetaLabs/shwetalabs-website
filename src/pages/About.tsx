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
        <div style={{ width: '49%' }}>
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
    <div
      style={{
        padding: '0px 12% 0px 12%',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
      }}
    >
      <TitleInfo titleInfo={aboutData.titleInfo} />
      <div>{createRows(aboutData.visions)}</div>
      <Values values={aboutData.values} />
      {/*<Squad squad={aboutData.squad} /> */}
    </div>
  ) : (
    <div
      className='col'
      style={{
        gap: '160px',
        padding: '0px 20px 0px 20px',
      }}
    >
      <TitleInfo titleInfo={aboutData.titleInfo} />
      <div>
        {aboutData.visions.map(visionCard => {
          return (
            <div
              className='col bg-accent'
              style={{ alignItems: 'center', marginTop: '20px' }}
            >
              <div style={{ margin: '20px' }}>
                <img src={visionCard.image} />
              </div>
              <div className='fs-larger fw-semibold'>{visionCard.title}</div>
              <div style={{ margin: '20px' }} className='shady-70 centered'>
                {visionCard.para}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div style={{ marginBottom: '50px' }}>
          <p className='fs-x-large title' style={{ textAlign: 'center' }}>
            {aboutData.values.title}
          </p>
        </div>

        <div>
          {aboutData.values.cards.map(visionCard => {
            return (
              <div
                className='col bg-accent'
                style={{ alignItems: 'center', marginTop: '20px' }}
              >
                <div style={{ margin: '20px' }}>
                  <img src={visionCard.image} />
                </div>
                <div className='fs-large fw-semibold'>{visionCard.title}</div>
                <div style={{ margin: '20px' }} className='shady-70 centered'>
                  {visionCard.para}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
