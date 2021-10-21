//array
//collection of indexed elements called array
//index starts from 0
//for()    forEach()     for....of()....

var num_arr1 = [1,2,3,4,5]
var num_arr2 = [6,7,8,9,10]

num_arr1.forEach(function(a,b){
    console.log(a,b);
});


var str_arr1 = ["hello_1","hello_2","hello_3"]
var str_arr2 = ["wlcome_1","wlcome_2","wlcome_3"]

str_arr1.forEach((element,index)=>{
    console.log(element,str_arr2[index]);
});


//---------------------------------------------------------------------

//JSON
//JSON(javascript object notation)
//json used to transfer data over the element
//json is light weight
//object ===>{}
//array ===> []
// data in the form of  key & value pairs
// key and value seprated by using ':'
// key and value pairs sepreted by using ','

var obj = {
    "sub_one":"ReactJS",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB",

};
console.log(obj.sub_one, obj.sub_two , obj.sub_three);


