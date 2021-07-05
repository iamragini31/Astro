$(document).ready(function () {
    getAllLang();
    BindAddress();
});

function getAllLang() {
    debugger
    var lang = "<option value=0>Select</option>";
    $.ajax({
        url: "/PanditRegistration/GetSkill/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    lang += '<option value=' + data[i].LangID + '>' + data[i].lang + '</option>';

                }

                $('#PreferredLang').html(lang);
            }
        }

    });
}
function SaveCustomerPuja() {
  debugger
    var custid = $("#hdnsession").val();
    if (custid == null || custid == "" || custid == undefined) {
        alert("Please Sign up or Login before Procedding further");
    }
    else {
        

        var name = $("#txtname").val();
        var ddlgender = $("#ddlgender").find("option:selected").val();
        var ddlMartial_Status = $("#ddlMartial_Status").find("option:selected").val();
        var ddlday = $("#ddlday").find("option:selected").val();
        var ddlmonth = $("#ddlmonth").find("option:selected").val();
        var ddlyear = $("#ddlyear").find("option:selected").val();
        var txtTimeOfBirth = $("#txtTimeOfBirth").val();
        //var PlaceOfBirth = $("#PlaceOfBirth").val();
        var txtcityofbirth = $("#txtcityofbirth").val();
        var txtstateofbirth = $("#txtstateofbirth").val();
        var txtcountryofbirth = $("#txtcountryofbirth").val();



        var CountryCode = $("#CountryCode").find("option:selected").text();
        var txtMobile = $("#txtMobile").val();
        if (txtMobile == "") {
            txtMobile = 0;
        }
        var txtOccupation = $("#txtOccupation").val();
        var txtEmail = $("#txtEmail").val();
        //var PreferredLang = $("#PreferredLang").find("option:selected").val();
        var txtAddress = $("#txtAddress").val();
        var txtcity = $("#txtcity").val();
        var txtstate = $("#txtstate").val();
        var txtcountry = $("#txtCountry").val();
        var txtZip = $("#txtZip").val();


        var txtTopicforCall = $("#txtTopicforCall").val();
        var addressid = $("input:radio[name=radio]:checked").val()

        if (name == "" || name == undefined || name == null) {
            alert("Please Enter Name");
            return false;
        }
        else if (addressid == "" || addressid == undefined && (txtAddress == "" || txtZip == "" || txtstate == "" || txtcountry == "")) {
            alert("Please Select or Enter your complete Address");
        }
        else if (ddlgender == "Select") {
            alert("Please Select Gender");
            return false;
        }
        else if (ddlMartial_Status == "Select") {
            alert("Please Select Martial Status");
            return false;
        }
        else if (ddlday == "Select") {
            alert("Please Select Gender");
            return false;
        }
        else if (ddlmonth == 0) {
            alert("Please Select Month");
            return false;
        }
        else if (ddlyear == "Select") {
            alert("Please Select Gender");
            return false;
        }
        else if (txtTimeOfBirth == "" || txtTimeOfBirth == undefined || txtTimeOfBirth == null) {
            alert("Please Enter Time Of Birth");
            return false;
        }
        else if (txtcityofbirth == "" || txtcityofbirth == undefined || txtcityofbirth == null) {
            alert("Please Enter City of Birth");
            return false;
        }
        else if (txtstateofbirth == "" || txtstateofbirth == undefined || txtstateofbirth == null) {
            alert("Please Enter State of Birth");
            return false;
        }
        else if (txtcountryofbirth == "" || txtcountryofbirth == undefined || txtcountryofbirth == null) {
            alert("Please Enter Country of Birth");
            return false;
        }
        else if (CountryCode == "" || CountryCode == undefined || CountryCode == null) {
            alert("Please Select Country Code");
            return false;
        }
        else if (txtMobile == "" || txtMobile == undefined || txtMobile == null) {
            alert("Please Enter Mobile");
            return false;
        }
        else if (txtOccupation == "" || txtOccupation == undefined || txtOccupation == null) {
            alert("Please Enter Occupation");
            return false;
        }
        else if (txtEmail == "" || txtEmail == undefined || txtEmail == null) {
            alert("Please Enter Email");
            return false;
        }

        else if (txtTopicforCall == "" || txtTopicforCall == undefined || txtTopicforCall == null) {
            alert("Please Enter Topic for Call");
            return false;
        }
     

     
        else {
            var CustomerDetails = {
                name: name,
                gender: ddlgender,
                Martial_Status: ddlMartial_Status,
                day: ddlday,
                month: ddlmonth,
                year: ddlyear,


                TimeOfBirth: txtTimeOfBirth,
                txtcityofbirth: txtcityofbirth,
                txtstateofbirth: txtstateofbirth,
                txtcountryofbirth: txtcountryofbirth,

                CountryCode: CountryCode,
                Mobile: txtMobile,
                Occupation: txtOccupation,
                Email: txtEmail,
                //PreferredLang: PreferredLang,

                Address: txtAddress,
                txtcity: txtcity,
                State: txtstate,
                Country: txtcountry,
                txtZip: txtZip,

                TopicforCall: txtTopicforCall,
                addressid: addressid
            };
            var formdata = new FormData();
            for (var key in CustomerDetails) {
                formdata.append(key, CustomerDetails[key]);
            }
            $.ajax({
                url: "/SelectedPuja/InsertSelectedPuja",
                type: "POST",
                contentType: false,
                processData: false,
                data: formdata,
                success: function (response) {

                    if (response !== 0 && response > 0) {
                        window.location.href = "/WalletPayment/WalletPayment";

                        //$.ajax({
                        //    url: "/AddWalletMoney/RazorpayGenerateOrderid?amount=" + response + "",
                        //    type: "GET",
                        //    contentType: "application/json",
                        //    dataType: "json",
                        //    success: function (response) {
                        //        if (response != null || response != "") {

                        //            window.location.href = "/PrePayment/PrePayment"
                        //            //window.location.reload();
                        //        }
                        //        else {

                        //            alert("Error Occured");


                        //        }
                        //    },
                        //    error: function (err) {

                        //        alert("Error Occured");
                        //    }
                        //});

                        //alert(" Pooja  Successfully booked.");

                        //window.location.href = "/DefaultHome/Default";

                    }
                    else {

                        alert("Pooja  Successfully not booked.");
                        window.location.href = "/DefaultHome/Default";
                        //clearform();
                    }
                },
                error: function (err) {

                }
            });

        }

    }
}
function BindAddress() {
    $.ajax({
        url: "/SelectedPuja/Bindaddress/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger
            var lang = "";
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    lang += "<tr>"
                        + " <td>"
                        + "  <div class='radio'>"
                        + "  <label><input type='radio' id='rdadd" + i + "' name='radio' value='" + data[i].Addressid + "'></label>"
                        + "  </div>"
                        + " </td>"
                        + " <td>" + data[i].completeaddress + "<input type='hidden' id='hdnaddid" + i + " value='" + data[i].Addressid + "'/></td>"

                        + "</tr>";

                }

                $('#mytable').append(lang);
            }
        }

    });
}