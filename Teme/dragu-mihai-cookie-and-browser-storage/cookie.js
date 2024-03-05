document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('english').checked = true;

  const saveEnglish = () => {
    document.cookie = 'language=english; SameSite=Lax; Secure';
    localStorage.removeItem('currentLanguage');
    console.log(document.cookie);
  };

  const saveRomanian = () => {
    localStorage.setItem('currentLanguage', 'romanian');
    document.cookie = 'language=romanian; SameSite=Lax; Secure';
    console.log(document.cookie);
  };

  document.getElementById('english').addEventListener("change", saveEnglish);
  document.getElementById('romanian').addEventListener("change", saveRomanian);
});


