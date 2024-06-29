const btns_case = document.querySelectorAll(".btn-menu-studies")
const itens_case_studies = document.querySelectorAll(".case-studies-item")

btns_case.forEach(button => {
  
  button.addEventListener('click', e => {
    e.preventDefault()
    // Caso o botao já esteja ativo remove todas as classes que fazem modificacao e volta ao padrao
    if(button.classList.contains('case-studies-active-menu')){
      console.log("tem")
      e.currentTarget.classList.remove('case-studies-active-menu')
      itens_case_studies.forEach(item => item.classList.remove('desactive-item-studies'))
      itens_case_studies.forEach(item => item.classList.remove('active-item-studies'))
    } else {
      // Caso contrario ativa a classe do menu e exibe somente o elemento clicado
      btns_case.forEach(button => button.classList.remove('case-studies-active-menu'))
      e.currentTarget.classList.add('case-studies-active-menu');

      const dataItem = e.currentTarget.getAttribute('data-item');
  
      const item_selected = document.getElementById(dataItem)

      itens_case_studies.forEach(item => {
        item.classList.add("desactive-item-studies") 
      })
      item_selected.classList.remove("desactive-item-studies")
      item_selected.classList.add("active-item-studies")
    }    
  })
})