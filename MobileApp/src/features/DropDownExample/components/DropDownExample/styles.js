import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      row: {
        flex: 1,
        flexDirection: 'row',
      },
      cell: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
      },
      scrollView: {
        flex: 1,
      },
      contentContainer: {
        height: 500,
        paddingVertical: 100,
        paddingLeft: 20,
      },
      textButton: {
        color: 'deepskyblue',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'deepskyblue',
        margin: 2,
      },

      dropdown_1: {
        flex: 1,
        top: 32,
        left: 8,
      },
      dropdown_2: {
        alignSelf: 'flex-end',
        width: 150,
        marginTop: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
      },
      dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      dropdown_2_dropdown: {
        width: 150,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
      },
      dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
      },
      dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
      },
      dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
      },
      dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
      },
      dropdown_3: {
        width: 150,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
      },
      dropdown_3_dropdownTextStyle: {
        backgroundColor: '#000',
        color: '#fff'
      },
      dropdown_3_dropdownTextHighlightStyle: {
        backgroundColor: '#fff',
        color: '#000'
      },
      dropdown_4: {
        margin: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
      },
      dropdown_4_dropdown: {
        width: 100,
      },
      dropdown_5: {
        margin: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
      },
      dropdown_6: {
        flex: 1,
        left: 8,
      },
      dropdown_6_image: {
        width: 40,
        height: 40,
      },
});

export default styles;