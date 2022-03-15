class ProductItem extends HTMLElement {
  constructor() {
    super();

    this.initWrapper();

    this.setProductInfo();

    this.setOperation();

    this.setStyle();

    this.setShadow();
  }

  initWrapper() {
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('class', 'wrapper');
  }

  setShadow() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(this.styleEle);
    this.shadow.appendChild(this.wrapper);
  }

  setProductInfo(
    productInfo = {
      name: 'name',
      price: 'price',
      desc: 'description',
    }
  ) {
    const { name, price, desc } = productInfo;

    const productInfoEle = document.createElement('div');
    productInfoEle.setAttribute('class', 'product-info');

    const nameEle = document.createElement('div');
    nameEle.setAttribute('class', 'name');
    nameEle.innerText = name;
    const priceEle = document.createElement('div');
    priceEle.setAttribute('class', 'price');
    priceEle.innerText = price;
    const descEle = document.createElement('div');
    descEle.setAttribute('class', 'desc');
    descEle.innerText = desc;

    productInfoEle.appendChild(nameEle);
    productInfoEle.appendChild(priceEle);
    productInfoEle.appendChild(descEle);

    this.wrapper.appendChild(productInfoEle);
  }

  setOperation(operations = ['add', 'delete']) {
    const operationEle = document.createElement('div');
    operationEle.setAttribute('class', 'operation');

    for (const operation of operations) {
      const btnEle = document.createElement('button');
      btnEle.innerText = operation;
      operationEle.appendChild(btnEle);
    }

    this.wrapper.appendChild(operationEle);
  }

  setStyle() {
    this.styleEle = document.createElement('style');
    this.styleEle.textContent = `
      .wrapper {
        display: inline-flex;
        width: 200px;
        border: 1px solid black;
        border-radius: 6px;
        padding: 10px;
      }

      .product-info {
        flex: 1;
      }

      .operation {
        display: flex;
        flex-direction: column;
      }

      .operation > * + * {
        margin-top: 5px;
      }
    `;
  }
}

customElements.define('product-item', ProductItem);
