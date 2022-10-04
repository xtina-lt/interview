import React, {useState} from 'react'

const Thanks= ({setHeader}) => {
    setHeader("Thanks")
    return(
        <div>
            <h2>
                Instructor Melissa
            </h2>
                <br/>
                Thank you for taking time out of your busy schedule to do this interview with me.
                Your enthusiasm for teaching others how to find their inner creativity was so motivational to hear about. 
                You helped me more than you know. 
                Good luck in all your endeavors! 
                You’re a rockstar!

            <h2>
                Professor Smiley
            </h2>
            <br/>
            Thank you for all the time you spent organizing the class. 
            It was helpful! Thank you for all the resources you showed us, students. 
            These are things we will continue using throughout our pursuit of degrees. 
            Good luck with the classes to come! You’re awesome!
        <br/>
        </div>
    )
}

export default Thanks