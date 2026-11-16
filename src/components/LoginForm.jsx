function LoginForm ({login, inputLogin, saveTokin, deleteTokin}){
  return (
    <div>
      <input type="text" value={login} onChange={(e) => inputLogin(e.target.value)}/>
      <button onClick={saveTokin}>save tokin</button>
      <button onClick={deleteTokin}>delete tokin</button>
    </div>
  )
}

export default LoginForm