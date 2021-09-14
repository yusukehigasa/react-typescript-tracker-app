import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

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
  getCountryData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  countryData: CountryDataType;
}

const TopPage = ({countriesJson, setCountry, getCountryData, countryData}: TopPageType) => {
  return (
    <div>
      <Title />
      <Selector
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
      />
      <Results countryData={countryData} />
    </div>
  );
};

export default TopPage;
