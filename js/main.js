const btnmodal = document.querySelector('.contact__button--call'),
      modal = document.querySelector('.modal'),
      closed = document.querySelector('.modal__close')
      
      btnmodal.addEventListener('click',() => {
        modal.classList.add('modal--visible')
      })

      closed.addEventListener('click',() => {
        modal.classList.remove('modal--visible')
      });


const burger = document.querySelector('.header__burger'),
      openbug = document.querySelector('.menu')
      

      burger.addEventListener('click',() => {
        openbug.classList.toggle('active')
      })


const product = document.querySelectorAll('.product__content--headline'),
      openProduct = document.querySelectorAll('.product__info'),
      colorButton = document.querySelectorAll(".product__content--headline");


      for (let i = 0; i < product.length; i++) {

        let index = i

        product[index].addEventListener('click',(e) => {

          openProduct.forEach(element => {
          element.classList.remove("product__info--block")
        });
          openProduct[index].classList.add("product__info--block")

          colorButton.forEach(el => {
            el.classList.remove("product__color--link")
          })

          colorButton[index].classList.add("product__color--link")

        })  
    }


    