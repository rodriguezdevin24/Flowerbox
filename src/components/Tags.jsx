import React from 'react'

export default function Tags(prop) {
  console.log(prop.tags)
  const tags = prop.tags.map((tag, index) => {
    return <div key={index} className={`tag-${index}`}>{tag}</div>
  })
    return (
    <div className="tags">
        {tags}
    </div>
  )
}