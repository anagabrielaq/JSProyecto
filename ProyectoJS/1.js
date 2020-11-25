function get() {
     $.get("https://www.etnassoft.com/api/v1/get/?id", function (data) {
         console.log(data);
       });
     }
     get();