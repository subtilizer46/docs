// Creating an empty array
// let emptyArray = [];
// console.log(emptyArray)

// Arrays in Python
// arr=np.array([1,2,3,4])


// Array with elements
// let colors = ['red','green','white']
// console.log(colors)

// Accesing elements by index
// console.log(colors[0])
// console.log(colors[1])

// Modification
// let colors = ['red','green','white']
// colors[0]='orange'
// console.log(colors)

// Finding length of an array
// let colors = ['red','green','white']
// let length=colors.length
// console.log(length)

// Adding elements to the end of an array
// let colors = ['red','green','white']
// colors.push("black")
// console.log(colors)

// Adding elements to the beginning of an array
// let colors = ['red','green','white']
// colors.unshift("yellow")
// console.log(colors)

// Remove elements from the beginning of an array
// let colors = ['red','green','white']
// colors.shift()
// console.log(colors)

// We can concat
// let morecolors = ['blue','purple']
// let allcolors = colors.concat(morecolors)
// console.log(allcolors)


// Slicing array in JS
// let colors = ['red','green','white']
// let var1=colors.slice(1,3);
// console.log(var1)

// Checking if an element exisits in an array
// let colors = ['red','green','white']
// let hascolor=colors.includes('green');
// console.log(hascolor)

// FInding the index of elements
// let colors = ['red','green','white']
// let hascolor=colors.indexOf('green');
// console.log(hascolor)

// 
// let colors = ['red','green','white']
// colors.splice(1,2);
// console.log(colors)

// Iterate
// let colors = ['red','green','white']
// for(let i=0;i<3;i++)
// {
//     console.log(colors[i])
// }
// let colors = ['red','green','white']
// let capital = colors.map(function(color){
//     return color.toUpperCase();
// });

// console.log(capital)

// let rev = colors.reverse()
// console.log(rev)



// let colors = ['red','green','white']

// function showArray(){
//     var resultElement = document.getElementById("result");
//     var res="Colors:";

//     for(var i=0;i<colors.length;i++)
//     {
//        res = res+colors[i];
//        if(i<colors.length-1)
//        {
//         res=res+",";
//        } 
//     }
//     resultElement.innerHTML=res;
// }

// forEach loop
// let colors = ['red','green','white']
// colors.forEach(function(color){
//     console.log(color)
// })

// 
let colors = ['red','green','white']
colors.sort();
console.log(colors)