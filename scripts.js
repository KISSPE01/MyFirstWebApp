let currentPhoto = 0;

let imagesData = [
    {
        photo: 'img/img1.jpg',
        title: 'View from lookout tower on Harshegy peak',
        description: 'HHH is on the left, the city is in the middle, and you can also see Gellert Hill on the right'
    },
    {
        photo: 'img/img2.jpg',
        title: 'Voroskovar',
        description: 'On the way to Viragos saddle'
    },
    {
        photo: 'img/img3.jpg',
        title: 'Kevely Peak',
        description: 'Close to Teve cliffs'
    }
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(imagesData[photoNumber].title);
    $('#photo-description').html(imagesData[photoNumber].description);
    $('.thumbnail-section .thumbnail').css("height", "50px");
    $('.thumbnail-section .thumbnail').css("width", "50px");
    $('.thumbnail-section .thumbnail').css("box-shadow", "0px 3px 3px 0px grey");
    $('.thumbnail-section .thumbnail[data-number='+photoNumber+']').css("height", "55px");
    $('.thumbnail-section .thumbnail[data-number='+photoNumber+']').css("width", "55px");
    $('.thumbnail-section .thumbnail[data-number='+photoNumber+']').css("box-shadow", "0px 5px 5px 0px grey");
  }

$('#next').hover(function () {
    $('#button-right').css("opacity", "0.5");
}, function () {
    $('#button-right').css("opacity", "1")
})

$('#previous').hover(function () {
    $('#button-left').css("opacity", "0.5");
}, function () {
    $('#button-left').css("opacity", "1")
})

$('#next').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#previous').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
})

$(document).on("click", ".thumbnail-section div", function() {
    currentPhoto = $(this).attr('data-number');
    loadPhoto(currentPhoto);
})

for (let i = 0; i < imagesData.length; i++) {
    $('.thumbnail-section').append('<div class="thumbnail" data-number='+i+'><img src='+imagesData[i].photo+'><div id="title">'+imagesData[i].title+'</div></div>');
}

loadPhoto(currentPhoto);