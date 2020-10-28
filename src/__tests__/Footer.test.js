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

        expect(getByTestId('footerContainer')).toHaveClass('footerContainer')
        expect(getByTestId('footer')).toHaveClass('footer')
        expect(getByTestId('footerLinkOne')).toHaveClass('footerLinkOne')
        expect(getByTestId('footerLinkTwo')).toHaveClass('footerLinkTwo')
        expect(getByTestId('footerLinkThree')).toHaveClass('footerLinkThree')
        expect(getByTestId('footerLinkFour')).toHaveClass('footerLinkFour')
        expect(getByTestId('footerLinkFive')).toHaveClass('footerLinkFive')
    })
})