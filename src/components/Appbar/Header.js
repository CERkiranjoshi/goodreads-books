import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../Logo/Logo';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 400,
        },
    },
});

class PrimarySearchAppBar extends React.Component {

    state = {
        searchString: '',
        showHeaderSearch: true
    }
    componentDidMount() {
        // Note : need some more stuff to handle as search will not work on book details page
        // const tpath = window.location.pathname
        // if (tpath.indexOf("bookdetails") >= 0) {
        //     this.setState({ showHeaderSearch: false })
        // } else {
        //     this.setState({ showHeaderSearch: true })
        // }
    }

    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({ searchString: event.target.value.trim() })
        } else {
            this.setState({ searchString: '' })
        }
    }

    getContent = (event) => {
        if (this.state.searchString.length > 3) {
            this.props.callback(event.target.value);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <div className="Logo">
                            <Logo />
                        </div>
                        {this.state.showHeaderSearch ? (
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search for Books…"
                                    onChange={this.onSearchInputChange}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.getContent(event)
                                        }
                                    }}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                        ) : ''
                        }
                        <div className={classes.grow} />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    callback: PropTypes.func
};

export default withStyles(styles)(PrimarySearchAppBar);
