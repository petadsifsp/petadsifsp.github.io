$(document).ready(function () {
  $("nav > div > a:nth-child(4)").addClass("selecionado");

  $("section:last-child > article > a > img").click(function (e) {
    let linkVideo = e.target.id;
    let nomeVideo = $(this).parent().siblings().find("h2")[0].innerText;
    let pessoa = $(this)
      .parent()
      .siblings()
      .find("div")
      .find("div")
      .find("p")[0].lastChild.data;

    let dataGravacao = $(this)
      .parent()
      .siblings()
      .find("div")
      .find("div")
      .find("p")[1].childNodes[1].data;

    let linkCodigo = $(this).parent().siblings().find("a")[0].href;

    $("div#video > iframe").attr("src", linkVideo);
    $("section:first-child > article > div > h2").text(nomeVideo);
    $("section:first-child > article > div > div").find(
      "p"
    )[0].childNodes[1].data = pessoa;
    $("section:first-child > article > div > div").find(
      "p"
    )[1].childNodes[1].data = dataGravacao;
    $;
    $("section:first-child > article > div > div").find("a")[0].href =
      linkCodigo;

    $("section > article").removeClass("selecionado");
    $(this).parent().parent().addClass("selecionado");
  });
});
