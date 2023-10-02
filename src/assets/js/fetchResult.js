import {load} from "js-yaml";
import {parse} from "smol-toml";
import {refactorToml, refactorYaml} from "@/assets/js/checkFile";

export async function fetchWebsite(url) {
    let res = null;
    try {
        res = await fetch(url);
    } catch {
        return false;
    }
    if (!res.ok) {
        return false;
    }
    return res.text();
}

export function loadAsToml(fetchedContent) {
    let loadedContent = null;
    try {
        loadedContent = parse(fetchedContent);
    } catch {
        return false;
    }

    refactorToml(loadedContent);

    document.querySelector('head title').textContent = `${loadedContent.title.title} - PrettyHeroes`;
    document.querySelector("link[rel~='icon']").href = loadedContent.title.img;
    document.querySelector("meta[name='description']").content = loadedContent.title.catchphrase;
    document.querySelector("meta[name='og:title']").content = loadedContent.title.title;
    document.querySelector("meta[name='og:description']").content = loadedContent.title.catchphrase;

    let params = {
        '--cbg': loadedContent.colors.background,
        '--cwi': loadedContent.colors.widget,
        '--clk': loadedContent.colors.link,
        '--cho': loadedContent.colors.hover,
        '--ctt': loadedContent.colors.title,
        '--ctxt': loadedContent.colors.text
    }
    for (let elem in params) {
        if (params[elem] !== undefined) {
            document.documentElement.style.setProperty(elem, params[elem]);
        }
    }
    return loadedContent;
}

export function loadAsYaml(fetchedContent) {
    let loadedContent = null;
    try {
        loadedContent = load(fetchedContent);
    } catch {
        return false;
    }

    refactorYaml(loadedContent);

    let result = {
        title: {
            title: loadedContent.title,
            img: loadedContent.icon,
            catchphrase: "From Pronounce",
            name1: loadedContent.name,
            name2: ''
        },
        personal: {
            age: loadedContent.age,
            pronouns: loadedContent.pronouns,
            desc: "**Contacts :**<br/>",
        },
        colors: {
            bgimg: "",
        },
        urls: []
    };
    for (let elem in loadedContent.contacts) {
        result.personal.desc += ` - ${loadedContent.contacts[elem]}<br/>`;
    }
    for (let elem in loadedContent.urls) {
        let reg = new RegExp('^https?:\/\/([A-Za-z09\.]{3,})\/?.*$', 'gm');
        let found = reg.exec(loadedContent.urls[elem]);
        if (found === null) {
            found = ""
        } else {
            found = found[1];
        }
        result.urls.push({
            title: found,
            url: loadedContent.urls[elem]
        })
    }
    document.querySelector('head title').textContent = `${loadedContent.title} - PrettyHeroes`;
    document.querySelector("head link[rel~='icon']").href = loadedContent.icon;
    document.querySelector("head meta[name='description']").content = "From Pronounce";
    document.querySelector("head meta[name='og:title']").content = loadedContent.title;
    document.querySelector("head meta[name='og:description']").content = "From Pronounce";
    if (loadedContent.colors === undefined) {
        return result;
    }
    let params = {
        '--cbg': loadedContent.colors.background,
        '--cwi': loadedContent.colors.foreground,
        '--clk': loadedContent.colors.url.normal,
        '--cho': loadedContent.colors.url.hover,
        '--ctt': loadedContent.colors.name,
        '--ctxt': loadedContent.colors.info
    }
    for (let elem in params) {
        if (params[elem] !== undefined) {
            document.documentElement.style.setProperty(elem, params[elem]);
        }
    }
    return result;
}