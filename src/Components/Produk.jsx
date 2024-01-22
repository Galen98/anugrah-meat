import axios from "axios"
import { useState, useEffect } from "react"
import { FormatRupiah } from "@arismun/format-rupiah"


export default function Produk(){
    const [item, setItem] = useState('')
    const [nama, setNama] = useState('')
    const [no_wa, setNowa] = useState('')
    const items = Object.values(item)

    useEffect(() => {
        axios.get('https://sheetdb.io/api/v1/sll1z5fjphhoo')
        .then(response => {
            setItem(response.data)
            console.log('ini item', response.data)
        })
    },[])

    const submitPesan = (namaitem) => {
      axios.post('https://api.apispreadsheets.com/data/fR5fQqf9f1qebCOC/',{
        nama:nama,
        no_wa:no_wa,
        pesanan:namaitem
      }).then(response => {
        window.location.href = `https://wa.me/6281285100021?text=Halo,%20Anugrah%20meat,%20nama%20saya%20${nama}%20mau%20order%20${namaitem}`;
      }).catch(error => {
        console.log(error)
      })
      setNama('')
      setNowa('')
    }

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
    overflow-hidden rounded-lg border border-gray-100 bg-white shadow-0 border-0">
  <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-md">
  <img className="object-cover w-full h-full" 
    src={data.foto} alt={data.nama} />
  </div>
  <div className="mt-4 px-5 pb-5">
      <h5 className="text-xl font-light text-left tracking-tight text-slate-900">{data.nama}</h5>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-xl font-bold text-slate-900">
        <FormatRupiah value={data.Harga}/></span>
        <span class="text-md text-slate-900"> / {data.Satuan}</span>
      </p>
    </div>
    <button onClick={()=>document.getElementById(`${data.id}`).showModal()}
    className="w-full flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-center 
    text-sm font-medium text-white hover:bg-gray-700 
    focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Pesan</button>
    </div>
    </div>
   
  <dialog id={data.id} className="modal modal-bottom sm:modal-middle" key={i}>
  <div className="modal-box bg-white">
    <h3 className="font-bold text-xl text-slate-900">Input data diri pemesan</h3>
    <div className="py-4 mt-5">
      <input type="text" className="input input-bordered bg-white w-full max-w-xs" placeholder="Masukan nama anda"
        onChange={(nama) => setNama(nama.target.value)} required
      />
      <input type="number" className="input input-bordered bg-white w-full max-w-xs mt-5" placeholder="Masukan nomor WA anda"
        onChange={(no_wa) => setNowa(no_wa.target.value)} required
      />
      <p className="mt-4">Pesanan: {data.nama}</p>
    </div>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn btn-neutral mr-2 text-white"
        onClick={() => submitPesan(data.nama)}>Kirim</button>
        <button className="btn btn-ghost">Batal</button>
      </form>
    </div>
  </div>
  </dialog>
    </center>
    ))}
    </div>
    <br/>
    <br/>
    <a href="/" className="justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none 
    hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
    dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 rounded-full
    dark:focus:ring-gray-700">Lihat produk selengkapnya</a>
    </div>
        </>
    )
}