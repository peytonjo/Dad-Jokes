import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import CreatedCard from './CreatedCard'

const mockJoke = {
  id: "1010101011010",
  joke: "Yo mamma",
  status: 200
}

const mockBadJoke = {
  id: "1010101011010",
  joke: "",
  status: 200
}

describe('CreatedCard', () => {

  it('Should display a joke', () => {
    render(<CreatedCard joke={mockJoke}/>)

    expect(screen.getByText('Yo mamma')).toBeInTheDocument()
  })

  it('Should display an error message if there is no joke', () => {
    render(<CreatedCard joke={mockBadJoke}/>)

    const errorMessage = screen.getByText("Sorry, you're not funny")
    expect(errorMessage).toBeInTheDocument()
  })
})