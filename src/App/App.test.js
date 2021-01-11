import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { getRandomJoke } from "../ApiCalls.js";
jest.mock("../ApiCalls.js");

const joke1 = {
  "id": "1a1a1a1",
  "joke": "Yo mamma",
  "status": 200,
};

const joke2 = {
  "id": "2b2b2b2",
  "joke": "Jo mamma",
  "status": 200,
};

describe.skip("App", () => {
  beforeEach(() => {
    getRandomJoke.mockResolvedValueOnce(joke1);
    // getRandomJoke.mockResolvedValueOnce(joke2);
  });

  it("renders the Navbar and RandomJoke", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByText("Cringy Dad Jokes");
    const addNewJokeBtn = screen.getByText("Add new joke")
    // const firstJoke = await waitFor(() => screen.getByText("Yo mamma"));

    expect(title).toBeInTheDocument();
    expect(addNewJokeBtn).toBeInTheDocument();
    // expect(firstJoke).toBeInTheDocument();
  });

  it("Should display the input form when the Add new joke button is pressed", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addNewJokeBtn = screen.getByText("Add new joke")

    fireEvent.click(addNewJokeBtn)

    const input = await waitFor(() => screen.getByRole('textbox'))

    expect(input).toBeInTheDocument()
  })

  it("should route home again when on the home button is clicked", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const addNewJokeBtn = screen.getByText("Add new joke")
    fireEvent.click(addNewJokeBtn)
    const returnToHomeBtn = await waitFor(() => screen.getByText("Return to Home"))
    fireEvent.click(returnToHomeBtn)

    expect(screen.getByText("Next")).toBeInTheDocument()
  })

  it("Should display the user page when the user icon button is pressed", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const userIconBtn = screen.getByAltText("user icon")

    fireEvent.click(userIconBtn)

    const input = await waitFor(() => screen.getByText('Favorite Jokes'))

    expect(input).toBeInTheDocument()
  })
});
