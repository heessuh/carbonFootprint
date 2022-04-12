document.querySelector("form").addEventListener("submit", function (e) {
  // prevent form from submitting
  e.preventDefault()

  // get the values from the form
  if (document.querySelector("#heavy").checked) {
    const data = document.querySelector("#heavy").value
    console.log(data)
    localStorage.setItem("data", data)
  }
  if (document.querySelector("#medium").checked) {
    const data = document.querySelector("#medium").value
    console.log(data)
    localStorage.setItem("data", data)
  }
  if (document.querySelector("#light").checked) {
    const data = document.querySelector("#light").value
    console.log(data)
    localStorage.setItem("data", data)
  }
  if (document.querySelector("#pescaterian").checked) {
    const data = document.querySelector("#pescaterian").value
    console.log(data)
    localStorage.setItem("data", data)
  }
  if (document.querySelector("#vegetarian").checked) {
    const data = document.querySelector("#vegetarian").value
    console.log(data)
    localStorage.setItem("data", data)
  }
  if (document.querySelector("#vegan").checked) {
    const data = document.querySelector("#vegan").value
    console.log(data)
    localStorage.setItem("data", data)
  }

  // zero out form
  document.querySelector("form").reset()

  // get the value from local storage
  const data = localStorage.getItem("data")

  //check if the value is "heavy"
  if (data === "heavy") {
    // display to the user
    document.querySelector("#result").value = "7.19 kg CO2e per day"
  }
  //check if the value is "medium"
  if (data === "medium") {
    // display to the user
    document.querySelector("#result").value = "5.63 kg CO2e per day"
  }
  //check if the value is "light"
  if (data === "light") {
    // display to the user
    document.querySelector("#result").value = "4.61 kg CO2e per day"
  }
  //check if the value is "pescaterian"
  if (data === "pescaterian") {
    // display to the user
    document.querySelector("#result").value = "3.91 kg CO2e per day"
  }
  //check if the value is "vegetarian"
  if (data === "vegetarian") {
    // display to the user
    document.querySelector("#result").value = "3.81 kg CO2e per day"
  }
  //check if the value is "vegan"
  if (data === "vegan") {
    // display to the user
    document.querySelector("#result").value = "2.89 kg CO2e per day"
  }
})
