function ToggleTheme ({ theme, switchTheme }) {
  return (
    <div>
      <button onClick={switchTheme}>{theme}</button>
    </div>
  );
}

export default ToggleTheme;