let inputs = document.querySelectorAll('.width');
let radioButtons = document.querySelectorAll('.radio');
let PreorderClass = document.querySelectorAll('.Pre-orderClass');
let submit = document.querySelector('.submit');
let formValues = {};
let items = '' ;

submit.addEventListener('click', (e) => {
    inputs.forEach(input => {
        inputValue = input.value;
        inputName = input.name
        formValues = {...formValues,[inputName]:inputValue}
        console.log('done')
    })

    radioButtons.forEach(button => {
        if(button.checked)   formValues = {...formValues,['want to join']:button.value}
    })

    PreorderClass.forEach(button => {
        if(button.checked) {
            let item = `${button.value}`
            if(!items) {
                items = item
                return
            }else{
                items += `,${item}`
            }
            
            formValues = {...formValues,['Pre-orderClass']:items}
            // console.log(formValues)
        }
    })
    console.log(formValues)
    e.preventDefault()
})