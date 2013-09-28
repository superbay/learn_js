```

function countdown(num) {
  var i = num - 1;
  var ddd = setInterval(function(){
    console.log(i + 1);
    i = i - 1;
    if(i == 0){return true};
    },3000);
//  if( i == 0){  
//  clearInterval(ddd);
//  };
};

countdown(2);

```
