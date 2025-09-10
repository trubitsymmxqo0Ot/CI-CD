import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation"
import { Sidebar } from "./Sidebar"
import { fireEvent, screen } from "@testing-library/react"

describe("Sidebar ui", () => {
    test("Sidebar in the document", () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })
    test('Test toggle sidebar', () => {
        renderWithTranslation(<Sidebar/>);
        const openSidebar = screen.getByTestId('openSidebar');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(openSidebar);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})