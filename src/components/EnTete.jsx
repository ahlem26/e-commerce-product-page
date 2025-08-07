import React from 'react'

export function EnTete({ image, texte1, texte2}) {
    return (
        <div
            className="text-center py-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <h1 className="text-5xl font-bold text-white">{texte1}</h1>
            <p className="text-white mt-6">{texte2}</p>
        </div>
    )
}
