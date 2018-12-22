import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Aux from '../../hoc/_Aux/_Aux';


const Book = (props) => {
    return (
        <Aux>
            {props.book ? (
                <Link className='cardlink' to={'/booksdetails/' + props.book.best_book.id}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{ height: 110, paddingTop: '10%', backgroundSize: 'auto' }}
                                image={props.book.best_book.image_url}
                                title={props.book.best_book.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.book.best_book.author.name}
                                </Typography>
                                <Typography component="p">
                                    {props.book.best_book.title} <br />
                                    <b>Ratings</b> : {props.book.average_rating} , <b>Review</b> : {props.book.text_reviews_count}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ) : null}
        </Aux>
    )
}
export default Book