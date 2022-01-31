$(document).ready(function () {
  function sessao1() {
    $("section#equipe > article > div:nth-child(-n + 4)").show();
    $("section#equipe > article > div:nth-child(n + 5)").hide();
    $("section#equipe > footer > button:nth-child(1)")
      .css("width", "2rem")
      .css("background", "rgb(0, 0, 0, .2)");
    $("section#equipe > footer > button:nth-child(2)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
    $("section#equipe > footer > button:nth-child(3)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
  }
  function sessao2() {
    $("section#equipe > article > div:nth-child(-n + 4)").hide();
    $("section#equipe > article > div:nth-child(n + 5)").show();
    $("section#equipe > article > div:nth-child(n + 9)").hide();
    $("section#equipe > footer > button:nth-child(2)")
      .css("width", "2rem")
      .css("background", "rgb(0, 0, 0, .2)");
    $("section#equipe > footer > button:nth-child(1)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
    $("section#equipe > footer > button:nth-child(3)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
  }
  function sessao3() {
    $("section#equipe > article > div:nth-child(n + 9)").show();
    $("section#equipe > article > div:nth-child(-n + 8)").hide();
    $("section#equipe > footer > button:nth-child(3)")
      .css("width", "2rem")
      .css("background", "rgb(0, 0, 0, .2)");
    $("section#equipe > footer > button:nth-child(1)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
    $("section#equipe > footer > button:nth-child(2)")
      .css("width", "1rem")
      .css("background", "rgb(0, 0, 0)");
  }
  $("section#equipe > footer > button:nth-child(1)").click(sessao1);
  $("section#equipe > footer > button:nth-child(2)").click(sessao2);
  $("section#equipe > footer > button:nth-child(3)").click(sessao3);

  var carrossel = function (refWidth) {
    sessao1();
    var carrosselID;
    let proximaSessao = 2;

    if (refWidth >= 1024) {
      if (!carrosselID) {
        carrosselID = setInterval(function () {
          if (proximaSessao === 1) {
            sessao1();
            proximaSessao = 2;
          } else if (proximaSessao === 2) {
            sessao2();
            proximaSessao = 3;
          } else if (proximaSessao === 3) {
            sessao3();
            proximaSessao = 1;
          }
          console.log(refWidth);
        }, 5000);
      }
    } else {
      $("section#equipe > article > div").show();
      clearInterval(carrosselID);
      carrosselID = null;
    }
  };

  let width = window.innerWidth;
  carrossel(width);

  $(window).resize(function (event) {
    let width = event.currentTarget.innerWidth;
    carrossel(width);
  });
});
