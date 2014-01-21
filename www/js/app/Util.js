App.Util = {};
App.Util.checkEmail = function(email) {
  var rex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rex.test(email);
};

App.Util.avatar = function(email, callback) {
  var url = 'http://www.gravatar.com/avatar/' + md5(email) + '?s=200' + '&d=404';
  var img = $('img');
  img.on('onload', function() {
    callback(url);
  });
  img.attr('src', url);
};