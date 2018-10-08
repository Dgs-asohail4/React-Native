import defaultClient from './default'
import authClient from './auth'

const clients = {
    default: {
        client : defaultClient
    },
    auth:{
        client : authClient
    }
}

export default clients