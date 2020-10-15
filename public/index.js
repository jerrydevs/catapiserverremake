const ENDPOINTS = {
  GET_CAT_URL: 'https://desolate-river-60135.herokuapp.com/',
}

const catImg = document.getElementById('cat-image')

const setCatImg = (imgURL) => {
  catImg.src = imgURL
}

const getCatImage = async () => {
  const res = await fetch(ENDPOINTS.GET_CAT_URL, {
    method: 'GET',
  })
  return res.json()
}

getCatImage().then((data) => {
  const res = data
  setCatImg(res.url)
})
