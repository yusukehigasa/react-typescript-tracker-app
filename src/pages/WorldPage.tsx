import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';

type WorldPageType = {
  allCountriesData: any;
}

const WorldPage = ({allCountriesData}: WorldPageType) => {
  return(
    <div>
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
}

export default WorldPage;
