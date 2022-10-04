import React, {useState} from 'react'

const Nav = props => {
    return(
        <nav>
            <a href="/">
                Home
            </a>
            <a href="/essay">
                Essay
            </a>
            <a href="questions">
                Questions
            </a>
            <a href="/thanks">
                Thanks
            </a>
        </nav>
    )
}

export default Nav