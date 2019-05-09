import React from 'react';

const ItemPages = ({title, imageUrl, author, category, body}) => (
<>
<article>
<h2>{title}</h2>
<img src={imageUrl} alt={title}/>
<p>Author:{author}</p>
<p>Category: {category}</p>
<p>{body}</p>
</article>
</>
)

export default ItemPages;