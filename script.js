import { listCategory, allCategory } from './product.js'

const navLinks = document.querySelectorAll('.nav-link')
const colCenter = document.querySelector('.colCenter')
const colRight = document.querySelector('.colRight')

navLinks.forEach((link, index) => {
  link.textContent = listCategory[index]

  allCategory[index].forEach((link) => {
    shortProduct(link)
  })

  link.addEventListener('click', (event) => {
    event.preventDefault()

    navLinks.forEach((link) => {
      link.classList.remove('active')
    })
    link.classList.add('active')

    while (colCenter.firstChild) {
      colCenter.removeChild(colCenter.firstChild)
    }
    allCategory[index].forEach((link) => {
      shortProduct(link)
    })
  })
})

function shortProduct(link) {
  const borderDiv = document.createElement('div')
  borderDiv.classList.add('border')
  colCenter.appendChild(borderDiv)

  const wrapDiv = document.createElement('div')
  wrapDiv.classList.add('wrap')
  borderDiv.appendChild(wrapDiv)

  const productWrapDiv = document.createElement('div')
  productWrapDiv.classList.add('product-wrap')
  wrapDiv.appendChild(productWrapDiv)

  const aImg = document.createElement('a')
  aImg.href = link.img
  const imgElement = document.createElement('img')

  imgElement.src = link.img
  aImg.appendChild(imgElement)
  productWrapDiv.appendChild(aImg)

  const productInfoDiv = document.createElement('div')
  productInfoDiv.classList.add('product-info')
  borderDiv.appendChild(productInfoDiv)

  const productTitleH3 = document.createElement('h3')
  productTitleH3.classList.add('product-title')
  productTitleH3.innerHTML = link.name
  productInfoDiv.appendChild(productTitleH3)

  const priceDiv = document.createElement('div')
  priceDiv.classList.add('price')
  productInfoDiv.appendChild(priceDiv)
  priceDiv.innerHTML = `Ціна: ${link.price} &#8372;`
}

const borderProduct = document.querySelectorAll('.border')
borderProduct.forEach((link) => {
  link.addEventListener('click', (event) => {
    colRight.style.display = 'block'
  })
})
