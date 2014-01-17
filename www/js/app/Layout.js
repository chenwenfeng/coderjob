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
  // ParseUtil.add('test', {a:'d'}, function(o) {
  //   console.log(o.get('a'));
  // }, function(error) {
  //   console.log(error);
  // });

  // ParseUtil.queryById('test', 'U4ubCj4M2d', function(o) {
  //   console.log(o.get('a'));
  // }, function(error) {
  //   console.log(error);
  // });

  ParseUtil.fetch('test', function(o) {
    console.log(o);
  }, function(error) {
    console.log(error);
  });
};
