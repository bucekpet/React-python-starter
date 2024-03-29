import React from 'react';
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li><strong><b className='text-blue'>React</b>  ⚛️ + <b className='text-blue'>Python</b>  🐍 <br /> starter pack</strong></li>
                </ul>
                <ul>
                    <li><Link to="/" className='contrast'>Home 🏠</Link></li>

                    <li>
                        <details className='dropdown'>
                            <summary>
                                Dropdown
                            </summary>
                            <ul dir='rtl'>
                                <li>Nothing's here</li>
                                <li>Also not here</li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        </>
    )
}