import {Color, hexToRgb, Solver} from "@/assets/js/cssColor";
import homeInfo from "@/assets/json/homeInfo.json";

export function defineHeader(title, img, desc) {
    document.querySelector('head title').textContent = `${title} - ${homeInfo.appName}`;
    document.querySelector("link[rel~='icon']").href = img;
    document.querySelector("meta[name='description']").content = desc;
    document.querySelector("meta[name='og:title']").content = `${title} - ${homeInfo.appName}`;
    document.querySelector("meta[name='og:description']").content = desc;
}

export function defFil(color) {
    let rgb = hexToRgb(color);
    if (rgb != null) {
        let color = new Color(rgb[0], rgb[1], rgb[2]);
        let solver = new Solver(color);
        document.documentElement.style.setProperty('--fil', solver.solve().filter);
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