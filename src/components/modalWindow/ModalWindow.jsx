import closeIcon from "../../images/closeIcon.png";
import { useEffect } from "react";
import genders from "../../charactersMap/genders";
import "./ModalWindow.scss";

export const ModalWindow = ({
  isLoading,
  setIsModalActive,
  isModalActive,
  dataCharacter,
  setDataCharacter,
}) => {
  const handleClick = () => {
    setIsModalActive(!isModalActive);
    setDataCharacter("");
  };
  useEffect(() => {
    document.body.style.overflow = isModalActive ? "hidden" : "visible";
  }, [isModalActive]);
  return (
    <>
      <div
        onClick={() => setIsModalActive(true)}
        className={isModalActive ? "blur" : ""}
      ></div>
      <div className={`popup  ${isModalActive ? "active" : ""}`}>
        <img
          className="closeIcon"
          src={closeIcon}
          onClick={handleClick}
          alt="closeIcon"
        />
        <div className="iconBlock">
          {genders[dataCharacter?.gender || dataCharacter?.rrwowhwaworc] ? (
            <img
              className="icon"
              src={
                genders[dataCharacter?.gender || dataCharacter?.rrwowhwaworc]
                  ?.img
              }
              alt=""
            />
          ) : (
            ""
          )}
          <div className="wrapperModalGender">
            {genders[dataCharacter?.gender || dataCharacter?.rrwowhwaworc] ? (
              <p
                className={
                  genders[dataCharacter?.gender || dataCharacter?.rrwowhwaworc]
                    ?.className
                }
              >
                {dataCharacter?.gender || dataCharacter?.rrwowhwaworc}
              </p>
            ) : (
              ""
            )}
            {dataCharacter?.birth_year === "unknown" ? null : (
              <p className="birth-yearModal">
                {dataCharacter?.birth_year ||
                  dataCharacter?.rhahrcaoac_roworarc}
              </p>
            )}
          </div>{" "}
        </div>
        <div className="infoBlock">
          <p className="nameModal">
            {dataCharacter?.name || dataCharacter?.whrascwo}
          </p>
          <div className="colorsModal">
            <div>
              {dataCharacter?.hair_color === "n/a" ||
              dataCharacter?.acraahrc_oaooanoorc === "wh/ra"
                ? null
                : `${
                    dataCharacter?.hair_color
                      ? "hair color:"
                      : null || dataCharacter?.acraahrc_oaooanoorc
                      ? "acraahrc: "
                      : null
                  } ${
                    dataCharacter?.hair_color ||
                    dataCharacter?.acraahrc_oaooanoorc
                  }`}
            </div>
            <div>
              {dataCharacter?.skin_color === "n/a" ||
              dataCharacter?.corahwh_oaooanoorc === "wh/ra"
                ? null
                : `${
                    dataCharacter?.skin_color
                      ? "skin color:"
                      : null || dataCharacter?.corahwh_oaooanoorc
                      ? "corahwh: "
                      : null
                  } ${
                    dataCharacter?.skin_color ||
                    dataCharacter?.corahwh_oaooanoorc
                  }`}
            </div>
            <div>
              {dataCharacter?.eye_color === "n/a" ||
              dataCharacter?.worowo_oaooanoorc === "wh/ra"
                ? null
                : `${
                    dataCharacter?.eye_color
                      ? "eye color:"
                      : null || dataCharacter?.worowo_oaooanoorc
                      ? "worowo: "
                      : null
                  } ${
                    dataCharacter?.eye_color || dataCharacter?.worowo_oaooanoorc
                  }`}
            </div>
          </div>
          <div className="wrapperModal">
            {dataCharacter?.height === "unknown" ? null : dataCharacter?.mass ||
              (dataCharacter?.acwoahrracao &&
                dataCharacter?.acwoahrracao.length < 5) ? (
              <div className="heightMassCharacter-modal">
                <div className="circleModal">
                  {dataCharacter?.height ? (
                    <div className="circle">{dataCharacter?.height}</div>
                  ) : (
                    ""
                  )}
                  {dataCharacter?.acwoahrracao &&
                  dataCharacter?.acwoahrracao.length < 5 ? (
                    <div className="circle">{dataCharacter?.acwoahrracao}</div>
                  ) : (
                    ""
                  )}
                </div>
                <p className="pModal">
                  {dataCharacter?.height ? "height" : null}
                  {dataCharacter?.acwoahrracao &&
                  dataCharacter?.acwoahrracao.length < 5
                    ? "acwoahrracao"
                    : null}
                </p>
              </div>
            ) : null}

            {dataCharacter?.mass === "unknown" ? null : dataCharacter?.mass ||
              (dataCharacter?.scracc && dataCharacter?.scracc.length < 5) ? (
              <div className="heightMassCharacter-modal">
                <div className="circleModal">
                  {dataCharacter?.mass ? (
                    <div className="circle">{dataCharacter?.mass}</div>
                  ) : (
                    ""
                  )}
                  {dataCharacter?.scracc && dataCharacter?.scracc.length < 5 ? (
                    <div div className="circle">
                      {dataCharacter?.scracc}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <p className="pModal">
                  {dataCharacter?.mass ? "mass" : null}{" "}
                  {dataCharacter?.scracc && dataCharacter?.scracc.length < 5
                    ? "scracc"
                    : null}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>{isLoading && "Loading..."}</div>
    </>
  );
};
