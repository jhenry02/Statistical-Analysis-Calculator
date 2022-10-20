let btn = document.getElementById("button")
btn.addEventListener("click", () => {
   let A = parseFloat(document.getElementById("input1").value);
   let B = parseFloat(document.getElementById("input2").value);
   let C = parseFloat(document.getElementById("input3").value);

   console.log(A, B, C);

   let max = Math.max(A, B, C);
   let min = Math.min(A, B, C);

   console.log(max, min);

   let range = max - min;
   let median = [A, B, C].sort((a, b) => a - b)[1];
   let mean = (A + B + C) / 3;

   console.log(range, median, mean);

   document.getElementById("max").value = max
   document.getElementById("min").value = min
   document.getElementById("median").value = median
   document.getElementById("range").value = range
   document.getElementById("mean").value = mean

})