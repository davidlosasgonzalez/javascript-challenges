function KaprekarsConstant(num) { 

    let num1;
    let num2;
    let count = 0;
    const a = num.toString();
    
    while (num != 6174 && a.length === 4) {
        
        num = num + '';
        
        num1 = num.split('').sort().join('');
        
        num2 = num.split('').sort().reverse().join('');
        
        num = num2 - num1;
        
        if (num.toString().length != 4) {
           num = ('0'+num).slice();
        }
        
        count++;
        
    }
         
    console.log(count);     
}
   
KaprekarsConstant(7566);
