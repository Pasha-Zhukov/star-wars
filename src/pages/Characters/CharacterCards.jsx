import { Characters } from "../../components/characters/Characters";
import { Header } from "../../components/header/Header";
import { useState } from "react";
import language from "../../images/language.png";
import { useEffect } from "react";
import "./CharacterCards.scss";

export function CharacterCards() {
  const [charactersData, setCharactersData] = useState([]);
  const [charactersDataWookiee, setCharactersDataWookiee] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const dataMap = new Map();
  dataMap.set("EN", charactersData);
  dataMap.set("WO", charactersDataWookiee);

  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectColor, setSelectColor] = useState("all");
  const [isModalActive, setIsModalActive] = useState(false);

  const colorSet = [...new Set(charactersData.map((i) => i.eye_color))];
  const colorSetWookiee = [
    ...new Set(charactersDataWookiee.map((i) => i.worowo_oaooanoorc)),
  ];

  const onChangeLanguage = () => {
    setCurrentLanguage((prev) => (prev === "EN" ? "WO" : "EN"));
    setSelectColor((prev) => (prev === "all" ? "Whoh" : "all"));
    setPageNum(1);
    setCharactersData([]);
    setCharactersDataWookiee([]);
  };

  async function fetchPeople() {
    setIsLoading(true);
    let res = await fetch(
      `https://swapi.dev/api/people/?fotmat=json&page=${pageNum}`
    );
    res
      .json()
      .then((data) => {
        setCharactersData((prev) => [...prev, ...data.results]);
      })
      .finally(() => setIsLoading(false));
  }

  async function fetchPeopleWookiee() {
    setIsLoading(true);
    const res = await fetch(
      `https://swapi.dev/api/people/?format=wookiee&page=${pageNum}`
    );
    res
      .text()
      .then((text) => {
        text = text.replace(/whhuanan/g, '"whhuanan"');
        return JSON.parse(text);
      })
      .then((data) => {
        setCharactersDataWookiee((prev) => [...prev, ...data.rcwochuanaoc]);
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    if (isLoading) return;
    if (currentLanguage === "EN") {
      fetchPeople();
    } else fetchPeopleWookiee();
  }, [pageNum, currentLanguage]);

  return (
    <>
      <Header />
      <p className="language">language: {currentLanguage}</p>
      <h1 className="title">
        {charactersData?.length || charactersDataWookiee?.length}
        {currentLanguage === "EN"
          ? " Peoples for you to choose your favorite"
          : " rcwochuanaoc"}
      </h1>
      <div className="block-select">
        <label className="title-select">
          {currentLanguage === "EN" ? "color eye" : "worowo oaooanoorc"}
        </label>
        {currentLanguage === "EN" ? (
          <select
            onChange={(e) => setSelectColor(e.target.value)}
            name="nameChracter"
            className="select"
          >
            <option value="all">All</option>
            {colorSet?.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        ) : (
          <select
            onChange={(e) => setSelectColor(e.target.value)}
            name="nameChracter"
            className="select"
          >
            <option value="Whoh">Whoh</option>
            {colorSetWookiee?.map((color) => (
              <option value={color} key={color}>
                {color}
              </option>
            ))}
          </select>
        )}
      </div>
      <Characters
        charactersData={
          selectColor === "all" || selectColor === "Whoh"
            ? dataMap.get(currentLanguage)
            : currentLanguage === "EN"
            ? dataMap
                .get(currentLanguage)
                .filter((item) => item.eye_color === selectColor)
            : dataMap
                .get(currentLanguage)
                .filter((item) => item.worowo_oaooanoorc === selectColor)
        }
        setPageNum={setPageNum}
        pageNum={pageNum}
        isLoading={isLoading}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
      <img
        onClick={onChangeLanguage}
        className="language-Button"
        src={language}
        alt="language"
      />
    </>
  );
}
