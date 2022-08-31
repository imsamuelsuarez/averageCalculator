const select = document.getElementById("select-list")
const btn = document.getElementById("portfolio-btn")

select.onchange = () =>
{
    let value = select.selectedIndex;
    return console.log(value)

}


// btn.onclick = (event) => 
// {
//     event.preventDefault();
//     const value = select.selectedIndex
//     alert(value)
// }

// select.addEventListener(onchange, gritar)

// function gritar()
// {
//     alert(selectedOption)
// }

select.onchange = (event) =>
{
    let value = select.selectedIndex;
    return console.log(value)

}

const selectedOption = select.options[select.selectedIndex]