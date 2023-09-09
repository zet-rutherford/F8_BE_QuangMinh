const fs = require('fs');

class Base {
    render = (req, res, path, data = {}) => {

        fs.readFile(`./src/views/${path}.html`, 'utf8', (err, viewsContent) => {
            if (err) {
                console.error(err);
                return;
            }

            const result = viewsContent.match(/{.+?}/g);
            if (result) {
                for (let i = 0; i < result.length; i++) {
                    const item = result[i];
                    const itemKey = item.replace("{", "").replace("}", "");

                    viewsContent = viewsContent.replace(item, data[itemKey] ?? "");
                }
            }

            res.end(viewsContent);
        });
    }
}

module.exports =  Base;
