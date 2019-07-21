$("#kitten-request").on("click", function () {
    $.getJSON("https://aws.random.cat/meow")
        .done(function (data) {
        console.log(data);
        $("#kitten-cam").attr('src', data.file);
    })
        .fail(function (err) {
        console.error(err);
    });
});