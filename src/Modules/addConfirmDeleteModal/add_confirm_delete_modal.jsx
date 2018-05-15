import { Button, Modal, Header, Icon } from 'semantic-ui-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDeleteModal extends Component {
  constructor( props ) {
    super( props );
    this.handleDeleteButton = this.handleDeleteButton.bind( this );
    this.handleOpen = this.handleOpen.bind( this );
    this.handleClose = this.handleClose.bind( this );
    this.state = {
      modalOpen: false,
    };
  }
  handleOpen() {
    this.setState( {
      modalOpen: true,
    } );
  }
  handleClose() {
    this.setState( {
      modalOpen: false,
    } );
  }
  handleDeleteButton( ) {
    this.props.handleDeleteButton();
    this.handleClose();
  }
  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        dimmer="blurring"
        trigger={
          <Button color="red" inverted animated="vertical" onClick={this.handleOpen}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="trash" />
            </Button.Content>
          </Button>}
      >
        <Header style={{ color: 'white' }}><Icon name="trash" />Are you sure you want to delete this transaction?</Header>
        <Modal.Actions>
          <Button color="grey" inverted onClick={this.handleClose}>
            Back
          </Button>
          <Button color="red" inverted onClick={this.handleDeleteButton}>
            <Icon name="trash" /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

AddDeleteModal.propTypes = {
  handleDeleteButton: PropTypes.func,
};

AddDeleteModal.defaultProps = {
  handleDeleteButton: () => {},
};

export default AddDeleteModal;
