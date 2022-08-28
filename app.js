//document.getElementById("count-tally")
let saveEnt = document.getElementById("saveEnt");
document.querySelector(".decrement-btn").setAttribute("disabled", "disabled");


var valueCount

document.querySelector(".increment-btn").addEventListener("click", function() {
       valueCount = document.getElementById("countTally").value;

       valueCount++;

       document.getElementById("countTally").value = valueCount

       if (valueCount > 0) {
        document.querySelector(".decrement-btn").removeAttribute("disabled")
        document.querySelector(".decrement-btn").classList.remove("disabled")
    }
})
document.querySelector(".decrement-btn").addEventListener("click", function() {
  valueCount = document.getElementById("countTally").value;

  valueCount--;

  document.getElementById("countTally").value = valueCount

  if (valueCount == 0) {
      document.querySelector(".decrement-btn").setAttribute("disabled", "disabled")
  }
})

document.querySelector(".saveBtn").addEventListener("click", function() {
   let countStr = valueCount
   saveEnt.innerText += ' ' + '(' + countStr + ')' + ' '  + '-' + ' ' +  Date() + ' \n'

}
  )

