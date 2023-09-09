
const Base = require('../core/Base');
const DataHandle = require('../data/index');


class VerifyOTPController extends Base {
    index = (req, res) => {
        let jsonData = DataHandle.readJSON();
        const phoneNumber = jsonData.focus.phone;
        this.render(req, res, 'verifyPage', {
            "phoneNumber": phoneNumber ?? "",
        });
    }

    verify = (req, res) => {
        let jsonData = DataHandle.readJSON();
        const method = req.method;

        if (method === 'POST') {
            req.on('data', chunk => {
                const body = chunk.toString();
                const errors = {};
                let phoneNumber = jsonData.focus.phone;

                if (body) {
                    const postData = new URLSearchParams(body);
                    const otp = postData.get('otp');

                    if (!otp) {
                        errors.otp = 'OTP is required';
                    } else if (!jsonData.otp.includes(otp)) {
                        errors.otp = 'OTP is invalid';
                    } else {
                        jsonData.active.push(phoneNumber);
                        DataHandle.writeJSON(jsonData);
                        res.writeHead(302, { 'Location': `/success/${phoneNumber}` });
                        res.end();
                    }
                }

                this.render(req, res, 'verifyPage', {
                    "error.otp": errors.otp ?? "",
                    "phoneNumber": phoneNumber ?? ""
                })
            });

        }
    }


}

module.exports = new VerifyOTPController();


