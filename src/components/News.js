import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    constructor() {
        super();
        console.log("Hello");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c381a923a7c7466eb12f6d3eefeadac3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3 center">
                <h1 className="text-center" style={{ margin: '10px 0px', color: '#B00000' }}>NewsPanda - Top Headlines</h1>
                <h5 className="text-center"><span className="badge rounded-pill" style={{ backgroundColor: '#ffb3b3' }}>NewsPanda / {this.props.category}</span></h5>
                <hr />
                {this.state.loading && <Spinner />}
                <div className="row" style={{ padding: '10px' }}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 140) : ""} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} name={element.source.name} />
                        </div>
                    })}
                </div>
                <hr />
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" style={{ backgroundColor: '#B00000' }} className="btn text-light rounded-pill" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <p style={{ color: '#B00000' }}><span className="badge rounded-pill" style={{ backgroundColor: '#ffb3b3' }}>Page No. {this.state.page}</span></p>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" style={{ backgroundColor: '#B00000' }} className="btn text-light rounded-pill" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
