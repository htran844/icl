fetch('https://675e4dbb63b05ed07979e3ce.mockapi.io/products')
.then(response => response.json())
.then(data => {
  // Select the product list container
  const productList = document.querySelector('.product-list');

  // Generate the product list items
  data.forEach(product => {
    const listItem = document.createElement('li');
    listItem.className = 'product-item';
    listItem.innerHTML = `
      <div class="icon"></div>
      <div class="content">${product.name}</div>
      <div class="price">${product.price.toLocaleString('vi-VN')} đ</div>
      <button class="btn-choose">Chọn</button>
    `;
     // Add event listener to the button
     const button = listItem.querySelector('.btn-choose');
     button.addEventListener('click', () => {
       window.location.href = '/dang-nhap-he-thong';
     });
    productList.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching data:', error));