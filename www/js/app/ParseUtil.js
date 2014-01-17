ParseUtil = {};
ParseUtil.init = function() {
  Parse.initialize("kBYewlO15B2LvtQ8neK2cVGInBVCZukG1rpWy1uP", "UHfuUsHKFs99TO8OJOtWjmdA2caGmHHBWi7twklU");
};

ParseUtil.save = function() {
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
  });
};