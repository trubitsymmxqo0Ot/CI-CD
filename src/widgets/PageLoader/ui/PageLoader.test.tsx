import { PageLoader } from "./PageLoader"
import { render, screen } from "@testing-library/react"
describe("Page Loader", () => {
    test("page in the document", () => {
        render(<PageLoader/>)
        expect(screen.getByTestId('pageLoader')).toBeInTheDocument();
    })
})