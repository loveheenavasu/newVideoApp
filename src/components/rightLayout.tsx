import React from 'react';
import Icons from './icons';

const RightLayout = ({ screen }: { screen: number }) => {
  return <div className="rightSideDiv rightSideDivsadsa kjdsfkn-ajdnkw">
    <div className="d-flex justify-content-end">
      <button className="btn">
        <Icons iconNumber={1} />
      </button>
    </div>
    <div className="mklfasd-dmsaew nakds-ajews p-0">
      <div className={`djfkaspk-nasrm ${screen == 1 ? "" : "border-0 bg-transparent"}`}>
        <h1>Welcome to your Video Interview!</h1>
        {screen == 0 ?
          <>
            <p className="mt-4" style={{ fontSize: "14px" }}>
              You’ll have 30 seconds to answer each question. But don’t worry, you’ll have
              the chance to re-record any of your answers as many times as you like.
            </p>
            <div className="createVideoInterviewBtnDiv">
              <button className="btn no-shadow asjdsajde mx-1">Create Video Interview</button>
            </div>
          </> :
          <>
            <div className="kadfmsod-wem">
              <div>
                {" "}
                <Icons iconNumber={15} />
              </div>
              <h5>
                There are <span>3 Questions</span> in total. You’ll have a
                maximum of 30 seconds for each answer.
              </h5>
            </div>
            <div className="kadfmsod-wem">
              <div>
                {" "}
                <Icons iconNumber={15} />
              </div>
              <h5>
                Be sure to check your <span>Camera Position</span> &{" "}
                <span>Lighting</span> is stable before recording.
              </h5>
            </div>
            <div className="kadfmsod-wem">
              <div>
                {" "}
                <Icons iconNumber={15} />
              </div>
              <h5>
                If you run out of things to say, just click the {" "}
                <span>Stop</span> button to end your answer at any time.
              </h5>
            </div>
          </>
        }
      </div>
      <div className="homescreenFloater">
        <img src={require("../images/i1.png")} />
      </div>
      <div className="homescreenFloater1">
        <img src={require("../images/i2.png")} />
      </div>
      <div className="homescreenFloater2">
        <img src={require("../images/i3.png")} />
      </div>
    </div>
  </div>
}
export default RightLayout;