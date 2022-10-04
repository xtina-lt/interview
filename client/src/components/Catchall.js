import React, {useState} from 'react'

const Catchall = ({setHeader}) => {
    setHeader("OOPS")
    return(
        <div>
            <h3>
                Page not found!
            </h3>
            <img src="https://media1.giphy.com/media/4IyIArvjvj5YJrcAch/giphy.gif"/>
        </div>
    )
}

export default Catchall