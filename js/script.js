const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
let sum = 0
for (let i = 0; i < numbers.length; i++) {
   if (!Number(numbers[i])) { continue }
   else { sum += Number(numbers[i]) }
}
alert('Sum is ' + sum)