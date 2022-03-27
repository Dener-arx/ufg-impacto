





async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function getData(Url) {
    jsondata = await getJson(Url)
    console.log(jsondata);
    return jsondata;
}
