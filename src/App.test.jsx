import { screen ,render } from "@testing-library/react";
 import { getByLabelText} from '@testing-library/dom'
import { expect, test } from "vitest";
import App from "./App";

test('flow of input for name ', () => {
    // render were the code is living 
  render(<App/>)
//   make a variables to store the test we want and get it by role with name input 
  const inputElement = screen.getByRole("textbox", {name: /enter your name /i})
  
//   fireEvent.click(inputElement);
  // check if the input element is in the document
  expect(inputElement).toBeInTheDocument();
});
  
  
  
  
   

