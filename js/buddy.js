const loadData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => setContent(data))
}
const getId = (elementId) => {
    return document.getElementById(elementId);
}
const setContent = (data) => {
    const firstData = data.results[0];
    getId('gender').innerText = firstData.gender;
    getId('cell').innerText = firstData.cell;
    getId('img').src = firstData.picture.large;
    getId('name').innerText = ` ${firstData.name.title} ${firstData.name.first} ${firstData.name.last}`;
}