class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    this.createWrapper();

    this.setIcon();

    this.setInfo();

    this.setStyle();

    this.setShadow();
  }

  setShadow() {
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(this.styleEle);
    this.shadow.appendChild(this.wrapper);
    this.wrapper.appendChild(this.icon);
    this.wrapper.appendChild(this.info);
  }

  createWrapper() {
    this.wrapper = document.createElement('span');
    this.wrapper.setAttribute('class', 'wrapper');
  }

  setIcon() {
    this.icon = document.createElement('span');
    this.icon.setAttribute('class', 'icon');
    this.icon.setAttribute('tabindex', 0);

    const img = document.createElement('img');
    img.src = this.hasAttribute('img')
      ? this.getAttribute('img')
      : './favicon.ico';

    this.icon.appendChild(img);
  }

  setInfo() {
    this.info = document.createElement('span');
    this.info.setAttribute('class', 'info');
    const text = this.getAttribute('data-text');
    this.info.textContent = text;
  }

  setStyle() {
    this.styleEle = document.createElement('style');
    this.styleEle.textContent = `
      .wrapper {
        position: relative;
      }
    
      .info {
        z-index: 3;
        position: absolute;
        bottom: 20px;
        left: 10px;
    
        display: inline-block;
        width: 200px;
        border: 1px solid black;
        font-size: 0.8rem;
        opacity: 0;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    
      img {
        width: 1.2rem;
      }
    `;
  }
}

customElements.define('popup-info', PopUpInfo);
