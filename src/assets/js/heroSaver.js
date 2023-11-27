import {parse, stringify} from "smol-toml";
import {tomlToHero, yamlToHero} from "@/assets/js/heroChecker";
import {load} from "js-yaml";

export function copyHero(res) {
    navigator.clipboard.writeText(stringify(res)).then(() => alert('Copied successfully !'));
    return true;
}

export function saveHero(hero) {
    let element = document.createElement('a');
    element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(stringify(hero.getObject())));
    element.setAttribute('download', "hero.toml");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    return true;
}

export function loadHero(hero) {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            let content = readerEvent.target.result;
            let obj = null
            switch (file.type) {
                case "application/toml":
                    try {
                        obj = parse(content);
                        hero.from(tomlToHero(obj));
                        break;
                    } catch {
                        alert("Invalid toml file and/or content. Please try again.");
                        break;
                    }
                case "application/x-yaml":
                    try {
                        obj = load(content);
                        hero.from(yamlToHero(obj));
                        break;
                    } catch {
                        alert("Invalid yaml file and/or content. Please try again.");
                        break;
                    }
                default:
                    alert("Invalid file and/or content. Please try with either a toml or yaml file.");
                    break;
            }
        }
    }
    input.click();
}

export function resetHero(hero) {
    hero.reset();
}