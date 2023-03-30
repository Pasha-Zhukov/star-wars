import "./GenderCharacter.scss";

export const GenderCharacter = ({ item }) => {
  return (
    <>
      <div className="wrapper">
        {item.gender === "male" ? <p className="male">{item.gender}</p> : null}
        {item.gender === "hermaphrodite" ? (
          <p className="hermaphrodite"> {item.gender}</p>
        ) : null}
        {item.gender === "female" ? (
          <p className="female"> {item.gender} </p>
        ) : null}

        {item.rrwowhwaworc === "scraanwo" ? (
          <p className="male">{item.gender || item.rrwowhwaworc}</p>
        ) : null}
        {item.rrwowhwaworc === "acworcscraakacrcoowaahaowo" ? (
          <p className="hermaphrodite"> {item.gender || item.rrwowhwaworc}</p>
        ) : null}
        {item.rrwowhwaworc === "wwwoscraanwo" ? (
          <p className="female"> {item.gender || item.rrwowhwaworc} </p>
        ) : null}

        {item.birth_year === "unknown" ? null : (
          <p className="birth-year">
            {item.birth_year || item.rhahrcaoac_roworarc}
          </p>
        )}
      </div>
    </>
  );
};
