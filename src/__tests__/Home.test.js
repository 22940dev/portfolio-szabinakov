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
        expect(getByTestId('engineerContainer')).toHaveClass('engineerContainer')
        expect(getByTestId('longAbout')).toHaveClass('longAbout')
        expect(getByTestId('logoContainer')).toHaveClass('logoContainer')
    })
})
