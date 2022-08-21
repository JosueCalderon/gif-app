import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([...categories, value]);

    }

    return (

        <>
            <div>GifExpertApp</div>

            <AddCategory onAddCategory={(value) => onAddCategory(value)} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
