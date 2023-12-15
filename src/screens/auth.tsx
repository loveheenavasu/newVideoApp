import React, { useEffect, useRef, useState } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import SignInForm from "../components/Auth/signinform";
import AccountForm from "../components/Auth/accountform";
import SignupForm from "../components/Auth/signupform";
import BottomMenu from "../components/bottomMenu";
import BackButton from "../components/Auth/backButton";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";
import EmailLoginForm from "../components/Auth/emailloginform";
import ForgotPwdForm from "../components/Auth/forgotpwdform";
import EnterCodeForm from "../components/Auth/entercodeform";
import NewPwdForm from "../components/Auth/newpwdform";
import { withClick } from "../components/withClick/index";
import Card from "../components/withClick/Card";
import {
  AnimatePresence,
  Variants,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";

type Direction = "back" | "front";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 0,
};

function Auth({
  mainScreen,
  setMainScreen,
}: {
  mainScreen: number;
  setMainScreen: any;
}) {
  const [showScreen, changeToNextScreen] = React.useState<
    keyof typeof screeens | number
  >(0);
  const [isFront, setIsFront] = React.useState<boolean>(true);
  const setshowScreen = (val: number) => {
    setIsFront(true);
    changeToNextScreen((pre) => pre + 1);
  };
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const [[page, direction], setPage] = useState([0, 0]);
  const previousState = useRef({ screenIndex: showScreen });
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (showScreen === 0 || !!showScreen) {
      previousState.current.screenIndex = showScreen;
    }
  }, [showScreen]);

  const isPrev = previousState.current.screenIndex > showScreen;


  const CommonProps = {
    layout: true,
    transition: {
      duration: 0.6,
    },
  };

  const variants: Variants = {
    enter: (direction: boolean) => {
      return {
        rotateX: 5,
        opacity: 1,
      };
    },
    center: (direction: boolean) => {
      return {
        rotateX: 0,
        rotateY: 0,
        dur: 1,
      };
    },
    exit: (direction: boolean) => {
      return {
        rotateY: direction ? -180 : 180,
        rotateX: 5,
        opacity: 1,
        height: "100%",
      };
    },
  };

  const screeens = {
    0: <SignInForm setshowScreen={setshowScreen} />,
    1: <AccountForm setshowScreen={setshowScreen} />,

    2: <EmailLoginForm setshowScreen={setshowScreen} />,
    3: <ForgotPwdForm setshowScreen={setshowScreen} />,
    4: <EnterCodeForm setshowScreen={setshowScreen} />,
    5: <NewPwdForm />,
    8: (
      <>
        <TestiMonials />
        <div className="lkljdfsl-sifkmd">
          <Icons iconNumber={66} />
          <Icons iconNumber={67} />
        </div>
        <div className="dkfnmsd-awde">
          <div className="wh-100 l1">
            <VideoForm />
          </div>
          <div className="wh-100 l2">
            <VideoForm />
          </div>
        </div>
        <div className="ldkf-kasmdaw"></div>
      </>
    ),
  };

  const back = () => {
    setIsFront(false);
    changeToNextScreen((pre) => pre - 1);
  };

  return (
    <div className="pageContainer">
      <div className="rightSideDiv rightSideBg pos-rel over-hdn">
        <div className="leftSideHeader kjsf-ajmwe">
          {showScreen > 0 ? (
            <BackButton showScreen={showScreen} setshowScreen={back} />
          ) : (
            <></>
          )}
        </div>
        <AnimatePresence custom={isFront} mode="wait">
          <motion.div
            key={`${showScreen}` + "test"}
            {...CommonProps}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              rotateY: { type: "spring", stiffness: 100, damping: 30 },
            }}
            style={{ width: "100%", height: "100%" }}
          >
            {screeens[showScreen as keyof typeof screeens]}
          </motion.div>
        </AnimatePresence>
        <BottomMenu mainScreen={mainScreen} setMainScreen={setMainScreen} />
      </div>
      <RightLayout2 />
    </div>
  );
}

export default Auth;
