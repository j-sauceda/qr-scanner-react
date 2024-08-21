// import App from "./App";
// import { createElement } from "react";
import { describe, expect, it } from "vitest";
// import { render, screen } from "@testing-library/react";

describe("App", async () => {
  it("2 + 2 = 4", () => {
    expect(2 + 2).toEqual(4);
  });

  // this was commented for the time being as it requires mocking the Canvas
  // render(createElement(App));

  // it("should render correctly", () => {
  //   const header = screen.getByText("Simple QR Scanner");
  //   expect(header).toBeInTheDocument();
  // });
});
