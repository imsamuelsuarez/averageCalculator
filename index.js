
const cardWrapper = document.getElementById("mainContainer");
const child = cardWrapper.children;


const btnSquareArea = document.getElementById('btnSquareArea');
btnSquareArea.addEventListener("click", toCreateNode);


const btnSquarePerimeter = document.getElementById('btnSquarePerimeter')
btnSquarePerimeter.addEventListener("click", toCreateNode);


const btnSquareDiagonal = document.getElementById('btnSquareDiagonal')
btnSquareDiagonal.addEventListener("click", toCreateNode);


const btnCircleArea = document.getElementById('btnCircleArea')
btnCircleArea.addEventListener("click", toCreateNode);

const btnCircleRadio = document.getElementById('btnCircleRadio')
btnCircleRadio.addEventListener("click", toCreateNode);

const btnCircleCircum = document.getElementById('btnCircleCircumference')
btnCircleCircum.addEventListener("click", toCreateNode);

const btnCompoundInt = document.getElementById('btnCompoundInterest')
btnCompoundInt.addEventListener("click", toCreateNode);


function toClearWrapper()
{
    for(const child of cardWrapper.children)
{
    if(child.nodeType === 1)
    {
        child.style.display = "none";
    }
}
}

function toCreateNode(element)
{   
    toClearWrapper()
    const value = element.currentTarget.value;
    const index = value - 1;
    
    for(const child of cardWrapper.children)
    {
        if(child.dataset.value == index)
        {
            child.style.display = "block";
        }
    }
}

