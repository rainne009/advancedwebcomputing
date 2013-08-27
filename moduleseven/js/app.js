
$(document).ready(function(){

    $('#searchForm').submit(function(){
        webSearch();
        return false;
    });
	
    function webSearch(){
        var inp = $('#s').val();
        var apiURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
        $.ajax({
            type: "GET",
            data: {
                q: inp,
                apiKey: 'yqmxyvyjaff6v6ufx9j4n3ru'
            },
            url: apiURL,
            dataType:"jsonp",
            success: showMovies
        });
    };

    function showMovies(response) { 
        console.log('response', response);
        var movies = response.movies;
        $('div.found').html(""); 
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            var result = $('div.found');
            result.append('<h2>'+ movie.title + '</h2>');
            result.append('<h3> Year Released: '+ movie.year + '</h3>');
            result.append('<img src="' + movie.posters.thumbnail + '" />');
            result.append('<p> Synopsis: ' + movie.synopsis + '</p>');
        };
		var n = response.movies.length;
		$('.resulta').html("");
		$('.resulta').append('<p>No. of result/s found: '+'<span>'+n+'</span>'+'</p>');
		  
    };
	
	
    

    
    
});

