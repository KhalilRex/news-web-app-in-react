import React from 'react'

export default function NewsItem(props) {
   let {title, description,imageUrl, newsUrl, author, date} = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://i.pinimg.com/564x/25/8d/dc/258ddc66e4e49ec5f8797e13ec53116b.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">by {author?author:"unknown"} on {new Date(date).toGMTString(+5)}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-dark ">Read more</a> 
                            {/* _bland for new tab */}
                        </div>
                </div>
            </div>
        )
}
