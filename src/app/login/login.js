function loginPopUp () {
    let loginForm = document.querySelector('.login');
    loginForm.style.display = 'block';
    document.querySelector('.login__quit').addEventListener('click', () => {
        loginForm.style.display = 'none';
    });
}

document.querySelector('.header__item_profile').addEventListener('click', loginPopUp);