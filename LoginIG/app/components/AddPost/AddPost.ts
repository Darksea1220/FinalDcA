export enum Attribute{
    "ubication"="ubication",
    "post"="post",
    "views"="views",
    "description"="description"
}
var x = Math.floor(Math.random()*101)+1;
var v = x.toString();
export class AddPost extends HTMLElement{
    "ubication"="";
    "post"="";
    "views"= v+"k views";
    "description"="";

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute,null>={
            ubication:null,
            post:null,
            views:null,
            description:null
        }
        return Object.keys(attrs);
    }

    connectedCallback(){
        this.render()

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click",()=>{
            const event: CustomEvent<{ubication:string, post:string, views:string, description:string}> = 
            new CustomEvent("post-fullfiled",{
                detail: {ubication:this.ubication, post:this.post, views:this.views, description:this.description},
                composed: true
            });
            this.dispatchEvent(event);
        });

        const ubicationInput = this.shadowRoot?.querySelector('input[id="2"]');
        const postInput = this.shadowRoot?.querySelector('input[id="3"]');
        const descriptionInput = this.shadowRoot?.querySelector('input[id="4"]');
        

        ubicationInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.ubication = value;
        });

        postInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.post = value;
        });
        descriptionInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.description = value;
        });
    }

    attributeChangedCallback(propName:Attribute,oldvalue:string,newValue:string){
        this[propName]=newValue
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" type="text/css" href="./components/AddPost/AddPost.css">
            <aside class="createpost" id="asde">
                <label>Digite su ubicación</label>
                <input type="text" id="2"></input>

                <label>Ingrese el enlace de la imágen que desea publicar</label>
                <input type="text" id="3"></input>

                <label>Ingrese la descripción que desea publicar</label>
                <input type="text" id="4"></input>

                <button type="submit">Publicar</button>
            </aside>

            `;
            }
        }
    }
    customElements.define("add-post", AddPost);