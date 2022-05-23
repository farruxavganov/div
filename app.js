const data1 = document.querySelector(".data1");
const data2 = document.querySelector(".data2");

data1.innerHTML = `${window.navigator.userAgent + "boshqa " + window.navigator.userAgentData.mobile + "\n" + window.navigator.userAgentData.platform}`;
data2.innerHTML = `${window.navigator.onLine}`;