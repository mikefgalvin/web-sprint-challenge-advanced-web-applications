import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import fetchFiles from '../utils/fetchFiles';

jest.mock('../utils/fetchFiles');

const res = {
  data: [
  {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
  },
  {
    color: "irishGreen",
    code: {
      hex: "#ffffff"
    },
    id: 2
}
]
};

test("Renders BubblePage without errors", () => {
  // Finish this test
  fetchFiles.mockResolvedValueOnce(res)
  render(<BubblePage colors={[]}/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  jest.resetAllMocks()
  fetchFiles.mockResolvedValueOnce(res)
  const { rerender } = render(<BubblePage colors={[]}/>);

  await waitFor(() => {
		const aliceBlue = screen.getByText(/aliceblue/i);
		const irishGreen = screen.getByText(/irishgreen/i);
	
		expect(aliceBlue).toBeInTheDocument();
		expect(irishGreen).toBeInTheDocument();
	});

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading