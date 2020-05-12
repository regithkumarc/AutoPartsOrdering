import React from 'react'
import './parts.css'
import $ from 'jquery'
import SearchBar from './searchbar'
import { Button } from 'reactstrap';
import ModalPopup from './modalPopup';

const imagePath = "https://image.tmdb.org/t/p/w185";

class Parts extends React.Component {

    constructor(props) {
        super(props)
        this.performSearchItem("ant man");


        this.state = {
            movieArr: [],
            searchVal: "",
            show: false,
            title: '',
            overview: ''
        }
        this.performSearchItem = this.performSearchItem.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle = item => {
        //alert(!this.state.show)
        console.log("e", item)
        this.setState({
            show: !this.state.show,
            title: item.title,
            overview: item.overview
        });
    }

    performSearchItem(searchItem) {
        console.log("perform search : ", searchItem)
        const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchItem;
        $.ajax({
            url: searchURL,
            success: (searchResult) => {
                console.log("Fetch data Successfully");
                const result = searchResult.results;
                console.log("result : ", result);
                var movieArray = [];

                result.forEach((movie) => {
                    movie.poster_src = imagePath + movie.poster_path;
                    console.log("Image Path : ", movie.poster_src)
                    movieArray.push(movie);
                    console.log(movie.src)
                })

                this.setState({ movieArr: movieArray })
            }
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    handleSearch={(event) => { this.performSearchItem(event.target.value) }}></SearchBar>
                <table>
                    <tbody>
                        {this.state.movieArr.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img alt="poster" width="120" src={item.poster_src} />
                                </td>
                                <td>
                                    <h3>{item.title}</h3>
                                    <p>{item.overview}</p>
                                    <Button onClick={() => this.toggle(item)}>Details</Button>&nbsp;
                                    <Button>AddToCart</Button>
                                </td>
                                <td>
                                    <ModalPopup title={this.state.title} body={this.state.overview} show={this.state.show} toggle={this.toggle}></ModalPopup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Parts;