var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function() {
        /*return `mongodb://${configValues.uname}:${configValues.pwd}
        @ds151202.mlab.com:51202/nodetodo`; */
        return "mongodb://" + configValues.uname + ":" +
        configValues.pwd + "@ds151202.mlab.com:51202/nodetodo";
        
    }
}