import React, {Component} from 'react'
import PropTypes from "prop-types";

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    searchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    searchSubmit = (e) => {
        e.preventDefault();

        if (this.state.text === '') {
            this
                .props
                .setAlert("Please enter something", "light");
        } else {
            this
                .props
                .searchUsers(this.state.text);
            this.setState({text: ''});
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.searchSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search for a name..."
                        value={this.state.text}
                        onChange={this.searchChange}/>
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                        autoFocus/>
                </form>
                {this.props.showClear && (
                    <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                )}

            </div>
        )
    }
}

export default Search
