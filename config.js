const api_base = 'https://pcc-api.openfun.app';
const api_token = 'ofk_fd8cdab273cf0556a696f4a3f82a7dc4520a4f7e5bad8f3112442c853e0a346b';

if (api_token) {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + api_token);
        }
    });
}
