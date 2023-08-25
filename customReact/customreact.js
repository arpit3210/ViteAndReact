
function customRender(reactElement, container)
{
    // const domElement =document.createElement(reactElement.type)
    // domElement.innerHTML =reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)




    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in props)
    {
       if(prop == children) continue;
    }
}




const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : 'blank'
    },
    children : 'Click me to visit google'
}


let mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)