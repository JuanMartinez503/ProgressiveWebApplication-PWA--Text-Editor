const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    butInstall.style.visibility = 'visible'


// TODO: Implement a click event handler on the `butInstall` element
//the click btn
butInstall.addEventListener('click', async () => {
    event.prompt()
    butInstall.setAttribute('disabled', true)
    butInstall.textContent='Installed'
});
})

// TODO: Add an handler for the `appinstalled` event
//logs the event after the app has been installed.
window.addEventListener('appinstalled', (event) => {
    console.log('app is installed', event)
});
