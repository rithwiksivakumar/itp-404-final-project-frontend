import { render } from "@testing-library/react";
import React from "react";
import AddCar from "./components/AddCar";
import Cars from "./components/Cars";
import App from "./App";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavLink from "./components/Navlink";
import DisplayTile from "./components/DisplayTile";

test("Navlink is able to get proper text", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={1}
        activePosition={1}
      ></NavLink>
    </Router>
  );
  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].innerHTML).toBe("Motorcycles");
});

test("Navlink is bold if the position is equal to active position", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={1}
        activePosition={1}
      ></NavLink>
    </Router>
  );

  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].style.fontWeight).toEqual("bold");
});

test("Navlink is not bold if the position is not equal to active position", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={0}
        activePosition={1}
      ></NavLink>
    </Router>
  );
  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].style.fontWeight === "bold").toBe(false);
});

test("Navlink has proper margin if the position is negative", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={-1}
        activePosition={1}
      ></NavLink>
    </Router>
  );
  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].style.marginRight).toBe("10%");
});

test("Navlink has proper margin if the position is positive", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={1}
        activePosition={1}
      ></NavLink>
    </Router>
  );
  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].style.marginLeft).toBe("10%");
});

test("Navlink has proper margin if the position is zero", () => {
  const { getAllByTestId } = render(
    <Router>
      <NavLink
        text="Motorcycles"
        url="/motorcycles"
        position={0}
        activePosition={1}
      ></NavLink>
    </Router>
  );
  expect(getAllByTestId("navlink").length).toBe(1);
  expect(getAllByTestId("navlink")[0].style.marginLeft).toBe("0%");
  expect(getAllByTestId("navlink")[0].style.marginRight).toBe("");
});

test("DisplayTile renders proper name", () => {
  let vehicle = {
    name: "Kawasaki Ninja 650",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kawasaki_ER-6.jpg",
    displacement: 649,
    weight: 419,
    id: "0",
  };
  const { getAllByTestId } = render(
    <Router>
      <DisplayTile vehicle={vehicle} type="motorcycles" view={false} />
    </Router>
  );

  expect(getAllByTestId("auto-name").length).toBe(1);
  expect(getAllByTestId("auto-name")[0].innerHTML).toBe(vehicle.name);
});

test("DisplayTile renders displacement if vehicle is a motorcyle", () => {
  let vehicle = {
    name: "Kawasaki Ninja 650",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kawasaki_ER-6.jpg",
    displacement: 649,
    weight: 419,
    id: "0",
  };
  const { getAllByTestId } = render(
    <Router>
      <DisplayTile vehicle={vehicle} type="motorcycles" view={false} />
    </Router>
  );

  expect(getAllByTestId("auto-displacement").length).toBe(1);
});

test("DisplayTile renders displacement if vehicle is a car", () => {
  let vehicle = {
    id: "1",
    name: "BMW M3 Competition",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/BMW_M3_Competition_%28G80%29_IMG_4041.jpg/2880px-BMW_M3_Competition_%28G80%29_IMG_4041.jpg",
    horsepower: 503,
    weight: 3890,
  };
  const { getAllByTestId } = render(
    <Router>
      <DisplayTile vehicle={vehicle} type="cars" view={false} />
    </Router>
  );

  expect(getAllByTestId("auto-horsepower").length).toBe(1);
});

test("DisplayTile renders the proper image and sets src correctly", () => {
  let vehicle = {
    id: "1",
    name: "BMW M3 Competition",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/BMW_M3_Competition_%28G80%29_IMG_4041.jpg/2880px-BMW_M3_Competition_%28G80%29_IMG_4041.jpg",
    horsepower: 503,
    weight: 3890,
  };
  const { getAllByTestId } = render(
    <Router>
      <DisplayTile vehicle={vehicle} type="cars" view={false} />
    </Router>
  );

  expect(getAllByTestId("auto-image").length).toBe(1);
  expect(getAllByTestId("auto-image")[0].src).toBe(vehicle.img);
});
