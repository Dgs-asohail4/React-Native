import { StyleSheet } from 'react-native';
import {isPlatformAndroid} from './shared';

const TEXT_HEIGHT = 22;

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "transparent"
    },
    btnText: {
        marginTop: -4,
        fontSize: 24,
        backgroundColor: "transparent"
    },
    textContainer: {
        position: "absolute",
        paddingVertical: isPlatformAndroid ? 2 : 3,
        paddingHorizontal: 8,
        borderRadius: 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#eee",
        backgroundColor: "white",
        height: TEXT_HEIGHT
      },
    text: {
        flex: 1,
        fontSize: 12,
        color: "#444"
    }

});

export default styles;