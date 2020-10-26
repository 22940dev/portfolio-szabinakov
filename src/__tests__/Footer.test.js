import React from 'react'
import {render} from '@testing-library/react'
import Footer from '../components/Footer'


describe('Footer', () => {
    it('matches the Snapshot', () => {
        const {asFragment} = render (<Footer/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders all the links', () => {
        const {getByTestId} = render (<Footer/>)

        expect(getByTestId('footerTestOne')).toHaveClass('footerListElement')
        expect(getByTestId('footerTestTwo')).toHaveClass('footerListElement')
        expect(getByTestId('footerTestThree')).toHaveClass('footerListElement')
        expect(getByTestId('footerTestFour')).toHaveClass('footerListElement')
        expect(getByTestId('footerTestFive')).toHaveClass('footerListElement')
    })
})