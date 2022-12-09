fetch("../data/badge-data.json")
    .then(mockResponses => {
        return mockResponses.json();
    })
    .then(data => {
        //console.log(data[0].title)
        //document.getElementById("badges").innerHTML = ''
        let badges = ""
        console.log(document.getElementById("badges").innerHTML)
        for (let i = 0; i < data.length; i++) {

            badges += '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="' + data[i] + '" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" src="//cdn.credly.com/assets/utilities/embed.js"></script>\n'

            console.log(badges)
        }
        console.log(document.getElementById("badges").innerHTML)
        //document.getElementById("badges").innerHTML = badges
    }
    )