import React, { useContext, useState } from 'react'
import { ContextData } from '../../App'

function Story({ img, name, id, viewStory, setViewStory, story, setStory }) {
    const { data, dataStory } = useContext(ContextData)
    const [viewStoryBorder, setViewStoryBorder] = useState(false)

    const openStory = (id) => {
        const findStory = dataStory.find(item => item.id == id)
        setStory(findStory)
        setViewStoryBorder(true)
        setViewStory(true)

    }
    return (
        <div>
            <div onClick={() => openStory(id)} style={{ border: viewStoryBorder ? "2px solid gray" : "2px solid #ED25A4" }} className="story">
                <img src={img} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Story