import Header from '../components/Header';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Loading from '../components/Loading';

type TopPageType = {
  countriesJson: {
    Country: string,
    Slug: string,
  }[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
  };
  loading: boolean;
}

const TopPage = ({countriesJson, setCountry, countryData, loading}: TopPageType) => {
  return (
    <div>
      <Header />
      <Title />
      <Selector
        countriesJson={countriesJson}
        setCountry={setCountry}
      />
      {loading ? <Loading /> : <Results countryData={countryData} />}
    </div>
  );
};

export default TopPage;
