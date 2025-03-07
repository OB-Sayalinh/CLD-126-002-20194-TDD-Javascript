// Variables --------------------------------------

const items = ['Apples', 'Bananas', 'Tomatos', 'Bread']

const itemPrices = [0.50, 0.75, 1, 0.25]

let itemsDiv = []

// Functions

export const scanForItem = (count, item = "Apples") => {

    let itemIndexType = items.findIndex(type => item == type)

    let perAmount = itemPrices[itemIndexType]

    return typeof count !== "undefined" && !isNaN(count) ? count * perAmount : 0

};

export function addItem(add, div){
    
    let valueElement = div.getElementsByClassName('amount')[0]
    
    let value = Number(valueElement.innerHTML)

    valueElement.innerHTML = (value + add >= 0) ? value + add : 0;

}

export function createItems(){

    items.forEach(async item => {

        let div = document.createElement('div')

        let name = document.createElement('span')
        let amount = document.createElement('span')
        let addButton = document.createElement('button')
        let removeButton = document.createElement('button')

        name.classList.add('name')
        amount.classList.add('amount')
        addButton.classList.add('addButton')
        removeButton.classList.add('removeButton')


        name.innerHTML = item + ": "
        amount.textContent = 0
        addButton.innerHTML = 'add'
        removeButton.innerHTML = 'remove'

        addButton.addEventListener('click', () => {
            addItem(1, div);
        })

        removeButton.addEventListener('click', () => {
            addItem(-1, div);
        })

        let childElements = [name, amount, addButton, removeButton]

        childElements.forEach((element) => {
            div.appendChild(element)
        });

        document.body.appendChild(div)

        itemsDiv.push(div)

    })

}

let checkOutButton = document.getElementById('checkOut')

checkOutButton == null ? 0 : checkOutButton.addEventListener('click', () => {

    let prices = []

    let count = 0

    itemsDiv.forEach(item => {

        prices.push(scanForItem(item.getElementsByClassName('amount')[0].innerHTML, items[count]))

        count += 1;

    })

    let price = 0;

    prices.forEach(item => {
        price += item
    })

    window.confirm(`Pay: $${price}`)

})