export var Attribute;
(function (Attribute) {
    Attribute["profileimg"] = "profileimg";
    Attribute["name"] = "name";
    Attribute["ubication"] = "ubication";
    Attribute["post"] = "post";
    Attribute["views"] = "views";
    Attribute["description"] = "description";
})(Attribute || (Attribute = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            profileimg: null,
            name: null,
            ubication: null,
            post: null,
            views: null,
            description: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link type="text/css" rel="stylesheet"  href="./components/Home/apphom/subcomponents/Poust/Post.css">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&display=swap" rel="stylesheet">
        <section>
            <div class="base">
                <div class="head">
                    <div class="profile">
                        <img class="photo" src="${this.profileimg}" alt="foto de perfil de ${this.name}"></img>
                        <div id="name">
                            <p class="nam">${this.name}</p>
                            <p class="nam" id="dir">${this.ubication}</p>
                        </div>
                    </div>

                    <div class="dots">
                        <img src=".././images/dots.png" alt="opciones del post"></img>
                    </div>
                </div>

                <div class="post">
                <img class="ppost" src="${this.post}" alt="post que realizó ${this.name}"></img>
                </div>
                <div class="icons">
                    <div class="lcs">
                        <img src="../../../../../images/heart.png" alt="dar me gusta"></img>
                        <img class="space" src="../../../../../images/chat.png" alt="hacer un comentario"></img>
                        <img src="../../../../../images/send.png" alt="compartir en instagram"></img>
                    </div>
                    <img class="position" src="../../../../../images/dots2.png" alt="puntos que indican la cantidad de imagenes posteadas"></img>
                    <img src="../../../../../images/save.png" alt="guardar post"></img>
                </div>
                <div class="comments">
                    <p class="footer">${this.views}</p>
                    <p class="descrip">${this.description}</p>
                </div>
            </div>
        </section>
        `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
