App.Util = {};
App.Util.checkEmail = function(email) {
  var rex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rex.test(email);
};

App.Util.checkPassword = function(password) {
  var l = $.trim(password).length
  return (l > 3) && (l < 20);
};

App.Util.avatar = function(email, callback) {
  var url = 'http://www.gravatar.com/avatar/' + md5(email) + '?s=200' + '&d=404';
  var img = $('<img />');
  img.on('onload', function(e) {
    callback(url);
  });
  img.attr('src', url);
};

App.Util.animate = function(el, animate, callback) {
  $(el).addClass('animated ' + animate);
  $(el).one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
    $(el).removeClass('animated ' + animate);
    if(callback) {
      callback();
    }
  });
};