var _ = {
   map: function(arr, callback) {
     var returnArray = [];
     for (var i = 0; i < arr.length; i++) {
       returnArray.push(callback(arr[i]));
     }
     return returnArray;
   },

   reduce: function(arr, callback, memo) {
     var result = memo;
     if (memo == undefined) {
       result = 0;
     }
     for (var i = 0; i < arr.length; i++) {
       result = callback(arr[i], result);
     }
     return result;
   },

   find: function(arr, callback) {
     for (var i = 0; i < arr.length; i++) {
       if (callback(arr[i])) {
         return arr[i];
       }
     }
   },

   filter: function(arr, callback) {
     var returnArray = [];
     for (var i = 0; i < arr.length; i++) {
       var result = callback(arr[i]);
       if (result) {
         returnArray.push(arr[i]);
       }
     }
     return returnArray;
   },

   reject: function(arr, callback) {
     var returnArray = [];
     for (var i = 0; i < arr.length; i++) {
       var result = callback(arr[i]);
       if (!result) {
         returnArray.push(arr[i]);
       }
     }
     return returnArray;
   }
};

var found = _.find([1,2,3,4,5,6], function(num){ return num % 2 == 0;});
console.log(found);
