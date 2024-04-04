import { GALLERY_DATA } from '@/public/constants/gallery-dataset'
import Image from 'next/image'

export default function Gallery() {
    const gallery = GALLERY_DATA
    
    return <div className="min-h-screen flex flex-col justify-center w-full">
      <h2 className="p-12 lg:px-16 text-orange text-center text-4xl bg-blue-100">Clients gallery</h2>
      <div className="grid grid-cols-3 gap-8 p-24 lg:gap-12 lg:p-28">
        { gallery.map(item => (
          <div key={item.id} className="flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <Image
                className=""
                src={item.pictureUrl}
                alt={item.title}
                width="250"
                height="150"
                loading="lazy"
                style={{objectFit: "contain"}}
              />
            </div>
            <div className="text-center text-black">{item.title}</div>
            <div className="text-center text-gray-400">{item.group}</div>
          </div>  
          ))}
      </div>
      <div className="px-12 py-16 lg:px-16 lg:py-24 bg-blue-100 text-center">
        <h2 className="text-black text-4xl">Get Started with Lookbook Today</h2>
        <h3 className="mt-4 text-black-300 text-md">Free forever. Upgrade when you need to.</h3>
      </div>
    </div>
}