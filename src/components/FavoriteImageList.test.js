import { render, screen } from "@testing-library/react";
import React from "react";
import FavoriteImageList from "./FavoriteImageList";

it("renders multiple FavoriteImages based on photoIds", () => {
  const photoIds = ["6sxO2KgOK8U", "EbWmXQNJwrk", "CdgPvm_cELM"];
  render(<FavoriteImageList photoIds={photoIds} />);
  const imageElements = screen.getAllByRole("img");
  expect(imageElements.length).toBe(photoIds.length);
});
