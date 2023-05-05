const templateMain = document.createElement('template');
templateMain.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <style>
        
    </style>
    <main class="item-main">
        
    </main>
`;

class ComponentMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateMain.content.cloneNode(true));
    }


    sendMessage(){
        console.log("HOLA MUNDO")
    }
}

window.customElements.define("app-component-main", ComponentMain);