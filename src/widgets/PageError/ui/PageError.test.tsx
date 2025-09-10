import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";
import { PageError } from "./PageError";
import { fireEvent, screen } from "@testing-library/react";

describe("Page error ui", () => {
  test("Page error in the document", () => {
    renderWithTranslation(<PageError />);
    expect(screen.getByText(/Обновить страницу/i)).toBeInTheDocument();
  });
});
