function map(srcArray, value){
  let newArray = []

  for(let i = 0; i < srcArray.length; i++){
    newArray.push(value(srcArray[i]))
  }
  return newArray
}

function reduce(srcArray, value, start){
  let total = start

  if(start){
    return total
  } else {
    for(let i=0; i<srcArray.length; i++){
      total = value(srcArray[i], total)
    }
  }
  return total
}