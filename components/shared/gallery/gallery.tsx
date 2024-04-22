import { GALLERY_DATA } from '@/public/constants/gallery-dataset';
import Image from 'next/image';
import './styles.css';

export default function Gallery() {
  const gallery = GALLERY_DATA;

  return (
    <div className="min-h-screen flex flex-col justify-center w-full">
      <h2 className="header p-12 lg:px-16 text-center text-4xl bg-blue-100" style={{ color: 'orange' }}>
        Clients gallery
      </h2>
      <div className="grid grid-cols-3 gap-8 p-24 lg:gap-12 lg:p-28">
        {gallery.map((item) => (
          <div key={item.id} className="flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <Image
                className=""
                src={item.pictureUrl ?? '/images/camera.jpg'}
                alt={item.title}
                width="250"
                height="150"
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="text-center text-black">{item.title}</div>
            <div className="text-center text-gray-400">{item.group}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
