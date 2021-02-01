document.addEventListener('DOMContentLoaded', () => {
  OverlayScrollbars(document.querySelectorAll('.knobs'), {})

  const selects = document.querySelectorAll('.select')
  const inputs = document.querySelectorAll('.input')
  const jsEditor = document.querySelector('#js-editor')
  const checkboxes = document.querySelectorAll('.checkbox input')

  const button = document.querySelector('#btn')

  let notify_object = {
    status: 'success',
    title: 'Notify Title',
    text: 'Notify text lorem ipsum',
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    isIcon: true,
    isCloseButton: true,
    autoclose: false,
    autotimeout: 3000,
    gap: 20,
    type: 1
  }

  manipulateCode()

  selects.forEach((p) => {
    p.addEventListener('change', (e) => {
      const data = e.target.dataset.target
      const val = e.target.value

      switch (data) {
        case 'status':
          notify_object.status = val
          break
        case 'effect':
          notify_object.effect = val
          break
        case 'type':
          notify_object.type = parseInt(val)
          break
      }
      manipulateCode()
    })
  })

  inputs.forEach((p) => {
    p.addEventListener('input', (e) => {
      const data = e.target.dataset.target
      const val = e.target.value

      switch (data) {
        case 'title':
          notify_object.title = val
          break
        case 'text':
          notify_object.text = val
          break
        case 'customClass':
          notify_object.customClass = `'${val}'`
          break
        case 'customIcon':
          notify_object.customIcon = `'${val}'`
          break
        case 'speed':
          notify_object.speed = parseInt(val)
          break
        case 'autotimeout':
          notify_object.autotimeout = parseInt(val)
          break
        case 'gap':
          notify_object.gap = parseInt(val)
          break
      }

      manipulateCode()
    })
  })

  checkboxes.forEach((p) => {
    p.addEventListener('input', (e) => {
      const data = e.target.dataset.target
      const val = e.target.checked

      switch (data) {
        case 'autoclose':
          notify_object.autoclose = val
          break
        case 'isIcon':
          notify_object.isIcon = val
          break
        case 'isCloseButton':
          notify_object.isCloseButton = val
          break
      }

      manipulateCode()
    })
  })

  function manipulateCode() {
    jsEditor.innerHTML = Prism.highlight(
      `const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  new Notify ({
    status: '${notify_object.status}',
    title: '${notify_object.title}',
    text: '${notify_object.text}',
    effect: '${notify_object.effect}',
    speed: ${notify_object.speed},
    customClass: ${notify_object.customClass},
    customIcon: ${notify_object.customIcon},
    isIcon: ${notify_object.isIcon},
    isCloseButton: ${notify_object.isCloseButton},
    autoclose: ${notify_object.autoclose},
    autotimeout: ${notify_object.autotimeout},
    gap: ${notify_object.gap},
    type: ${notify_object.type}
  })
})`,
      Prism.languages.js,
      'js'
    )
  }

  button.addEventListener('click', () => {
    new Notify({
      ...notify_object
    })
  })
})
