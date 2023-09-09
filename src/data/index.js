const fs = require('fs');

const filePath = './src/data/data.json';


class DataHandle {
    readJSON () {
        try {

            const jsonData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(jsonData);
        }
        catch (err) {
            console.log(err);
        }
    }

        writeJSON(data) {
            try {
                const jsonData = JSON.stringify(data);
                fs.writeFileSync(filePath, jsonData);
            }
            catch (err) {
                console.log(err);
            }
        }
    }

module.exports = new DataHandle();
