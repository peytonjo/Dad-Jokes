import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form.js'

const mockHomeButtonDisplayUpdater = jest.fn()

describe('Form', () => {

  it('Should render an input box', () => {
    render(<Form homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    const inputArea = screen.getByAltText('joke input box')

    expect(inputArea).toBeInTheDocument()
  })

  it('Should render an submit button', () => {
    render(<Form homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    const submitButton = screen.getByRole('button', {name: /submit/i})

    expect(submitButton).toBeInTheDocument()
  })

  it('Input field should reflect what is typed into it', () => {
    render(<Form homeButtonDisplayUpdater={mockHomeButtonDisplayUpdater}/>)

    const inputArea = screen.getByAltText('joke input box')

    userEvent.type(inputArea, 'Jo mamma')

    expect(screen.getByDisplayValue('Jo mamma')).toBeInTheDocument()
  })
})