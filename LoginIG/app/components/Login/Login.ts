import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    this.dispatchEvent(event);
                }else{
                    alert("El usuario o la contraseña no coinciden, por favor intentarlo de nuevo");
                }
            })
        })
    }
    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./components/Login/Login.css">
        <section>
            <img  class="mock" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/mock.png?raw=true"/ alt="Imagen representativa de la app de instagram en celular">
            <div>
                <app-form></app-form>
                <img  class="feis" src="https://github.com/Darksea1220/ComponenteIG/blob/main/Imagesland/entfeis.png?raw=true"/ alt="Imagen de alternativa para iniciar don facebook o por si olvidó su contraseña ya que el programador estaba muy ocupado para hacerlo como es debido">
            </div>
        </section>
        `
    }
}

customElements.define("app-login",Login);