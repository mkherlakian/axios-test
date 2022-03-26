const axios = require('axios');

(async () => {
const headers = {
Accept: '*/*',
'Content-Type': 'application/json',
'user-agent': 'PostmanRuntime/7.29.0',
'content-length': '26',
'accept-encoding': 'gzip, deflate, br',
'postman-token': '7517c287-b0d5-43fc-8732-295c73ec9d88',
'x-forwarded-for': '150.242.172.86',
'x-forwarded-proto': 'http',
'x-shopify-domain': 'test-nihir.myshopify.com',
'x-hookdeck-event': 'true'
};

  const options = {
	method: 'POST',
	url: "https://events.hookdeck.com/e/src_tajyVgVteYEZQmBumFQgB2bq",
	json: true,
	headers,
	data: {test: 1234}
	};

	return axios(options);

})().then(
  (r) => console.log(r.data)
).catch(
  (e) => console.error(e)
);
