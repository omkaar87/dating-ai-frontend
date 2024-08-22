import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';

const ProfileSelector = () => {
  return(
    <div className='rounded-lg overflow-hidden bg-white shadow-lg my-3'>
      <div className='relative'>
        <img src='http://192.168.0.13:8080/060a0b27-ec59-4a99-b4cb-234ffe0d1e1d.jpg'/>
        <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black'>
          <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
        </div>
      </div>
      <div className='p-4 mb-4'>
          <p className='text-grey-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, aspernatur eaque. Maxime vitae, autem ratione officiis, optio doloribus assumenda labore sit unde eveniet doloremque tempore inventore perferendis. Eligendi, beatae dolorum?</p>
      </div>
      <div className='p-4 flex justify-center space-x-4'>
        <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
          onClick={() => console.log("left")}>
          <X size={24}/>
        </button>
        <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
          onClick={() => console.log("right")}>
          <Heart size={24}/>
        </button>
      </div>
    </div>
  );
}

function App() {
  return (<>
  <div className='max-w-md mx-auto'>
    <nav className='flex justify-between my-2'>
      <User />
      <MessageCircle />
    </nav>
    <ProfileSelector />
  </div>
  
  </>)
}

export default App
