function maxSequenceOfEqualElements(array){
    let longestArray = []        

for (let index = 0; index < array.length; index++) {    
   let currentElement = array[index]
   currentArray = []                   
   
   for (let k = index; k < array.length; k++) { 
       let nextElement = array[k]
     if (currentElement === nextElement){   
        currentArray.push(currentElement)   
     } else {
         break;                            
     }
     if (currentArray.length > longestArray.length){    
         longestArray = currentArray        
     }
   }
   
}
console.log(longestArray.join(" "))
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])