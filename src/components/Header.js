import React from "react";
import { Auth } from "aws-amplify"

const Header = () => {

    const handleLogout = () => {
      Auth.signOut().then( () => {
        window.location.reload()
      })
    }
    return (
        <header style={styles.header}>
          <button style={styles.absoluteLogout} onClick={() => handleLogout()}>Sign out</button>
          <h1 style={styles.headerTitle}>Your recipe cookbook!</h1>
          <span className="App-logo" role="img" aria-label="Logo" alt="cooking-pot">🍲</span>
        </header>
    )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4em',
    backgroundColor: '#222',
    color: 'white',
    position: 'relative',
  },
  absoluteLogout: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  headerTitle: {
    fontSize: '1.5em'
  }
}

export default Header;