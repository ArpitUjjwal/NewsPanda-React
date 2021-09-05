import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let {title, description, imageUrl , newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://images.news18.com/ibnlive/uploads/2021/09/shutterstock_2033764355-163081415716x9.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read More</a>
                    </div>
                </div> 
            </div>
        )
    }
}

export default NewsItem
