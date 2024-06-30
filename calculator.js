answer.innerText = '0'

let value2 = '0'
let value1 = ''

function disVal(ev) {
  display.innerText += ev.target.value
  value1 = display.innerText
}

function getBtnVal(ev) {
 if (value2 === '0') {
  disVal(ev)
 }else{
  clearDisplay()
  return disVal(ev)
 }
}

function getAnswer() {
 if (value1 == '') {
  return '0'
 } else {
  const result = new Function('return ' + value1)();
  answer.innerText = result
  value2 = Number(result)
 }
}

function getOper(ev) {
  if (value2 === '0') {
    disVal(ev)
  } else {
    display.innerText = value2 += ev.target.value
    value2 = '0'
  }
}

function clearDisplay() {
  display.innerText = ''
  answer.innerText = '0'
  value2 = '0'
  value1 = ''
}

function power() {
 if (value1 ==='' && value2 === '0') {
  return
 } else {
 if (value2 == 0) {
  display.innerText = `sqr(${value1})`
  result = value1**2
 } else {
  display.innerText = `sqr(${value2})`
  result = value2**2
 }
 answer.innerText = result
 value2 = result
 }
}

function delVal() {
 if (value2 === '0') {
  let valArr = display.innerText.split('')
  console.log(valArr);
    valArr.splice(valArr.length - 1, 1)

  result = valArr.join('')
  display.innerText = result
 } else {
  return
 }
}


