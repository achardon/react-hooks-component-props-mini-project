import React from "react";

function Article({ 
    title, 
    date='January 1, 1970', 
    preview,
    minutes
}) {
    let minRead = ''
    if (minutes < 30) {
        for (let i=0; i<minutes; i=i+5) {
            minRead = minRead + '☕️'
        }
    }
        
    if (minutes > 30) {
        for (let i=0; i<minutes; i=i+10) {
            minRead = minRead + '🍱'
        }
    }
    
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} ~ {minRead} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;