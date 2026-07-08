const api_base = 'https://pcc-api.openfun.app';
const api_token = '__PCC_TOKEN__';

if (api_token) {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + api_token);
        }
    });
}
