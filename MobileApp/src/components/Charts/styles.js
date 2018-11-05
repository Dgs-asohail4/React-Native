import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            legendContainer: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              },
            legendItem: {
                flexDirection: 'row',
                alignItems: 'center',
            },
            itemBadge: {
                width: 10,
                height: 10,
                borderRadius: 5,
                marginRight: 5,
            },
            chartContainer: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 10,
              },
        })
    }
};