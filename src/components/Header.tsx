import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/' data-testid='link-home'>
        国ごとの感染状況
      </Link>
      |
      <Link to='/world' data-testid='link-world'>
        世界の感染状況
      </Link>
    </div>
  );
};

export default Header;
