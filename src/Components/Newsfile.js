import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newsfile extends Component {
    constructor(){
        super();
        console.log('An ban tan...')
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    //for Perching API
    async componentDidMount(){
        console.log('cdm')
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a8258994d9194d58a134977e488421a5&page=1&pageSize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})

    }

    //Next page
    handleNextClick = async () => {
        if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){

        }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a8258994d9194d58a134977e488421a5&page=${this.state.page+1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page + 1,
            articles: parsedData.articles
        })
    }
    }

    //previous page
    handlePreviousClick = async () => {
        //Math.ciel -> return next upper number of decimal
          let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a8258994d9194d58a134977e488421a5&page=${this.state.page-1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles
        })  
        
        
    }

    render() {
        return (
            <div className="container my-3">
             <h2>Crows Headlines</h2>
             
             <div className="row">
             {this.state.articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title?element.title.slice(0,100):""}
                                description={element.description?element.description.slice(0,130):""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
             </div>
             <div className="container">
                <div class="d-flex justify-content-between">
                  <button disabled={this.state.page<=1} className="btn btn-danger"onClick={this.handlePreviousClick}>&larr; Previous</button> 
                  <button className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
             </div>
            </div>
        )
    }
}

export default Newsfile