import { Button } from '../../../components/ui/button';

export default function Discover({ navigateToUpload }) {
  return (
    <div className="px-12 py-16 lg:px-16 lg:py-24 bg-blue-100 text-center">
      <h2 className="text-black text-4xl">Get Started with Lookbook Today</h2>
      <h3 className="mt-4 text-black-300 text-md">Free forever. Upgrade when you need to.</h3>
      <Button className="mt-4" onClick={navigateToUpload}>
        Discover
      </Button>
    </div>
  );
}
