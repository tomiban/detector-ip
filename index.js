const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28acb195d2msh0c242e8cecdd21fp1f4001jsna509e79a2fcf',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

  const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
  } 



  //elemento del DOM
  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $submit = document.querySelector('#submit');
  const $results = document.querySelector('#results');
  const $test = document.querySelector('#test');
  
  $form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input; //recupera el valor del input
    if(!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    //Quita las propiedades una vez procesada la peticion
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')


  })