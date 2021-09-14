import Header from '../components/Header';
import Title from '../components/Title';
import Selector from '../components/Selector';
import Results from '../components/Results';
import Loading from '../components/Loading';

type CountriesJsonType = {
  Country: string,
  Slug: string,
}[]

type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered: number,
  totalRecovered: number,
}

type TopPageType = {
  countriesJson: CountriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryDataType;
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
