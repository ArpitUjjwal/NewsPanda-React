import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c381a923a7c7466eb12f6d3eefeadac3&page=1&pageSize=6";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
        console.log("Prev");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c381a923a7c7466eb12f6d3eefeadac3&page=${this.state.page - 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=>{
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/6)){

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c381a923a7c7466eb12f6d3eefeadac3&page=${this.state.page + 1}&pageSize=6`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        } 
    }

    render() {
        return (
            <div className="container my-3">
                <h1>NewsPanda - Top Headlines</h1>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0,140):""} newsUrl={element.url} imageUrl={element.urlToImage}/>
                        </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                    <p>Page No. {this.state.page}</p>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
