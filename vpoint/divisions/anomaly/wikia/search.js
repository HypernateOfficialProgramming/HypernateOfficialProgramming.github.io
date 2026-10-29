var data = [
    { "InternalID": "1", "ID": "OBS-001", "Name": "test2", "Image": "", "Type": "rec", "Category": "astr", "DateObserved": "", "Location": "", "Division": "", "Summary": "hi", "Related": [], "Data": "" },
    { "InternalID": "2", "ID": "OBS-002", "Name": "test3", "Image": "", "Type": "rec", "Category": "astr", "DateObserved": "", "Location": "", "Division": "", "Summary": "3", "Related": [], "Data": "" },
    { "InternalID": "3", "ID": "OBS-003", "Name": "test4", "Image": "", "Type": "rec", "Category": "biol", "DateObserved": "", "Location": "", "Division": "", "Summary": "231", "Related": [], "Data": "" },
    {
        "InternalID": "000",
        "ID": "ARC-000",
        "Name": "The Test",
        "Image": "https://s0.2mdn.net/ads/richmedia/studio/60041268/60041268_20260722063858272_citybreak_istanbul_international_728x90_02.jpg",
        "Type": "arc",
        "Category": "tech",
        "DateObserved": "2026-10-25",
        "Location": "Terra",
        "Division": "Alpha-001",
        "Summary": "Hello, world!",
        "Related": [
            "1",
            "2",
            "81"
        ],
        "Data": "Hello, world!<br  />You are receiving this message from... a test document. Yeah. <br  /><br  />We're just testing the new document builder, nothing too fancy.<br  /><br  />Also, make sure not to let anyone else see this. This website is confidential."
    },
    {
        "InternalID": "4",
        "ID": "OBS-004",
        "Name": "Test, related entries",
        "Image": "",
        "Type": "rec",
        "Category": "tech",
        "DateObserved": "2026-10-25",
        "Location": "delta land",
        "Division": "john celeste",
        "Summary": "idfk",
        "Related": [
            "OBS-001",
            "OBS-002",
            "OBS-003"
        ],
        "Data": "Please no. These references have already gotten bad enough... Please...<br />I MAKE NO PROMISES, AHAHAHAAHAHAHAHAHAHAH<br />NOOOOOOOOOO!!!!!"
    }
];

const display = {
    astr: "Astronomical",
    atmo: "Atmospheric",
    tech: "Technological",
    biol: "Biological",
    thau: "Thaumaturgical",
    coal: "Coalition",
    corp: "Corporation",
    foun: "Foundation",
    coop: "Cooperative",
}

const idQuery = document.getElementById("id");
const catQuery = document.getElementById("cat");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const results = document.querySelector(".results");

const main = document.querySelector(".main");
const view = document.querySelector(".view");

const type = main.dataset.type;

async function getJsonData() {
    try {
        const response = await fetch('../data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const d = await response.json();

        console.log("Loaded JSON:", d);
        console.log("Is array:", Array.isArray(d));

        data = d;
    } catch (error) {
        console.error("Could not fetch JSON:", error);
    }
}

async function init() {
    await getJsonData();

    console.log("Loaded records:", data.length);
    console.log("Organizations:", data.filter(item => item.Type === "org"));
    console.log("Beacon Coalition:", data.find(item => item.ID === "ORG-003"));

    if (type == "org") {

        const matchResults = data.filter(item => {
            const typeMatches = item.Type === "org";

            return typeMatches;
        });

        matchResults.forEach(item => {
            const newDiv = document.createElement("button");
            newDiv.classList.add("result-item");
            newDiv.dataset.id = item.ID

            const heading = document.createElement("h1");
            heading.textContent = item.ID + " /// " + item.Name;

            const summary = document.createElement("p");
            summary.textContent = item.Summary;

            newDiv.append(heading, summary);
            results.append(newDiv);

            newDiv.addEventListener("click", () => {
                openDoc(item);
            })
        });

    } else {

        start.addEventListener("click", () => {
            const searchId = idQuery.value.trim().toLowerCase();
            const searchCat = catQuery.value.trim().toLowerCase();

            const matchResults = data.filter(item => {
                const idMatches =
                    searchId === "" ||
                    item.ID.toLowerCase().includes(searchId);

                const catMatches =
                    searchCat === "" ||
                    item.Category.toLowerCase().includes(searchCat);

                const typeMatches = item.Type === type;

                return idMatches && catMatches && typeMatches;
            });

            console.log(
                matchResults.map(item =>
                    String(item.InternalID).padStart(3, "0")
                )
            );

            results.innerHTML = "";

            matchResults.forEach(item => {
                const newDiv = document.createElement("button");
                newDiv.classList.add("result-item");
                newDiv.dataset.id = item

                const heading = document.createElement("h1");
                heading.textContent = item.ID + " /// " + item.Name;

                const summary = document.createElement("p");
                summary.textContent = item.Summary;

                newDiv.append(heading, summary);
                results.append(newDiv);

                newDiv.addEventListener("click", () => {
                    openDoc(item);
                })
            });
        });
    }

    stop.addEventListener("click", () => {
        main.style.display = "";
        view.style.display = "none";

        document.getElementById("title").textContent = "...";
        document.getElementById("doc").innerHTML = "";

        document.querySelector(".infobox-title").innerHTML = "...";
        document.querySelector(".infobox-image-inner").src = "../images/placeholder.png";

        document.getElementById("infobox-table-body").innerHTML = ""
    });

}

function addEntry(th, td) {
    const tri = document.createElement("tr")
    const thi = document.createElement("th")
    const tdi = document.createElement("td")
    thi.innerHTML = th
    tdi.innerHTML = td
    tri.append(thi, tdi)
    document.getElementById("infobox-table-body").append(tri)
}

function openDoc(item) {
    main.style.display = "none";
    view.style.display = "inline";

    document.getElementById("title").textContent = item.ID + " /// " + item.Name;
    document.getElementById("doc").innerHTML = item.Data;

    document.querySelector(".infobox-title").innerHTML = item.Name;
    document.querySelector(".infobox-image-inner").src = item.Image;

    addEntry("Category", display[item.Category]);

    if (type == "org") {
        addEntry("Relationship to Vectorpoint", item.Relation);
        addEntry("Known disposition", item.Disposition);
        addEntry("Known operational area", item.Area);
        addEntry("Known members", "<ul>" + item.Members.map(v => "<li>" + v + "</li>") + "</ul>");
        addEntry("Stated or observed objectives", item.Objective);
        addEntry("Information status", item.Status);
    } else {
        addEntry("First observed", item.DateObserved);
        addEntry("Location", item.Location);
        addEntry("Lead division", item.Division);
    }

    addEntry("Related records", "<ul>" + item.Related.map(v => "<li>" + v + "</li>") + "</ul>");
}

init();