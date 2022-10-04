import React, {useState} from 'react'

const Questions = ({setHeader}) => {
    setHeader("Questions")
    return(
        <div>
            <h3>
                1.	When did you know you liked computers?
            </h3>
                <br/>
                A: My dad worked at a power plant. He took me on one of the bring your kid to work days. While all the other kidsl were playing I was playing with the electronics and computers.
            <h3>
                2.	What is your favorite thing about computers?
            </h3>
                <br/>
                A: Creating something out of nonthing.
            <h3>
                3.	What training did you need to obtain your current job? 
            </h3>
                <br/>
                A: Went to another developer bootcamp and became a teacher's aid. I then found this job.
            <h3>
                4.	What are good places for female mentorship in tech?
            </h3>
                <br/>
                A: There's not many of us. I've look toward my superiors for mentorship male or female.
            <h3>
                5.	What is the hardest part about coding?
            </h3>
                <br/>
                A: The non-visual aspect of languages. The logical part that you can't if something is broken until you run the program.
            <h3>
                6.	What are you working on now? 
            </h3>
                A: A mental well being application. Tracks mood, medication, and sugars.
        </div>
    )
}

export default Questions