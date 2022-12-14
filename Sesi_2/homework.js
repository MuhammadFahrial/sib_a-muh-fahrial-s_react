const videoData = [
    {   
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    },
    {
        name: 'Revered Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'biliard room': false},
            {library: false}
        ]
    }
]

// const flatenAndFilter = (suspect) => {
//         return _.reduce(
//             suspect.rooms,
//             (memo, room) => {
//             _.each(room, (value, key) => {
//             if (!value) memo.push(key);
//             });
//         return memo;
//         },
//         []
//     );
// };

// const flattenedNewDevelopment = _.map(videoData, flatenAndFilter);
// console.log(flattenedNewDevelopment)

// let presentTrue = videoData.filter((videoData_) => videoData_.present)
// console.log(presentTrue.length)
// console.log(presentTrue)

const filteredData = videoData.filter((video) => {
    return video.present
})

const dataFilter = filteredData.map(data => {
    let name = data.name.toString()
    let present = data.present.toString()
    let rooms = data.rooms

    let obj = {
        nama: name,
        present: present,
        rooms: rooms
    }
    return obj
})

console.log(dataFilter)

// videoData.forEach(element=>{
//     if(element.rooms[0].kitchen==false && element.present==true){
//         console.log(element.name)
//     }
// })
