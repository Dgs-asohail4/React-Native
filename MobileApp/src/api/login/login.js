export function doLogin(credentials, type) {
    var headers = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return {
        type: type,
        client: 'auth',
        payload: {
            request: {
                url: 'token',
                method: 'POST',
                async: true,
                headers: headers,
                withCredentials : true,
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    grant_type:"password",
                    username: credentials.username,
                    password: credentials.password
                }
            }
        }
    }
}

export function requireLogin(type){
    return {
        type: type,
        client: 'auth',
        payload: {
            request: {
                url: 'api/v1/user/claims',
                method: 'GET'
            }
        }
    }
}