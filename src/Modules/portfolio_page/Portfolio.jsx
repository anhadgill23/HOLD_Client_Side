import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Form, Field, Input, Sidebar } from 'semantic-ui-react';
import PieChart from '../piechart/PieChart.jsx'

class Portfolio extends Component {
  constructor ( props ) {
    super ( props )
    console.log(this.props)
    this.state = {
      currentUserId: this.props.userId,
      data: []
    }
  }
  componentDidMount() {
    fetch("/api/2", {
            // method: ''
            credentials: 'same-origin'
            })
    .then(function(response) {
            console.log('response is', response)
            // console.log(this.state);
            return response.json();
          })
    // .then((datas) => {

    //           let updateData = datas.forEach(function(indiv) {
    //             this.state.data.concat(indiv.remaining)
    //           })
    //           this.setState({ data: updateData });
    //           console.log(datas);
    //           console.log(this.state);
    //            // this.props.history.push(`/portfolio/${data.id}`);
    //            // this.props.handleAuth(true, this.state.id);
    //         })
  }
  render() {
    const { currentUserId } = this.state.currentUserId
    return (
      <div>
      <Header>
        Hello, user! {currentUserId}
      </Header>
      <PieChart />
      </div>
    )
  }
}

export default Portfolio;