
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';
import Banner from './Sections/Banner';
import UserBenefit from './Sections/UserBenefit';

const Home = () => {
      const user = useUserInfo()

      return (
            <div>
                  <Banner></Banner>
                  <UserBenefit></UserBenefit>
            </div>
      );
};

export default Home;