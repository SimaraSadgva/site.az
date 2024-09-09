const inpSehife= document.getElementById("inpSehife")
const statikSehife= document.getElementById("statikSehife")
const sehifeSayi= document.getElementById("sehifeSayi")
const customRange4= document.getElementById("customRange4")
const teklifPul =document.getElementById("teklifPul")
const elaventc =document.getElementById("elaventc")
const axtarisntc = document.getElementById("axtarisntc")
const elektronntc = document.getElementById("elektronntc")
const elave =document.getElementById('elave')
const seo =document.getElementById('seo')
const ticaret =document.getElementById('ticaret')
const logoD =document.getElementById("logoD")
const logodizayn =document.getElementById('logodizayn')
const logoDizaynXerc = document.getElementById('logoDizaynXerc')
const umumdeyer=document.getElementById('umumdeyer')
const popap =document.getElementById('popap')

let umumntcgo=0
let umumstatikgo = 0
let umumaxtarisgo = 0
let umumticaretgo = 0
let umumlogodizayngo = 0


function getPageRange() {

    let sehife = +inpSehife.value;
    let dizayn = +customRange4.value;
    
    let deyisencem = sehife * 0.01; 
    let deyisecem2 = dizayn * 10000; 
    let umum = deyisencem * deyisecem2; 
    
    statikSehife.innerHTML = " səhifə / ₼ " + umum.toFixed(0);
    sehifeSayi.innerHTML = sehife;
    teklifPul.innerHTML= "₼" + umum.toFixed(0)
    umumstatikgo = umum
    umumdeyergo()
}

getPageRange()



function artrgo(){
    let kod=0
    if(bloq.checked) kod+=+bloq.value
    if(responsive.checked) kod+=+responsive.value
    if(mesajlasma.checked) kod+=+mesajlasma.value
    if(qalereya.checked) kod+=+qalereya.value
    if(saytdaaxtaris.checked) kod+=+saytdaaxtaris.value
    if(rezervasyon.checked) kod+=+rezervasyon.value
    if(analitika.checked) kod+=+analitika.value
    if(profiller.checked) kod+=+profiller.value
    if(forum.checked) kod+=+forum.value
    if(canlisohbet.checked) kod+=+canlisohbet.value
    if(elaqeformasi.checked) kod+=+elaqeformasi.value
    if(xeritemelumati.checked) kod+=+xeritemelumati.value
    if(sosialmedia.checked) kod+=+sosialmedia.value
    if(adminpanel.checked) kod+=+adminpanel.value
    elaventc.innerHTML="₼"+kod
    umumntcgo=kod
    elave.innerHTML="₼"+kod
    umumdeyergo()
}


function axtarisgo(){
    let kod=0
    if(basliqlar.checked) kod+=+basliqlar.value   
     if(qabaqcil.checked) kod+=+qabaqcil.value  
     if(sitemap.checked) kod+=+sitemap.value   
     if(acarsoz.checked) kod+=+acarsoz.value
     if(basliqteqleri.checked) kod+=+basliqteqleri.value
    axtarisntc.innerHTML="₼"+kod
    seo.innerHTML ="₼" + kod
    umumaxtarisgo = kod
    umumdeyergo()
}

function getelektron(){
    let kod =0
    if(odenis.checked) kod+= +odenis.value
    if(mehsullar.checked) kod+= +mehsullar.value
    if(filtr.checked) kod+= +filtr.value
    if(sebet.checked) kod+= +sebet.value
    if(beyendiklerim.checked) kod+= +beyendiklerim.value
    if(mehsulhaqq.checked) kod+= +mehsulhaqq.value
    elektronntc.innerHTML = "₼"+kod
    ticaret.innerHTML = "₼"+kod
    umumticaretgo = kod
    umumdeyergo()
}

function getLogoDizayn(){
    let dizayn =+ logodizayn.value 
    let deyisencem=(dizayn*100)
    let umum=deyisencem
    logoDizaynXerc.innerHTML="₼" + umum.toFixed(0) 
    logoD.innerHTML = '₼' + umum
    umumlogodizayngo = umum
    umumdeyergo()
   
}


function umumdeyergo(){
    let umumhesab=umumntcgo + umumstatikgo + umumaxtarisgo + umumticaretgo + umumlogodizayngo
    umumhesab <450 ? umumhesab=450 :
    umumdeyer.innerHTML="₼" + umumhesab.toFixed(0)
    umumhesab=''
}
umumdeyergo()

document.addEventListener('DOMContentLoaded', function () {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let desktopFlag = document.querySelector('.basliqlar');
    let navbarBrand = document.querySelector('.navbar-brand');
  
    navbarToggler.addEventListener('click', function () {
      if (navbarToggler.classList.contains('collapsed')) {
        desktopFlag.style.display = 'flex';
        navbarBrand.style.display = 'block';
      } else {
        desktopFlag.style.display = 'none';
        navbarBrand.style.display = 'none';
   
      }
    });
  });

function popupAc() {
  popap.classList.add('show');
}

function popbaqla() {
  popap.classList.remove('show');
}
