import React from 'react'
import {render} from '@testing-library/react'
import Home from '../components/Home'

describe('Home', () => {
    it('matches the Snapshot', () => {
        const {asFragment} = render(<Home/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders all elements', () => {
        const {getByTestId} = render(<Home/>)

        expect(getByTestId('introContainer')).toHaveClass('introContainer')
        expect(getByTestId('helloDiv')).toHaveClass('helloDiv')
        expect(getByTestId('myNameDiv')).toHaveClass('myNameDiv')
        expect(getByTestId('aboutContainer')).toHaveClass('aboutContainer')

        /* from component Project */
        expect(getByTestId('card')).toHaveClass('card')
    })
})
