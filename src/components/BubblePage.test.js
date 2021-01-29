import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colors = [
  {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
  },
  {
    color: "irishgreen",
    code: {
      hex: "#ffffff"
    },
    id: 2
}
];

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage colors={[]}/>)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  const { rerender } = render(<BubblePage colors={[]}/>);

  let colorObjects = screen.queryAllByTestId('colorTest');
    expect(colorObjects).toStrictEqual([]);
    expect(colorObjects).toHaveLength(0);

    rerender(<BubblePage colors={colors}/>);
    colorObjects = screen.queryAllByTestId('colorTest');
    expect(colorObjects).toHaveLength(2);

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading