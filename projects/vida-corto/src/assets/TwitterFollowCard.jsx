export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) { 
    
    return (
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>

            <img
            className='tw-followCard-avatar' 
            alt="El avatar de carita 8bit" 
            src={`https://unavatar.io/${userName}`} /> 
      
            <div className='tw-followCard-info'>
              <strong> {name} </strong>

              <span 
              className="tw-followCard-infoUserName"> 
              {formatUserName(userName)}
              </span>
            </div>
          </header>
      
            <aside>
              <button className="tw-followCard-button">
                seguir
              </button>
            </aside>
        </article>
      )
}
/* OTRA FORMA DE EVALUAR LA CONSTANTE DE LA IMAGEN

const imageSrc = `https//unavatar.io/{username}`

{imageSrc} evalua la expresion de la variable

*/