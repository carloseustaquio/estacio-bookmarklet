(() => {
  console.log("bookmarklet starting")

  //get all p and do something
  let paragraphs = Array.from(document.querySelectorAll('p, li'))
  paragraphs.map( p => {

    if(p.style.fontWeight === 'bold') p.style.fontWeight = 'normal'
    else p.style.fontWeight = 'bold' 
  
  })

  //get iframe
  let iframe = document.getElementsByTagName('iframe')

  //get iframe p and do something
  let iframeParagraphs = Array.from(iframe[0].contentDocument.querySelectorAll('p, li, h1, h2, h3'))

  // console.log(iframeParagraphs)
  iframeParagraphs.map( p => {
    if(p.style.fontWeight === 'bold') p.style.fontWeight = 'normal'
    else {
      p.style.setProperty('font-weight', 'bold', 'important')
      //p.style.setProperty('color', '#000', 'important')
    } 
  
  })

  // get iframe body and do something
  let iframeTags = Array.from(iframe[0].contentDocument.querySelectorAll('body, .container-fluid'))
  
  iframeTags.map( tags => {

    if(tags.style.background !== '#ccc') tags.style.setProperty('background', '#ccc', 'important')
    // if(tags.style.background === '#ccc') tags.style.setProperty('background', 'inherit', 'important')
    // if(tags.className === "img_abertura") tags.style.setProperty('background', '#777', 'important')
    else tags.style.background = '#fff' 
  
  })



})()
