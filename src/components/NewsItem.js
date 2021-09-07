import React, { Component } from 'react'
import newsimg from './newspanda.png'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, name } = this.props;
        return (
            <div className="my-3">
                <div style={{ backgroundColor: '#fff3f4' }} className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                        <span className="badge" style={{ left: '80%', zIndex: '1', backgroundColor: '#B00000' }}>{name}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : newsimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm text-light rounded-pill" style={{ backgroundColor: '#3366ff' }}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem