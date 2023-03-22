# Solution of JavaScript problem [vaxTrail]

You need to provide an array of object. Each object represents a single person's information. Each person will have a name age and a body temperature record. With this array of object call this function named vaxTrail and see the output .


function vaxTrail(infoContainer) {
    let A = [];
    let B = [];
    let C = [];
    let D = [];

    for (let i = 0; i < infoContainer.length; i++) {

        let info = infoContainer[i]

        if (info.age >= 20 && info.age <= 30 && info.temperature < 100) {
            A.push(info);
        } else if (info.age >= 31 && info.age <= 40 && info.temperature < 100) {
            B.push(info);
        } else if (info.age >= 41 && info.age <= 50 && info.temperature < 100) {
            C.push(info);
        } else {
            D.push(info);

        }
    }
    const sortByEvenAges = (a, b) => a.age % 2 === 0 ? (a.age - b.age) : -1;
    A.sort(sortByEvenAges);
    B.sort(sortByEvenAges);
    C.sort(sortByEvenAges);
    D.sort(sortByEvenAges);

    return { A, B, C, D };
}