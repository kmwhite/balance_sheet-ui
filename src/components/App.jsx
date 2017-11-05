/*
    ./client/components/App.jsx
*/
import React from 'react';
import {
    Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react';

export default class App extends React.Component {
  render() {
    return (
      <Container text style={{ marginTop: '2em' }}>
        <Header as='h1'>
          BalanceSheet
        </Header>

        <p>
          Your personal accounting headquarters
        </p>
      </Container>
    );
  }
}
