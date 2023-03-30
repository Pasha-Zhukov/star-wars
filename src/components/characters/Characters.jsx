import { useCallback, useRef, useState } from "react";
import { Circles } from "../circles/Circles";
import { GenderCharacter } from "../genderCharacter/GenderCharacter";
import { Loader } from "../loader/Loader";
import { ModalWindow } from "../modalWindow/ModalWindow";
import "./Characters.scss";

export const Characters = ({
  setPageNum,
  charactersData,
  pageNum,
  isLoading,
  setIsModalActive,
  isModalActive,
}) => {
  const [dataCharacter, setDataCharacter] = useState("");

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNum < 9) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [charactersData]
  );

  const handleClick = (e) => {
    setDataCharacter(
      charactersData.find((element) =>
        element.name
          ? element.name === e.currentTarget.dataset.name
          : element.whrascwo === e.currentTarget.dataset.name
      )
    );
    setIsModalActive(!isModalActive);
  };
  return (
    <>
      <div className="container">
        {charactersData?.map((item, index) => {
          const isLastItem = index === charactersData.length - 1;
          return (
            <div
              onClick={handleClick}
              className={`card-character ${isModalActive} ? "blur" : ""`}
              ref={isLastItem ? lastBookElementRef : undefined}
              key={item.name || item.whrascwo}
              data-name={item.name || item.whrascwo}
            >
              <div className="nameCharacter">{item.name || item.whrascwo}</div>
              <Circles item={item} isModalActive={isModalActive} />
              <GenderCharacter item={item} />
            </div>
          );
        })}
        <ModalWindow
          isModalActive={isModalActive}
          dataCharacter={dataCharacter}
          setIsModalActive={setIsModalActive}
          setDataCharacter={setDataCharacter}
        />
      </div>
      <div>{isLoading && <Loader />}</div>
    </>
  );
};
