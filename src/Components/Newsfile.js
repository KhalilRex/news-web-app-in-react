import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const Newsfile = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const newsUpdate = async (page) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a8258994d9194d58a134977e488421a5&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setPage(page);
        setLoading(false);
    };

    useEffect(() => {
        newsUpdate(1);
    }, []);

    const handleNextClick = () => {
        newsUpdate(page + 1);
    };

    const handlePreviousClick = () => {
        newsUpdate(page - 1);
    };

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(nextPage);
    };

    return (
        <div className="container my-3">
            <div className="text-center" style={{ margin: '40px' ,marginTop : '90px' }}>
                <h2>Crows Headlines</h2>
            </div>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 100) : ''}
                                    description={element.description ? element.description.slice(0, 130) : ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <button disabled={page <= 1} className="btn btn-danger" onClick={handlePreviousClick}>
                        &larr; Previous
                    </button>
                    <button className="btn btn-primary" onClick={handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

Newsfile.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
};

Newsfile.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default Newsfile;
