import {Hero} from "@/assets/js/heroFactory";

export function tomlToHero(content) {
    let hero = new Hero();
    hero.title.pronouns = [];
    hero.perso.flags = [];
    hero.urls.linksList = []
    let masterKeys = Object.keys(content);
    if (masterKeys.includes("title")) {
        Object.keys(content.title).forEach(
            elem => {
                switch (elem) {
                    case "title":
                        hero.title.title = content.title["title"];
                        break;
                    case "catchphrase":
                        hero.title.catchphrase = content.title["catchphrase"];
                        break;
                    case "pronouns":
                        let pros = content.title["pronouns"];
                        for (let e in pros) {
                            hero.title.pronouns.push(pros[e]);
                        }
                        break;
                    case "img":
                        hero.title.img = content.title["img"];
                        break;
                    default:
                        break;
                }
            }
        )
    }
    if (masterKeys.includes("personal")) {
        Object.keys(content.personal).forEach(
            elem => {
                switch (elem) {
                    case "name1":
                        hero.perso.name1 = content.personal["name1"];
                        break;
                    case "name2":
                        hero.perso.name2 = content.personal["name2"];
                        break;
                    case "age":
                        hero.perso.age = content.personal["age"];
                        break;
                    case "flags":
                        let flags = content.personal["flags"];
                        for (let e in flags) {
                            hero.perso.flags.push(flags[e]);
                        }
                        break;
                    case "desc":
                        hero.perso.desc = content.personal["desc"]
                        break;
                    case "work":
                        hero.perso.work = content.personal["work"]
                        break;
                    case "timezone":
                        hero.perso.timezone = content.personal["timezone"]
                        break;
                    case "location":
                        hero.perso.location = content.personal["location"]
                        break;
                    default:
                        break;
                }
            }
        )
    }

    if (masterKeys.includes("colors")) {
        Object.keys(content.colors).forEach(
            elem => {
                switch (elem) {
                    case "bgimg":
                        hero.colors.bgimg = content.colors["bgimg"];
                        break;
                    case "background":
                        hero.colors.background = content.colors["background"];
                        break;
                    case "widget":
                        hero.colors.widget = content.colors["widget"];
                        break;
                    case "link":
                        hero.colors.link = content.colors["link"];
                        break;
                    case "hover":
                        hero.colors.hover = content.colors["hover"];
                        break;
                    case "title":
                        hero.colors.title = content.colors["title"];
                        break;
                    case "text":
                        hero.colors.text = content.colors["text"];
                        break;
                    default:
                        break;
                }
            }
        )
    }

    if (masterKeys.includes("urls")) {
        let links = content.urls;
        for (let e in links) {
            if (links[e].hasOwnProperty("title") && links[e].hasOwnProperty("url")) {
                hero.urls.linksList.push({
                    title: links[e].title
                    , url: links[e].url
                })
            }
        }
    }

    return hero;
}

export function yamlToHero(content) {
    let hero = new Hero();
    hero.urls.linksList = [];
    hero.title.pronouns = [];
    hero.perso.flags = [];
    //hero.title.catchphrase = "From Pronounce";
    hero.colors.bgimg = "/bg/pro.png";
    if (content.hasOwnProperty("title")) {
        hero.title.title = content.title
    }
    if (content.hasOwnProperty("icon")) {
        hero.title.img = content.icon
    }
    if (content.hasOwnProperty("name")) {
        hero.perso.name1 = content.name
    }
    if (content.hasOwnProperty("age")) {
        hero.perso.age = content.age
    }
    if (content.hasOwnProperty("pronouns")) {
        let pros = content.pronouns;
        for (let e in pros) {
            hero.title.pronouns.push(pros[e]);
        }
    }
    if (content.hasOwnProperty("contacts")) {
        let desc = "#### Contacts :<br/>\n";
        for (let elem in content.contacts) {
            desc += `- ${content.contacts[elem]}\n`;
        }
        hero.perso.desc = desc;
    }
    if (content.hasOwnProperty("urls")) {
        for (let elem in content.urls) {
            let reg = new RegExp('^(?:https|http)?:\/?\/?([A-Za-z09\.]{3,})\/?.*$', 'gm');
            let found = reg.exec(content.urls[elem]);
            if (found === null) {
                found = `Link ${parseInt(elem) + 1}`;
            } else {
                found = found[1];
            }
            hero.urls.linksList.push({title: found, url: content.urls[elem]});
        }
    }

    if (content.hasOwnProperty("colors")) {
        let ccols = content.colors;
        Object.keys(ccols).forEach(
            elem => {
                switch (elem) {
                    case "background":
                        hero.colors.background = ccols.background;
                        break;
                    case "foreground":
                        hero.colors.widget = ccols.foreground;
                        //hero.colors.link = ccols.foreground;
                        break;
                    case "url":
                        if (ccols.url.hasOwnProperty("normal")) {
                            hero.colors.link = ccols.url.normal;
                        }
                        if (ccols.url.hasOwnProperty("hover")) {
                            hero.colors.hover = ccols.url.hover;
                        }
                        break;
                    case "hover":
                        hero.colors.hover = ccols.hover;
                        break;
                    case "name":
                        hero.colors.title = ccols.name;
                        break;
                    case "info":
                        hero.colors.text = ccols.info;
                        break;
                }
            });
    }
    return hero;
}