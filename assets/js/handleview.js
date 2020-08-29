$(function () {
    $('#ask-name').focus();
});

$('#ask-name').change(function() {
    animations.firstTransition();
});

$('#notNow').click(function () {
    animations.firstTransition();
});

$('#backBtn').click(function () {
    $('.section-show').removeClass('section-show');

    var currentHistory = $('#history').val();
    var currentHistoryToArr = currentHistory.split(',');
    // console.log(currentHistoryToArr);      
    
    // remove last history
    if (currentHistoryToArr.length > 0) {
    currentHistoryToArr.pop();
    currentHistoryToArr.join();
    $('#history').val(currentHistoryToArr);
    }

    var lastHistory = currentHistoryToArr[(currentHistoryToArr.length - 1)];
    // console.log('lastHistory = ' + lastHistory);

    if (currentHistoryToArr.length > 0) {
    $('#'+ lastHistory).addClass('section-show');        
    } else {
    $(this).hide();
    $('#main-menu').addClass('section-show');
    }

});

var animations = {
    firstTransition: function () {
    $('#introduction')
        .delay(300)
        .fadeOut()
        .queue(function () {
        // move the header up
        section.modeHeaderUp('#header');

        // give visitor some words
        var visitorName = $('#ask-name').val();
        $('#salutation').text('Hi '+ visitorName + '! Glad to see you');
        $('#opening-word').text('Sorry we can\'t shake hand yet since pandemic still around. Wish you safe and healthy 😷');

        // hide input name
        $('#ask-name').hide();

        // show another section
        $('#main-menu').addClass('section-show');            
        });
    $('#notNow').fadeOut();
    }
}

var section = {
    modeHeaderUp: function (id) {
    $(id).attr('class','header-tops header-top');
    },
    hide: function(id) {        
    $(id).fadeOut();
    },
    show: function(id) {        
    $(id).attr('class','animate__animated animate__fadeInRight');
    },
    recordHistory: function(id) {
    var currentHistory = $('#history').val();
    
    var appendHistory;
    if (currentHistory == '') {
        appendHistory = id;
    } else {
        appendHistory = currentHistory + ',' + id;
    }

    $('#history').val(appendHistory);
    }
}

// handle section onclick
var sectionOnClick = {
    about: function() {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('about-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#about-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    },
    experience: function () {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('experience-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#experience-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    },      
    skill: function () {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('skill-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#skill-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    },
    education: function () {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('education-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#education-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    },
    contact: function () {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('contact-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#contact-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    },
    portfolio: function () {
    $('.section-show').removeClass('section-show');

    // record history
    section.recordHistory('portfolio-section');

    // change the salutation to name
    $('#salutation').text('Wisnu Wijokangko');

    $('#main-menu').removeClass('section-show');
    $('#portfolio-section').addClass('section-show');

    // show back btn
    $('#backBtn').show();
    }
}
