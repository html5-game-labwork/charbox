'esversion: 6'

let app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
})

app.renderer.view.style.position = "absolute"
app.renderer.view.style.display = "block"
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)
app.renderer.backgroundColor = 0xF5F5F5

esp.el("body", (el) => {
    el.appendChild(app.view)
})

PIXI.loader.add([
    "/assets/image/dog_face.png"
]).load(setup)

function setup() {
    let player = new PIXI.Sprite(PIXI.loader.resources["/assets/image/dog_face.png"].texture)
    app.stage.addChild(player)
}