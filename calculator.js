answer.innerText = '0'

let value2 = '0'
let value1 = ''
let value3 = false
let operatorValue;
let result;

//function to display values on display(top) screen
function disVal(ev) {
  display.innerText += ev.target.value
  value1 = display.innerText
}

// fto get numbers value
function getBtnVal(ev) {
 if (value2 === '0') {
  disVal(ev)
 }else{
  clearDisplay()
  return disVal(ev)
 }
}

//operators function
function getOper(ev) {

  let operArr = value1.split('')
  if (operArr[operArr.length - 1] == '+' ||
    operArr[operArr.length - 1] == '-'||
    operArr[operArr.length - 1] == '*' ||
    operArr[operArr.length - 1] == '/'
  ){
    operArr.forEach((d,i) => {
      operArr.splice(operArr.length-1,1,ev.target.value)
     } );
     result = operArr.join('')
    //  console.log(result);
     display.innerText = result
     operatorValue = ev.target.value
     value3 = false
     return
 } 
 checkCond(ev)
 value3 = false
}

// power 2 function
function power(p) {

  if (value1.includes(operatorValue) && value2 == '0') {
    calVal = value1.split(operatorValue)
    if (calVal[calVal.length- 1] == '') {
      result = calVal[calVal.length- 2]**p
      display.innerText = `${result}${operatorValue}`
      
    } else {
      result = calVal[calVal.length - 1]**p
      calVal.splice(calVal.length-1, 1, `${result}`)
      display.innerText = calVal.join(operatorValue)
      value1 = display.innerText
    }

    return
  }

 if (p == 2) {
  if (value2 == 0 && value1 !== '') {
    display.innerText = `sqr(${value1})`
    result = value1**p
   } else {
    display.innerText = `sqr(${value2})`
    result = value2**p
   }
 } else {
  if (value2 == 0 && value1 !== '') {
    display.innerText = `cube(${value1})`
    result = value1**p
   } else {
    display.innerText = `cube(${value2})`
    result = value2**p
   }
 }
 answer.innerText = result
   value2 = result
   value1 = display.innerText
   value3 = true
 histDisplay()
 }

 // percentage function
 function percent() {
 
   if (value1.includes(operatorValue) && value2 == '0') {
    calVal = value1.split(operatorValue)
    if (calVal[calVal.length- 1] == '') {
      result = calVal[calVal.length- 2]/100;
      display.innerText = `${result}${operatorValue}`
      
    } else {
      result = calVal[calVal.length - 1]/100
      calVal.splice(calVal.length-1, 1, `${result}`)
      display.innerText = calVal.join(operatorValue)
      value1 = display.innerText
    }

    return
  }

   if (value2 == 0 && value1 !== '') {
    display.innerText = `${value1}%`
    result = value1/100
  }else {
   display.innerText = `${value2}%`
   result = value2/100
  }
  answer.innerText = result
  value2 = result
  value1 = display.innerText
  value3 = true
  histDisplay()
 }


 
// 1 divided by x function
 function over() {
  if (value1.includes(operatorValue) && value2 == '0') {
    calVal = value1.split(operatorValue)
    if (calVal[calVal.length- 1] == '') {
      result = 1/calVal[calVal.length- 2]
      display.innerText = `${result}${operatorValue}`
      
    } else {
      result = 1/calVal[calVal.length - 1]
      calVal.splice(calVal.length-1, 1, `${result}`)
      display.innerText = calVal.join(operatorValue)
      value1 = display.innerText
    }

    return
  }

  if (value2 == 0 && value1 !== '') {
   display.innerText = `1/(${value1})`
   result = 1/value1
  } else {
   display.innerText = `1/(${value2})`
   result = 1/value2
  }
  answer.innerText = result
  value2 = result
  value1 = display.innerText
  value3 = true
  histDisplay()
 }

 //square root function
 function squrt() {

  if (value1.includes(operatorValue) && value2 == '0') {
    calVal = value1.split(operatorValue)
    if (calVal[calVal.length- 1] == '') {
      result = Math.sqrt(calVal[calVal.length- 2]);
      display.innerText = `${result}${operatorValue}`
      
    } else {
      result = Math.sqrt(calVal[calVal.length- 1])
      calVal.splice(calVal.length-1, 1, `${result}`)
      display.innerText = calVal.join(operatorValue)
      value1 = display.innerText
    }

    return
  }
  
  if (value2 == 0 && value1 !== '') {
   display.innerText = `√${value1}`
   result = Math.sqrt(value1)
  } else {
   display.innerText = `√${value2}`
   result = Math.sqrt(value2)
  }
  answer.innerText = result
  value2 = result
  value1 = display.innerText
  value3 = true
  histDisplay()
 }

// function to add nagation to values
function plusAndMinus() {
  if (value1.includes(operatorValue) && value2 == '0') {
    calVal = value1.split(operatorValue)
    if (calVal[calVal.length- 1] == '') {
      result = calVal[calVal.length- 2]
      display.innerText = `-(${result})${operatorValue}`
      
    } else {
      result = calVal[calVal.length - 1]
      calVal.splice(calVal.length-1, 1, `(-${result})`)
      display.innerText = calVal.join(operatorValue)
      value1 = display.innerText
    }

    return
  }

  if (value2 == 0 && value1 !== '') {
    display.innerText = `-(${value1})`
   } else {
    display.innerText = `-(${value2})`
   }
   value1 = display.innerText

}

//equals to function
function getAnswer() {
let notNum = ['sqr', 'cube', '%']

 if (value1 == '') {
  return '0'
 } 
 if (value3 == true) {
  histDisplay()
 }else{
  result = new Function('return ' + value1)();
  answer.innerText = result
  value2 = Number(result)
  
  histDisplay()
    }
}

// historrydisplay function
function histDisplay() {
  histHTML = ''
  hisArr = [{
    firgure: value1,
    solution: value2
  }]

  hisArr.forEach((a,i) => {
    let html = `<p> ${a.firgure} = <br>
                <span>${a.solution}<span>
                </p> `
    histHTML += html
  });
  document.getElementById('hisDis').innerHTML += histHTML
}


// displays the answer(down) screen value in the display(top) screen
function operGetAnsVal(ev) {
  display.innerText = value2 += ev.target.value
  value1 = display.innerText
    value2 = '0'
}


// check condition. used for dot button and opertor button
function checkCond(ev) {
  if(value2 === '0' && value1 !== ''){
    disVal(ev)
   
  } else if (value1 == '' && value2 === '0'){
   operGetAnsVal(ev)
  }
  else{
    operGetAnsVal(ev)
  }
  operatorValue = ev.target.value
}

//clear function
function clearDisplay() {
  display.innerText = ''
  answer.innerText = '0'
  value2 = '0'
  value1 = ''
}


// delete fuction
function delVal() {
 if (value2 === '0') {
  let valArr = display.innerText.split('')
  // console.log(valArr);
    valArr.splice(valArr.lastIndexOf(), 1)

  result = valArr.join('')
  value1 = result
  display.innerText = result
 } 
}
//CE function
function reloadCal() {
  window.location.reload()
}


