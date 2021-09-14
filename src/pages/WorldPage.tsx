import Title from "../components/Title";
import Card from '../components/Card';

type WorldPageType = {
  allCountriesData: any;
}

const WorldPage = ({allCountriesData}: WorldPageType) => {
  return(
    <div>
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
}

export default WorldPage;
