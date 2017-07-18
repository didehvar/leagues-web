import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";
import MenuIcon from "material-ui-icons/Menu";
import SearchIcon from "material-ui-icons/Search";
import AddIcon from "material-ui-icons/Add";
import PersonIcon from "material-ui-icons/Person";
import MoreHorizIcon from "material-ui-icons/MoreHoriz";

const styleSheet = createStyleSheet("MainNavigation", theme => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    "border-top": `1px solid ${theme.palette.common.faintBlack}`
  }
}));

class MainNavigation extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <BottomNavigation value={value} onChange={this.handleChange}>
          <BottomNavigationButton label="Menu" icon={<MenuIcon />} />
          <BottomNavigationButton label="Search" icon={<SearchIcon />} />
          <BottomNavigationButton label="Add" icon={<AddIcon />} />
          <BottomNavigationButton label="Friends" icon={<PersonIcon />} />
          <BottomNavigationButton label="More" icon={<MoreHorizIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

MainNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(MainNavigation);
