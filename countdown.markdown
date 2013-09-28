```
function countdown(num) {
  var ddd = setInterval(function(){
    console.log(num);
    num = num - 1;
    if(num == 0){clearInterval(ddd);};
    },3000);
};

countdown(5);
```
