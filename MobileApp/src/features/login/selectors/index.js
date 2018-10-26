
// Selectors
export const getTitle = (state) => ({
    title :state.title
});


export const getPayload = (state) => ({
    payload: state.login.payload
});