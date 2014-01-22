ParseUtil = {};
ParseUtil.init = function() {
  Parse.initialize("N880URVyR5GmC6yWDacbpYvtOmWnCLiR4g3xshJv", "3rARWgY912cRuInyqWzyURCGHFa4axO6vfuozhLw");
};

ParseUtil.add = function(table, json, successCallback, faildCallback) {
  var o = new (Parse.Object.extend(table))();
  o.save(json, {
    success: function(object) {
      if(successCallback) {
        successCallback(object);
      }
    },
    error: function(object, error) {
      if(faildCallback) {
        faildCallback(error);
      }
    }
  })
};

ParseUtil.queryById = function(table, id, successCallback, faildCallback) {
  var Table = Parse.Object.extend(table);
  var query = new Parse.Query(Table);
  query.get(id, {
    success: function(object) {
      if(successCallback) {
        successCallback(object);
      }
    },
    error: function(object, error) {
      if(faildCallback) {
        faildCallback(error);
      }
    }
  });
};

ParseUtil.fetch = function(table, successCallback, faildCallback) {
  var Table = Parse.Object.extend(table);
  var table = new Table();
  table.fetch({
    success: function(object) {
      if(successCallback) {
        successCallback(object);
      }
    },
    error: function(object, error) {
      if(faildCallback) {
        faildCallback(error);
      }
    }
  });
};

ParseUtil.removeById = function(table, id, successCallback, faildCallback) {
  ParseUtil.queryById(table, id, function(o) {
    o.destroy({
      success: function(object) {
        if(successCallback) {
          successCallback(object);
        }
      },
      error: function(object, error) {
        if(faildCallback) {
          faildCallback(error);
        }
      }
    });
    
  }, function(error) {
    if(faildCallback) {
      faildCallback(error);
    }
  });
};

ParseUtil.query = function(table) {
  var Table = Parse.Object.extend(table);
  return new Parse.Query(Table);
};


ParseUtil.signup = function(email, password, successCallback, faildCallback) {
  var user = new Parse.User();
  user.set('username', email);
  user.set('password', password);
   
  user.signUp(null, {
    success: function(user) {
      successCallback(user);
    },
    error: function(user, error) {
      faildCallback(error);
    }
  });
}

ParseUtil.signin = function(email, password, successCallback, faildCallback) {
  Parse.User.logIn(email, password, {
    success: function(user) {
      successCallback(user);
    },
    error: function(user, error) {
      faildCallback(error);
    }
  });
}