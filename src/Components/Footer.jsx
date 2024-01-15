export default function Footer(){
    return(
        <>
<footer className="bg-white text-slate-900 rounded-lg dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://i.ibb.co/0QGHzY4/Master-Logo-Anugrah-Meet-2-1-page-0001.jpg" className="h-24 rounded" alt="Flowbite Logo" />
                <p className="text-xl font-bold">Alamat: Ruko Villa Santika Jaya,<br/> No 5, Depok</p>
            </a>
            
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Anugrah Meat™</a>. All Rights Reserved.</span>
    </div>
</footer>
        </>
    )
}