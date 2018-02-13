$(document).ready(function () {

    $.get("http://localhost:3002/wines", function (data, success) {
        for (var i = 0; i < data.length; i++) {
            var wine = data[i];
            console.log(wine);
            contructObject(wine.picture, wine.name, wine.items[0].price, wine.description, wine._id);
            createModal(wine.picture, wine.name, wine.description, wine.grapes, wine.country, wine.region ,wine.items[0].price, wine._id);
        }
    })

});

function contructObject(imagesrc, name, price, description,id) {

    var src = "/wines/";
    var img = src + imagesrc;
    var datamodelID="mymodal" + id;

    var div1 = document.createElement("div");
    div1.setAttribute("class", "col-lg-4 col-md-6 mb-4")


    var div2 = document.createElement("div");
    div2.setAttribute("class", "card h-100");

    var aForImage = document.createElement("a");
    aForImage.setAttribute("href", "#");
    aForImage.setAttribute("data-target" , "#"+datamodelID);
    aForImage.setAttribute("data-toggle","modal" );

    var br =document.createElement("br");

    aForImage.appendChild(br);
    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", img);
    image.setAttribute("alt", name);
    aForImage.appendChild(image);
    div2.appendChild(aForImage);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "card-body");

    var h4_1 = document.createElement("h4");
    h4_1.setAttribute("class", "card-title");

    var a_forItem = document.createElement("a");
    a_forItem.setAttribute("href", "#");
    a_forItem.innerHTML = name;

    h4_1.appendChild(a_forItem);
    div3.appendChild(h4_1);

    var h5_1 = document.createElement("h5");
    h5_1.innerHTML = price;

    div3.appendChild(h5_1);

    var p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.innerHTML = description.length > 100 ? description.substr(0, 100) + '...' : description;
    div3.appendChild(p1);
    div2.appendChild(div3);
    div1.appendChild(div2);

    $("#contentRow").append(div1);
}



function createModal(imagesrc, name, description, grapes, country, region, price,id){
    var src = "/wines/";
    var img = src + imagesrc;
    var datamodelID="mymodal" + id;

    var div_modal_fade = document.createElement("div");
    div_modal_fade.setAttribute("class", "modal","fade");
    div_modal_fade.setAttribute("id", datamodelID);
    div_modal_fade.setAttribute("role", "dialog");
    div_modal_fade.setAttribute("tabindex","-1");
    div_modal_fade.setAttribute("aria-labelledby","myModalLabel");
    div_modal_fade.setAttribute("aria-hidden","true");

    var div_vertical_alignment_helper = document.createElement("div");
    div_vertical_alignment_helper.setAttribute("class","vertical-alignment-helper")

    var div_modal_dialog = document.createElement("div")
    div_modal_dialog.setAttribute("class", "modal-dialog","vertical-align-center");

    var div_modal_content = document.createElement("div");
    div_modal_content.setAttribute("class", "modal-content");

    var div_modal_header = document.createElement("div");
    div_modal_header.setAttribute("class", "modal-header");

    var h4_modal_title = document.createElement("h4");
    h4_modal_title.setAttribute("class", "modal-title");
    h4_modal_title.innerHTML = "Info";

    div_modal_header.appendChild(h4_modal_title);

    div_modal_content.appendChild(div_modal_header);

    var div_modal_body = document.createElement("div");
    div_modal_body.setAttribute("class","modal-body");

    var div_row = document.createElement("div");
    div_row.setAttribute("class","row");

    var div_col_4 = document.createElement("div");
    div_col_4.setAttribute("class","col-4");

    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", img);
    image.setAttribute("alt", name);

    div_col_4.appendChild(image);

    div_row.appendChild(div_col_4);

    var div_col_8 = document.createElement("div");
    div_col_8.setAttribute("class","col-8");


    var table = document.createElement("table");
    table.setAttribute("class", "table", "table_user_information");

    var tbody = document.createElement("tbody");

    tbody.appendChild(generateTrLine("name",name));
    tbody.appendChild(generateTrLine("description",description));
    tbody.appendChild(generateTrLine("country",country));
    tbody.appendChild(generateTrLine("region",region));
    tbody.appendChild(generateTrLine("price",price));

    table.appendChild(tbody);

    div_col_8.appendChild(table);

    div_row.appendChild(div_col_8);

    div_modal_body.appendChild(div_row);

    div_modal_content.appendChild(div_modal_body)

    var div_modal_footer = document.createElement("div");
    div_modal_footer.setAttribute("class","modal-footer");

    var button_close_modal = document.createElement("button");
    button_close_modal.setAttribute("type","button");
    button_close_modal.setAttribute("class","btn btn-default" );
    button_close_modal.setAttribute("data-dismiss","modal");
    button_close_modal.innerHTML = "Close";

    div_modal_footer.appendChild(button_close_modal);

    div_modal_content.appendChild(div_modal_footer);

    div_modal_dialog.appendChild(div_modal_content);

    div_vertical_alignment_helper.appendChild(div_modal_dialog);

    div_modal_fade.appendChild(div_vertical_alignment_helper);

    $("#contentRow").append(div_modal_fade);

}

function generateTrLine(key, value){
    var tr = document.createElement("tr");
    var td_key = document.createElement("td");
    td_key.innerHTML = key;
    var td_value = document.createElement("td");
    td_value.innerHTML = value;
    tr.appendChild(td_key);
    tr.appendChild(td_value);
    return tr;
}

