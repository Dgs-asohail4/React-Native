/**
 * Example usage of react-native-modal
 * @format
 */

import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "../../../../components/modals";
import Button from '../../../../components/button';

import styles from  './styles'
import { COLOR_PRIMARY } from "../../../../global/theme/default";
export default class Example extends Component {
  state = {
    visibleModal: null
  };

  renderButton = (text, onPress) => (
    <Button
    onPress={onPress}
    text={text}
    color={COLOR_PRIMARY}/>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.renderButton("Default modal", () =>
          this.setState({ visibleModal: 1 })
        )}
        {this.renderButton("Sliding sides", () =>
          this.setState({ visibleModal: 2 })
        )}
        {this.renderButton("A slower modal", () =>
          this.setState({ visibleModal: 3 })
        )}
        {this.renderButton("Fancy modal!", () =>
          this.setState({ visibleModal: 4 })
        )}
        {this.renderButton("Bottom half modal", () =>
          this.setState({ visibleModal: 5 })
        )}
        {this.renderButton("Backdrop close", () =>
          this.setState({ visibleModal: 6 })
        )}
        {this.renderButton("Swipeable modal", () =>
          this.setState({ visibleModal: 7 })
        )}
        {this.renderButton("Scrollable modal", () =>
          this.setState({ visibleModal: 8 })
        )}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 4}
          backdropColor={"red"}
          backdropOpacity={1}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 5}
          style={styles.bottomModal}
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 7}
          onSwipe={() => this.setState({ visibleModal: null })}
          swipeDirection="left"
        >
          {this.renderModalContent()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 8}
          onSwipe={() => this.setState({ visibleModal: null })}
          swipeDirection="down"
          scrollTo={this.handleScrollTo}
          scrollOffset={this.state.scrollOffset}
          scrollOffsetMax={400 - 300} // content height - ScrollView height
          style={styles.bottomModal}
        >
          <View style={styles.scrollableModal}>
            <ScrollView
              ref={ref => (this.scrollViewRef = ref)}
              onScroll={this.handleOnScroll}
              scrollEventThrottle={16}
            >
              <View style={styles.scrollableModalContent1}>
                <Text>Scroll me up</Text>
              </View>
              <View style={styles.scrollableModalContent1}>
                <Text>Scroll me up</Text>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
