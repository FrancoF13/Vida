import  './assets/App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard.jsx'

export function App (){
  const formatUserName = (userName) => `@${userName}`

  return (
<section className='App'>
    <TwitterFollowCard 
      formatUserName={formatUserName}
      isFollowing
      userName="midudev" 
      name="Miguel Ángel Durán" 
    />
    
    <TwitterFollowCard 
      formatUserName={formatUserName}
      isFollowing 
      userName="F_E_F_1" 
      name="Franco Fernandez" 
    />


    <TwitterFollowCard 
      formatUserName={formatUserName}
      isFollowing
      userName="pheralb" 
      name="Pablo Hernandez" 
    />


  </section>
  )
}