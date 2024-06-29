/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import React from 'react'
import Navbar from './navbar'

interface LayoutProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any

}


export default function Layout ({ children, data }: LayoutProps ) {
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
