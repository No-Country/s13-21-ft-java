import React, { useState, useEffect } from 'react'
import OnBoardingLayout from './OnBoardingLayout'
import OnBoardingInfo from './OnBoardingInfo'
import Loader from './Loader';

const OnBoarding = () => {

  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <OnBoardingLayout>
          <OnBoardingInfo />
        </OnBoardingLayout>
      )}
    </>
  )
}

export default OnBoarding