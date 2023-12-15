import Icons from "../icons";

const BackButton = ({
  showScreen,
  setshowScreen,
}: {
  showScreen: number;
  setshowScreen: any;
}) => {
  return (
    <div
      onClick={() => {
        setshowScreen();
      }}
      className="skdmsa-dsad"
    >
      <div className="backButtonDiv">
        <button className="hkjndankad-dnsd">
          <Icons iconNumber={29} />
        </button>
        <h5 className="mksaldkamaw-jdwa">Back</h5>
      </div>
    </div>
  );
};

export default BackButton;
