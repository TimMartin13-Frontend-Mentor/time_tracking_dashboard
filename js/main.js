const daily = document.querySelector(".link-daily");
const weekly = document.querySelector(".link-weekly");
const monthly = document.querySelector(".link-monthly");
const currWork = document.querySelector(".curr-work");
const prevWork = document.querySelector(".prev-work");
const currPlay = document.querySelector(".curr-play");
const prevPlay = document.querySelector(".prev-play");
const currStudy = document.querySelector(".curr-study");
const prevStudy = document.querySelector(".prev-study");
const currExercise = document.querySelector(".curr-exercise");
const prevExercise = document.querySelector(".prev-exercise");
const currSocial = document.querySelector(".curr-social");
const prevSocial = document.querySelector(".prev-social");
const currSelfCare = document.querySelector(".curr-self-care");
const prevSelfCare = document.querySelector(".prev-self-care");

import data from '../data.json' assert { type: 'json' };

async function getInfo() {
  dailyInfo(data);
  weeklyInfo(data);
  monthlyInfo(data);
}
  
function dailyInfo(resData) {
  daily.addEventListener("click", function () {
    reset();
    this.classList.toggle('selected');
    currWork.innerHTML = resData[0].timeframes.daily.current;
    prevWork.innerHTML = `Yesterday - ${ resData[0].timeframes.daily.previous }hrs`;
    currPlay.innerHTML = resData[1].timeframes.daily.current;
    prevPlay.innerHTML = `Yesterday - ${ resData[1].timeframes.daily.previous }hrs`;
    currStudy.innerHTML = resData[2].timeframes.daily.current;
    prevStudy.innerHTML = `Yesterday - ${ resData[2].timeframes.daily.previous }hrs`;
    currExercise.innerHTML = resData[3].timeframes.daily.current;
    prevExercise.innerHTML = `Yesterday - ${ resData[3].timeframes.daily.previous }hrs`;
    currSocial.innerHTML = resData[4].timeframes.daily.current;
    prevSocial.innerHTML = `Yesterday - ${ resData[4].timeframes.daily.previous }hrs`;
    currSelfCare.innerHTML = resData[5].timeframes.daily.current;
    prevSelfCare.innerHTML = `Yesterday - ${ resData[5].timeframes.daily.previous }hrs`;
  });
}

function weeklyInfo(resData) {
  weekly.addEventListener("click", function () {
    reset();
    this.classList.toggle('selected');
    currWork.innerHTML = resData[0].timeframes.weekly.current;
    prevWork.innerHTML = `Last Week - ${ resData[0].timeframes.weekly.previous }hrs`;
    currPlay.innerHTML = resData[1].timeframes.weekly.current;
    prevPlay.innerHTML = `Last Week - ${ resData[1].timeframes.weekly.previous }hrs`;
    currStudy.innerHTML = resData[2].timeframes.weekly.current;
    prevStudy.innerHTML = `Last Week - ${ resData[2].timeframes.weekly.previous }hrs`;
    currExercise.innerHTML = resData[3].timeframes.weekly.current;
    prevExercise.innerHTML = `Last Week - ${ resData[3].timeframes.weekly.previous }hrs`;
    currSocial.innerHTML = resData[4].timeframes.weekly.current;
    prevSocial.innerHTML = `Last Week - ${ resData[4].timeframes.weekly.previous }hrs`;
    currSelfCare.innerHTML = resData[5].timeframes.weekly.current;
    prevSelfCare.innerHTML = `Last Week - ${ resData[5].timeframes.weekly.previous }hrs`;
  });
}

function monthlyInfo(resData) {
  monthly.addEventListener("click", function () {
    reset();
    this.classList.toggle('selected');
    currWork.innerHTML = resData[0].timeframes.monthly.current;
    prevWork.innerHTML = `Last Month - ${ resData[0].timeframes.monthly.previous }hrs`;
    currPlay.innerHTML = resData[1].timeframes.monthly.current;
    prevPlay.innerHTML = `Last Month - ${ resData[1].timeframes.monthly.previous }hrs`;
    currStudy.innerHTML = resData[2].timeframes.monthly.current;
    prevStudy.innerHTML = `Last Month - ${ resData[2].timeframes.monthly.previous }hrs`;
    currExercise.innerHTML = resData[3].timeframes.monthly.current;
    prevExercise.innerHTML = `Last Month - ${ resData[3].timeframes.monthly.previous }hrs`;
    currSocial.innerHTML = resData[4].timeframes.monthly.current;
    prevSocial.innerHTML = `Last Month - ${ resData[4].timeframes.monthly.previous }hrs`;
    currSelfCare.innerHTML = resData[5].timeframes.monthly.current;
    prevSelfCare.innerHTML = `Last Month - ${ resData[5].timeframes.monthly.previous }hrs`;
  });

}

function reset () {
  daily.classList.remove('selected');
  weekly.classList.remove('selected');
  monthly.classList.remove('selected');
}

getInfo();