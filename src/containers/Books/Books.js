import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-books';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Book from './Book'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    container: {
        display: 'grid',
    },
});

class Books extends React.Component {

    state = {
        books: [],
        prevSearch: "",
        errorMessage: "",
        loading : true
    }

    constructor(props) {
        super(props);
        this.state.prevSearch = this.props.searchString
        this.getBooks()
    }

    getBooks() {
        
        axios.post('/api/books/search', {
            search: this.props.searchString
        })
            .then(response => {
                this.setState({ loading: false });
                if (response.data.data.GoodreadsResponse.search['total-results'] > 0) {
                    this.setState({ books: response.data.data.GoodreadsResponse.search.results.work });
                } else {
                    this.setState({ books: [] });
                    this.setState({ errorMessage: 'No books found for selected search!' });
                }

            })
            .catch(error => {
                this.setState({ loading: false });
                this.setState({ errorMessage: 'Something went wrong please try agian later' });
            });
    }

    render() {
        if (this.props.searchString.toLowerCase() !== this.state.prevSearch.toLowerCase()) {
            this.setState({ loading: true });
            this.setState({ books: [] });
            this.setState({ prevSearch: this.props.searchString });
            this.getBooks();
        }

        return (
            <div style={{ overflow: 'hidden' }}>
                <Divider className="mt20 mb20" />
                <span className="pd10"><b>Search result books for : </b> {this.props.searchString}</span>
                <Divider className="mt20" />
                {this.state.books.length > 0 ? (
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {this.state.books.map(currentBook => (
                            <Grid key={currentBook.id} item xs={6} md={3} sm={4} lg={3} xl={2}>
                                <Book book={currentBook} />
                            </Grid>
                        ))}
                    </Grid>
                ) :
                    <div className="mt20">
                        <div className="errorMessage"><b>{this.state.errorMessage}</b></div>
                    </div>
                }

               {this.state.loading ? (<Spinner />) :''}
               <Divider className="mt20 mb20" />
            </div>
        )
    }

}

Books.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func
};

export default withStyles(styles)(Books);