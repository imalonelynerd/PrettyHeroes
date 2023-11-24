import {parse, stringify} from "smol-toml";
import {refactorToml} from "@/assets/js/checkFile";

export function copyHero(res) {
    navigator.clipboard.writeText(stringify(res)).then(() => alert('Copied successfully !'));
    return true;
}

// TODO : Make Hero object

export function saveHero(res) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringify(res)));
    element.setAttribute('download', "hero.toml");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    return true;
}

export function loadHero(res) {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = readerEvent => {
            let content = readerEvent.target.result;
            let obj = null
            try {
                obj = parse(content);
            } catch {
                alert("Invalid file type and/or content. Please try again");
                return false;
            }
            refactorToml(obj);
            res.urls = obj.urls;
            res.personal = obj.personal;
            res.personal.flags = obj.personal.flags;
            res.colors = obj.colors;
            res.title = obj.title;
        }
    }
    input.click();
}

export function resetHero(res) {
    res.title.title = ""
    res.title.img = ""
    res.title.catchphrase = ""
    res.title.pronouns = [""]

    res.personal.name1 = ""
    res.personal.name2 = ""
    res.personal.age = ""
    res.personal.desc = ""
    res.personal.flags = [""]
    res.personal.work = ""
    res.personal.timezone = ""
    res.personal.location = ""

    res.colors.background = ""
    res.colors.widget = ""
    res.colors.link = ""
    res.colors.hover = ""
    res.colors.title = ""
    res.colors.text = ""
    res.colors.bgimg = ""

    res.urls = [{
        title: "",
        url: ""
    }]
}