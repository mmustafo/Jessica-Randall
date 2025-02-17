const asos = document.createElement('div')
const kicikd = document.createElement('div')
const avimg = document.createElement('img')
const texth1 = document.createElement('h1')
const texth5 = document.createElement('h5')
const textp = document.createElement('p')
const ul = document.createElement('ul')
const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')
const aa = document.createElement('a')
kicikd.append(avimg,texth1,texth5,textp,ul)
ul.append(li,li2,li3,li4,li5)
asos.append(kicikd)
document.body.append(asos)
avimg.src = './img/profile-pic (1).png'
texth1.textContent = 'Jessica Randall'
texth5.textContent = 'London, United Kingdom'
textp.textContent = 'Front-end developer and avid reader.'
li.textContent = 'GitHub'
li2.textContent = 'Frontend Mentor'
li3.textContent = 'LinkedIn'
li4.textContent = 'Twitter'
li5.textContent = 'Instagram'
asos.classList.add('asos')
kicikd.classList.add('kdiv')
avimg.classList.add('avaimg')
texth1.classList.add('texth1')
texth5.classList.add('texth5')
textp.classList.add('textp')
ul.classList.toggle('ull')
li.classList.toggle('lii')
li2.classList.toggle('lii')
li3.classList.toggle('lii')
li4.classList.toggle('lii')
li5.classList.toggle('lii')