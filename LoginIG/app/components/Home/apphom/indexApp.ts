import "./subcomponents/indexComp.js";
import { addPost } from "../../../services/db.js";
export class HomContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("add-post");
        const trigg = this.shadowRoot.querySelector("my-search")

        trigg.addEventListener("set-addp", (evt:CustomEvent)=>{            
            form.classList.remove("off")
            form.classList.add("on")
        })
        form.addEventListener("post-fullfiled", (evt: CustomEvent)=>{
            const profileimg = "https://github.com/Darksea1220/Im-genes-para-FB/blob/master/perfil.png?raw=true";
            const name = "Darkseaed1t2";
            const ubication = evt.detail.ubication;
            const post = evt.detail.post;
            const views = evt.detail.views;
            const description = evt.detail.description;
            
            addPost({profileimg,name,ubication,post,views,description});
                
            form.classList.remove("on")
            form.classList.add("off")
            // if (ubication || post || description =="") {
            //     form.classList.remove("on")
            //     form.classList.add("off")
            // }else{
            //     addPost({profileimg,name,ubication,post,views,description});
                
            //     form.classList.remove("on")
            //     form.classList.add("off")
            // }
            
        });
    }
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" type="text/css" href="./components/Home/apphom/subcomponents/ProfileContainer/ProfileContainer.css">
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
                <my-search></my-search>
                <add-post class="off"></add-post>
                <my-pcont class="pcont"></my-pcont>
                <my-postcont></my-postcont>
                <my-recomend nameuser="Darkseaed1t2"></my recomend>
                `;
            }
        }
}
customElements.define("hom-container",HomContainer);