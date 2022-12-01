import userdata from "../../userdata.js";
import "../../../../AddPost/AddPost.js";
class MySearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        const btn = this.shadowRoot.getElementById("add");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("set-addp", {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/Nav/Nav.css">
                <nav class="head">
                <div class="head">
                <img class="log" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/log.png?raw=true" class="insta" alt="logo de instagram"></img>   
                </div>

                <div class="search">
                <input type="image" class="lupa" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/search-regular-24.png?raw=true" class="image_buscar" alt="lupita del campo de buscar">
                <input type="text" class="busq" placeholder="Buscar"> 
                </div>

                <div class="icons">
                <img class="icon" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/home.png?raw=true" alt="Ir al home"></img>
                <img class="icon" id="add" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/plus.png?raw=true" alt="crear publicación"></img>
                <img class="icon" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/compass.png?raw=true" alt="explorar"></img>
                <img class="icon" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/heart.png?raw=true" alt="notificacones"></img>
                <my-user clase=user image="${userdata}"></my-user> 
                </div>
                </nav>
            </section>
            `;
        }
    }
}
customElements.define("my-search", MySearch);
export default MySearch;
