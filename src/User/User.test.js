import React from 'react'
import User from './User'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { getFavoriteJokes, getUserJokes } from '../localStorage'
jest.mock('../localStorage')

const mockHomeButtonDisplayUpdater = jest.fn()
const mockFavoriteJokes = [
  {
    "id": "10101010",
    "joke": "Yo mamma is tall",
    "status": 200
  },
  {
    "id": "101010101",
    "joke": "Yo mamma is short",
    "status": 200
  }
]
const mockUserJokes = [
  {
    "id": "20202020",
    "joke": "Yo mamma is rude",
    "status": 200
  },
  {
    "id": "202020202",
    "joke": "Yo mamma is nice",
    "status": 200
  }
]

describe('User', () => {

  it('Should update the home button display', () => {
    render(<User homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(mockHomeButtonDisplayUpdater).toHaveBeenCalled()
  })

  it('Should display Favorite Jokes', () => {
    getFavoriteJokes.mockReturnValue(mockFavoriteJokes)
    getUserJokes.mockReturnValue(mockUserJokes)

    render(<User homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(screen.getByText("Favorite Jokes")).toBeInTheDocument()
    expect(screen.getByText("Yo mamma is tall")).toBeInTheDocument()
    expect(screen.getByText("Yo mamma is short")).toBeInTheDocument()
  })

  it('Should display User Jokes', () => {
    getFavoriteJokes.mockReturnValue(mockFavoriteJokes)
    getUserJokes.mockReturnValue(mockUserJokes)

    render(<User homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(screen.getByText("Your Jokes")).toBeInTheDocument()
    expect(screen.getByText("Yo mamma is rude")).toBeInTheDocument()
    expect(screen.getByText("Yo mamma is nice")).toBeInTheDocument()
  })

  it('Should display error message if there are no saved Favorites', () => {
    getFavoriteJokes.mockReturnValue(null)
    getUserJokes.mockReturnValue(mockUserJokes)

    render(<User homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(screen.getByText("This is where my favorite jokes would go... IF I HAD ANY")).toBeInTheDocument()
  })

  it('Should display error message if there are no saved user jokes', () => {
    getFavoriteJokes.mockReturnValue(mockFavoriteJokes)
    getUserJokes.mockReturnValue(null)

    render(<User homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    expect(screen.getByText("This is where my jokes would go... IF I HAD ANY")).toBeInTheDocument()
  })


})