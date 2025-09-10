import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";
import { AppLink } from "./AppLink";
import { fireEvent, getByTestId, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("AppLink ui test", () => {
  test("AppLink has correct href", () => {
    renderWithTranslation(
        <MemoryRouter>
            <AppLink to='/about' data-testid="linkAbout">Test</AppLink>
        </MemoryRouter>
    )
    expect(screen.getByTestId('linkAbout')).toBeInTheDocument();
  });
  test('To have attribute', () => {
    renderWithTranslation(
        <MemoryRouter>
            <AppLink to='/' data-testid="linkMain">Test</AppLink>
        </MemoryRouter>
    )
    expect(screen.getByTestId('linkMain')).toHaveAttribute('href', '/');
  })
});
