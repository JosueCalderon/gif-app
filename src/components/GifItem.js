import React, { useState } from 'react'

export const GifItem = ({ url, title }) => {

    const [copy, setCopy] = useState(false);
    const [copyText, setCopyText] = useState('Click to copy!')

    const clickCard = (url) => {
        navigator.clipboard.writeText(url);
        setCopyText('Copied!')
    }

    const onSetCopyLeave = () => {
        setCopy(false);
        setCopyText('Click to copy!')
    }

    return (

        <div className="card" onMouseEnter={() => setCopy(true)} onMouseLeave={() => onSetCopyLeave()} onClick={() => clickCard(url)}>
            {copy && <span className='copy-text'>{copyText}</span>}
            <img src={url} alt={title} />
            <div className='text'>
                <p>{title}</p>
            </div>

        </div>

    )

}
