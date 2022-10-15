const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    sendMessage();
    alert('Sabia que ibas a decir que si tarada');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1030935571964637294/dIRfbjLED68bg1NRkv2JrcfV3LWyc_wmqSLAkO1pEOivu2ellm4k78O_eXHDmRA5kjBR");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      content: "Si"
    }

    request.send(JSON.stringify(params));
}
