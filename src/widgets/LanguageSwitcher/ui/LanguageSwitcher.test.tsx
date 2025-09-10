import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { screen } from "@testing-library/react"

describe('LanguageSwitcher ui', () => {
    test('LanguageSwitcher in the document', () => {
        renderWithTranslation(<LanguageSwitcher/>);
        expect(screen.getByTestId('languageButton')).toBeInTheDocument();
    })
})