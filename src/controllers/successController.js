const fs = require('fs');

const Base = require('../core/Base');
const DataHandle = require('../data/index');

class SuccessController extends Base {
    index =(req, res) => {
       
        let jsonData = DataHandle.readJSON();

        const phoneNumber = jsonData.focus.phone;
        this.render(req, res, 'successPage', {
            "phoneNumber": phoneNumber ?? "",
        });

    }

}

module.exports = new SuccessController();
