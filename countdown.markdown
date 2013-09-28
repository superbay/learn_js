```
function countdown(num) {
  var i = num - 1;
  var ddd = setInterval(function(){
    console.log(i + 1);
    if(i == 0){clearInterval(ddd);};
      i = i - 1;
    },3000);
};

countdown(5);
```
