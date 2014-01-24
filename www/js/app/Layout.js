/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var App = {};
App.Layout = {};

App.Layout.init = function() {
  if(!window.device) {
    $(document).ready(App.Layout.deviceready);
  } else {
    document.addEventListener('deviceready', App.Layout.deviceready, false);
  }
};

App.Layout.deviceready = function() {
  ParseUtil.init();
  App.Layout.confirmInit();
  App.Layout.autoLogin();
};

App.Layout.autoLogin = function() {
  var user = App.Storage.getJson('user');
  if(user && user.email) {
    // ParseUtil.signin(user.email, user.password, function(user) {
    //   App.Layout.alert('自动登录成功!');
    //   App.Util.animate($('#login-view'), 'bounceOut', function() {
    //     $('#login-view').hide();
    //     App.indexModule = new App.IndexModule();
    //   });
    // }, function(error) {
    //   App.LoginModule = new App.LoginModule();
    // });
    if(!App.indexModule) {
      App.indexViewModule = new App.IndexModule();
    } else {
      App.IndexViewModule.show();
    }
  } else {
    if(!App.LoginViewModule) {
      App.LoginViewModule = new App.LoginModule();
    } else {
      App.LoginViewModule.show();
    }
  }
};

App.Layout.alert = function(msg) {
  var el = $('#alert');
  el.html(msg);
  el.show();
  el.addClass('animated fadeIn');
  el.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
    setTimeout(function() {
      el.removeClass('fadeIn')
      el.addClass('fadeOut');
      el.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
        el.removeClass('animated fadeOut');
        el.hide();
      });
    }, 1000);
  });
};

App.Layout.confirmInit = function() {
  App.Layout.confirm = {};
  App.Layout.confirm.el = $('#confirm');
  App.Layout.confirm.title = $('#confirm .title');
  App.Layout.confirm.okLabel = $('#confirm .ok-label');
  App.Layout.confirm.cancelLabel = $('#confirm .cancel-label');
  App.Layout.confirm.okLabel.on('click', function() {
    App.Layout.confirm.el.addClass('animated bounceOut');
    App.Layout.confirm.el.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
      App.Layout.confirm.el.removeClass('animated bounceOut');
      App.Layout.confirm.el.hide();
      if(App.Layout.confirm.okCallback) {
        App.Layout.confirm.okCallback();
      }
    });
  });
  App.Layout.confirm.cancelLabel.on('click', function() {
    App.Layout.confirm.el.addClass('animated bounceOut');
    App.Layout.confirm.el.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
      App.Layout.confirm.el.removeClass('animated bounceOut');
      App.Layout.confirm.el.hide();
      if(App.Layout.confirm.cancelCallback) {
        App.Layout.confirm.cancelCallback();
      }
    });
  });
};

App.Layout.confirmPop = function(title, okLabel, cancelLabel, okCallback, cancelCallback) {
  App.Layout.confirm.title.html(title || 'CONFIRM');
  App.Layout.confirm.okLabel.html(okLabel || 'OK');
  App.Layout.confirm.cancelLabel.html(cancelLabel || 'CANCEL');
  App.Layout.confirm.okCallback = okCallback;
  App.Layout.confirm.cancelCallback = cancelCallback;
  App.Layout.confirm.el.show();
  App.Layout.confirm.el.addClass('animated bounceIn');
  App.Layout.confirm.el.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function() {
    App.Layout.confirm.el.removeClass('animated bounceIn');
  });
};