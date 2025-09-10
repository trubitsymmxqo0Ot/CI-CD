import { render, screen } from "@testing-library/react";
import { Button, StylesButton } from "./Button";

describe("Button ui test", () => {
  test("Button in the document", () => {
    render(<Button>Text</Button>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  test("Button with clear theme class", () => {
    render(<Button theme={StylesButton.CLEAR}>Test theme</Button>)
    expect(screen.getByText("Test theme")).toHaveClass('clear');
  })
  test("Button with outline theme class", () => {
    render(<Button theme={StylesButton.OUTLINE}>Test theme</Button>)
    expect(screen.getByText("Test theme")).toHaveClass('outline');
  })
});
