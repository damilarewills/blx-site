/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import React from 'react'
import Navbar from './navbar'

interface LayoutProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}


export default function Layout ({ children }: LayoutProps ) {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <div>{children}</div>
            <footer></footer>
        </div>
    )
}