import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logoTaniGN from '../../public/images/logo-taniGN.svg'
import logoJambul from '../../public/images/logo-jambul.svg'
import logoFontFillColor from '../../public/images/logo-font-jambul-fillColor.svg'
import logoTokopedia from '../../public/images/logo-tokopedia.svg'
import logoShopee from '../../public/images/logo-shopee.svg'
import logoInstagram from '../../public/images/logo-instagram.svg'
import fontHeader from '../../public/images/font-jambul-header.svg'
import produkDodol from '../../public/images/produk-dodol.png'
import produkKerupuk from '../../public/images/produk-kerupuk.png'
import produkJambuBiji from '../../public/images/produk-jambu-biji.png'
import produkJambuKristal from '../../public/images/produk-jambu-kristal.png'
import logoShopeeText from '../../public/images/logo-shopee-fullText.svg'
import logoTokopediaText from '../../public/images/logo-tokopedia-fullText.svg'

function Product({data}) {
    return (
        <>
            <Head>
                <title>Jambul | {data.title}</title>
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
                        <div className="flex place-content-center -mt-36 sm:-mt-48 md:-mt-44 lg:-mt-40 xl:-mt-48">
                                <Image src={logoJambul} className="logo-jambul"/>  
                            <div className="elipse-left w-1/2 h-20  lg:h-36  -mt-10 md:mt-12 lg:mt-20"></div>
                            <div className="elipse-right w-1/2 h-20 lg:h-36 -mt-10 md:mt-12 lg:mt-20"></div>
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

                        <div className="content -mt-32 md:-mt-20">
                            <div className="container mx-auto lg:px-20 md:px-5">
                                <div className="w-full h-auto lg:mt-20 bg-white bg-opacity-20 backdrop-blur-sm">
                                    <div className="grid grid-cols-2 px-6 py-6 lg:px-16 lg:py-16 xl:px-24 xl:py-24 md:px-8 md:p-16">
                                        <div className="col-start-1 col-end-3 w-5/6 md:col-end-2 lg:col-start-1 md:row-start-1 row-start-2">
                                            <p className="font-bold text-2xl xl:text-3xl tracking-wide mt-20po pz ">Deskripsi</p>
                                            <p className="font-semibold sm:text-sm xl:text-lg mt-2">
                                                { data.deskripsi }
                                            </p>
                                            <p className="font-bold text-2xl xl:text-3xl tracking-wide mt-6 ">Bahan</p>
                                            <p className="font-semibold sm:text-sm xl:text-lg mt-2">
                                                { data.bahan }
                                            </p>
                                            <p className="font-bold text-2xl xl:text-3xl tracking-wide mt-6 ">Order</p>
                                            <div className="flex w-5/6 mt-2 gap-2">
                                                <Link href={data.shopee}>
                                                    <span className="flex place-content-center w-1/2 bg-lime-400 bg-opacity-40 rounded-full py-2 cursor-pointer">
                                                        <Image src={logoShopeeText} height="32" className='object-contain'/>
                                                    </span>
                                                </Link>
                                                <Link href={data.tokopedia}>
                                                    <span className="flex place-content-center w-1/2 bg-lime-400 bg-opacity-40 rounded-full py-2 cursor-pointer">
                                                        <Image src={logoTokopediaText} height="32" className='object-contain'/>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-start-1 col-end-3 row-start-1 md:col-start-2 md:col-end-2 md:row-start-1 ">
                                            <div className="h-auto">
                                                <Image src={data.image} className="object-cover"/>
                                            </div>
                                            <p className="text-center font-bold text-2xl text-green-900 xl:text-3xl tracking-wide -mt-15 mb-16">Rp {data.harga}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer z-20'>
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
                                                    <a target="_blank" href="https://www.tokopedia.com/jambulmulya" rel="noopener noreferrer">
                                                        <span className='mr-2'>
                                                            <Image src={logoTokopedia}/>
                                                        </span>
                                                    </a>
                                                    <a target="_blank" href="https://shopee.co.id/jambulmulya" rel="noopener noreferrer">
                                                        <span className="mr-2 cursor-pointer">
                                                            <Image src={logoShopee}/>
                                                        </span>
                                                    </a>
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

Product.getInitialProps = (props) => {
    const {id} = props.query
    const dataId = ['dodol-jambu','kerupuk-jambu','jambu-kristal','jambu-merah']
    const dataDetail =[
        [
            'Dodol Jambu kami diolah masih dengan cara tradisional tanpa bahan pengawet dan pewarna aman untuk dikonsumsi Anak Kecil.',
            '100% Menggunakan Jambu Desa Gunung Mulya, Alami Non Pengawet.',
            '15.000',
            produkDodol,
            'https://shopee.co.id/Dodol-Jambul-asli-desa-Gunung-Mulya-Bogor-i.753952035.16256411059',
            'https://www.tokopedia.com/jambulmulya/dodol-jambu-merah-asli-desa-gunung-mulya-bogor',
            'Dodol Jambu'
        ],
        [
            'Kerupuk Jambu kami diolah masih dengan cara tradisional tanpa bahan pengawet dan pewarna aman untuk dikonsumsi Anak Kecil.',
            '100% Menggunakan Jambu Desa Gunung Mulya, Alami Non Pengawet.',
            '15.000',
            produkKerupuk,
            'https://shopee.co.id/Kerupuk-Jambu-asli-desa-Gunung-Mulya-Bogor-i.753952035.13889627921',
            'https://www.tokopedia.com/jambulmulya/kerupuk-jambu-merah-asli-desa-gunung-mulya-bogor',
            'Kerupuk Jambu'
        ],
        [
            'Jambu Kristal dipetik langsung dari perkebunan jambu di desa Gunung Mulya Tendjolaya Bogor',
            'Buah Jambu Kristal Asli',
            '15.000 per/1kg',
            produkJambuKristal,
            'https://shopee.co.id/Jambu-Kristal-desa-Gunung-Mulya-Bogor-Harga-Per-Kg-i.753952035.15678667753',
            'https://www.tokopedia.com/jambulmulya/jambu-kristal-desa-gunung-mulya-bogor-harga-per-kg',
            'Jambu Kristal'
        ],
        [
            'Jambu Biji dipetik langsung dari perkebunan jambu di desa Gunung Mulya Tendjolaya Bogor',
            'Buah Jambu Biji Asli',
            '10.000 per/1kg',
            produkJambuBiji,
            'https://shopee.co.id/Jambu-Biji-Merah-desa-Gunung-Mulya-Bogor-i.753952035.17556413390?sp_atk=dfeb3335-2d24-479a-a42f-047ddbb1f666',
            'https://www.tokopedia.com/jambulmulya/jambu-biji-merah-desa-gunung-mulya-bogor-harga-per-kg',
            'Jambu Biji'
        ],
    ]
    let data = {}
    const product = dataId?.map((item, index) => {
        if (item === id) {
            return data = {
                'deskripsi' : dataDetail[index][0],
                'bahan' : dataDetail[index][1],
                'harga' : dataDetail[index][2],
                'image' : dataDetail[index][3],
                'shopee': dataDetail[index][4],
                'tokopedia' : dataDetail[index][5],
                'title' : dataDetail[index][6]
            }
        }
    })
    
    return {data}
}

export default Product;