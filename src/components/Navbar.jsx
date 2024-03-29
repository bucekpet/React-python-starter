import React from 'react';
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><strong><b className='text-blue'>React</b> + <b className='text-blue'>Python</b> starter pack 🛠️</strong></li>
                </ul>
                <ul>
                    <li><Link to="/" className='contrast'>Home 🏠</Link></li>

                    <li>
                        <details className='dropdown'>
                            <summary>
                                Dropdown
                            </summary>
                            <ul dir='rtl'>
                                <li><Link to="/" className='contrast'>Nothing's here</Link></li>
                                <li><Link to="/" className='contrast'>Also not here</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        </>
    )
}