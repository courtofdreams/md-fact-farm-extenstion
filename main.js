const loading = document.getElementById('loading')
const headerLogo = document.getElementById('headerLogo')
const resultElement = document.getElementById('resultElement')
const authorElement = document.getElementById('reasonElement')

const getQuotes = async (url) => {
  headerLogo.style.display = 'none'
  loading.style.display = 'flex'
    if(!url.includes('youtube.com')) {
      loading.innerHTML = `This is not youtube.com ` + url;
      return;
    }  
    const ytId = url.replace('https://www.youtube.com/watch?v=', '');
    try {
        const res = await fetch(`http://localhost:5100/api/v1/is-fake-news/${ytId}`)
        const data = await res.json()
        loading.style.display = 'none'
        resultElement.innerHTML = data.result;
        headerLogo.style.display = 'flex'
    } catch (error) {
        loading.style.display = 'none'
        headerLogo.style.display = 'flex'
        resultElement.innerHTML = `oops... no result to show`
    }

}


// see the note below on how to choose currentWindow or lastFocusedWindow
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  headerLogo.style.display = 'none'
  let url = tabs[0].url;
  getQuotes(url)
  // use `url` here inside the callback because it's asynchronous!
});