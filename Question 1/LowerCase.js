function lowerCase(arr) {
    
    return new Promise((resolve, reject) => {
        
        if (!Array.isArray(arr)) {
        
            return reject("Input must be an array");
        } 
        const ans = arr
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());         
            resolve(ans);
    });
}


const mixedArray = ['Pizza', 10, true, 25, false, 'wings'];

lowerCase(mixedArray)
    .then(result => console.log(result))   
    .catch(error => console.error(error));
    
