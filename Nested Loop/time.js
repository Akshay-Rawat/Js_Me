let hr=7
let min=57

if(hr===0 || hr===24){
    console.log(`12:${min}+am`)
}
else if(hr ===12){
    console.log(`12:${min} pm`)
}
else if(hr>0 && hr<12){
    console.log(`${hr} :${min}  am`)
}
else if(hr>12 && hr<=24){
    console.log(`${hr-12} pm`)
}
