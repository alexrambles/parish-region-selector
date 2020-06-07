// Defines the element and retrieves the user input 
const elem = document.getElementById("dropdown");

// function that activates upon change, erasing the previous selection and resetting the display style to none
elem.addEventListener("change", () => {
  Array.from(document.getElementsByClassName("result")[0].children, (child) => child.style.display = "none")
  const hiddenDiv = document.getElementById(`region${elem.value}_result`);
  hiddenDiv.style.display = "block";
})

// retrieves the selected element's value and assigns it to hiddenDiv using template literals
const hiddenDiv = document.getElementById(`region${elem.value}_result`);
hiddenDiv.style.display = "block";
