export type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered: number,
  totalRecovered: number,
}

interface SingleCountriesDataType {
  Country: string,
  NewConfirmed: number,
  TotalConfirmed: number,
}
export interface AllCountriesDataType extends Array<SingleCountriesDataType>{}

export interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>
}

export interface CardType {
  allCountriesData: Array<SingleCountriesDataType>
}

type CountryJsonType = {
  Country: string,
  Slug: string,
}[]

export type TopPageType = {
  countriesJson: CountryJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countryData: CountryDataType;
  loading: boolean;
}

export type SelectorType = {
  countriesJson: CountryJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

export type ResultsType = {
  countryData: CountryDataType;
}
