'use strict';
var fs = require('fs');
class FileHandler {

    save(content, directory, name) {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(directory)){
                fs.mkdirSync(directory);
                this.emitCommand(`Created ${directory} folder`);
            }
            let fullPath = directory + "/" + name;
            fs.writeFile(fullPath, content, (err) => {
                if(err) {
                    let errorMsg = `Writing config file went wrong ${err}`;
                    reject(errorMsg);
                } else {
                    resolve(fullPath);
                }
            });
        });
    }
}

module.exports = new FileHandler();
