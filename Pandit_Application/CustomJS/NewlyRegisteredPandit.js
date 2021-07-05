$(document).ready(function () {

    Display ();
    
});

function Display() {

    $.ajax({
        url: "/NewlyRegisteredPandit/Display/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {
            debugger
            var datares = Res;
            var tabstring = "";



            for (var i = 0; i < datares.length; i++) {



                tabstring += "       <tr>"
                tabstring += "       <td>" + datares[i].PanditID + "</td>"
                tabstring += "       <td>" + datares[i].Fullname + " </td>"
                tabstring += "       <td>" + datares[i].Date + " </td>"
                tabstring += "       <td><a href='/NewRegisteredPanditDetails/AdminNewApplicantDetails?ID=" + datares[i].ID +"' class='btn btn-sm btn-primary' style='float: right;'> <span>View</span></a></td>"
                tabstring += "       </tr>"




            }
            $("#Table").append(tabstring);
        }

    });
}