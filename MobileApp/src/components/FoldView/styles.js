import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    base: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    face: {
        backfaceVisibility: 'hidden',
        backgroundColor: 'transparent',
        position: 'absolute',
    },
});

export default styles;