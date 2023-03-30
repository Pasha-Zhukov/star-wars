import { Characters } from "./Characters";
import renderer from "react-test-renderer";

const charactersData = [
  {
    birth_year: "19BBY",
    eye_color: "blue",
    gender: "male",
    hair_color: "blond",
    height: "172",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
  },
  {
    birth_year: "33BBY",
    eye_color: "red",
    gender: "n/a",
    hair_color: "n/a",
    height: "96",
    mass: "32",
    name: "R2-D2",
    skin_color: "white, blue",
  },
];

const handleClick = (e) => {
  return charactersData.find((element) =>
    element.name ? element.name === e : element.whrascwo === e
  );
};
describe("Name only requests", () => {
  test("valid name Person", () => {
    expect(handleClick("Luke Skywalker")).toStrictEqual({
      birth_year: "19BBY",
      eye_color: "blue",
      gender: "male",
      hair_color: "blond",
      height: "172",
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "fair",
    });
  });
});
describe("Characters", () => {
  test("Get tree", () => {
    const tree = renderer.create(<Characters />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
