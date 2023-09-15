import { ColorOptions } from "./ColorOptions.js"
import { InteriorOptions } from "./InteriorOptions.js"
import { saveCustomPackage } from "./SaveOrders.js"
import { TechnologyOptions } from "./TechnologyOptions.js"
import { WheelOptions } from "./WheelOptions.js"

const render = async () => {
   
    const colorOptionsHTML = await ColorOptions()
    const technologyOptionsHTML = await TechnologyOptions()
    const interiorOptionsHTML = await InteriorOptions()
    const wheelOptionsHTML = await WheelOptions()
    const buttonHTML = await saveCustomPackage()
    
    const composedHTML = `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__options">
                <h2>Colors</h2>
                ${colorOptionsHTML}
            </section>

            <section class="choices__options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
                </section>
                
                <section class="choices__options">
                <h2>Technologies</h2>
                ${technologyOptionsHTML}
            </section>
            
            <section class="choices__options">
            <h2>Wheels</h2>
            ${wheelOptionsHTML}
        </section>
            </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newCustomCarChoiceAdded", render)

render()