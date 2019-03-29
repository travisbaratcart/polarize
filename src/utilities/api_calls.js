var rp = require('request-promise');

var post_api = function (post_uri, post_body) {
	var options = {
	    method: 'POST',
	    uri: post_uri,
	    body: post_body,
	    json: true // Automatically stringifies the body to JSON	
	};
	rp(options)
	    .then(function (parsedBody) {
	        console.log('post succeeded');
	    })
	    .catch(function (err) {
	        console.log(err);
	    });
};
module.exports = {
	post_user: function(post_body) {
		var uri = "https://prod-03.westcentralus.logic.azure.com:443/workflows/0dd2cbfd39c641c0bd0d7b246959059a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1m8e-TqGxYqezc0eEhSbjjv6tjUR3wPmvXUKPTe97KQ";
		post_api(uri, post_body);
	},

	post_survey_response: function(post_body) {
		var uri = "https://prod-27.westcentralus.logic.azure.com:443/workflows/98dd161ba49d4de59d0d708fa3fd38bc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8tfYMmn8mvf8Frmi8BD-ecoC4D1-c2bQU3uHt63RwC0";
		post_api(uri, post_body);
	}
}