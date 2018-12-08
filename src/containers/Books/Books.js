import React, { Component } from 'react';
import Aux from '../../hoc/_Aux/_Aux';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-books';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Book from './Book'
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'grid',
    },
});

class Books extends Component {

    state = {
        books: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getBooks()
    }

    getBooks() {
        axios.get('data/bookslist.json')
            .then(response => {
                console.log(response.data.data.GoodreadsResponse.search.results.work)
                this.setState({ books: response.data.data.GoodreadsResponse.search.results.work });
            })
            .catch(error => {
                // this.setState( { error: true } );
            });
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value })
        } else {
            this.setState({ searchString: '' })
        }
        this.getCourses()
    }

    render() {
        return (
            <div style={{overflow:'hidden' }}>
                {this.state.books ? (
                    <Grid container spacing={24} style={{ padding: 24}}>
                        {this.state.books.map(currentBook => (
                            <Grid key={currentBook.id} item xs={6} md={3} sm={4} lg={3} xl={2}>
                                <Book book={currentBook} />
                            </Grid>
                        ))}
                    </Grid>
                ) : "No books found"}
            </div>
        )
    }

}

Books.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Books);