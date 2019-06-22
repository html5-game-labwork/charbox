'esversion: 6';

var esp = {}

// COMPONENT HTML
esp.el = (name, callback) => {
    var el = document.querySelector(name)
    callback(el)
}