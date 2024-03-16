import { Footer } from 'flowbite-react';
import { BsFacebook, BsTiktok, BsYoutube, } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='/about'
            by="Homesweetland"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/HomesweetlandU/' rel="noreferrer" target="_blank" icon={BsFacebook}/>
            <Footer.Icon href='https://www.tiktok.com/@homesweetland' rel="noreferrer" target="_blank" icon={BsTiktok}/>
            <Footer.Icon href='https://www.youtube.com/homesweetlandu' rel="noreferrer" target="_blank" icon={BsYoutube}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}