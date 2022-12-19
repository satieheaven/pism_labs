let translateMarks = () =>  {
    let translateMarks = new Map()
    translateMarks.set('1', "fail")
    translateMarks.set('2', "bad")
    translateMarks.set('3', "not bad")
    translateMarks.set('4', "good")
    translateMarks.set('5', "perfect")

    return translateMarks
}



let createTable = (xmlDoc) => {
    const tBody = document.getElementById('tBody')

    for (let i = 0; i < 3; i++) {
        tBody.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${i}</td>
                <td>${xmlDoc.getElementsByTagName('student')[i].childNodes[0].nodeValue}</td>
                <td>${translateMarks().get(xmlDoc.getElementsByTagName('grade')[i].childNodes[0].nodeValue)}</td>
            </tr>
        `)
        
    }
}