import Head from 'next/head'
import Image from 'next/image'
import logoTaniGN from '../public/images/logo-taniGN.svg'
import logoJambul from '../public/images/logo-jambul.svg'
import packagingDodol from '../public/images/packaging-dodol.png'
import bannerTengah from '../public/images/banner-tengah.png'
import fontHeader from '../public/images/font-jambul-header.svg'

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
                        <div className="flex place-content-center mt-8">
                            <Image src={logoTaniGN} className=""/>
                        </div>
                        <div className="flex place-content-center mt-5">
                            <Image src={fontHeader} className="object-fill"/>
                        </div>
                        <div className="flex place-content-center -mt-44">
                            <Image src={logoJambul} className="z-10"/>
                            <div className="elipse-left lg:mt-20"></div>
                            <div className="elipse-right lg:mt-20"></div>
                        </div>

                        <div className="content -mt-20">
                                <div className="circle-yellow-left"></div>
                                <div className="circle-yellow-right"></div>
                                <div className='circle-green-left'></div>
                                <div className='circle-green-right'></div>
                            <div className="container mx-auto lg:px-20">
                                <div className="w-full h-auto bg-white mt-20">
                                    <div className="flex px-32 py-32">
                                        <div className="w-1/2  float-left">
                                            <p className="font-extrabold text-4xl tracking-wide mt-14 text-green-900">Hasil buah berkualitas <br></br>Langsung dari kebunnya.</p>
                                            <p className="font-semibold text-lg mt-5">
                                                Olahan produksi Jambu dari desa Gunung
                                                Mulya Kecamatan Tenjolaya - Bogor.
                                            </p>
                                            <p className="font-semibold text-lg mt-2">
                                                Selain, Produk Dodol dan Kerupuk kami juga
                                                menjual Jambu Biji Merah dan Jambu Kristal.
                                            </p>
                                        </div>
                                        <div className="w-1/2 float-right">
                                            <Image src={packagingDodol} className="object-cover"/>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <Image src={bannerTengah} className="z-10"/>  
                                    </div>

                                    <div className="flex px-32 pt-32 pb-16">
                                        <div className="w-full">
                                            <p className="text-2xl font-extrabold">Produk Kami</p>
                                            <p className="text-base font-semibold">sudah melewati proses quality control</p>
                                        </div>
                                        
                                    </div>
                                    <div className="grid grid-cols-3 grid-rows-2 gap-4  px-32 pb-32">
                                        <div className='row-start-1 col-start-1'>
                                            <div className='bg-lime-700'>
                                                hello
                                            </div>
                                        </div>

                                        <div className='row-start-1 col-start-2'>
                                            <div className='bg-lime-700'>
                                                hello
                                            </div>
                                        </div>

                                        <div className='row-start-1 col-start-3'>
                                            <div className='bg-lime-700'>
                                                hello
                                            </div>
                                        </div>

                                        <div className='row-start-2 col-start-2'>
                                            <div className='bg-lime-700'>
                                                hello
                                            </div>
                                        </div>
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
