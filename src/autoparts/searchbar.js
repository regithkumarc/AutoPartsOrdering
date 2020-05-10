import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import './searchbar.css'

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            searchString : ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value});
        console.log("Search String : " ,this.state.searchString)
        //this.props.getSearchData(this.state.searchString);
    }

    render () {
        return (
            <div>
                <Form className="searchbar-form">  
                    <FormGroup className="mb-3">
                        <Input type="text" placeholder="Search Parts" name="searchParts"
                         id="searchParts"
                         onClick = {this.props.searchHandler} onChange = {this.props.handleSearch}/>
                    </FormGroup>  
                </Form>
            </div>
        )
    }
}
export default SearchBar;