const inputs = {
    id: document.getElementById("id"),
    name: document.getElementById("name"),
    img: document.getElementById("img"),
    reg: document.getElementById("reg"),
    cat: document.getElementById("cat"),
    observed: document.getElementById("observed"),
    location: document.getElementById("location"),
    division: document.getElementById("division"),
    summary: document.getElementById("summary"),
    cato: document.getElementById("cato"),
    relation: document.getElementById("relation"),
    disposition: document.getElementById("disposition"),
    area: document.getElementById("area"),
    members: document.getElementById("members"),
    objective: document.getElementById("objective"),
    status: document.getElementById("status"),
    related: document.getElementById("related"),
    data: document.getElementById("data")
};

const start = document.getElementById("start");
const json = document.getElementById("json");

start.addEventListener("click", () => {
    console.clear();
    console.log("begin build");

    const id = inputs.id.value;
    const name = inputs.name.value;
    const img = inputs.img.value;
    const reg = inputs.reg.value;
    const cat = inputs.cat.value;
    const observed = inputs.observed.value;
    const location = inputs.location.value;
    const division = inputs.division.value;
    const summary = inputs.summary.value;
    const cato = inputs.cato.value;

    const relation = inputs.relation.value;
    const disposition = inputs.disposition.value;
    const area = inputs.area.value;
    const members = inputs.members.value;
    const objective = inputs.objective.value;
    const status = inputs.status.value;
    const related = inputs.related.value;
    const data = inputs.data.value;

    console.log("id:", id);
    console.log("name:", name);
    console.log("img:", img);
    console.log("reg:", reg);

    if (reg != "org") {
        console.log("cat:", cat);
        console.log("observed:", observed);
        console.log("location:", location);
        console.log("division:", division);
    } else {
        
        console.log("relation:", location);
        console.log("cato:", cato);
        console.log("disposition:", disposition);
        console.log("members:", members);
        console.log("status:", status);
    }

    console.log("related:", related);
    console.log("data:", data);

    const prefixes = {
        rec: "OBS-",
        ano: "PHEN-",
        arc: "ARC-"
    };

    const recId = (prefixes[reg] ?? "ORG-") + id.padStart(3, "0");
    console.log("id, display:", recId);

    const relatedA = related
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);
    console.log("id, display:", relatedA);

    const membersA = members
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);
    console.log("id, display:", membersA);
    let dataA;
    if (reg == "org") {
        dataA = {
            InternalID: id,
            ID: recId,
            Name: name,
            Image: img,
            Type: reg,
            Category: cato,
            Relation: relation,
            Disposition: disposition,
            Area: area,
            Members: membersA,
            Objective: objective,
            Status: status,
            Related: relatedA,
            Data: data
        };
    } else {
        dataA = {
            InternalID: id,
            ID: recId,
            Name: name,
            Image: img,
            Type: reg,
            Category: cat,
            DateObserved: observed,
            Location: location,
            Division: division,
            Summary: summary,
            Related: relatedA,
            Data: data
        };
    }

    console.log(dataA);

    download(dataA, `${recId}.json`);
})

json.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const jsonObject = JSON.parse(e.target.result);
            inputs.id.value = jsonObject.InternalID
            inputs.name.value = jsonObject.Name
            inputs.img.value = jsonObject.Image
            inputs.reg.value = jsonObject.Type
            if (inputs.reg.value == "org") {
                inputs.cato.calue = jsonObject.Category
                inputs.relation.value = jsonObject.Relation
                inputs.disposition.value = jsonObject.Disposition
                inputs.members.value = jsonObject.Members.join(', ');
                inputs.status.value = jsonObject.Status
            } else {
                inputs.cat.value = jsonObject.Category
                inputs.observed.value = jsonObject.DateObserved
                inputs.location.value = jsonObject.Location
                inputs.division.value = jsonObject.Division
                inputs.summary.value = jsonObject.Summary
            }
            inputs.related.value = jsonObject.Related.join(', ');
            inputs.data.value = jsonObject.Data;

            update();

        } catch (error) {
            alert("Invalid JSON file structure.");
        }
    };

    reader.readAsText(file);
});

inputs.reg.addEventListener('change', function (event) {
    update();
});

function download(data, filename = 'data.json') {
    const jsonString = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

function update() {
    if (inputs.reg.value == "org") {
        document.getElementById("inp-non-org").style.display = 'none';
        document.getElementById("inp-org").style.display = '';
    } else {
        document.getElementById("inp-non-org").style.display = '';
        document.getElementById("inp-org").style.display = 'none';
    }
}

update();