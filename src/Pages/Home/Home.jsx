
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';
import Banner from './Sections/Banner';

const Home = () => {
      const user = useUserInfo()

      return (
            <div>
                  <Banner></Banner>
            </div>
      );
};

export default Home;