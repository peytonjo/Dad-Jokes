import { render, screen, waitFor, fireEvent, getByAltText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import { NavBar } from './NavBar'


describe("NavBar", () => {
  beforeEach(() => {});

  it("should render a title and tagline", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const title = screen.getByText('Cringy Dad Jokes')
    const tagLine = screen.getByText('Need a good joke to embarrass your kids? We\'ve got you covered!')

    expect(title).toBeInTheDocument()
    expect(tagLine).toBeInTheDocument()
  });

  it("should render a User Page button and an Add New Joke", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const userPageBtn = screen.getByAltText('user icon')
    const addNewJokeBtn = screen.getByRole('button', { name: /add new joke/i })

    expect(userPageBtn).toBeInTheDocument()
    expect(addNewJokeBtn).toBeInTheDocument()
  });

  it('should display home button when not on home page', () => {
    render(
      <MemoryRouter>
        <NavBar displayHomeButton={true}/>
      </MemoryRouter>
    )

    const returnToHomeBtn = screen.getByText('Return to Home')

    expect(returnToHomeBtn).toBeInTheDocument()
  });

  it('should not display home button when on home page', () => {
    render(
      <MemoryRouter>
        <NavBar displayHomeButton={false}/>
      </MemoryRouter>
    )

    const returnToHomeBtn = screen.queryByText('Return to Home')

    expect(returnToHomeBtn).toBeNull()
  });
});;