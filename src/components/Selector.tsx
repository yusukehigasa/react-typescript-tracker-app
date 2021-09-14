type CountriesJsonType = {
  Country: string,
  Slug: string,
}[]

type SelectorType = {
  countriesJson: CountriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  getCountryData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Selector = ({countriesJson, setCountry, getCountryData}: SelectorType) => {

  return (
    <div>
      <select onChange={ e => setCountry(e.target.value) }>
        <option>Select A Country</option>
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        )}
      </select>
      <button onClick={getCountryData}>
        Get Data
      </button>
    </div>
  );
};

export default Selector;
