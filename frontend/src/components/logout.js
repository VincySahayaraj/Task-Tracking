import React from 'react'
export default function logout() {

  localStorage.removeItem('currentUser');
  window.location.href = "/";
  return (
    <div>

    </div>
  )
}


