document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
})

const signUpWrapper = document.querySelector('.sign-up-page-wrapper')
const successWrapper = document.querySelector('.success-page-wrapper')

const submit_btn = document.querySelector('.subscribe-btn')
const dismiss_btn = document.querySelector('.dismiss-btn')

const email = document.getElementById('email')
const errMessage = document.querySelector('.error-message')

const showMail = document.querySelector('.user-email')


email.addEventListener('keyup', checkValidEmail)
submit_btn.addEventListener('click', submitBtn)
dismiss_btn.addEventListener('click', dismissBtn)

//! helper functions
function addErrSt() {
  email.classList.add('error-state')
  errMessage.classList.add('show')
}
function removeErrSt() {
  email.classList.remove('error-state')
  errMessage.classList.remove('show')
}

function checkValidEmail() {
  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (!email.value.match(emailRegex)) {
    addErrSt()
  } else {
    removeErrSt()
    showMail.textContent = email.value
  }

  if (email.value === '') {
    removeErrSt()
  }
}

function submitBtnProcess() {
  signUpWrapper.classList.add('scale-down')

  setTimeout(() => {
    document.querySelector('.sign-up-page').style.display = 'none'
    document.querySelector('.loading-screen').style.display = 'grid'
  },1000)

  setTimeout(() => {
    document.querySelector('.loading-screen').style.display = 'none'
    document.querySelector('.success-page').style.display = 'grid'
  }, 2500)
}

function submitBtn() {
  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  if (email.value === '' || !email.value.match(emailRegex)) {
    addErrSt()
    email.focus()
    return
  }

  submitBtnProcess()
}

function dismissBtn() {
  successWrapper.classList.add('scale-down')

  setTimeout(() => {
    location.reload()
  },1000)
}