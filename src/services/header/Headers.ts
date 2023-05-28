export function addCorsHeaders() {
    const token = localStorage.getItem("jwt");
    let auth: string = '';
    if (token) {
        auth = 'Bearer ' + token.replace(/['"]+/g, '');
    }
    return {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': auth
    };
}