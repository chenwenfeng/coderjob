ParseUtil = {};
ParseUtil.init = function() {
  Parse.initialize("N880URVyR5GmC6yWDacbpYvtOmWnCLiR4g3xshJv", "3rARWgY912cRuInyqWzyURCGHFa4axO6vfuozhLw");
};

ParseUtil.add = function(table, json, successCallback, faildCallback) {
  var o = new (Parse.Object.extend(table))();
  o.save(json, {
    success: function(object) {
      successCallback(object);
    },
    error: function(object, error) {
      faildCallback(error);
    }
  })
};

ParseUtil.queryById = function(table, id, successCallback, faildCallback) {
  var Table = Parse.Object.extend(table);
  var query = new Parse.Query(Table);
  query.get(id, {
    success: function(object) {
      successCallback(object);
    },
    error: function(object, error) {
      faildCallback(error);
    }
  });
};

ParseUtil.fetch = function(table, successCallback, faildCallback) {
  var Table = Parse.Object.extend(table);
  var table = new Table();
  table.fetch({
    success: function(object) {
      successCallback(object);
    },
    error: function(object, error) {
      faildCallback(error);
    }
  });
};