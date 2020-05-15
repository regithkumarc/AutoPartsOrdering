import React from 'react'
import './parts.css'
import $ from 'jquery'
import SearchBar from './searchbar'
import { Button } from 'reactstrap';
import ModalPopup from './modalPopup';
import { addOrUpdateCartData, reloadCartDataCount } from '../crud/userFuction';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
            overview: '',
            imageURL: '',
            cartCount: ''
        }
        this.performSearchItem = this.performSearchItem.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.toggle = this.toggle.bind(this);
        this.showCartUI = this.showCartUI.bind(this);

        // this.setState({ cartCount: reloadCartDataCount() });
        // console.log(this.state.cartCount)
    }

    componentDidMount() {
        this.setState({ cartCount: reloadCartDataCount() });
        console.log("cartCount : ", this.state.cartCount)
    }

    showCartUI() {
        //alert("cart")
        this.props.history.push({
            pathname: '/cart',
            // address : this.state.address,
            // privilagestatus : this.state.privilagestatus
        })
    }

    toggle = item => {
        this.setState({
            show: !this.state.show,
            title: item.title,
            overview: item.overview,
            imageURL: item.poster_src
        });
    }

    addToOrder = item => {
        addOrUpdateCartData(item);
        this.setState({ cartCount: reloadCartDataCount() })
    }

    performSearchItem(searchItem) {
        console.log("perform search : ", searchItem)
        const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchItem;
        $.ajax({
            url: searchURL,
            success: (searchResult) => {
               // console.log("Fetch data Successfully");
                const result = searchResult.results;
               // console.log("result : ", result);
                var movieArray = [];

                result.forEach((movie) => {
                    movie.poster_src = imagePath + movie.poster_path;
                    //console.log("Image Path : ", movie.poster_src)
                    movieArray.push(movie);
                   // console.log(movie.src)
                })

                this.setState({ movieArr: movieArray })
            }
        })
    }

    render() {
        const StyledBadge = withStyles((theme) => ({
            badge: {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: '0 4px',
            },
        }))(Badge);

        return (
            <div>
                <SearchBar
                    handleSearch={(event) => { this.performSearchItem(event.target.value) }}></SearchBar>
                <div className = "cart-icon">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={this.state.cartCount} color="secondary">
                            <ShoppingCartIcon onClick={this.showCartUI} />
                        </StyledBadge>
                    </IconButton>
                </div>
                <table>
                    <tbody>
                        {this.state.movieArr.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <img alt="poster" width="120" src={item.poster_src} />
                                </td>
                                <td>
                                    <h3>{item.title}</h3>
                                    <h5>{item.id}</h5>
                                    <p>{item.overview}</p>
                                    <Button onClick={() => this.toggle(item)}>Details</Button>&nbsp;
                                    <Button onClick={() => this.addToOrder(item)}>AddToCart</Button>
                                </td>
                                <td>
                                    <ModalPopup title={this.state.title} body={this.state.overview} imageURL={this.state.imageURL} show={this.state.show} toggle={this.toggle}></ModalPopup>
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