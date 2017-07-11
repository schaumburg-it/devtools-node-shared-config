var path = require('path');
var findParentDir = require('find-parent-dir');

function findSharedConfig(filename)
{
    console.log("Starting in " + __dirname);

    var dir = findParentDir.sync(__dirname, filename);
    console.log("dir:  " + dir);

    var file = path.join(dir, filename);
    console.log("file: " + file);

    if (!!dir)
    {
        var conf = require(file);
        console.log("conf: " + JSON.stringify(conf));
        return conf;
    }
}

module.exports = findSharedConfig;//('shared-config.js');

