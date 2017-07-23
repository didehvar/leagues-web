import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';
import AddIcon from 'material-ui-icons/Add';
import PersonIcon from 'material-ui-icons/Person';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import { withRouter } from 'react-router-dom';

const styleSheet = createStyleSheet('MainNavigation', theme => ({
  root: {
    'border-top': `1px solid ${theme.palette.common.faintBlack}`,
    width: '100%'
  },
  button: {
    'min-width': 0
  }
}));

class MainNavigation extends Component {
  links = ['/', '/search', '/create', '/friends', '/more'];

  constructor(props) {
    super(props);

    const value = this.links.indexOf(
      props.location.pathname.split('/').slice(0, 2).join('/')
    );
    this.state = { value: value > -1 ? value : 0 };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.links[value]);
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <BottomNavigation value={value} onChange={this.handleChange}>
          <BottomNavigationButton
            className={classes.button}
            label="Feed"
            icon={<MenuIcon />}
          />
          <BottomNavigationButton
            className={classes.button}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationButton
            className={classes.button}
            label="Create"
            icon={<AddIcon />}
          />
          <BottomNavigationButton
            className={classes.button}
            label="Friends"
            icon={<PersonIcon />}
          />
          <BottomNavigationButton
            className={classes.button}
            label="More"
            icon={<MoreHorizIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styleSheet)(MainNavigation));
