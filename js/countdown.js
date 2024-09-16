// Fecha del cumpleaños
const birthdayDate = new Date("Sep 21, 2024 22:30:00").getTime();

// Actualizar el conteo cada segundo
const countdownInterval = setInterval(function() {
    // Fecha y hora actuales
    const now = new Date().getTime();

    // Calcular la diferencia entre la fecha actual y la fecha del cumpleaños
    const distance = birthdayDate - now;

    // Cálculo del tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los valores actualizados en cada "contador-num"
    document.querySelectorAll('.contador-num')[0].textContent = days.toString().padStart(2, '0'); // Días
    document.querySelectorAll('.contador-num')[1].textContent = hours.toString().padStart(2, '0'); // Horas
    document.querySelectorAll('.contador-num')[2].textContent = minutes.toString().padStart(2, '0'); // Minutos
    document.querySelectorAll('.contador-num')[3].textContent = seconds.toString().padStart(2, '0'); // Segundos

    // Si el conteo ha terminado
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelectorAll('.contador-num')[0].textContent = "00";
        document.querySelectorAll('.contador-num')[1].textContent = "00";
        document.querySelectorAll('.contador-num')[2].textContent = "00";
        document.querySelectorAll('.contador-num')[3].textContent = "00";
        document.querySelector(".titulo-contador").textContent = "¡Es el cumpleaños!";
    }
}, 1000);
