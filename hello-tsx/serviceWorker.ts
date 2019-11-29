const isLocalHost = Boolean(

window.location.hostname === 'localhost' || 
    window.location.hostname === '[::1]' || 
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )

)

type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void
    onUpdate?: (registration: ServiceWorkerRegistration) => void
}

export function register(config?: Config){
    if (process.env.NODE_ENV=== 'production' && 'serviceWorker' in navigator){
        const publicUrl = new URL(
            (process as { env: { [key: string]: string } }).env.PUBLIC_URI,
            window.location.href
        )
        if(publicUrl.origin !==window.location.origin) {
            return
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`
            if(isLocalhost){
                checkValidServiceWorker(swUrl,config)

                navigator.serviceWorker.ready.then(() => {
                    consolelog(

                        'This web app is being serve cache-first by a service worker'

                    )

                })
            }else{ 
                registerValidSW(swUrl,config)
            }
        })
    }
}

function registerValidSW(swUrl: string, config?: Config) {
    navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
                return 
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state==='installed'){
                    if(navigator.serviceWorker.controller){
                        console.log(
                            'New content available ad will be used when all tabs for this page are clsoed'

                        )
                        //execute callback
                        if(config && config.onUpdate){
                            config.onUpdate(registration)
                        }
                        }else{
                        console.log('Content cached for offline use')
                        //everything precached

                        if(config && config.onSuccess){
                            config.onSuccess(registration)
                        }

                      }
                    }
                };
            };
            })

            .catch(error => {
                console.log('Error during service worker registration:', error)
             })
        }

        function checkValidServiceWorker(swUrl: string, config?: Config){
            fetch(swUrl)
            .then(response => {
                const contentType = response.headers.get('content-type')
                if(
                    response.status === 404 ||
                    (contentType != null && contentType.indexOf('javascript') ===-1)
                ){
                    navigator.serviceWorker.ready.then(registration => {
                        registration.unregister().then(() => {
                            window.location.reaload()
                        })
                    })
                }else {
                    registerValidSW(swUrl, config)
                }
            })
            .catch(() => {
                console.log(
                    'No internet connection found. App runs in offline mode'
                )
            })
        }

        export function unregister(){
            if('serviceWorker' in navigator){
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister()
                })
            }
        }



