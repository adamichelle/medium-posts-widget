import React from 'react';


const tagToText = (node) => {
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}

const shortenText = (text,startingPoint ,maxLength) => {
  return text.length > maxLength?
  text.slice(startingPoint, maxLength):
  text
}

function Card(props) {
    return(
        <div className="card">
            <img src={props.post.thumbnail} className="card-img-top post-thumbnail" alt={props.post.title}></img>
            <div className="card-body">
                <h5 className="card-title post-title">{props.post.title}</h5>
                <p className="card-text post-preview">{'...' + shortenText(tagToText(props.post.content), 60, 200) + '...'}</p>
                <a href={props.post.link} className="btn btn-link-grey">Read this article on Medium.com</a>
            </div>
        </div>
    )
}

export default Card
