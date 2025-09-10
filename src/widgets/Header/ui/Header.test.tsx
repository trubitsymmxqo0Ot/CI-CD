import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";
import { Header } from "./Header";
import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header ui", () => {
  test("Header in the document", () => {
    renderWithTranslation(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
