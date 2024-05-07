import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";
import hostInfo from "@/assets/json/hostInfo.json";

export function defineHeader(title, img, desc) {
    document.querySelector('head title').textContent = `${title} - ${hostInfo.appName}`;
    document.querySelector("link[rel~='icon']").href = img;
    document.querySelector("meta[name='description']").content = desc;
    document.querySelector("meta[name='og:title']").content = `${title} - ${hostInfo.appName}`;
    document.querySelector("meta[name='og:description']").content = desc;
}

export function defFil(color) {
    let rgb = hexToRgb(color);
    if (rgb != null) {
        let color = new Color(rgb[0], rgb[1], rgb[2]);
        let solver = new Solver(color);
        document.documentElement.style.setProperty('--fil', solver.solve().filter);
    } else {
        document.documentElement.style.setProperty('--fil', "none");
    }
}

export function goUp() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

export function changeLoc(href, redirect = true) {
    let a = document.createElement("a");
    a.href = href;
    if (redirect) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    }
    a.click();
}