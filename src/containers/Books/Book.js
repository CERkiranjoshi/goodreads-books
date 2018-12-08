import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Aux from '../../hoc/_Aux/_Aux';
const Book = (props) => {
    return (
        <Aux>
            {props.book ? (
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
                        {/* <CardActions>
                            <Button size="small" color="primary" href={props.book.best_book.id} target="_blank">
                                Go To Book
                        </Button>
                        </CardActions> */}
                    </CardActionArea>
                </Card>
            ) : null}
        </Aux>
    )
}
export default Book