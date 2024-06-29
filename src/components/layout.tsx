/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import React from 'react'
import { Button } from 'react-bootstrap'

interface LayoutProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any
}


export default function Layout ({ children }: LayoutProps ) {
    return (
        <div>
            <header>
                <nav>
                    <Button variant="primary">Click Me</Button>
                </nav>
            </header>
            <div>{children}</div>
            <footer></footer>
        </div>
    )
}