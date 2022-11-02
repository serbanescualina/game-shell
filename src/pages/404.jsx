import { Link } from 'react-router-dom';
import { FullScreenLayout } from '../layouts';

export const FourOhFour = () => {
  return (
    <FullScreenLayout>
      <div className="bg-pink-400 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span className="text-7xl  animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold">
            Go back home
          </Link>
        </div>
      </div>
    </FullScreenLayout>
  );
};