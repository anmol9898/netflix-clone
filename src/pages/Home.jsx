import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
    const headings = [
        { id: 1, title: 'Upcoming', FetchURL: requests.requestUpcoming },
        { id: 2, title: 'Popular', FetchURL: requests.requestPopular },
        { id: 3, title: 'Trending', FetchURL: requests.requestTrending },
        { id: 4, title: 'Horror', FetchURL: requests.requestHorror },
        { id: 5, title: 'Top Rated', FetchURL: requests.requestTopRated }
    ]
    return (
        <>
            <Main />
            {headings.map((item) => (
                <Row key={item?.id} rowId={item?.id} title={item?.title} FetchURL={item?.FetchURL} />
            ))}
            {/* 
            <Row title='Upcoming' FetchURL={requests.requestUpcoming} />
            <Row title='Popular' FetchURL={requests.requestPopular} />
            <Row title='Trending' FetchURL={requests.requestTrending} />
            <Row title='Horror' FetchURL={requests.requestHorror} />
            <Row title='Top Rated' FetchURL={requests.requestTopRated} />
             */}
        </>
    )
}

export default Home