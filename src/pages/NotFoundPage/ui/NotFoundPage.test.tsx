import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation"
import { NotFoundPage } from "./NotFoundPage"
import { screen } from "@testing-library/react"

describe('NotFoundPage ui', () => {
    test('NotFoundPage in the document', () => {
        renderWithTranslation(<NotFoundPage/>)
        expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
    })
})