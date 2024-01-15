import axios from "axios"
import { useState, useEffect } from "react"
export default function Body(){
    const [text, setText] = useState('')
    const [header, setHead] = useState('')
    useEffect(() => {
        axios.get('https://api.sheety.co/ca8c3dbf07a7f25c4580d99a5bb63100/mengapaMemilihKami/sheet1')
          .then(response => {
            setText(response.data.sheet1);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

          axios.get('https://api.sheety.co/ca8c3dbf07a7f25c4580d99a5bb63100/copywriting/sheet1')
          .then(response => {
            setHead(response.data.sheet1[0].header2);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          
      }, []); 

    const teks = Object.values(text)
    console.log('ini teks', teks)
    return (
        <>
        <div className="container mx-auto px-4" id="body">
        <div className="mx-auto max-w-screen-xl text-center py-16 lg:py-24">
        <h3 className="text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-3xl lg:text-4xl">
        Mengapa memilih Anugrah Meat?
        </h3>
        
        <div class="grid lg:grid-cols-2 mt-16 md:grid-cols-1 gap-4">
        {teks.map((data, i) => (
        <div className="mt-5" key={i}>
        <h3 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-slate-900 md:text-xl lg:text-2xl">
       {data.text}
        </h3>
        <p className="text-xl">{data.description}</p>  
        </div>
        ))}
        </div>
        </div>
        </div>

        <div className="bg-center text-center bg-[url('https://tandtmeats.com/wp-content/uploads/2021/06/parallax-51.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-26">
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-3xl">
        {header}</h1>
        </div>
        </div>   
        </>
    )
}