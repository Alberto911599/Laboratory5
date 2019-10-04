let cont = 0;

$("#btnSubmit").on("click", function(e){
    e.preventDefault();
    let name = $("#textInput").val();
    console.log(name);
    cont++;
    $("#shopList").append(`<li class="listItem" id="listItem_${cont}">
                                <p class="neutral" id="itemDescription_${cont}">
                                    ${name}
                                </p>
                                <button class="checkItem" id="checkItem_${cont}" >
                                    check
                                </button>
                                <button class = "deleteItem" id="deleteItem_${cont} ">
                                    delete
                                </delete>
                            </li>`);
});

$("#shopList").on("click", ".checkItem", function(e){
    let identifier = $(this).attr("id").substr(9);
    let currentClass = $("#itemDescription"+identifier).attr("class");
    if(currentClass == "neutral"){
        $("#itemDescription"+identifier).attr("class", "crossed");
    }
    else{
        $("#itemDescription"+identifier).attr("class", "neutral");
    }
});

$("#shopList").on("click", ".deleteItem", function(e){
    let identifier = $(this).attr("id").substr(10);
    $("#listItem"+identifier).remove();
});