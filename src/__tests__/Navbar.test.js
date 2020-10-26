import React from 'react'
import {render} from '@testing-library/react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('Navbar', () => {
    it('matches the snapshot', () => {
        const {asFragment} = render (
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders all elements' , () => {
        const {getByTestId} = render (
            <BrowserRouter>
            <Navbar/>
            </BrowserRouter>
        )

        expect(getByTestId('menuWrap')).toHaveClass('menuWrap')
        expect(getByTestId('hamburger')).toHaveClass('hamburger')
        expect(getByTestId('toggler')).toHaveClass('toggler')
        expect(getByTestId('menu')).toHaveClass('menu')
        expect(getByTestId('navbarListElementHome')).toHaveClass('navbarListElement')
        expect(getByTestId('navbarListElementContact')).toHaveClass('navbarListElement')
    })
})