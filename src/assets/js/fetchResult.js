import {load} from "js-yaml";
import {decode} from "toml-nodejs";

export function loadAsToml(fetchedContent) {
    let loadedContent = decode(fetchedContent);
    document.querySelector('head title').textContent = `${loadedContent.title.title} - PrettyHeroes`;
    document.querySelector("link[rel~='icon']").href = loadedContent.title.img;
    document.documentElement.style.setProperty('--cbg', loadedContent.colors.background);
    document.documentElement.style.setProperty('--cwi', loadedContent.colors.widget);
    document.documentElement.style.setProperty('--clk', loadedContent.colors.link);
    document.documentElement.style.setProperty('--cho', loadedContent.colors.hover);
    document.documentElement.style.setProperty('--ctt', loadedContent.colors.title);
    document.documentElement.style.setProperty('--ctxt', loadedContent.colors.text);
    document.getElementsByTagName("body")[0]
        .style.setProperty(
        'background', `url('${loadedContent.colors.bgimg}') no-repeat center, var(--cbg)`);
    return loadedContent;
}

export function loadAsYaml(fetchedContent) {
    let loadedContent = load(fetchedContent);
    let result = {
        title: {
            title: loadedContent.title,
            img: loadedContent.icon,
            name1: loadedContent.name,
            name2: ''
        },
        personal: {
            age: loadedContent.age,
            pronouns: loadedContent.pronouns,
            desc: "Contacts :<br/>",
        },
        urls: []
    };
    for (let elem in loadedContent.contacts) {
        result.personal.desc += `- ${loadedContent.contacts[elem]}<br/>`;
    }
    for (let elem in loadedContent.urls) {
        result.urls.push({
            title: `Link ${elem}`,
            url: loadedContent.urls[elem]
        })
    }
    document.querySelector('head title').textContent = `${loadedContent.title} - PrettyHeroes`;
    document.querySelector("link[rel~='icon']").href = loadedContent.icon;
    document.documentElement.style.setProperty('--cbg', loadedContent.colors.background);
    document.documentElement.style.setProperty('--cwi', loadedContent.colors.foreground);
    document.documentElement.style.setProperty('--clk', loadedContent.colors.url.normal);
    document.documentElement.style.setProperty('--cho', loadedContent.colors.url.hover);
    document.documentElement.style.setProperty('--ctt', loadedContent.colors.name);
    document.documentElement.style.setProperty('--ctxt', loadedContent.colors.info);
    document.getElementsByTagName("body")[0]
        .style.setProperty(
        'background', `var(--cbg)`);

    return result;
}