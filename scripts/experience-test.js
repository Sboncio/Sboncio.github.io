fetch("../data/experience-data.json")
    .then(mockResponses => {
        return mockResponses.json();
    })
    .then(data => {



        for (let i = 0; i < data.length; i++) {
            let skills_list = data[i].skills;
            let skills_string = "";
            for (let j = 0; j < data[i].skills.length; j++) {
                skills_string = skills_string + " " + skills_list[j] + " ";
                if (j != (data[i].skills.length - 1)) {
                    skills_string = skills_string + "|";
                }
            }
            console.log(skills_string)

            document.getElementById("experiences").innerHTML += `
            <div class='parallax_data'>
            <h5>`+ data[i].title + `</h5>` +
                `<br />` + data[i].location +
                `<br />` + data[i].date +
                `<br />` + data[i].description +
                `<br /> <br />` +
                `Skills Used:` +
                `<br />` + skills_string +
                `</div>` +
                `<hr />`
        }
    }
    )