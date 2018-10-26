const getBasic = (theme) => ({
    basic:{
        img: {
            margin: 1.5,
        },
        modal: {
            backgroundColor: theme => theme.colors.screen.base,
        },
        footer: {
            backgroundColor: theme => theme.colors.screen.base,
            height: 50,
        },
        header: {
            backgroundColor: theme => theme.colors.screen.base,
            paddingBottom: 6,
        },
    }
    
});

const getBlog = (theme) => ({
    blog:{
        header: {
            paddingHorizontal: 16,
            paddingVertical: 0,
            paddingTop: 16,
        },
        content: {
            padding: 0,
            paddingVertical: 0,
            paddingTop: 12,
        },
        footer: {
            paddingHorizontal: 16,
            paddingTop: 15,
            paddingBottom: 16,
            alignItems: 'center',
        }
    }
});

const getHorizontal = (theme) => ({
    horizontal: {
        container2: {
            flexDirection: 'row',
            height: 110,
          },
        content: {
            flex: 1,
        },
        img: {
            height: null,
            flex: -1,
            width: 120,
        }
    }
    
})
const getArticle=(theme) =>({
    container: {
        borderWidth: 0,
        backgroundColor: 'transparent',
      },
      header: {
        paddingVertical: 0,
        paddingTop: 20,
        paddingBottom: 16,
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme => theme.colors.border.base,
      },
      content: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: theme => theme.colors.border.base,
      },
      footer: {
        paddingHorizontal: 14,
        paddingTop: 15,
        paddingBottom: 16,
        alignItems: 'center',
      },
})
export default getModalStyles = (theme) => ({
    ...getBasic(theme),
    ...getBlog(theme),
    ...getHorizontal(theme),
    ...getArticle(theme)
})