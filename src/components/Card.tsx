import { CardType } from '../types';

const Card = ({ allCountriesData }: CardType) => {
  return (
    <div>
      <h2>Card</h2>

      {allCountriesData &&
        allCountriesData.map((singleData, index) => (
          <div key={index}>
            <h3>{singleData.Country}</h3>
            <p>新規感染者： {singleData.NewConfirmed}</p>
            <p>感染者総数： {singleData.TotalConfirmed}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
