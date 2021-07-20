const isSquare = (n) =>{
    if( n < 0){
        return false
    }else{
    let num = Math.sqrt(n)
    if(String(num).includes('.')){
        return false
    }else{
        return true
    }
}
}
console.log(isSquare(26))