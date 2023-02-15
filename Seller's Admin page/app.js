let form = document.getElementById('addForm')
let productName = document.getElementById('productName')
let price = document.getElementById('price');
form.addEventListener('submit', addproduct);
let showTotal = document.getElementById('sum')
let productList = document.getElementById("items")
productList.addEventListener('click', deleteProduct);
crudid = '15f56af4d2dd47d58d2f478a8220c39a'
window.onload = async () => {
    try {
        const res = await axios.get(`https://crudcrud.com/api/${crudid}/productData`)
        console.log(res);
        res.data.forEach(e => {
            showOutput(e)
        });
    } catch (error) {
        console.log("error");
    }


    // .then((res)=>{
    //         res.data.forEach(e => {
    //             showOutput(e)
    //         });
    //     })
}


async function addproduct(e) {
    e.preventDefault();
    let productName = document.getElementById('productName').value;
    let price = document.getElementById('price').value;
    try {
        const postData=await axios.post(`https://crudcrud.com/api/${crudid}/productData`, {
            pname: `${productName}`,
            price: `${price}`
    })
    showOutput(postData.data)
 } catch (error) {
    console.log("error");
 }
    
    form.reset()
}
async function deleteProduct(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        let key = li.classList[1]
        productList.removeChild(li)
        
    //    await axios.delete(`https://crudcrud.com/api/${crudid}/productData/${key}`)
    axios.delete(`https://crudcrud.com/api/${crudid}/productData/${key}`)
    totalPrice()
    }
}
function totalPrice() {
    let sum = 0
    let priceSum = productList.querySelectorAll('li')
    priceSum.forEach(e => {
        sum += +e.classList[2]
    });
    showTotal.textContent = `Total Stock Value = ${sum}`
}
const showOutput = (data) => {
    productList.insertAdjacentHTML('beforeend', `
    <li class="list-group-item ${data._id} ${data.price} list">${data.pname}-${data.price}
    <button class="btn btn-danger btn-sm float-right delete">delete</button></li>`)
    totalPrice()
}
