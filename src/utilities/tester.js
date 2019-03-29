var api_calls = require('./api_calls');

console.log("hello");

var post_body_user = {
	"EmailAddress": "travis@gmail.com",
	"Age": 25,
	"PoliticalOrientation": "Democratic",
	"FirstName": "Ivan",
	"LastName": "IT",
	"ZipCode": 98025,
	"Race": "Pacific Islander"
};

var post_body_survey_response = {
	"EmailAddress": "ivan@gmail.com",
	"Survey": 'surveyId',
	"Answers": {
	"Q_1": "Yes",
	"Q_2": "Yes",
	"Q_3": "Yes",
	"Q_4": "Yes",
	"Q_5": "Yes",
	"Q_6": "Yes",
	"Q_7": "Yes",
	"Q_8": "Yes",
	"Q_9": "Yes",
	"Q_10": "Yes"
	}
};

console.log("testing posting user");
api_calls.post_user(post_body_user); // expect to see console.log("post succeeded")

console.log("testing posting survey response");
api_calls.post_survey_response(post_body_survey_response);
