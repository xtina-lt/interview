import React, {useState} from 'react'

const Questions = ({setHeader}) => {
    setHeader("Questions")
    return(
        <div>
            <h3>
                1.	When did you know you liked computers?
            </h3>
                A: My dad worked at a power plant. He took me on one of the bring your kid to work days. While all the other kidsl were playing I was playing with the electronics and computers.
                <br/>
                <br/>
            <h3>
                2.	What is your favorite thing about computers?
            </h3>
                A: Creating something out of nonthing.
                <br/>
                <br/>
            <h3>
                3.	What training did you need to obtain your current job? 
            </h3>
                A: Went to another developer bootcamp and became a teacher's aid. I then found this job.
                <br/>
                <br/>
            <h3>
                4.	What are good places for female mentorship in tech?
            </h3>
                A: There's not many of us. I've look toward my superiors for mentorship male or female.
                <br/>
                <br/>
            <h3>
                5.	What is the hardest part about coding?
            </h3>
                A: The non-visual aspect of languages. The logical part that you can't if something is broken until you run the program.
                <br/>
                <br/>
            <h3>
                6.	What are you working on now? 
            </h3>
                A: A mental well being application. Tracks mood, medication, and sugars.
                <br/>
                <br/>
        </div>
    )
}

export default Questions