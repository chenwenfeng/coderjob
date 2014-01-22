App.Storage = {};
App.Storage.set = function(objName, objValue){
  var sto = window.localStorage;
  if(sto) sto.setItem(objName, objValue);
};

App.Storage.get = function(objName){
  var ret = '';
  var sto = window.localStorage;
  if(sto) ret = sto.getItem(objName);
  return ret;
};

App.Storage.clear = function(objName){
  var sto = window.localStorage;
  if(sto) {
    if(objName) sto.removeItem(objName);
    else sto.clear();
  }
};

App.Storage.setJson = function(objName, json){
  if(json) App.Storage.set(objName, JSON.stringify(json));
};

App.Storage.getJson = function(objName){
  var ret = {};
  var str = App.Storage.get(objName);
  if(str) ret = JSON.parse(str);
  return ret;
};

