App.LoginModule = function() {
  this.el = $('#login-view');
  this.init();
};

App.LoginModule.prototype.init = function() {
  this.avatar = this.el.find('.avatar');
  this.loginBox = this.el.find('.login-box');
  this.registerBox = this.el.find('.register-box');
  this.box = this.el.find('.login-register-box');

  this.loginLink = this.el.find('.login-link');
  this.registerLink = this.el.find('.register-link');
  var self = this;
  this.loginLink.on('click', function() {
    self.box.addClass('login');
    self.box.removeClass('register');
  });
  this.registerLink.on('click', function() {
    self.box.removeClass('login');
    self.box.addClass('register');
  });

  this.initLogin();
  this.initRegister();
};

App.LoginModule.prototype.initLogin = function() {
  this.loginEmailInput = this.loginBox.find('.email-input');
  var self = this;
  this.loginEmailInput.on('keyup', function() {
    var email = self.loginEmailInput.val();
    if(App.Util.checkEmail(email)) {
      App.Util.avatar(email, function(avatar) {
        self.avatar.attr('src', avatar);
      });
    }
  });
};

App.LoginModule.prototype.initRegister = function() {

};