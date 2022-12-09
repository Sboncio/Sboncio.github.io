fetch("../data/ideas.json")
    .then(mockResponses => {
        return mockResponses.json();
    })
    .then(data => {
        //console.log(data[0].title)
        for (let i = 0; i < data.length; i++) {
            document.getElementById("projects").innerHTML +=
                `
                <br />
                    <div class="parallax_data" >
                        <h5>` + data[i].title + `</h5>
                        <hr />
                        ` + data[i].summary + `
                    </div>
                `
        }
    }
    )