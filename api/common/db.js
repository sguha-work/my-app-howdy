(function DataBase() {
    var instance;
    
    function createInstance() {
        return this;
    }
    
    this.createDB = function(databaseName) {
        return new MyDB(databaseName);
    }
    
    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();