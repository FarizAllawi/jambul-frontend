import Head from 'next/head'
import Image from 'next/image'
import logoTaniGN from '../public/images/logo-taniGN.svg'
import logoJambul from '../public/images/logo-jambul.svg'
import logoFontFillColor from '../public/images/logo-font-jambul-fillColor.svg'
import logoTokopedia from '../public/images/logo-tokopedia.svg'
import logoShopee from '../public/images/logo-shopee.svg'
import logoInstagram from '../public/images/logo-instagram.svg'
import packagingDodol from '../public/images/packaging-dodol.png'
import bannerTengah from '../public/images/banner-tengah.png'
import fontHeader from '../public/images/font-jambul-header.svg'
import produkKerupuk from '../public/images/produk-kerupuk.png'
import produkDodol from '../public/images/produk-dodol.png'
import produkJambuBiji from '../public/images/produk-jambu-biji.png'
import produkJambuKristal from '../public/images/produk-jambu-kristal.png'
import fontBannerProdukInovatif from '../public/images/font-banner-produk-inovatif.svg'
import headerProdukInovatif from '../public/images/header-produk-inovatif.svg'
import produkInovatifDodol from '../public/images/produk-inovatif-dodol.svg'
import produkInovatifKerupuk from '../public/images/produk-inovatif-kerupuk.svg'


// import '../styles/global.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Jambul</title>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            
            <main>
                <section className='header-container'>
                    <div className="absolute w-screen z-10">
                        <div className="flex place-content-center md:mt-8">
                            <Image src={logoTaniGN} className="logo-taniGN"/>
                        </div>
                        <div className="flex place-content-center px-4 md:mt-5">
                            <Image src={fontHeader} className="font-header"/>
                        </div>
                        <div className="flex place-content-center -mt-36 sm:-mt-48 md:-mt-44 lg:-mt-40">
                                <Image src={logoJambul} className="logo-jambul"/>  
                            <div className="elipse-left w-1/2 h-20  lg:h-32  -mt-10 md:mt-12 lg:mt-20"></div>
                            <div className="elipse-right w-1/2 h-20 lg:h-32 -mt-10 md:mt-12 lg:mt-20"></div>
                        </div>

                        <div className="circle-yellow-left z-10"></div>
                        <div className="circle-yellow-right z-10"></div>
                        <div className='circle-green-left z-10'></div>
                        <div className='circle-green-right z-10'></div>
                        <div className="circle-yellow2-left z-10"></div>
                        <div className='circle-yellow2-right z-10'></div>
                        <div className='circle-green2-left z-10'></div>
                        <div className="circle-yellow3-left z-10"></div>
                        <div className='circle-yellow3-right z-10'></div>
                        <div className='circle-green-left4 z-10'></div>
                        <div className='circle-green-right4 z-10'></div>

                        <div className="content -mt-32 md:-mt-28 lg:-mt-32">
                            <div className="container mx-auto lg:px-20 md:px-5">
                                <div className="w-full h-auto lg:mt-20 bg-white bg-opacity-20 backdrop-blur-sm">
                                    <div className="grid grid-cols-2 px-6 py-6 lg:px-16 lg:py-16 xl:px-32 xl:py-32 md:px-8 md:p-16">
                                        <div className="col-start-1 col-end-3 md:col-end-2 lg:col-start-1 row-start-1">
                                            <p className="font-extrabold text-2xl xl:text-3xl 2xl:text-4xl tracking-wide mt-14 text-green-900">Hasil buah berkualitas <br></br>Langsung dari kebunnya.</p>
                                            <p className="font-semibold sm:text-sm xl:text-lg mt-5">
                                                Olahan produksi Jambu dari desa Gunung
                                                Mulya Kecamatan Tenjolaya Bogor.
                                            </p>
                                            <p className="font-semibold sm:text-sm xl:text-lg mt-2">
                                                Selain, Produk Dodol dan Kerupuk kami juga
                                                menjual Jambu Biji Merah dan Jambu Kristal.
                                            </p>
                                        </div>
                                        <div className="col-start-1 col-end-3 row-start-2 md:col-start-2 md:col-end-2 md:row-start-1 ">
                                            <Image src={packagingDodol} className="object-cover"/>
                                        </div>
                                    </div>

                                    <div className="flex h-28 sm:h-auto">
                                        <Image src={bannerTengah} className="z-10"/>  
                                    </div>

                                    <div className="flex px-6 py-6 lg:px-16 lg:py-16 xl:px-32 xl:pt-32 md:px-8 md:pt-16 2xl:px-32 2xl:pt-32 ">
                                        <div className="w-full">
                                            <p className="text-xl md:text-2xl font-extrabold">Produk Kami</p>
                                            <p className="text-sm md:text-base font-semibold">sudah melewati proses quality control</p>
                                        </div>
                                        
                                    </div>
                                    <div className="grid grid-cols-3 gap-8 px-6 py-6 lg:px-16 lg:pb-16 xl:px-32 xl:pb-32 md:px-8 2xl:px-32 2xl:pb-16">
                                        <div className='row-start-1 col-start-1 col-end-4 sm:col-end-1'>
                                            <div className="bg-white rounded-lg">
                                                <div className='bg-lime-400 card-image'>
                                                    <Image src={produkDodol} className=""/>      
                                                </div>
                                                <div className="py-5 px-3 font-bold text-center">
                                                    Dodol JAMBU
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row-start-2 col-start-1 col-end-4 sm:row-start-1 sm:col-start-2 sm:col-end-2'>
                                            <div className="bg-white rounded-lg">
                                                <div className='bg-lime-400 card-image'>
                                                    <Image src={produkKerupuk} className=""/>      
                                                </div>
                                                <div className="py-5 px-3 font-bold text-center">
                                                    Kerupuk JAMBU
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row-start-3 col-start-1 col-end-4 sm:row-start-1 sm:col-start-3 sm:col-end-3">
                                        <div className="bg-white rounded-lg">
                                                <div className='bg-lime-400 card-image'>
                                                    <Image src={produkJambuKristal} className=""/>      
                                                </div>
                                                <div className="py-5 px-3 font-bold text-center">
                                                    Jambu Kristal
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row-start-4 col-start-1 col-end-4 sm:row-start-2 sm:col-start-2 sm:col-end-2'>
                                            <div className="bg-white rounded-lg">
                                                <div className='bg-lime-400 card-image'>
                                                    <Image src={produkJambuBiji} className=""/>      
                                                </div>
                                                <div className="py-5 px-3 font-bold text-center">
                                                    Jambu Merah
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex place-content-center w-full h-12 bg-lime-400 px-2 py-2 sm:px-6 md:px-8">
                                        <Image src={fontBannerProdukInovatif} className="" />
                                    </div>
                                    
                                    <div className="flex place-content-center mt-1">
                                        <Image src={headerProdukInovatif} className="header-produk-inovatif"/>
                                        <div className="absolute left-0 sm:w-7/12 w-3/5 md:w-4/6 lg:w-2/4 z-10 px-2 py-2 sm:px-6 sm:py-6 md:px-8 md:py-8 ">
                                                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold sm:font-extrabold">Produk Inovatif dan Variatif</p>
                                                <p className="sm:w-full md:w-4/5 text-xs sm:text-sm lg:text-base font-semibold sm:mt-3 mt-2">
                                                    Pengolahan dilakukan untuk menciptakan produk 
                                                    turunan Jambu Biji yang lebih Variatif dan Inovatif
                                                    Ada berbagai jenis variasi pengolahan jambu biji
                                                    yang berguna selain agar produknya lebih awet.
                                                </p>
                                        </div>
                                    </div>
                                    <div className="flex place-content-center sm:mt-24 mt-32">
                                        <Image src={produkInovatifDodol} className="header-produk-inovatif"/>
                                        <div className="absolute right-0 text-right sm:w-7/12 md:w-4/6 lg:w-2/4 z-10 px-2 py-2 sm:px-6 sm:py-6 mt-6 sm:mt-12 xl:mt-20">
                                                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold sm:font-extrabold">Dodol Jambu Biji</p>
                                                <p className=" text-right text-xs sm:text-sm lg:text-base font-semibold sm:mt-3 mt-2">
                                                   Tanpa Bahan Pengawet <br></br>
                                                    Tanpa Pewarna Buatan <br></br>
                                                    Rasa Empuk dan Manis <br></br>
                                                    Bertahan 3 - 4 Bulan <br></br>
                                                    Lembut dan tidak keras <br></br>
                                                </p>
                                        </div>
                                    </div>
                                    <div className="flex place-content-center -mt-1">
                                        <Image src={produkInovatifKerupuk} className="header-produk-inovatif"/>
                                        <div className="absolute left-0 w-3/5 sm:w-7/12 md:w-4/6 lg:w-2/4 z-10 px-2 py-2 sm:px-6 sm:py-6">
                                                <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold sm:font-extrabold">Kerupuk Jambu Biji</p>
                                                <p className="sm:w-full md:w-4/5 text-xs sm:text-sm lg:text-base font-semibold sm:mt-3 mt-2">
                                                    Tanpa Bahan Pengawet <br></br>
                                                    Tanpa Pewarna Buatan <br></br>
                                                    Pewarna buah Jambu <br></br>
                                                    Rasa Jambu masih terasa <br></br>
                                                    Gurih, harum Jambu
                                                </p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 place-content-center  sm:mx-24 mx-16 my-40">
                                        <div className="col-start-1 col-end-3 row-start-2 sm:col-start-1 sm:col-end-2 sm:row-start-1">
                                            <div className='flex justify-center items-center h-full'>
                                                <div className="text-center sm:text-left text-base sm:text-xl font-medium">
                                                    Memanfaatkan tanaman dari
                                                    buah - buahan yang melimpah di
                                                    desa Gunung Mulya untuk dijadikan
                                                    olahan seperti Inovasi kami yaitu
                                                    Dodol dan Kerupuk.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-3 row-start-1 sm:col-start-2 sm:col-end-3 sm:row-start-1">
                                            <div className='flex justify-center items-center'>
                                                <Image src={produkJambuBiji} className=""/>
                                            </div>      
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                        <div className='footer'>
                            <div className='container mx-auto lg:px-20 md:px-5 h-auto'>
                                <div className='bg-white bg-opacity-20 backdrop-blur-sm pt-14 pb-6 px-6 sm:px-12'>
                                    <div className="w-52 sm:w-80">
                                        <Image src={logoTaniGN} className=""/>
                                        <div className="mt-1 sm:mt-4">
                                            <Image src={logoFontFillColor} />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="mt-24 w-1/2 float-left font-semibold text-sm sm:text-xl">
                                            Contact Person <br></br>
                                            Desa Gunung Mulya <br></br>
                                            Tenjolaya, Bogor
                                        </div>
                                        <div className="relative mt-30 w-1/2 float-right ">
                                            <div className="absolute right-0 bottom-0 text-right font-semibold text-sm sm:text-xl">
                                                Find Us
                                                <div className='w-full'>
                                                    <span className='mr-2'>
                                                        <Image src={logoTokopedia}/>
                                                    </span>
                                                    <span className="mr-2">
                                                        <Image src={logoShopee}/>
                                                    </span>
                                                    <span className="">
                                                        <Image src={logoInstagram}/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex place-content-center h-12 mt-12'>
                                        <Image src={logoTaniGN} width="130" className='object-none sm:object-fill'/> <span className='text-xs sm:text-lg font-semibold mt-5 sm:mt-4 sm:ml-2'>&copy; 2022. All Rights Reserved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
            </main>
        </>
    )
}
