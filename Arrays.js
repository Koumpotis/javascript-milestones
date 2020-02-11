let coolArray = [1, 2, 3, 4, 5, 6, 7];

console.log('The length of the array is:', coolArray.length);
console.log('The first element is:', coolArray[0]);
console.log('The second element is:', coolArray[1]);
console.log('The last element is:', coolArray[coolArray.length - 1]);
coolArray[0]= 0
console.log('I changed the first element of the Array and now it is:', coolArray[0]);
coolArray[1]= 1;
console.log('I changed the second element of the Array and now it is:', coolArray[1]);
coolArray[coolArray.length -1] = 8;
console.log('I changed the last  element of the Array and now it is:', coolArray[coolArray.length-1]);
let k = '2';
coolArray[k]= 13;
console.log('I changed the element of the Array at the index k and now it is:',coolArray[k]);

coolArray.push(20);
console.log('I appended an element to the array and now it is:' , coolArray)
coolArray.splice([coolArray.length-1], 1);
console.log('I deleted the last element of  the Array and now it is:', coolArray)
coolArray.unshift(100);
console.log('I just prepended 100 to the array and now it is:', coolArray);
coolArray.shift();
console.log('I just deleted the first element of the array and now it is:', coolArray);
