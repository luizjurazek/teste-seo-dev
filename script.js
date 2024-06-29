const btns_case = document.querySelectorAll(".btn-menu-studies")
const itens_case_studies = document.querySelectorAll(".case-studies-item")

btns_case.forEach(button => {
  
  button.addEventListener('click', e => {
    e.preventDefault()
    btns_case.forEach(button => button.classList.remove('case-studies-active-menu'))
    e.currentTarget.classList.add('case-studies-active-menu');

    const dataItem = e.currentTarget.getAttribute('data-item');
  
    const item_selected = document.getElementById(dataItem)
    console.log(item_selected)

    itens_case_studies.forEach(item => {
      item.classList.add("desactive-item-studies")
      
    })
    item_selected.classList.remove("desactive-item-studies")
    item_selected.classList.add("active-item-studies")
  })
})