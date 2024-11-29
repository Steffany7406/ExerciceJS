//questão = 1
for (let a = 0; a <= 10; a++){
    console.log(a);
}

// questão = 2
/*for (let i = 1; i <= 20; i++){
    if (i%2 == 1){ = impar
       console.log(i); 
    }   
}*/
//for (let b = 2; b <= 20; b +=2){.log(b);}
for (let b = 1; b <= 20; b++){
    if (b%2 == 0){
       console.log(b); 
    }   
}
//questão = 4
const study = ["Saulo" , "Steffany" , "Allan" , "Germano"]
for (name in study){
    console.log(study);
}
// questão = 5
for (let c = 0; c <= 10; c++){
    if (c == 10){
        console.log("A contagem é "+c);
    } else {
        console.log("Não Fizz essa!")
    }
}