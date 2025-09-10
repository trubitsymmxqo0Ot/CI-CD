import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation"
import MainPage from "./MainPage"
import { screen } from "@testing-library/react"
describe('MainPage ui', () => {
    test('MainPage in the document', () => {
        renderWithTranslation(<MainPage/>);
        expect(screen.getByText(/Главная страница/i)).toBeInTheDocument()
    })
})