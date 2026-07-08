const api_base = 'https://pcc-api.openfun.app';
const api_token = 'ofk_c925948ad0e7a5c6ed52db349bee0bf19ae4125c5c9aab87b4fec65d3e7747a3';

$(function() {
    if (api_token) {
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + api_token);
            }
        });
    }
});
