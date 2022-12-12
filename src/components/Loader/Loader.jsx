import { ThreeCircles } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled.js';

export function Loader() {
  return (
    <>
      <LoaderWrap>
        <ThreeCircles
            height="100"
            width="100"
            color="#05109e"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />;
      </LoaderWrap>
    </>
  );
}
