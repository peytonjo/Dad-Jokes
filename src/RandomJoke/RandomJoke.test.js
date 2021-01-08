import React from 'react'
import RandomJoke from './RandomJoke'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'

const joke = {
  id: "1a1a1a1",
  joke: "Yo mamma",
  status: 200
}
const mockLoadNewJoke = jest.fn()
const mockHomeButtonDisplayUpdater = jest.fn()

describe("RandomJoke", () => {

  it("Should render a joke, a Favorite button, and a Next button", () => {
    render(<RandomJoke joke={joke.joke} homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(screen.getByText("Yo mamma")).toBeInTheDocument()
    expect(screen.getByText("Favorite")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
  })

  it("Should call the newJoke function when the Next button is clicked", () => {
    render(<RandomJoke joke={joke.joke} loadNewJoke={mockLoadNewJoke} homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    const nextButton = (screen.getByText("Next"))
    fireEvent.click(nextButton)

    expect(mockLoadNewJoke).toHaveBeenCalled()
  })
})

