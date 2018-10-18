var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  else {
    return `Currently serving ${katzDeliLine.shift()}.`
    }
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const array = []
  for (let i = 0, n = line.length; i < n; i++) {
    array.push (`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${array.join(', ')}`
}
