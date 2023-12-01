'use strict';

export class HeroTitleO {
    title;
    img;
    catchphrase;
    pronouns;

    constructor() {
        this.title = "";
        this.img = "";
        this.catchphrase = "";
        this.pronouns = ["They/them"];
    }

    titleIsEmpty() {
        return this.title === '';
    }

    catchIsEmpty() {
        return this.catchphrase === '';
    }

    getObject() {
        return {
            title: this.title,
            img: this.img,
            catchphrase: this.catchphrase,
            pronouns: this.pronouns
        }
    }
}

export class HeroPersoO {
    name1;
    name2;
    age;
    desc;
    flags;
    work;
    timezone;
    location;

    constructor() {
        this.name1 = "";
        this.name2 = "";
        this.age = "";
        this.desc = "";
        this.flags = ["foo"];
        this.work = "";
        this.timezone = "";
        this.location = "";
    }

    name1IsEmpty() {
        return this.name1 === '';
    }

    name2IsEmpty() {
        return this.name2 === '';
    }

    ageIsEmpty() {
        return this.age === '';
    }

    descIsEmpty() {
        return this.desc === '';
    }

    workIsEmpty() {
        return this.work === '';
    }

    timezoneIsEmpty() {
        return this.timezone === "";
    }

    locationIsEmpty() {
        return this.location === '';
    }

    getObject() {
        return {
            name1: this.name1,
            name2: this.name2,
            age: this.age,
            desc: this.desc,
            flags: this.flags,
            work: this.work,
            timezone: this.timezone,
            location: this.location
        }
    }
}

export class HeroColorsO {

    background;
    widget;
    link;
    hover;
    title;
    text;
    bgimg;

    constructor() {
        this.background = "";
        this.widget = "";
        this.link = "";
        this.hover = "";
        this.title = "";
        this.text = "";
        this.bgimg = "";
    }

    noBgImage() {
        return this.bgimg === '';
    }

    assertColorValid(cl) {
        let reg = new RegExp("^\#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8}|[0-9a-fA-F]{3}|[0-9a-fA-F]{4})$");
        return reg.test(cl);
    }

    getObject() {
        return {
            background: this.background,
            widget: this.widget,
            link: this.link,
            hover: this.hover,
            title: this.title,
            text: this.text,
            bgimg: this.bgimg
        }
    }
}

export class HeroLinksO {
    linksList

    constructor() {
        this.linksList = [{
            url: "",
            title: "Link"
        }];
    }
}

export class Hero {
    title;
    perso;
    colors;
    urls;

    constructor() {
        this.title = new HeroTitleO();
        this.perso = new HeroPersoO();
        this.colors = new HeroColorsO();
        this.urls = new HeroLinksO();
    }

    from(hero) {
        this.title = hero.title
        this.perso = hero.perso
        this.colors = hero.colors
        this.urls = hero.urls
    }

    getObject() {
        return {
            title: this.title.getObject(),
            personal: this.perso.getObject(),
            colors: this.colors.getObject(),
            urls: this.urls.linksList
        }
    }

    reset() {
        this.title = new HeroTitleO();
        this.perso = new HeroPersoO();
        this.colors = new HeroColorsO();
        this.urls = new HeroLinksO();
    }
}