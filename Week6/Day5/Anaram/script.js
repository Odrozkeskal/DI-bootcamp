function areAnagrams(str1, str2) {

    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();


    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const charCount1 = {};
    const charCount2 = {};

  
    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

  
    return true;
}


console.log(areAnagrams("Hello", "World"));  
console.log(areAnagrams("A gentleman", "Elegant man"));  
