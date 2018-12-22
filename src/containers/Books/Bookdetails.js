import React from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-books';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Aux from '../../hoc/_Aux/_Aux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Similarbook from './Similarbook';


class BookDetails extends React.Component {

    state = {
        bookdetails: null,
        errorMessage: "",
        loading: true,
        bookid: null
    }

    componentDidMount() {
        this.getBookDetails();
    }

    componentDidUpdate() {
        this.getBookDetails();
    }


    getBookDetails() {
        if (this.props.match.params.id) {
            if ((!this.state.bookdetails && !this.state.bookid) || (this.state.bookdetails && this.state.bookid != this.props.match.params.id)) {
                    axios.post('/api/books/search/id', {
                        id: this.props.match.params.id
                    })
                    .then(response => {
                        this.setState({ bookid: this.props.match.params.id });
                        if (response.data && response.data.data.GoodreadsResponse.book) {
                            this.setState({ bookdetails: response.data.data.GoodreadsResponse.book });
                        } else {
                            this.setState({ bookdetails: null });
                            this.setState({ errorMessage: 'No details available for this book id :' + this.props.match.params.id });
                        }
                        this.setState({ loading: false });

                    })
                    .catch(error => {
                        this.setState({ bookid: this.props.match.params.id });
                        this.setState({ loading: false });
                        this.setState({ errorMessage: 'Something went wrong please try agian later' });
                    });
            }
        }

        // axios.get('/data/individualbook.json')

    }
    render() {
        const { classes, theme } = this.props;
        return (
            <Aux>

                {this.state.loading ? (<Spinner />
                ) : ''}

                { !this.state.loading && this.state.bookdetails ? (

                    <div>
                        <Divider className="mt20 mb20"></Divider>
                        <Card>
                            <div>
                                <CardContent>
                                    <Typography component="h5" variant="h5">
                                        {this.state.bookdetails.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        By : {this.state.bookdetails.authors.author.name}
                                    </Typography>
                                    <Grid container spacing={24} style={{ padding: 24 }}>
                                        <Grid className='imagecontent' key='image' item xs={12} md={3} sm={3} lg={3} xl={3}>
                                            <img src={this.state.bookdetails.image_url} />
                                            <Typography variant="subtitle1" color="textPrimary">
                                                Source  : <a href={this.state.bookdetails.link} target='_blank'>Good Reads Book Link</a>
                                            </Typography>
                                        </Grid>
                                        <Grid key='content' item xs={12} md={9} sm={9} lg={9} xl={9}>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Publisher</b> : {this.state.bookdetails.publisher}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Published date</b> : {this.state.bookdetails.publication_day} / {this.state.bookdetails.publication_month} / {this.state.bookdetails.publication_year}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Number of pages</b> : {this.state.bookdetails.num_pages}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Average Rating</b> : <b>{this.state.bookdetails.average_rating}</b> by {this.state.bookdetails.ratings_count} User
                                            </Typography>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Reviews</b> : {this.state.bookdetails.text_reviews_count}
                                            </Typography>
                                        </Grid>
                                        <Grid key='description' item xs={12} md={12} sm={12} lg={12} xl={12}>
                                            <Typography variant="subtitle1" color="textPrimary">
                                                <b>Description</b> : <br />
                                                {this.state.bookdetails.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <div style={{ overflow: 'hidden' }}>
                                        <Divider className="mt20 mb20" />
                                        <span className="pd10"><b>Similar books :</b></span>
                                        <Divider className="mt20" />
                                        {this.state.bookdetails.similar_books && this.state.bookdetails.similar_books.book.length > 0 ? (
                                            <Grid container spacing={24} style={{ padding: 24 }}>
                                                {this.state.bookdetails.similar_books.book.map(currentBook =>
                                                    (
                                                        <Grid key={currentBook.id} item xs={6} md={3} sm={4} lg={3} xl={2} >
                                                            <Similarbook book={currentBook} />
                                                        </Grid>
                                                    ))}
                                            </Grid>
                                        ) : 'No related books found'
                                        }
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                ) : 'Books Details Forbidden'

                }
            </Aux>
        )

    }
}

export default BookDetails