import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([value]);

    }

    return (

        <>
            <div className='title-div'>
                <h1>Gif Explorer</h1>
            </div>

            <AddCategory onAddCategory={(value) => onAddCategory(value)} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
