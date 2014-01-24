App.IndexModule = function() {
  this.el = $('#index-view');

  this.init();
  this.show();
};

App.IndexModule.prototype.show = function() {
  this.el.show();
  this.refresh();
};

App.IndexModule.prototype.hide = function() {
  var self = this;
  App.Util.animate(this.el, 'bounceOut', function() {
    self.el.hide();
  });
};

App.IndexModule.prototype.init = function() {
  var self = this;
  this.emailDom = this.el.find('.email');
  this.avatarDom = this.el.find('.avatar');
  this.bid = this.el.find('.main .bid');
  this.publish = this.el.find('.main .publish');

  this.logoutDom = this.el.find('.logout');
  this.logoutDom.on('click', function() {
    App.Layout.confirmPop('conform logout', 'logout', 'cancel', function() {
      App.Storage.clear('user');
      if(App.loginViewModule) {
        App.loginViewModule.show();
      } else {
        App.loginViewModule = new App.LoginModule();
      }
      self.hide();
    });
  });

  this.refresh();
};

App.IndexModule.prototype.refresh = function() {
  this.user = App.Storage.getJson('user');
  this.emailDom.html(this.user.email); 
  this.avatarDom.attr('src', this.user.avatar);


};