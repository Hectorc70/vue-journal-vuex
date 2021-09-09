/* Es donde se esta almacenando la informacion (Es reactivo)*/


export  default ()=>({
        isLoading:true,
        entries:[
            {
                id: new Date().getTime(),
                date: new Date().toDateString(),
                text:"ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                picture:null,

            },
            {
                id: new Date().getTime()  + 1000,
                date: new Date().toDateString(),
                text:"ry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
                picture:null,

            },
            {
                id: new Date().getTime() + 2000,
                date: new Date().toDateString(),
                text:"ry. Lorem Ipsum has been the industry",
                picture:null,

            },
        ]
    })

