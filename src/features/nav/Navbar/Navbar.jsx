import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { SignedoutMenu } from "../Menus/SignedoutMenu";
import { SignedinMenu } from "../Menus/SignedinMenu";

class Navbar extends Component {
  state = {
    authenticated: false
  };

  handleSignin = () => this.setState({ authenticated: true });

  handleSignout = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  }
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item exact as={NavLink} to='/events' name='Events' />
          <Menu.Item as={NavLink} to='/people' name='People' />
          <Menu.Item as={NavLink} to='/test' name='Test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? (
            <SignedinMenu signOut={this.handleSignout} />
          ) : (
            <SignedoutMenu signIn={this.handleSignin} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
