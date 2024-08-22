import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';

const MatchesList = () => {
  return(
    <div className='rounded-lg shadow-lg p-4'>
      <h2 className='text-2xl font-bold mb-4'>Matches</h2>
      <ul>
        {[
          {id: 1, firstName: 'Foo', lastName: 'Bar', imageUrl: 'http://192.168.0.13:8080/060a0b27-ec59-4a99-b4cb-234ffe0d1e1d.jpg'},
          {id: 2, firstName: 'SSS', lastName: 'ERW', imageUrl: 'http://192.168.0.13:8080/060a0b27-ec59-4a99-b4cb-234ffe0d1e1d.jpg'}
        ].map(match => (
          <li key={match.id} className='mb-2'>
            <button className='w-full rounded flex item-center hover:bg-gray-100'>
             <img src={match.imageUrl} className='w-16 h-16 rounded-full mr-3 object-cover'/>
             <span>
              <h3 className='font-bold'>{match.firstName} {match.lastName}</h3>
             </span>
            </button>
          </li>
        ))
        
        }
      </ul>
    </div>
  );
}

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
    {/* <MatchesList/> */}
  </div>
  
  </>)
}

export default App
