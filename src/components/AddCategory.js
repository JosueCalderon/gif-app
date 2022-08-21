import React, { useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {

    const [value, setValue] = useState('');

    const handleOnChange = (event) => {

        setValue(event.target.value);

    }

    const handleOnSubmit = (event) => {

        event.preventDefault();

        const inputValue = value.trim();

        if (inputValue.length > 0) {

            onAddCategory(inputValue);

        }

        setValue('');

    }

    return (

        <form className='search-div' onSubmit={(event) => handleOnSubmit(event)}>

            <input type='text' placeholder='Search...' value={value} onChange={(event) => handleOnChange(event)} />
            <button onClick={(event) => handleOnSubmit(event)}>Search</button>

        </form>

    )

}
