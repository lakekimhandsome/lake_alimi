let currentDate = new Date();

const API_KEY = "a0a0f31f219b466d97f785fd9fb71a57"; // 발급받은 인증키
const SCHOOL_CODE = "7010268"; // 휘문고 학교 코드
const GRADE = "2"; // 2학년
const CLASS = "4"; // 4반

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

function fetchTimetable() {
  const formattedDate = formatDate(currentDate);
  const url = `https://open.neis.go.kr/hub/hisTimetable?Key=${API_KEY}&Type=JSON&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=${SCHOOL_CODE}&GRADE=${GRADE}&CLASS_NM=${CLASS}&ALL_TI_YMD=${formattedDate}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // API 응답 전체를 콘솔에 출력하여 확인
      const timetable = data.hisTimetable[1]?.row; // API 응답에서 시간표 데이터 가져오기

      if (!timetable || timetable.length === 0) {
        document.getElementById("loading").innerText =
          "시간표를 가져오는 데 실패했습니다.";
        return;
      }

      const days = ["일", "월", "화", "수", "목", "금", "토"];
      const dayName = days[currentDate.getDay()];
      document.getElementById("loading").style.display = "none"; // 로딩 중 텍스트 숨기기
      document.getElementById("dateTitle").innerText = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()} (${dayName})`;
      // 각 교시의 과목을 표시

      for (let i = 0; i < 7; i++) {
        const subjectElement = document.getElementById(`subject${i + 1}`);
        const subjectData = timetable[i] ? timetable[i].ITRT_CNTNT : null;
        subjectElement.innerText = subjectData
          ? `${i + 1}교시: ${subjectData}`
          : ``;

        if (dayName == "월") {
          if (i == 0) {
            if (subjectData != "수학 ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 1) {
            if (subjectData != "운동과 건강") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 2) {
            if (subjectData != "화학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 3) {
            if (subjectData != "진로활동") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 4) {
            if (subjectData != "확률과 통계") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 5) {
            if (subjectData != "독서") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          }
        } else if (dayName == "화") {
          if (i == 0) {
            if (subjectData != "영어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 1) {
            if (subjectData != "수학ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 2) {
            if (subjectData != "지구과학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 3) {
            if (subjectData != "세계시민(고)") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 4) {
            if (subjectData != "독서") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 5) {
            if (subjectData != "일본어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 6) {
            subjectElement.style.color = "black";
            subjectElement.innerText = "7교시: 적정";
          }
        } else if (dayName == "수") {
          if (i == 0) {
            if (subjectData != "수학ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 1) {
            if (subjectData != "영어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 2) {
            if (subjectData != "생명과학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 3) {
            if (subjectData != "음악 감상과 비평") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 4) {
            if (subjectData != "독서") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 5) {
            if (subjectData != "동아리활동") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 6) {
            if (subjectData != "동아리활동") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          }
        } else if (dayName == "목") {
          if (i == 0) {
            if (subjectData != "영어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 1) {
            if (subjectData != "물리학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 2) {
            if (subjectData != "운동과 건강") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 3) {
            if (subjectData != "지구과학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 4) {
            if (subjectData != "독서") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 5) {
            if (subjectData != "일본어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          }
        } else if (dayName == "금") {
          if (i == 0) {
            if (subjectData != "물리학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 1) {
            if (subjectData != "일본어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 2) {
            if (subjectData != "화학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 3) {
            if (subjectData != "수학ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 4) {
            if (subjectData != "확률과 통계") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 5) {
            if (subjectData != "생명과학Ⅰ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          } else if (i == 6) {
            if (subjectData != "영어ⅠⅠ") {
              subjectElement.style.color = "rgb(220, 170, 0)";
            } else {
              subjectElement.style.color = "black";
            }
          }
        }

        fetch("suhaeng.json")
          .then((response) => response.json())
          .then((suhaengData) => {
            let [month, day] = suhaengData[subjectData]
              .split(" ")[0]
              .split("/");
            let subjectInfo = suhaengData[subjectData];

            if (subjectInfo) {
              if (
                currentDate.getMonth() + 1 == month &&
                currentDate.getDate() == day
              ) {
                subjectElement.innerText = subjectData
                  ? `${i + 1}교시: ${subjectData}❗`
                  : ``;
              }
              // else {
              //   subjectElement.style.color = "black";
              // }
            }
          });
        // subjectElement.innerText = subjectData ? `${i + 1}교시: ${subjectData}` : ``;
        // subjectElement.style.color = 'rgb(220, 170, 0)';
      }
    })
    .catch((error) => {
      console.error("데이터를 가져오는 데 오류가 발생했습니다:", error);
      document.getElementById("loading").innerText =
        "데이터를 가져오는 데 오류가 발생했습니다.";
    });
}

// 날짜를 이동시키는 함수 (하루 이전과 이후)
function changeDate(offset) {
  currentDate = new Date(currentDate.getTime() + offset * 24 * 60 * 60 * 1000); // 하루의 밀리초 값만큼 더하거나 빼기
  fetchTimetable();
}

// 이전 날짜 버튼 클릭 시
document.getElementById("prevDay").addEventListener("click", () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = days[currentDate.getDay()];
  if (dayName == "월") {
    changeDate(-3);
  } else {
    changeDate(-1);
  }
});

// 다음 날짜 버튼 클릭 시
document.getElementById("nextDay").addEventListener("click", () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = days[currentDate.getDay()];
  if (dayName == "금") {
    changeDate(3);
  } else {
    changeDate(1);
  }
});

document.getElementById("viewMeal").addEventListener("click", () => {
  location.href = "meal.html"; // 이동할 페이지 경로
});

document.getElementById("viewAnnounce").addEventListener("click", () => {
  location.href = "announce.html"; // 이동할 페이지 경로
});

fetchTimetable();



