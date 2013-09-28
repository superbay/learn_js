function echo(){
  console.log(arguments.length);
  for (var i=0;i< arguments.length;i++){
    console.log(arguments[i]);
  }

};

echo('a','b','c');
