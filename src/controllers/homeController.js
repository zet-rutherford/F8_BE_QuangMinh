
const Base = require('../core/Base');
const DataHandle = require('../data/index');

class HomeController extends Base {
    index = (req, res) => {
        this.render(req, res, 'homePage');
    }

    verify = (req, res) => {
        let jsonData = DataHandle.readJSON();
        const method = req.method;

        if (method === 'POST') {
            req.on('data', chunk => {
                const body = chunk.toString();
                if (body) {
                    const postData = new URLSearchParams(body);
                    const phoneNumber = postData.get('phoneNumber');

                    const errors = {};
                    const validationConditions = [
                        {
                            condition: !phoneNumber,
                            errorMessage: 'Phone number is required'
                        },
                        {
                            condition: phoneNumber.trim().length < 9 || phoneNumber.trim().length > 11,
                            errorMessage: 'Phone number must be 9-11 characters'
                        },
                        {
                            condition: isNaN(phoneNumber),
                            errorMessage: 'Phone number must be a number'
                        },
                        {
                            condition: !phoneNumber.trim().startsWith('0'),
                            errorMessage: 'There should be a zero at the beginning'
                        },
                        {
                            condition: phoneNumber.trim().startsWith('00'),
                            errorMessage: `Can't have zero in 2nd place`
                        },
                    ];

                    let hasValidationError = false;

                    for (const condition of validationConditions) {
                        if (condition.condition) {
                            errors.phoneNumber = condition.errorMessage;
                            hasValidationError = true;
                            break;
                        }
                    }

                    if (!hasValidationError) {
                        if (jsonData.active.includes(phoneNumber)) {
                            res.writeHead(302, { 'Location': `/success/${phoneNumber}` });
                            res.end();
                        } else {
                            jsonData.focus.phone = phoneNumber;
                            DataHandle.writeJSON(jsonData);
                            res.writeHead(302, { 'Location': `/otp?phoneNumber=${phoneNumber}` });
                            res.end();
                        }
                    }

                    this.render(req, res, 'homePage', {
                        "error.phoneNumber": errors.phoneNumber || "",
                        "phoneNumber": phoneNumber
                    });
                }
            });
        }
    }
}

module.exports = new HomeController();
