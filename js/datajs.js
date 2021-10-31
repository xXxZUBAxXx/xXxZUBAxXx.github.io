
maxIdSection = 6;
datasection =
        [
            {id: 1, name: "Канцелярия", sort: 1, status: 1},
            {id: 2, name: "Продукты питания", sort: 1, status: 1},
            {id: 3, name: "Мода", sort: 1, status: 1},
            {id: 4, name: "Бижутерия", sort: 1, status: 1},
            {id: 5, name: "Мебель и интерьер", sort: 1, status: 1},
            {id: 6, name: "Косметика", sort: 1, status: 1}
        ];

function Section(id, name, sort, status)
{
    this.id = id;
    this.name = name;
    this.sort = sort;
    this.status = status ? 1 : 0;
}
function getSection(obj) {
    status = obj.status === 1 ? "checked" : "";
    return $(
        '<div class="container" data-id="' + obj.id + '">' +
            '<div class="row">' +
                '<div class= "col-md-12" >' +
                    '<form class="form-horizontal" role="form">' +
                    '<div class="form-group">' +
                        '<div class="col-sm-2">' +
                            '<input type="text" class="form-control" placeholder="id" disabled="" value="' + obj.id +'">' +
                        '</div>' +
                        '<div class="col-sm-6">' +
                            '<input type="text" class="form-control" placeholder="Название секции" value="'+obj.name+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<input type="text" class="form-control" placeholder="Сортировка" value="'+obj.sort+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<div class="material-switch">' +
                                '<input id="section'+obj.id+'" name="someSwitchOption001" type="checkbox"' + status +'/>' +
                                '<label id="section'+obj.id+'for="someSwitchOptionSuccess" class="label-success"></label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-success">V</a>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-danger mydelete">X</a>' +
                        '</div>' +
                    '</div>' +
                '</form>' +
            '</ >' +
        '</div >' +
        '</div >' +
        '</div >'
    )
}
function getCategories(obj) {
    status = obj.status === 1 ? "checked" : "";
    return $(
        '<div class="container" data-id="' + obj.id + '">' +
            '<div class="row">' +
                '<div class= "col-md-12" >' +
                    '<form class="form-horizontal" role="form">' +
                    '<div class="form-group">' +
                        '<div class="col-sm-2">' +
                            '<input type="text" class="form-control" placeholder="id" disabled="" value="' + obj.id +'">' +
                        '</div>' +
                        '<div class="col-sm-6">' +
                            '<input type="text" class="form-control" placeholder="Название секции" value="'+obj.name+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<input type="text" class="form-control" placeholder="Сортировка" value="'+obj.sort+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<div class="material-switch">' +
                                '<input id="section'+obj.id+'" name="someSwitchOption001" type="checkbox"' + status +'/>' +
                                '<label id="section'+obj.id+'for="someSwitchOptionSuccess" class="label-success"></label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-success">V</a>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-danger mydelete">X</a>' +
                        '</div>' +
                    '</div>' +
                '</form>' +
            '</ >' +
        '</div >' +
        '</div >' +
        '</div >'
    )
}
maxIdCategory = 30;

datacategeory = [{id: 1, name: "Бумага для печати", section: 1, sort: 1, status: 1},
    {id: 2, name: "Письменные принадлежности", section: 1, sort: 1, status: 1},
    {id: 3, name: "Степлеры, и пр.", section: 1, sort: 1, status: 1},
    {id: 4, name: "Чернила", section: 1, sort: 1, status: 1},
    {id: 5, name: "Кондитерские изделия", section: 2, sort: 1, status: 1},
    {id: 6, name: "Хлеб", section: 2, sort: 1, status: 1},
    {id: 7, name: "Мясо", section: 2, sort: 1, status: 1},
    {id: 8, name: "Колбасы", section: 2, sort: 1, status: 1},
    {id: 9, name: "Сыры", section: 2, sort: 1, status: 1},
    {id: 10, name: "Консервы", section: 2, sort: 1, status: 1},
    {id: 11, name: "Мужская одежда", section: 3, sort: 1, status: 1},
    {id: 12, name: "Женская одежда", section: 3, sort: 1, status: 1},
    {id: 13, name: "Мужская обувь", section: 3, sort: 1, status: 1},
    {id: 14, name: "Женская обувь", section: 3, sort: 1, status: 1},
    {id: 15, name: "Детская одежда и обувь", section: 3, sort: 1, status: 1},
    {id: 16, name: "Кольцы", section: 4, sort: 1, status: 1},
    {id: 17, name: "Серьги", section: 4, sort: 1, status: 1},
    {id: 18, name: "Колье", section: 4, sort: 1, status: 1},
    {id: 19, name: "Письменные столы, парты", section: 5, sort: 1, status: 1},
    {id: 20, name: "Компьютерные столы", section: 5, sort: 1, status: 1},
    {id: 21, name: "Диваны и кровати", section: 5, sort: 1, status: 1},
    {id: 22, name: "Шкафы", section: 5, sort: 1, status: 1},
    {id: 23, name: "Кресла и стулья", section: 5, sort: 1, status: 1},
    {id: 24, name: "Комоды и тумбы", section: 5, sort: 1, status: 1},
    {id: 25, name: "Детская мебель", section: 5, sort: 1, status: 1},
    {id: 26, name: "Интерьерные элементы", section: 5, sort: 1, status: 1},
    {id: 27, name: "Искуственные цветы", section: 5, sort: 1, status: 1},
    {id: 28, name: "Эксперементальная косметика", section: 6, sort: 1, status: 1},
    {id: 29, name: "Косметические средства для женщин", section: 6, sort: 1, status: 1},
    {id: 30, name: "Косметические средства для мужчин", section: 6, sort: 1, status: 1}];

maxIdBrends = 30;
function getBrends(obj) {
    status = obj.status === 1 ? "checked" : "";
    return $(
        '<div class="container" data-id="' + obj.id + '">' +
            '<div class="row">' +
                '<div class= "col-md-12" >' +
                    '<form class="form-horizontal" role="form">' +
                    '<div class="form-group">' +
                        '<div class="col-sm-2">' +
                            '<input type="text" class="form-control" placeholder="id" disabled="" value="' + obj.id +'">' +
                        '</div>' +
                        '<div class="col-sm-6">' +
                            '<input type="text" class="form-control" placeholder="Название секции" value="'+obj.name+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<input type="text" class="form-control" placeholder="Сортировка" value="'+obj.sort+'">' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<div class="material-switch">' +
                                '<input id="section'+obj.id+'" name="someSwitchOption001" type="checkbox"' + status +'/>' +
                                '<label id="section'+obj.id+'for="someSwitchOptionSuccess" class="label-success"></label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-success">V</a>' +
                        '</div>' +
                        '<div class="col-sm-1">' +
                            '<a class="btn btn-block btn-danger mydelete">X</a>' +
                        '</div>' +
                    '</div>' +
                '</form>' +
            '</ >' +
        '</div >' +
        '</div >' +
        '</div >'
    )
}
databrends = [{id: 1, name: "Бренд №1 Секция №1", section: 1, sort: 1, status: 1},
    {id: 2, name: "Бренд №2 Секция №1", section: 1, sort: 1, status: 1},
    {id: 3, name: "Бренд №3 Секция №1", section: 1, sort: 1, status: 1},
    {id: 4, name: "Бренд №4 Секция №1", section: 1, sort: 1, status: 1},
    {id: 5, name: "Бренд №5 Секция №2", section: 2, sort: 1, status: 1},
    {id: 6, name: "Бренд №6 Секция №2", section: 2, sort: 1, status: 1},
    {id: 7, name: "Бренд №7 Секция №2", section: 2, sort: 1, status: 1},
    {id: 8, name: "Бренд №8 Секция №2", section: 2, sort: 1, status: 1},
    {id: 9, name: "Бренд №9 Секция №2", section: 2, sort: 1, status: 1},
    {id: 10, name: "Бренд №10 Секция №2", section: 2, sort: 1, status: 1},
    {id: 11, name: "Бренд №11 Секция №3", section: 3, sort: 1, status: 1},
    {id: 12, name: "Бренд №12 Секция №3", section: 3, sort: 1, status: 1},
    {id: 13, name: "Бренд №13 Секция №3", section: 3, sort: 1, status: 1},
    {id: 14, name: "Бренд №14 Секция №3", section: 3, sort: 1, status: 1},
    {id: 15, name: "Бренд №15 Секция №3", section: 3, sort: 1, status: 1},
    {id: 16, name: "Бренд №16 Секция №4", section: 4, sort: 1, status: 1},
    {id: 17, name: "Бренд №17 Секция №4", section: 4, sort: 1, status: 1},
    {id: 18, name: "Бренд №18 Секция №4", section: 4, sort: 1, status: 1},
    {id: 19, name: "Бренд №19 Секция №5", section: 5, sort: 1, status: 1},
    {id: 20, name: "Бренд №20 Секция №5", section: 5, sort: 1, status: 1},
    {id: 21, name: "Бренд №21 Секция №5", section: 5, sort: 1, status: 1},
    {id: 22, name: "Бренд №22 Секция №5", section: 5, sort: 1, status: 1},
    {id: 23, name: "Бренд №23 Секция №5", section: 5, sort: 1, status: 1},
    {id: 24, name: "Бренд №24 Секция №5", section: 5, sort: 1, status: 1},
    {id: 25, name: "Бренд №25 Секция №5", section: 5, sort: 1, status: 1},
    {id: 26, name: "Бренд №26 Секция №5", section: 5, sort: 1, status: 1},
    {id: 27, name: "Бренд №27 Секция №5", section: 5, sort: 1, status: 1},
];

function SectionColor(id, name, r, g, b, code)
{
    this.id = id;
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
    this.code = code;
}

function getColor(obj) {
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
    return $(
        '<div class="container" data-id="' + obj.id + '">' +
            '<div class="row">' +
                '<div class= "col-md-12" >' +
                    '<form class="form-horizontal" role="form">' +
                    '<div class="form-group">' +
                        '<div class="col-sm-1">' +
                        '<label class="control-label">Название</label>' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<input type="text" class="form-control" placeholder="id" disabled value="' + obj.id + '">'+
                    '</div>'+
                    '<div class="col-sm-3">'+
                        '<input type="text" class="form-control" placeholder="Название цвета" disabled value="'+obj.name+'">' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<input type="text" class="form-control" placeholder="Red" disabled value="'+obj.r+'">' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<input type="text" class="form-control" placeholder="Green" disabled value="'+obj.g+'">' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<input type="text" class="form-control" placeholder="Blue" disabled value="'+obj.b+'">' +
                    '</div>'+
                    '<div class="col-sm-2">'+
                        '<input type="text" class="form-control" placeholder="Код" disabled value="'+obj.code+'">' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<input type="color" class="form-control" value="' + rgbToHex(obj.r, obj.g, obj.b)+ '">' +
                    '</div>'+
                    '<div class="col-sm-1">'+
                        '<a class="btn btn-block btn-danger mydelete">X</a>'+
                        '</div>'+
                    '</div>'+
                    '</form>'+
                '</div>'+
            '</div>'+
        '</div>'
    )
}
maxIdColor = 5;
datacolor = [{id: 1, name: "Белый", r: 0xFF, g: 0xFF, b: 0xFF, code: "FFFFFF"},
    {id: 2, name: "Черный", r: 0, g: 0, b: 0, code: "000000"},
    {id: 3, name: "Красный", r: 0xFF, g: 0, b: 0, code: "FF0000"},
    {id: 4, name: "Зеленый", r: 0, g: 0xFF, b: 0, code: "00FF00"},
    {id: 5, name: "Синий", r: 0, g: 0, b: 0xFF, code: "000000FF"}];


function getSizes(obj) {
    return $(
        '<div class="container">'+
            '<div class="row">'+
                '<div class="col-md-12">'+
                    '<form class="form-horizontal" role="form">'+
                    '<div class="form-group">'+
                        '<div class="col-sm-2">'+
                            '<label class="control-label">Название</label>'+
                        '</div>'+
                        '<div class="col-sm-2">'+
                            '<input type="text" class="form-control" placeholder="id" disabled value="' + obj.id + '">' +
                        '</div>'+
                        '<div class="col-sm-6">'+
                            '<input type="text" class="form-control" placeholder="Название размера" disabled value="' + obj.name + '">' +
                        '</div>'+
                        '<div class="col-sm-2">'+
                            '<a class="btn btn-block btn-danger">X</a>'+
                        '</div>'+
                    '</div>'+
                '</form>'+
            '</div>'+
        '</div>'+
        '</div>'
    )
}
function SectionSizes(id, name)
{
    this.id = id;
    this.name = name;
}
maxIdSize = 5;
datasize = [
    {id: 1, name: "S"},
    {id: 2, name: "M"},
    {id: 3, name: "L"},
    {id: 4, name: "XL"},
    {id: 5, name: "XXL"}
];