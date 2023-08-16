import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description,imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://i.pinimg.com/564x/25/8d/dc/258ddc66e4e49ec5f8797e13ec53116b.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-dark ">Go somewhere</a> 
                            {/* _bland for new tab */}
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem