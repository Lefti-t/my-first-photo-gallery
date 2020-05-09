let startrails = {
    photo:'images/startrails.jpg',
    title:'Star Trails',
    description:'Star Trails in Ramsau am Dachstein,Austria.'

};

$('#startrails').attr('src',startrails.photo);

let ikaria = {
    photo:'images/ikaria.jpg',
    title:'Ikarian sky',
    description:'Star Trails around the North star in Ikaria,Greece.'

};

$('#ikaria').attr('src',ikaria.photo);

let colca = {
    photo:'images/colca.jpg',
    title:'Colca canyon',
    description:'Getting ready to sleep in Colca canyon,Peru.'

};

$('#colca').attr('src',colca.photo);

let galaxy = {
    photo:'images/galaxy.jpg',
    title:'Milky way galaxy',
    description:'Our Galaxy as seen from a base camp at Ausangate,Peru.'

};

$('#galaxy').attr('src',galaxy.photo);

let ausangate = {
    photo:'images/ausangate.jpg',
    title:'Glorious night',
    description:'Milky way rising over Ausangate mountain.'

};

$('#ausangate').attr('src',ausangate.photo);

let camping = {
    photo:'images/camping.jpg',
    title:'High altitude camp',
    description:'The sound of avalanches made falling asleep almost impossible.  '

};

$('#camping').attr('src',camping.photo);

let gallery = [ikaria,ausangate,colca,camping,galaxy,startrails ];

let currentPhoto = 0;

$('#photo').attr('src' , gallery[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src' , gallery[photoNumber].photo);
    $('#title').html(gallery[photoNumber].title);
    $('#description').html(gallery[photoNumber].description);
}

loadPhoto(currentPhoto);

/*  THUMBNAILS  */

$('#ikaria').click(() => {
    loadPhoto(0);
})
$('#ausangate').click(() => {
    loadPhoto(1);
})
$('#colca').click(() => {
    loadPhoto(2);
})
$('#camping').click(() => {
    loadPhoto(3);
})
$('#galaxy').click(() => {
    loadPhoto(4);
})
$('#startrails').click(() => {
    loadPhoto(5);
})





/* ARROWS */


$('#arrow_right').click(() => {
    if (currentPhoto < (gallery.length - 1)) {
    currentPhoto++;
    loadPhoto(currentPhoto);
  } else {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  }
})

$('#arrow_left').click(() => {
    if(currentPhoto > 0) {
    currentPhoto--;
    }
    loadPhoto(currentPhoto);
    }
)
