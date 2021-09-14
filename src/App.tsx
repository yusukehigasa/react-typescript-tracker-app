import { useState } from 'react';

import TopPage from './pages/TopPage';
import './App.css';
import countriesJson from './countries.json';

type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered: number,
  totalRecovered: number,
}

function App() {
  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState<CountryDataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
      });
  }

  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        setCountry={setCountry}
        getCountryData={getCountryData}
        countryData={countryData}
      />
    </div>
  );
};

export default App;
