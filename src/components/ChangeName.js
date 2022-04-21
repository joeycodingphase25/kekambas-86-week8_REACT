import React, { useState } from 'react'

export default function ChangeName(props) {
    const [buttonColor, setButtonColor] = useState('secondary')

    // handleNameChange gets passes down twice through props
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.newName.value;
        props.handleNameChange(newName)
    }
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <div className='mb-3'>
                <label htmlFor='newName' className='form-label'>New Name</label>
                <input type='text' name='newName' className='form-control' />
            </div>
                <input type='submit' className={`btn btn-${buttonColor}`} />
        </form>
        <button onClick={() => setButtonColor(buttonColor === 'secondary' ? 'warning': 'secondary')}className='btn btn-outline-success'> Change Above Button</button>
        </>
    )
}
