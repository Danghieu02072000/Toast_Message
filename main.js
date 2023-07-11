function toast( {title, message, type = 'success', duration = 3000}) {
    const toasts = document.querySelector('.toasts');

    const types = {
        success: '<i class="bi bi-check-circle-fill"></i>',
        info: '<i class="bi bi-info-circle-fill"></i>',
        warning: '<i class="bi bi-exclamation-circle-fill"></i>'

    }
    if(toasts) {
        const toast = document.createElement('div');
        toast.classList.add('toast',`toast--${type}`);




        toast.onclick= function(e) {
            if(e.target.closest('.toast__close')) {
                    toasts.removeChild(toast);
                    clearTimeout(autoRemove);
            }
        };
        toast.style.animation = `slideInLeft 0.5s ease , fadeOut 1s linear ${duration / 1000}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">${types[type]}</div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <span class="toast__mess">${message}</span>
        </div>
        <div class="toast__close">
            <i class="bi bi-x"></i>
        </div>`;

        toasts.appendChild(toast)
        const autoRemove = setTimeout(function(){
            toasts.removeChild(toast)
        },duration + 1000)

    }
}


function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Anyone with access can view your invited visitor',
        type: 'success',
        duration: 5000,
    })
}
function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Anyone with access can view your invited visitor',
        type: 'warning',
        duration: 5000,
    })
}