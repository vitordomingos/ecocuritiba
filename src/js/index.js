const ecopontos = ['Ecoponto Jandaia', 'Ecoponto Vila Nova ', 'Ecoponto Érico Veríssimo', 'Ecoponto Guaçuí', 'Ecoponto Vila Verde', 'Ecoponto CIC', 'Ecoponto Caiuá', 'Ecoponto Cajuru ', 'Ecoponto Campo de Santana', 'Ecoponto Sambaqui', 'Ecoponto Icaraí', 'Ecoponto Metropolitano']

const ecopontosSection = document.getElementById('main-section')

const ecopontosInfos = {
    "Ecoponto Jandaia": {
        "adress": "R. Jorn. José Pedro dos Santos - Pedrinho, 801",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5103724131623!2d-49.244565099999996!3d-25.554681600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbd4bc043a03%3A0x2bdb3b900d453a63!2sRua%20Jornalista%20Jos%C3%A9%20Pedro%20dos%20Santos%20Pedrinho%2C%20801%20-%20Ganchinho%2C%20Curitiba%20-%20PR%2C%2081935-430!5e0!3m2!1spt-BR!2sbr!4v1730039149433!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Vila Nova": {
        "adress": "R. Ten. Cel. Vilagran Cabrita, 2495",
        "iframeLink":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2693701660346!2d-49.2302946!3d-25.5294027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfa4427fd31f5%3A0xbd0c48ae49c4f261!2sR.%20Tenente%20Coronel%20Vilagran%20Cabrita%2C%202495%20-%20Alto%20Boqueir%C3%A3o%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1730161761820!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Érico Veríssimo": {
        "adress": "R. Cap. Amin Mosse, 557",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.1917278038045!2d-49.25129200000001!3d-25.531989700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbb02cebdbc1%3A0x50d8b7a9ba2b4163!2sR.%20Cap.%20Amin%20Mosse%2C%20557%20-%20Alto%20Boqueir%C3%A3o%2C%20Curitiba%20-%20PR%2C%2081850-150!5e0!3m2!1spt-BR!2sbr!4v1730160839617!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Guaçuí": {
        "adress": "R. Maria Augusta, 1",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.6468664628937!2d-49.254436!3d-25.5501373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbc57123def9%3A0x424b3a2779e0581f!2sR.%20Maria%20Augusta%2C%201%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081935-080!5e0!3m2!1spt-BR!2sbr!4v1730160879385!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Vila Verde": {
        "adress": "R. Lydio Paulo Bettega, 300",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.03085901131215!2d-49.34064371672549!3d-25.530152348434733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd20a848695d%3A0x96f6bbf308f10bcb!2sEcoponto%20Vila%20Verde!5e0!3m2!1spt-BR!2sbr!4v1730161909903!5m2!1spt-BR!2sbr"
    },
    "Ecoponto CIC": {
        "adress": "R. Orestes Thá, 1765",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.7892107017083!2d-49.331816499999995!3d-25.5120756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd2c57d1ae27%3A0xbeabbdbfd837ebff!2sR.%20Orestes%20Th%C3%A1%2C%201765%20-%20Cidade%20Industrial%20de%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081020-490!5e0!3m2!1spt-BR!2sbr!4v1730160798349!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Caiuá": {
        "adress": "Av. Juscelino Kubitschek de Oliveira - Ld, 6800",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.422944366462!2d-49.3454511!3d-25.4909374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce294c9d01e0b%3A0x2d61a9ccdcaa291a!2sAv.%20Juscelino%20Kubitschek%20De%20Oliveira%20-%20Ld%2C%206800%20-%20Cidade%20Industrial%20de%20Curitiba%2C%20Curitiba%20-%20PR%2C%2081250-460!5e0!3m2!1spt-BR!2sbr!4v1730160556127!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Cajuru": {
        "adress": "R. Neusa Vieira Bet, 255",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.2615506547345!2d-49.195271600000005!3d-25.4629405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceffd743ed9cd%3A0x659595fcbc1375d4!2sR.%20Neusa%20Vieira%20Bet%2C%20255%20-%20Cajuru%2C%20Curitiba%20-%20PR%2C%2082990-090!5e0!3m2!1spt-BR!2sbr!4v1730160596774!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Campo de Santana": {
        "adress": "R. Teresa de Freitas Tavares, 331",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.717338557277!2d-49.3273072!3d-25.581069199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfdd38263ee9d%3A0x3cb630aa0545f264!2sR.%20Teresa%20de%20Freitas%20Tavares%2C%20331%20-%20Campo%20de%20Santana%2C%20Curitiba%20-%20PR%2C%2081020-490!5e0!3m2!1spt-BR!2sbr!4v1730160741154!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Sambaqui": {
        "adress": "Rua Radialista Souza Moreno, 40",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.8768706791731!2d-49.26718423050935!3d-25.55477779859266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbe8f446ec31%3A0x8271834cef1968f!2sRua%20Radialista%20Souza%20Moreno%2C%2040%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081935-320!5e0!3m2!1spt-BR!2sbr!4v1730161709986!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Icaraí": {
        "adress": "R. Olindo Caetani, 1330",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.405867909638!2d-49.202897799999995!3d-25.491507199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf07608a6a1cf%3A0x97a5c257e19887e6!2sR.%20Olindo%20Caetani%2C%201330%20-%20Uberaba%2C%20Curitiba%20-%20PR%2C%2081550-500!5e0!3m2!1spt-BR!2sbr!4v1730160925642!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Metropolitano": {
        "adress": "R. da Independência, 340",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.508136829934!2d-49.36381540000001!3d-25.42127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1dfecef8f9b%3A0xfd34234991e5fd31!2sR.%20da%20Independ%C3%AAncia%2C%20340%20-%20S%C3%A3o%20Braz%2C%20Curitiba%20-%20PR%2C%2082310-160!5e0!3m2!1spt-BR!2sbr!4v1730160992178!5m2!1spt-BR!2sbr"
    },
    "Ecoponto Parque Gomm":{
        "adress": "R. Hermes Fontes, 204",
        "iframeLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8734552885326!2d-49.2917055!3d-25.4424939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38e80707d19%3A0x22469f91e75e4002!2sR.%20Hermes%20Fontes%2C%20204%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080440-070!5e0!3m2!1spt-BR!2sbr!4v1730161089900!5m2!1spt-BR!2sbrv"
    }
}


for (let key in ecopontosInfos) {

    ecopontosSection.innerHTML += `<div class="item-container">
                <h2 class="item-name">${key}</h2>
                <p class="item-adress"><strong>Endereço:
                </strong> ${ecopontosInfos[key].adress}</p>
                <button class="item-button button" name="${key}" type="button">Ver no Mapa</button>
                <iframe title="Map Location" class="hidden ${key}" src="${ecopontosInfos[key].iframeLink}" width="95%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer"></iframe>
            </div>`
}


const buttons = document.getElementsByClassName('button')

const allIframes = document.getElementsByTagName('iframe')

function hideAllIframes() {

    for (let i = 0; i < allIframes.length; i++) {

        let iframe = allIframes[i]

        if(!iframe.classList.contains('hidden')){

            iframe.classList.add('hidden')
        }
    }
}

for (let i = 0; i < buttons.length; i++) {

    let ecopontoName = buttons[i].name

    buttons[i].addEventListener('click', ()=>{

        hideAllIframes()

        const iframe = document.getElementsByClassName(ecopontoName)
        iframe[0].classList.toggle('hidden')
    })
}