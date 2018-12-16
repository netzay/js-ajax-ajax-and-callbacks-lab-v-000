function searchRepositories() {
  let search = document.getElementById("searchTerms").value

  $.get(`https://api.github.com/search/repositories?q=${search}`).fail(displayError)
}

function showCommits() {
  let repos = JSON.parse(this.responseText)
  let list = repos.map(r => {
    return `<li><a href=${r.html_url}>${r.name}</a> -
    <a href='#'
      data-repository="${r.name}"
      data-username="${r.owner.login}"
      onclick='getCommits(this)'> Show Commits </a> -
    <a href='#'
      data-repository="${r.name}"
      data-username="${r.owner.login}"
      onclick='getBranches(this)'> Show Branches </a></li>`
  }).join('')
  let repoList = `<ul>${list}</ul>`


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
  document.getElementById("repositories").innerHTML = repoList
}

$(document).ready(function (){
});


