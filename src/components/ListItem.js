import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { title, description, id } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={styles.title}>{title}</Text>
          </CardItem>
          {
            this.props.expanded && (
              <CardItem>
                <Text>{description}</Text>
              </CardItem>
            )
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {
    expanded,
  };
};
const mapDispatchToProps = {
  selectLibrary: actions.selectLibrary,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
