import { useRouter } from 'next/navigation';
import Gallery from './gallery';
import Discover from './discover';

export default function HomeContent() {
  const router = useRouter();

  const navigateToUpload = () => {
    router.push('/upload');
  };

  return (
    <>
      <div className="bg-[url('/images/hills.jpg')] bg-center bg-cover h-screen w-full p-24 flex items-center justify-center">
        <a
          href="/grids"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-gray-900/15 hover:border-gray-900/25 hover:bg-gray-900/25 hover:dark:border-gray-300/25 hover:dark:bg-gray-300/25"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-white`}>
            See it in action{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[60ch] text-sm text-white`}>
            Lookbook is trusted by some of the most inspiring professional photographers.
          </p>
        </a>
      </div>

      <Gallery />
      <Discover navigateToUpload={navigateToUpload}></Discover>
    </>
  );
}
