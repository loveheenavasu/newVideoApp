import React, { useState } from "react";
import Icons from "../../components/icons";
import { withClick } from "../withClick";
import Card from "../withClick/Card";

const ClickableCard = withClick(Card);
const SignInForm = ({ setshowScreen }: { setshowScreen: any }) => {
  return (
    <ClickableCard>
      <div className="kjjfds-janwkea">
        <div className="jhjij-sanwe">
          <h3>Sign in</h3>
          <div className="socialButtonsDiv">
            <button
              className="btn"
              onClick={() => {
                setshowScreen(3);
              }}
            >
              <Icons iconNumber={3} />
              Log in with Facebook
            </button>
            <button
              className="btn"
              onClick={() => {
                setshowScreen(3);
              }}
            >
              <Icons iconNumber={4} />
              Log in with Google
            </button>
            <button
              className="btn"
              onClick={() => {
                setshowScreen(3);
              }}
            >
              <Icons iconNumber={5} />
              Log in with LinkedIn
            </button>
          </div>
          <div className="jkdslafj-asdemk mt-1">
            <div className="jkdsfs-dajem"></div>
            <h5 className="fw-light mt-1 mx-2">or</h5>
            <div className="jkdsfs-dajem"></div>
          </div>

          <div className="socialButtonsDiv mt-2">
            <button
              className="btn"
              onClick={() => {
                setshowScreen(3);
              }}
            >
              <Icons iconNumber={90} />
              Login in with Email
            </button>
          </div>
          <div className="jdaskfjnas-ajaied njskakd-kawmed px-1">
            <div className="ansks-adn">
              <button className="no-shadow fw-bold">Create Account</button>
            </div>
            <div className="ansks-adn">
              <button className="no-shadow fw-light">Forgot Password?</button>
            </div>
          </div>
          <div className="continueBtnDiv">
            <button
              onClick={() => {
                setshowScreen(1);
              }}
              className="btn kjlsjadm-kdmsd mt-1"
            >
              CONTINUE
              <Icons iconNumber={77} />
            </button>
          </div>
        </div>
        <div className="ldkjfal0-fdsnfe">
          <Icons iconNumber={64} />
        </div>
      </div>
    </ClickableCard>
  );
};

export default SignInForm;
