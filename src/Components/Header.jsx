import { useState, useEffect } from "react"
import axios from "axios"

export default function Header(){
    const [header, setHeader] = useState('')
    const [description, setDesc] = useState('')

    useEffect(() => {
        axios.get('https://api.sheety.co/ca8c3dbf07a7f25c4580d99a5bb63100/copywriting/sheet1')
        .then(response => {
            setHeader(response.data.sheet1[0].header1)
            setDesc(response.data.sheet1[0].description1)
        })
    },[])

    return (
        <>
<section class="bg-center bg-no-repeat bg-[url('https://tandtmeats.com/wp-content/uploads/2021/06/parallax-51.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{header}</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{description}</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#produk" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Pesan sekarang
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
        </div>
    </div>
</section>
        </>
    )
}