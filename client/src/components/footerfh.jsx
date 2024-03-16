import { Footer } from 'flowbite-react';
import { BsFacebook, BsTiktok, BsYoutube, } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <div className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white text-gray-600'>
              Contact Creators
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Fiona Alem' />
              <Footer.LinkGroup className='mt-[-21px]' col>
                <Footer.Link
                  href='https://www.github.com/sahandghavidel'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Portfolio</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              
              {/* <div className="flex gap-3">
    <img className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/151674016?s=400&u=ca2c3cb5f72d71a6cdf6658a953a7b9a8061f92c&v=4" alt="" />
    <div className="font-medium dark:text-white">
        <div>Sem Dori</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">semetic17@gmail.com</div>
    </div>
</div> */}
              <Footer.Title title='Sem Dori' />
              
              <Footer.LinkGroup className='mt-[-21px]' col>
              <Footer.Link
                  href='https://github.com/SemEtic17'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='mailto:semetic17@gmail.com'>Email</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
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