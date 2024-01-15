import axios from "axios"
import { useState, useEffect } from "react"
import { FormatRupiah } from "@arismun/format-rupiah"

export default function Produk(){
    const [item, setItem] = useState('')
    const items = Object.values(item)

    useEffect(() => {
        axios.get('https://api.sheety.co/ca8c3dbf07a7f25c4580d99a5bb63100/anugerahmeat/sheet1')
        .then(response => {
            setItem(response.data.sheet1)
        })
    },[])

    return (
        <>
    <div className="mx-auto max-w-screen-xl text-center py-16 lg:py-24" id="produk">
    <h3 className="text-4xl font-extrabold mb-10 tracking-tight leading-none text-slate-900 md:text-3xl lg:text-4xl">
       Produk kami
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
    {items.map((data, i) => (
    <center>
    <div className="relative justify-center flex w-full max-w-xs flex-col 
    overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
  <img className="object-cover w-full h-full" 
    src={data.foto} alt="product image" />
  </div>
  <div className="mt-4 px-5 pb-5">
      <h5 className="text-xl text-left font-semibold tracking-tight text-slate-900">{data.nama}</h5>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-2xl font-bold text-slate-900">
        <FormatRupiah value={data.harga}/> / {data.satuan}</span>
      </p>
    </div>
    <a href={`https://wa.me/6281285100021?text=Halo%20saya%20mau%20order%20${data.nama}`} 
    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center 
    text-sm font-medium text-white hover:bg-gray-700 
    focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Pesan</a>
    </div>
    </div>
    </center>
    ))}
    </div>
    <a href="" className="justify-center mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none 
    hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 rounded-xl
    dark:focus:ring-gray-700">Lihat produk selengkapnya</a>
    </div>
        </>
    )
}