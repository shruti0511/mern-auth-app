import React, { useEffect, useState } from 'react'
import { refreshService, userService } from '../service/authService'

const Welcome = () => {
  const [user, setUser] = useState();
  const [firstRender, setfirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setfirstRender(false);
      userService()
      .then(res => setUser(res.data.user))
      .catch(err => console.log(err));
    }

    let interval = setInterval(() => {
      refreshService()
      .then(res => {setUser(res.data.user); console.log('ref called')})
      .catch(err => console.log(err));
    }, 1000 * 28);

    return () => clearInterval(interval);

  }, [])

  return (
    <div>Welcome
      {user && <h1>{user.name}</h1>}
    </div>
  )
}

export default Welcome