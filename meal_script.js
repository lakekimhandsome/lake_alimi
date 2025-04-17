let currentDate = new Date();

const API_KEY = 'a0a0f31f219b466d97f785fd9fb71a57';  // 발급받은 인증키
const SCHOOL_CODE = '7010268'; // 휘문고 학교 코드
const GRADE = '2';  // 2학년
const CLASS = '4';  // 4반
const SDG_CODE = 'B10'; // 시도교육청 코드

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
}

function fetchMenu() {
    const formattedDate = formatDate(currentDate);
    const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${SDG_CODE}&SD_SCHUL_CODE=${SCHOOL_CODE}&MLSV_YMD=${formattedDate}&Type=JSON&Key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // API 응답 전체를 콘솔에 출력하여 확인
            const menu = data.mealServiceDietInfo?.[1]?.row?.[0]?.DDISH_NM;
            const cleanedMenu = menu.replace(/\(.*?\)/g, '')  // 괄호와 그 안의 내용 제거
            .replace(/\s{2,}/g, ' ')  // 여러 공백을 하나로
            .trim();
            
            const calInfo = data.mealServiceDietInfo?.[1]?.row?.[0]?.CAL_INFO || '';
            const calValue = calInfo.split(' ')[0]; // 열량 숫자만 추출
            const formattedCalInfo = `${calValue}kcal`; // kcal 추가
            const proteinMatch = data.mealServiceDietInfo?.[1]?.row?.[0]?.NTR_INFO.match(/단백질\(g\) *: *([\d.]+)/);
            const proteinInfo = proteinMatch ? `${proteinMatch[1]}g` : '';


            if (!menu || menu.length === 0) {
                document.getElementById('loading').innerText = '급식 메뉴를 가져오는 데 실패했습니다.';
                return;
            }

            document.getElementById('menu1').innerHTML = `${cleanedMenu}<br><br>총 열량: ${formattedCalInfo}<br>총 단백질: ${proteinInfo}`;
            const days = ['일', '월', '화', '수', '목', '금', '토'];
            const dayName = days[currentDate.getDay()];
            document.getElementById('loading').style.display = 'none'; // 로딩 중 텍스트 숨기기
            document.getElementById('dateTitle').innerText = `${currentDate.getMonth() + 1}/${currentDate.getDate()} (${dayName})`;
        })
        .catch(error => {
            console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
            document.getElementById('loading').innerText = '데이터를 가져오는 데 오류가 발생했습니다.';
        });
}

// 날짜를 이동시키는 함수 (하루 이전과 이후)
function changeDate(offset) {
    currentDate = new Date(currentDate.getTime() + offset * 24 * 60 * 60 * 1000); // 하루의 밀리초 값만큼 더하거나 빼기
    fetchMenu();
}

// 이전 날짜 버튼 클릭 시
document.getElementById('prevDay').addEventListener('click', () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = days[currentDate.getDay()];
    if (dayName == '월') {
        changeDate(-3);
    } else {
        changeDate(-1);
    }
});

// 다음 날짜 버튼 클릭 시
document.getElementById('nextDay').addEventListener('click', () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = days[currentDate.getDay()];
    if (dayName == '금') {
        changeDate(3);
    } else {
        changeDate(1);
    }
});

document.getElementById('back').addEventListener('click', () => {
    location.href = 'index.html'; // 이동할 페이지 경로
});

fetchMenu();