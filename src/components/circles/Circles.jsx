import "./Circles.scss";

export const Circles = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="wrapperCircle">
        {item.height === "unknown" ? null : (
          <>
            <div>
              {item.height ? <div className="circle">{item.height}</div> : ""}
              {item.acwoahrracao && item.acwoahrracao.length < 5 ? (
                <div className="circle">{item.acwoahrracao}</div>
              ) : (
                ""
              )}
            </div>
            <p className="p">
              {item.height ? "height" : null}
              {item.acwoahrracao && item.acwoahrracao.length < 5
                ? "acwoahrracao"
                : null}
            </p>
          </>
        )}
      </div>
      <div className="wrapperCircle">
        {item.mass === "unknown" ? null : (
          <>
            <div>
              {item.mass ? <div className="circle">{item.mass}</div> : ""}
              {item.scracc && item.scracc.length < 5 ? (
                <div div className="circle">
                  {item.scracc}
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="p">
              {item.mass ? "mass" : null}
              {item.scracc && item.scracc.length < 5 ? "scracc" : null}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
