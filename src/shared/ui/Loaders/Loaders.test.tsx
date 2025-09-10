import { render, screen } from "@testing-library/react"
import { Loaders } from "./Loaders"

describe("Loaders", () => {
    test('Loaders in the document', () => {
        render(<Loaders/>);
        expect(screen.getByTestId('loaders')).toBeInTheDocument();
    })
})