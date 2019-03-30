$('#search-input').keyup(function () {
    var _this = $(this);//Это this inputa
    console.clear();
    $('.block').each(function () {
        console.log($(_this).val() + '=' + $(this).text());
        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1){
            //indexOf возвращает номер позиции в строке если не находит ничего то возвращает "-1", и все на всякий случай в нижний регистр
            $(this).closest('.col-md-4').hide();//прячем ближайшего родителя что бы блоки флотировали налево
        }else{
            $(this.parentNode).show();
        }
    });
});

//инициируем слайдер
$(function () {
    var popArray = [];
    var popMin = 0;
    var popMax = 0;
    $('.block .population span').each(function () {
        popArray.push( $(this).html());
    });
    //функция appLyпроходит массив и применяет-находит математический минимум и максимум из Math
    popMin = Math.min.apply(Math, popArray);
    popMax = Math.max.apply(Math, popArray);

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: popMax,
        values: [ popMin, popMax ],
        slide: function( event, ui ) {
            $("#amount").val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        },
        change: function (event, ui) {
            console.log(ui.values[0]);
            console.log(ui.values[1]);
        }
    });//изменение при работе слайдера
    $("#amount").val(  $("#slider-range").slider( "values", 0 ) +
        " - " + $("#slider-range").slider("values", 1) );//это инициализация при загрузке
});