export function refactorToml(content) {
    let urlKeys = ["title", "url"];
    let checkedKeys = [
        {
            "categ": "title",
            "check": ["title", "catchphrase", "img", "pronouns"]
        },
        {
            "categ": "personal",
            "check": ["name1", "name2", "age", "flags", "desc", "timezone", "work", "location"]
        }, {
            "categ": "colors",
            "check": ["bgimg", "background", "widget", "link", "hover", "title", "text"]
        }
    ];

    checkedKeys.forEach(keyCheck => {
        keyCheck.check.forEach(key => {
            if (!content[keyCheck.categ].hasOwnProperty(key)) {
                if (["pronouns", "flags"].includes(key)) {
                    content[keyCheck.categ][key] = [];
                } else {
                    content[keyCheck.categ][key] = "";
                }
            }
        })
    })

    if (!content.hasOwnProperty("urls")) {
        content["urls"] = []
    }

    for (let elem in content.urls) {
        urlKeys.forEach(key => {
            if (!content.urls[elem].hasOwnProperty(key)) {
                content.urls[elem][key] = "";
            }
        })
    }
}

export function refactorYaml(content) {
    let rootKeys = ["title", "icon", "name", "age", "pronouns", "contacts", "urls"];
    let colorKeys = ["background", "background", "name", "info"];
    let urlKeys = ["normal", "hover"];

    rootKeys.forEach(rootKey => {
        if (!content.hasOwnProperty(rootKey)) {
            content[rootKey] = "";
        }
    })

    if (!content.hasOwnProperty("colors")) {
        content["colors"] = undefined;
    } else {
        colorKeys.forEach(colorKey => {
            if (!content.colors.hasOwnProperty(colorKey)) {
                content.colors[colorKey] = undefined;
            }
        })

        if (!content.colors.hasOwnProperty("urls")) {
            content.colors["urls"] = undefined;
        } else {
            urlKeys.forEach(urlKey => {
                if (!content.colors.urls.hasOwnProperty(urlKey)) {
                    content.colors.urls[urlKey] = undefined;
                }
            })
        }
    }
}