import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';
import React, {useState, useEffect} from 'react';

const fethcRandomProfile = async () => {
    const response = await fetch('http://localhost:8080/profiles/random');
    if(!response.ok){
      throw new Error('Failed to fetch profile');
    }
    return response.json();
}

const saveSwipe = async(profileId) =>{
  const response  = await fetch('http://localhost:8080/matches', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({profileId})
  });
  if(!response.ok){
    throw new Error('Failed to save swipe');
  }
}

const MatchesList = ({onSelectMatch}) => {
  return(
    <div className='rounded-lg shadow-lg p-4'>
      <h2 className='text-2xl font-bold mb-4'>Matches</h2>
      <ul>
        {[
          {id: 1, firstName: 'Foo', lastName: 'Bar', imageUrl: 'http://192.168.0.13:8080/060a0b27-ec59-4a99-b4cb-234ffe0d1e1d.jpg'},
          {id: 2, firstName: 'SSS', lastName: 'ERW', imageUrl: 'http://192.168.0.13:8080/060a0b27-ec59-4a99-b4cb-234ffe0d1e1d.jpg'}
        ].map(match => (
          <li key={match.id} className='mb-2'>
            <button 
              className='w-full rounded flex item-center hover:bg-gray-100'
              onClick={onSelectMatch}>
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

const ProfileSelector = ({profile, onSwipe}) => {
  return(
    profile ? (
    <div className='rounded-lg overflow-hidden bg-white shadow-lg my-3'>
      <div className='relative'>
        <img src={'http://127.0.0.1:8081/'+profile.imageUrl}/>
        <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black'>
          <h2 className='text-3xl font-bold'>{profile.firstName} {profile.lastName}, {profile.age}</h2>
        </div>
      </div>
      <div className='p-4 mb-4'>
          <p className='text-grey-600'>{profile.bio}</p>
      </div>
      <div className='p-4 flex justify-center space-x-4'>
        <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
          onClick={() => onSwipe(profile.id, "left")}>
          <X size={24}/>
        </button>
        <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
          onClick={() => onSwipe(profile.id, "right")}>
          <Heart size={24}/>
        </button>
      </div>
    </div>
    ) : (<div>Loading...</div>)
  );
}

const ChatScreen = () => {

  const [input, setInput] = useState('');

  const handleSend = () => {
    if(input.trim()){
      console.log(input);
      setInput('');
    }
    
  };

  return(
    <div className='rounded-lg shadow-lg p-4'>
      <h2 className='text-2xl font-bold mb-4'>Chat with Foo Bar</h2>
      <div className='h-[50vh] border rounded overflow-y-auto mb-4 p-2'>
      {
        [
          "Hi", 
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
          "How are you?",
        ].map((message, index) => (
          <div key={index}>
            <div className='mb-4 p-2 rounded bg-gray-100'>{message}</div>
          </div>
        )

      )}
      </div>
      <div className='flex'>
        <input 
          type='text' 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='border flex-1 rounded p-2 mr-2'
          placeholder='Type a message...'
        />
        <button 
          className='bg-blue-500 text-white rounded p-2'
          onClick={handleSend}>
            Send</button>
      </div>
    </div>
  );
}

function App() {

  const loadRandomProfile = async () =>{
    try{
      const profile = await fethcRandomProfile();
      setCurrentProfile(profile);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    loadRandomProfile();
  },{});


  const [currentScreen, setCurrentScreen] = useState('profile');
  const [currentProfile, setCurrentProfile] = useState(null);

  const onSwipe = (profileId, direction) => {
    if(direction === 'right'){
      saveSwipe(profileId);
    }
    loadRandomProfile();
  }



  const renderScreen = () => {
    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector profile={currentProfile} onSwipe={onSwipe}/>;
      case 'matches':
        return <MatchesList onSelectMatch = {() => setCurrentScreen('chat')}/>;
      case 'chat' :
        return <ChatScreen/>;
    }
  }

  return (<>
  <div className='max-w-md mx-auto'>
    <nav className='flex justify-between my-2'>
      <User onClick={() => setCurrentScreen("profile")}/>
      <MessageCircle onClick={() => setCurrentScreen("matches")}/>
    </nav>
    {renderScreen()}
    
  </div>
  
  </>)
}

export default App
