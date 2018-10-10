import { StyleSheet } from 'react-native';
const BASE_PADDING = 10;
import {WINDOW_WIDTH} from './index'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING,
      },
      closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
      },
      customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
      },
      col: {
        flex: 1,
      },
      square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      squareFirst: {
        backgroundColor: '#C0392B',
      },
      squareSecond: {
        backgroundColor: '#019875',
      },
      squareText: {
        textAlign: 'center',
        color: 'white',
      },
      carousel: {
        height: WINDOW_WIDTH - BASE_PADDING * 2,
        width: WINDOW_WIDTH - BASE_PADDING * 2,
        backgroundColor: 'white',
      },
      contain: {
        flex: 1,
        height: 150,
      },
      text: {
        marginVertical: BASE_PADDING * 2,
      },
});

export default styles;