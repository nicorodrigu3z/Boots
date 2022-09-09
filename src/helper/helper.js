const productos =[
        {
         id: 1,
         image:"http://http2.mlstatic.com/D_659774-MLA31603476762_072019-O.jpg",
         title:"Shampoo",
         precio:'$1300'
        },
        {
         id:2, 
         image:"https://farmacityar.vteximg.com.br/arquivos/ids/205340-1000-1000/150793_acondicionador-max-pro-v-restauracion-x-200-ml_imagen-1.jpg?v=637412425280600000",
         title:"Acondicionador",
         precio:'$2500'
        },
        {
         id: 3,
         image:"https://m.media-amazon.com/images/I/71zxIbhXi+L._SL1500_.jpg",
         title:"Keratina",
         precio:'$3000'
        },
    
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
        reject( error => console.log(error))
    }, 3000)
})

export default getFetch;