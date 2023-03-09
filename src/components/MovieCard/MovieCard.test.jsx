/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, cleanup } from "@testing-library/react";

import MovieCard from "./index";

let getByTestId;
let component;

beforeEach(() => {
  component = render(<MovieCard />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  getByTestId = null;
  component = null;
  cleanup();
});

describe("MovieCard component", () => {
  it("should rendering on screen", () => {
    const actual = getByTestId("MovieCard__Component");
    expect(actual).toBeInTheDocument();
  });
});

it("renders character card unchanged", () => {
  const { container } = render(<MovieCard />);
  expect(container).toMatchSnapshot();
});
