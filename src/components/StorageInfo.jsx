function StorageInfo({info, updateInfo}) {
  return (
    <div>
      <p>
        <b>Cookie:</b> {info.loginCookie}
      </p>
      <p>
        <b>LocalStorage (логин):</b> {info.loginLocal}
      </p>
      <p>
        <b>SessionStorage (корзина):</b> {info.cartSession}
      </p>

      <button
        onClick={updateInfo}>
        Обновить данные
      </button>
    </div>
  );
}

export default StorageInfo;
