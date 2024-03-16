import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
             Advertisement Title
            </h2>
            <p className='text-gray-500 my-2'>
            Advertisement discription
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    Link of the Advertisement
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://th.bing.com/th/id/R.d9fb67b6917c28d94b757fb596897155?rik=hq%2bgti4rHFn%2f6w&riu=http%3a%2f%2fwww.aseponde.com%2fwp-content%2fuploads%2f2008%2f11%2fadvertise.jpg&ehk=xkbzEbNGgdmkrI7vnjve77NFlDq45ogHlUy9LPZ24Xc%3d&risl=&pid=ImgRaw&r=0" />
        </div>
    </div>
  )
}