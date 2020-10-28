import React from 'react'
import {render} from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects', () => {
    it('matches snapshot', () => {
        const {asFragment} = render (<Projects/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders all elements correctly', () => {
        const {getByTestId} = render (<Projects/>)

        expect(getByTestId('projectContainer')).toHaveClass('projectContainer')
        expect(getByTestId('bringAndShareFront')).toHaveClass('cardFront')
        expect(getByTestId('bringAndShareBack')).toHaveClass('cardBack')
        expect(getByTestId('surrealFront')).toHaveClass('cardFront')
        expect(getByTestId('surrealBack')).toHaveClass('cardBack')
        expect(getByTestId('weatherFront')).toHaveClass('cardFront')
        expect(getByTestId('weatherBack')).toHaveClass('cardBack')
        expect(getByTestId('nasaFront')).toHaveClass('cardFront')
        expect(getByTestId('nasaBack')).toHaveClass('cardBack')
        expect(getByTestId('cruiseFront')).toHaveClass('cardFront')
        expect(getByTestId('cruiseBack')).toHaveClass('cardBack')
        expect(getByTestId('petFront')).toHaveClass('cardFront')
        expect(getByTestId('petBack')).toHaveClass('cardBack')
    })
})