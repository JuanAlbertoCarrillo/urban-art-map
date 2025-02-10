import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

// Helper function to wrap components in BrowserRouter for testing
const renderWithRouter = (ui) => render(ui);

describe("Navigation Tests", () => {

    // Set up the environment before each test
  beforeEach(() => {
    renderWithRouter(<App />); // Render the App component before each test
  });

    test("renders navigation links", () => {
        const mapLink = screen.getByRole('link', { name: /map/i });  // query by role of link

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/submit art/i)).toBeInTheDocument();
        expect(mapLink).toBeInTheDocument();
    });

    test("navigates to Map page when clicking 'Map'", async () => {
        const mapLink = screen.getByRole('link', { name: /map/i });

        await userEvent.click(mapLink);

        expect(mapLink).toBeInTheDocument();
    });

    test("navigates to Submit Art page when clicking 'Submit Art'", async () => {
        await userEvent.click(screen.getByText(/submit art/i));
        
        expect(screen.getByText(/submit street art/i)).toBeInTheDocument();
    });
});
