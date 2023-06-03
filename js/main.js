

let allQuotes = document.getElementById("allQuotes")
let bytes_input = document.getElementById('bytes_input')
let consuming = document.getElementById("consuming")
let quota =  document.getElementById("quota")
let remining = document.getElementById("remining")
let otherDiv = document.getElementById("otherDiv")
let other = document.getElementById("other")
let content = document.getElementById("content")
let copy = document.getElementById("copy")


function convertToGB() {
    let bitValue = document.getElementById("bytes_input").value;
    let gbValue = (bitValue * 9.3132e-10).toFixed(2);
    return gbValue;
}


function consumed() {
    if (parseFloat(quota.innerHTML)> parseFloat(remining.innerHTML)) {

        return parseFloat(quota.innerHTML) - parseFloat(remining.innerHTML)
    } else {
        return 0.00
    }
}



document.addEventListener("change", () => {

    
if (allQuotes.value == 'other') {
    otherDiv.style.display = "block"
    quota.innerHTML = other.value + ' جيجا'
    consuming.innerHTML = consumed() + ' جيجا'
} else {
    otherDiv.style.display = "none"
    quota.innerHTML = allQuotes.value + ' جيجا'
    consuming.innerHTML = consumed() + ' جيجا'
    } 
  
})


document.addEventListener("keyup", () => {

    
if (allQuotes.value == 'other') {
    otherDiv.style.display = "block"
    quota.innerHTML = other.value + ' جيجا'
    consuming.innerHTML = consumed() + ' جيجا'
} else {
    otherDiv.style.display = "none"
    quota.innerHTML = allQuotes.value + ' جيجا'
    consuming.innerHTML = consumed() + ' جيجا'
} 
})


bytes_input.addEventListener("keyup", () => {
    remining.innerHTML = convertToGB(bytes_input.value) + ' جيجا'
    consuming.innerHTML = consumed() + ' جيجا'
})










copy.addEventListener("click", () => {
    

console.log(content.innerText);
  // Select the text field
//   content.select();
//   content.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(content.innerText);
Swal.fire('تم نسخ الكنداية بنجاح')

  // Alert the copied text
  // alert("Copied the text: " + content.value);


})

