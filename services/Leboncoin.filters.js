export function removeNoise(document) {
    document.firstChild.firstChild.remove()
    document.firstChild.getElementsByTagName('footer')[0].remove()
    document.firstChild.getElementsByTagName('noscript')[0].remove()
}