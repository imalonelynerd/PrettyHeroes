import {parse, stringify} from "smol-toml";
import {tomlToHero, yamlToHero} from "@/assets/js/heroChecker";
import {load} from "js-yaml";
import {defFil} from "@/assets/js/miscTools";

export function copyHero(res) {
    navigator.clipboard.writeText(stringify(res)).then(() => alert('Hero copied successfully !'));
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
                        //alert('Hero loaded successfully !')
                        let params = {
                            '--cbg': hero.colors.background,
                            '--cwi': hero.colors.widget,
                            '--clk': hero.colors.link,
                            '--cho': hero.colors.hover,
                            '--ctt': hero.colors.title,
                            '--ctxt': hero.colors.text
                        }
                        for (let elem in params) {
                            if (params[elem] !== undefined) {
                                document.documentElement.style.setProperty(elem, params[elem]);
                            }
                        }
                        defFil(hero.colors.title)
                        break;
                    } catch {
                        alert("Invalid toml file and/or content. Please try again.");
                        break;
                    }
                case "application/x-yaml":
                    try {
                        obj = load(content);
                        hero.from(yamlToHero(obj));
                        //alert('Pronounce file loaded successfully !');
                        let params = {
                            '--cbg': hero.colors.background,
                            '--cwi': hero.colors.widget,
                            '--clk': hero.colors.link,
                            '--cho': hero.colors.hover,
                            '--ctt': hero.colors.title,
                            '--ctxt': hero.colors.text
                        }
                        for (let elem in params) {
                            if (params[elem] !== undefined) {
                                document.documentElement.style.setProperty(elem, params[elem]);
                            }
                        }
                        defFil(hero.colors.title)
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