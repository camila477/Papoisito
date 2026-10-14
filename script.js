// 1. Candado de Seguridad por Fecha
function verificarFecha() {
    const inputVal = document.getElementById('fecha-input').value.trim();
    const errorMsg = document.getElementById('error-msg');
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');

    // Contraseña / Fecha secreta (15 de marzo de 2026)
    const fechaSecreta = "15032026"; 

    if (inputVal === fechaSecreta) {
        lockScreen.classList.add('fade-out');
        mainContent.classList.remove('hidden-content');
    } else {
        errorMsg.innerText = "Fecha incorrecta, intenta de nuevo papoi ";
        const card = document.querySelector('.lock-card');
        card.style.transform = "translateX(10px)";
        setTimeout(() => card.style.transform = "translateX(-10px)", 100);
        setTimeout(() => card.style.transform = "translateX(0)", 200);
    }
}

// Permitir presionar "Enter" para desbloquear
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const lockScreen = document.getElementById('lock-screen');
        if (!lockScreen.classList.contains('fade-out')) {
            verificarFecha();
        }
    }
});

// 2. Contador de Tiempo
const fechaInicio = new Date(2026, 2, 15, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    if (diferencia >= 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / 1000 / 60) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        document.getElementById('days').innerText = dias;
        document.getElementById('hours').innerText = horas;
        document.getElementById('minutes').innerText = minutos;
        document.getElementById('seconds').innerText = segundos;
    } else {
        const diffFutura = fechaInicio - ahora;
        const dias = Math.floor(diffFutura / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diffFutura / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diffFutura / 1000 / 60) % 60);
        const segundos = Math.floor((diffFutura / 1000) % 60);

        document.getElementById('days').innerText = dias;
        document.getElementById('hours').innerText = horas;
        document.getElementById('minutes').innerText = minutos;
        document.getElementById('seconds').innerText = segundos;
    }
}

setInterval(actualizarContador, 1000);
actualizarContador();

// 3. Generador de Fondo Estrellado y Varias Estrellas Fugaces
function crearCielo() {
    const container = document.querySelector('.sky-container');
    if (!container) return;

    // Destellos parpadeantes
    for (let i = 0; i < 35; i++) {
        const twinkle = document.createElement('div');
        twinkle.classList.add('twinkle');
        twinkle.style.left = Math.random() * 100 + 'vw';
        twinkle.style.top = Math.random() * 100 + 'vh';
        
        const tam = Math.random() * 3 + 2;
        twinkle.style.width = tam + 'px';
        twinkle.style.height = tam + 'px';
        twinkle.style.animationDelay = Math.random() * 3 + 's';

        container.appendChild(twinkle);
    }

    // Múltiples estrellas fugaces continuas
    const cantidadFugaces = 5;
    for (let j = 0; j < cantidadFugaces; j++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        shootingStar.style.top = (Math.random() * 50) + '%';
        shootingStar.style.right = (Math.random() * 80) + '%';
        
        const duracion = Math.random() * 3 + 3;
        const retraso = Math.random() * 6;
        
        shootingStar.style.animationDuration = `${duracion}s`;
        shootingStar.style.animationDelay = `${retraso}s`;

        container.appendChild(shootingStar);
    }
}

crearCielo();
// 4. Cambiar Mensajes del Botón
const mensajes = [
    "Gracias por estar a mi lado, por cada risa, cada abrazo y cada momento compartido. Te amo muchísimo Mariana.",
    "Eres mi lugar favorito en todo el mundo.",
    "Quiero seguir haciéndote sonreír todos los días.",
    "Cada día a tu lado es mi día favorito.",
    "Aunque no todo sea perfecto, prometo dar todo de mí para hacerte feliz.",
    "Eres la coincidencia más bonita que me ha pasado.",
    "Te amo mi papoisito.",
    "Gracias por estar a mi lado Mariana."
];

let indiceMensaje = 0;

function cambiarMensaje() {
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
    document.getElementById('secret-message').innerText = mensajes[indiceMensaje];
}
// Mostrar ramito + flores cayendo
function mostrarRamitoYFlores() {
    // Mostrar el ramito
    document.getElementById('ramito-container').classList.add('activo');
    
    // Lanzar flores
    const flores = ['🌸', '🌺', '💮', '🌷', '🌹', '💐', '🌻', '🌼'];
    
    for (let i = 0; i < 45; i++) {
        const flor = document.createElement('div');
        flor.classList.add('flower');
        flor.innerText = flores[Math.floor(Math.random() * flores.length)];
        
        flor.style.left = Math.random() * 100 + 'vw';
        
        const tamaño = Math.random() * 18 + 18;
        flor.style.fontSize = tamaño + 'px';
        
        const duracion = Math.random() * 3 + 3.5;
        const retraso = Math.random() * 1.8;
        
        flor.style.animationDuration = duracion + 's';
        flor.style.animationDelay = retraso + 's';
        
        document.body.appendChild(flor);
        
        setTimeout(() => {
            flor.remove();
        }, (duracion + retraso) * 1000);
    }
}

function cerrarRamito() {
    document.getElementById('ramito-container').classList.remove('activo');
}