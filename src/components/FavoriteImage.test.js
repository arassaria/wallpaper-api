import React from "react";
import ReactDOM from "react-dom";
import FavoriteImage from "./FavoriteImage";
import { render, screen } from "@testing-library/react";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavoriteImage photoId="CdgPvm_cELM" />, div);
});
it("renders img from unsplash", () => {
  render(<FavoriteImage photoId="CdgPvm_cELM" />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://source.unsplash.com/CdgPvm_cELM")
  ).toBeTruthy();
});
