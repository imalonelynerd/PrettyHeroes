import {parse} from "smol-toml";
import {load} from "js-yaml";
import {tomlToHero, yamlToHero} from "@/assets/js/heroChecker";
import {defFil, defineHeader} from "@/assets/js/miscTools";

export async function fetchWebsite(url) {
    let res;
    try {
        res = await fetch(url);
    } catch {
        return null;
    }
    if (!res.ok) {
        return null;
    }
    return res.text();
}

export function loadHeroFromText(fetchedContent, type, noColor) {
    let loadedContent = null;
    let hero;
    switch (type) {
        case "toml":
            try {
                loadedContent = parse(fetchedContent);
            } catch {
                return null;
            }
            hero = tomlToHero(loadedContent);
            break;
        case "yaml":
            try {
                loadedContent = load(fetchedContent);
            } catch {
                return null;
            }
            hero = yamlToHero(loadedContent);
            break;
    }
    if (hero === null) {
        return null;
    }

    defineHeader(hero.title.title, hero.title.img, hero.title.catchprase);

    if (!noColor) {
        let params = {
            '--cbg': hero.colors.background,
            '--cwi': hero.colors.widget,
            '--clk': hero.colors.link,
            '--cho': hero.colors.hover,
            '--ctt': hero.colors.title,
            '--ctxt': hero.colors.text,
        }
        for (let elem in params) {
            document.documentElement.style.setProperty(elem, params[elem]);
        }
        defFil(hero.colors.title);
    }
    return hero;
}