const loading = document.getElementById('loading')
const quoteElement = document.getElementById('resultElement')
const authorElement = document.getElementById('reasonElement')

const getQuotes = async (url) => {
    if(!url.includes('youtube.com')) {
      loading.innerHTML = `This is not youtube.com ` + url
      return;
    }  
    const ytId = url.replace('https://www.youtube.com/watch?v=', '');
    loading.style.display = 'block'
    try {
        const res = await fetch(`http://localhost:5100/api/v1/is-fake-news/${ytId}`)
        const data = await res.json()
        loading.style.display = 'none'
        quoteElement.innerHTML = data.result ? 'This video is fake new' : 'This video is not fake news'
        authorElement.innerHTML = `${data.reason}`
    } catch (error) {
        quoteElement.innerHTML = `oops... no qotes to show`
    }

}


// see the note below on how to choose currentWindow or lastFocusedWindow
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  getQuotes(url)
  // use `url` here inside the callback because it's asynchronous!
});