fetch("suhaeng.json")
  .then((response) => response.json())
  .then((suhaengData) => {
    // let [month, day] = suhaengData[subjectData]
    //   .split(" ")[0]
    //   .split("/");
    // let subjectInfo = suhaengData[subjectData];

    // if (subjectInfo) {
    //   if (
    //     currentDate.getMonth() + 1 == month &&
    //     currentDate.getDate() == day
    //   ) {
    //     subjectElement.innerText = subjectData
    //       ? `${i + 1}교시: ${subjectData}❗`
    //       : ``;
    //   }
    //   // else {
    //   //   subjectElement.style.color = "black";
    //   // }
    // }
    if (suhaengData["문학"]) {
      document.getElementById("menu1").innerText = `${suhaengData["문학"]}
      
      `;
    }
    if (suhaengData["영어Ⅰ"]) {
      document.getElementById("menu2").innerText = `${suhaengData["영어Ⅰ"]}
      
      `;
    }
    if (suhaengData["수학Ⅰ"]) {
      document.getElementById("menu3").innerText = `${suhaengData["수학Ⅰ"]}
      
      `;
    }
    if (suhaengData["확률과 통계"]) {
      document.getElementById(
        "menu4"
      ).innerText = `${suhaengData["확률과 통계"]}
      
      `;
    }
    if (suhaengData["물리학Ⅰ"]) {
      document.getElementById("menu5").innerText = `${suhaengData["물리학Ⅰ"]}
      
      `;
    }
    if (suhaengData["화학Ⅰ"]) {
      document.getElementById("menu6").innerText = `${suhaengData["화학Ⅰ"]}
      
      `;
    }
    if (suhaengData["생명과학Ⅰ"]) {
      document.getElementById("menu7").innerText = `${suhaengData["생명과학Ⅰ"]}
      
      `;
    }
    if (suhaengData["지구과학Ⅰ"]) {
      document.getElementById("menu8").innerText = `${suhaengData["지구과학Ⅰ"]}
      
      `;
    }
    if (suhaengData["일본어Ⅰ"]) {
      document.getElementById("menu9").innerText = `${suhaengData["일본어Ⅰ"]}
      
      `;
    }
    if (suhaengData["음악 감상과 비평"]) {
      document.getElementById(
        "menu10"
      ).innerText = `${suhaengData["음악 감상과 비평"]}
      
      `;
    }
    if (suhaengData["진로활동"]) {
      document.getElementById("menu11").innerText = `${suhaengData["진로활동"]}
      
      `;
    }
    if (suhaengData["체육"]) {
      document.getElementById("menu12").innerText = `${suhaengData["체육"]}
      
      `;
    }
    if (suhaengData["기타"]) {
      document.getElementById("menu13").innerText = `${suhaengData["기타"]}`;
    }
  });

document.getElementById("back").addEventListener("click", () => {
  location.href = "index.html"; // 이동할 페이지 경로
});
