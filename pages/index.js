import Head from 'next/head'
import Image from 'next/image'
import logoTaniGN from '../public/images/logo-taniGN.svg'
import logoJambul from '../public/images/logo-jambul.svg'
import packagingDodol from '../public/images/packaging-dodol.png'
import bannerTengah from '../public/images/banner-tengah.png'
import fontHeader from '../public/images/font-jambul-header.svg'
import produkKerupuk from '../public/images/produk-kerupuk.png'
import produkDodol from '../public/images/produk-dodol.png'
import produkJambuBiji from '../public/images/produk-jambu-biji.png'
import produkJambuKristal from '../public/images/produk-jambu-kristal.png'



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
                        <div className="flex place-content-center  md:mt-5">
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

                        <div className="content -mt-32 md:-mt-28">
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

                                    <div className="flex place-content-center w-full lg:h-64 sm:h-32 h-24 bg-lime-400">
                                        <div className='lg:mt-24 sm:mt-9 mt-6 text-center font-bold lg:text-3xl sm:text-xl text-xs'>
                                            BUAH PILIHAN * KUALITAS TERJAMIN * HIGIENIS * TERJANGKAU <br></br>* BAHAN ALAMI * TIDAK ADA PENGAWET
                                        </div>
                                    </div>

                                    {/* <div className="flex px-32 pt-32 pb-16">
                                        <div className="w-full">
                                            <p className="text-3xl font-extrabold">Produk Inovatif dan Variatif</p>
                                            <p className="text-base font-semibold">sudah melewati proses quality control</p>
                                        </div>
                                        
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
            </main>
        </>
    )
}
