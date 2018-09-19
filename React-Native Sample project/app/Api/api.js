const url = "http://192.168.137.1:8080/api";


function getVersion(){
    return fetch(url)
}

export default api = {
    getVersions : getVersion
}