$(document).ready(function () {
  let link1 = $("<link>")
    .attr("rel", "apple-touch-icon")
    .attr("sizes", "180x180")
    .attr("href", "../../../assets/icon/apple-touch-icon.png");
  let link2 = $("<link>")
    .attr("rel", "icon")
    .attr("type", "image/png")
    .attr("sizes", "32x32")
    .attr("href", "../../../assets/icon/favicon-32x32.png");
  let link3 = $("<link>")
    .attr("rel", "icon")
    .attr("type", "image/png")
    .attr("sizes", "16x16")
    .attr("href", "../../../assets/icon/favicon-16x16.png");
  let link4 = $("<link>")
    .attr("rel", "manifest")
    .attr("href", "../../../assets/icon/site.webmanifest");
  let meta = $("<meta>")
    .attr("name", "msapplication-TileColor")
    .attr("content", "#da532c");
  $("head").append(link1);
  $("head").append(link2);
  $("head").append(link3);
  $("head").append(link4);
  $("head").append(meta);

  let linkGitHub = $("<a>")
    .attr("href", "https://github.com/petadsifsp")
    .attr("target", "_blank");
  linkGitHub.append("<i class='fab fa-github fa-3x'></i>");
  let linkYoutube = $("<a>")
    .attr("href", "https://www.youtube.com/channel/UC92DC8TQL6KfxVS2mKemXiw")
    .attr("target", "_blank");
  linkYoutube.append("<i class='fab fa-youtube fa-3x'></i>");
  let linkInstagram = $("<a>")
    .attr("href", "https://www.instagram.com/petadsifsp/?hl=pt-br")
    .attr("target", "_blank");
  linkInstagram.append("<i class='fab fa-instagram fa-3x'></i>");
  let linkFacebook = $("<a>")
    .attr("href", "https://www.facebook.com/PETADSIFSP")
    .attr("target", "_blank");
  linkFacebook.append("<i class='fab fa-facebook fa-3x'></i>");

  let divRedesSociais = $("<div>").attr("class", "redes-sociais");
  divRedesSociais.append(linkGitHub);
  divRedesSociais.append(linkYoutube);
  divRedesSociais.append(linkInstagram);
  divRedesSociais.append(linkFacebook);

  let footerText = $("<p>").text(
    "Copyright © 2021 Desenvolvido por Equipe PET ADS - IFSP São Carlos"
  );

  let div = $("<div>").append(divRedesSociais);
  div.append(footerText);

  let img = $("<img>").attr("src", "../../../assets/nuvem-fundo-topo.svg");
  $("body > footer").append(img);
  $("body > footer").append(div);

  // menu
  let homeLink = $("<a>").attr("href", "../home/index.html");
  homeLink.append("<i class='fas fa-home'></i> HOME");
  let obiLink = $("<a>").attr("href", "../obi/index.html");
  obiLink.append("<i class='fas fa-file-code'></i> OBI");
  let publicacoesLink = $("<a>").attr("href", "../publications/index.html");
  publicacoesLink.append("<i class='fas fa-newspaper'></i> PUBLICAÇÕES");
  let projetosLink = $("<a>").attr("href", "../projects/index.html");
  projetosLink.append("<i class='fas fa-gamepad'></i> PROJETOS");
  let equipeLink = $("<a>").attr("href", "../equip/index.html");
  equipeLink.append("<i class='fas fa-user-friends'></i> EQUIPE");
  let divMenu = $("<div>");

  divMenu.append(homeLink);
  divMenu.append(publicacoesLink);
  divMenu.append(projetosLink);
  divMenu.append(obiLink);
  divMenu.append(equipeLink);

  $("header > nav").append(divMenu);

  $("nav > button").click(function (event) {
    event.preventDefault();

    if ($("nav > div").css("display") === "none") {
      $("nav > div").css("display", "flex");
    } else {
      $("nav > div").css("display", "none");
    }
  });
});
