const urlBacon = "https://retoolapi.dev/PSi31i/data";
        function getdata(){$.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
            .done(function (data) {
                console.log(data);
            })
            .fail(function () {
                alert("no good");
            });
        }
getdata();