import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation"
import AboutPage from "./AboutPage"
import { screen } from "@testing-library/react"
describe('AboutPage', () => {
    test("AboutPage ui", () => {
        renderWithTranslation(<AboutPage/>)
        expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    })
})