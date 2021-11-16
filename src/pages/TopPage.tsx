import Header from '../components/Header';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Loading from '../components/Loading';

import { TopPageType } from '../types';

const TopPage = ({
  countriesJson,
  setCountry,
  countryData,
  loading,
}: TopPageType) => {
  return (
    <div data-testid='wrapper'>
      <Header />
      <Title />
      <Selector countriesJson={countriesJson} setCountry={setCountry} />
      {loading ? <Loading /> : <Results countryData={countryData} />}
    </div>
  );
};

export default TopPage;
