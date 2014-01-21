App.LoginModule = function() {
  this.el = $('#login-view');
  this.el.show();
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
  this.loginEmailInputBox = this.loginBox.find('.email-box');
  this.loginPasswordInputBox = this.loginBox.find('.password-box');
  this.loginEmailInput = this.loginBox.find('.email-input');
  this.loginPasswordInput = this.loginBox.find('.password-input');
  this.loginBtn = this.loginBox.find('.login-btn');
  var self = this;
  this.loginEmailInput.on('keyup', function() {
    var email = self.loginEmailInput.val();
    if(App.Util.checkEmail(email)) {
      App.Util.avatar(email, function(avatar) {
        self.avatar.attr('src', avatar);
      });
    }
  });

  this.loginBtn.on('click', function() {
    var email = self.loginEmailInput.val();
    var password = self.loginPasswordInput.val();
    if(!App.Util.checkEmail(email)) {
      App.Util.animate(self.loginEmailInputBox, 'shake', function() {
        self.loginEmailInput.focus();
      });
      return;
    }
    if(!App.Util.checkPassword(password)) {
      App.Util.animate(self.loginPasswordInputBox, 'shake', function() {
        self.loginPasswordInput.focus();
      });
      return;
    }
    ParseUtil.signin(email, password, function(user) {
      App.Storage.setJson('user', {'email': email, 'password': password});
      App.Layout.alert('登录成功!');
      App.Util.animate(self.el, 'bounceOut', function() {
        self.el.hide();
        App.indexModule = new App.IndexModule();
      });
    }, function(error) {
      App.Layout.alert(error.message);
    });
  });
};

App.LoginModule.prototype.initRegister = function() {
  this.registerEmailBox = this.registerBox.find('.email-box');
  this.registerPasswordBox = this.registerBox.find('.password-box');
  this.registerEmailInput = this.registerBox.find('.email-input');
  this.registerPasswordInput = this.registerBox.find('.password-input');
  this.registerBtn = this.registerBox.find('.register-btn');
  var self = this;
  this.registerEmailInput.on('keyup', function() {
    var email = self.registerEmailInput.val();
    if(App.Util.checkEmail(email)) {
      App.Util.avatar(email, function(avatar) {
        self.avatar.attr('src', avatar);
      });
    }
  });


  this.registerBtn.on('click', function() {
    var email = self.registerEmailInput.val();
    var password = self.registerPasswordInput.val();
    if(!App.Util.checkEmail(email)) {
      App.Util.animate(self.registerEmailBox, 'shake', function() {
        self.registerEmailInput.focus();
      });
      return;
    }
    if(!App.Util.checkPassword(password)) {
      App.Util.animate(self.registerPasswordBox, 'shake', function() {
        self.registerPasswordInput.focus();
      });
      return;
    }
    ParseUtil.signup(email, password, function(user) {
      App.Storage.setJson('user', {'email': email, 'password': password});
      App.Layout.alert(user.get('username') + '注册成功');
      App.Util.animate(self.el, 'bounceOut', function() {
        self.el.hide();
        App.indexView = new App.IndexModule();
      });
    }, function(error) {
      if(error.code == 202) {
        App.Layout.alert('此邮箱已被注册!');
        self.registerEmailInput.focus();
      } else {
        App.Layout.alert(error.message);
      }
    });
  });
};