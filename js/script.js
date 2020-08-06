fetch('/api/get-html-files')
.then(response => response.json())
.then(data => listAll(data));

const listAll = (data) => {
data.map(item => {
  const itemd = item.split('.')[0]
  $('#list').append(`<li><a href="${itemd}" class="">${itemd}</a></li>`)
  $('#dropdown').append(`<a href="${itemd}" class="dropdown-item">${itemd}</a>`)
})
}