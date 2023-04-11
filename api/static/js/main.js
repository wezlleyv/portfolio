function ChangeToProjects () {
    const page = document.getElementById("page")

    const defaultHome = document.getElementById("default")
    const childs = defaultHome.children
    
    for (k =0; k < childs.length; k++) {
        childs[k].classList.add("hide")
    }

    if (page.textContent == "Projetos")
    {
        page.textContent = "Inicio"

        setTimeout(function() {
            for (k =0; k < childs.length; k++) {
                childs[k+1].remove()
                childs[k].remove()
            }
            const nav = document.createElement("nav")
            nav.classList.add("projects")
            defaultHome.appendChild(nav)

            const ul = document.createElement("ul")
            nav.appendChild(ul)

            ul.appendChild(document.createElement("div"))
            ul.appendChild(document.createElement("div"))
            ul.appendChild(document.createElement("div"))
        }, 400);
    }
    else
    {
        page.textContent = "Projetos"
        setTimeout(function() {
            const defaultHome = document.getElementById("default")
            const childs = defaultHome.children
            
            for (k =0; k < childs.length; k++) {
                childs[k].remove()
            }

            var inicio = `
            <article>
                <div id="content">
                    <span>Olá, eu sou o</span>
                    <h1 style="font-size: 2rem;">Weslley Victor.</h1>
                    <h2 style="margin-left: 3rem;scale: 1; opacity: 0.7; margin-bottom: 1rem;"><span style="color: #5000ca ;">&lt;</span>Back-end Developer<span style="color: #5000ca ;">&frasl;&gt;</span></h2>
                    <span style="text-align: justify; font-size: .9rem; margin-top: 1rem;">Apaixonado por tecnologia desde pequeno&#128525; me encontrei no back-end por gostar de está por trás de toda criação. Quer <a style="font-size: 0.9rem; text-decoration: none; color: #5000ca; border-bottom: 1px solid #5000ca;" href="about-me">saber mais</a>?</span>
                    <button onclick="ChangeToProjects()" id="btn-projetos">Projetos</button>
                </div>
            </article>
            
            <article>
                <div id="picture"></div>
            </article>
            `

            defaultHome.insertAdjacentHTML( 'beforeend', inicio );
        }, 400)
    }
}
