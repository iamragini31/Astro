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

function Subitform() {
    debugger
    var custid = $("#hdnsession").val();
    var hdnsession = $("#hdnsession").val();
    var txtfullname = $("#txtfullname").val();
    var ddlcountrycode = $("#ddlcountrycode").find("option:selected").text();
    var txtmobileno = $("#txtmobileno").val();
    var txtemail = $("#txtemail").val();
    var ddlgender = $("#ddlgender").find("option:selected").text();
    var ddlday = $("#ddlday").find("option:selected").val();
    var ddlmonth = $("#ddlmonth").find("option:selected").val();
    var ddlyear = $("#ddlyear").find("option:selected").text();
    var txttimeofbirth = $("#txttimeofbirth").val();
    var txtcity = $("#txtcity").val();
    var txtstate = $("#txtstate").val();
    var txtcountry = $("#txtCountry").val();
    var PreferredLang = $("#PreferredLang").find("option:selected").val();
    var Martial_Status = $("#Martial_Status").find("option:selected").text();
    var txttopicofcall = $("#txttopicofcall").val();
    var txtcityofbirth = $("#txtcityofbirth").val();
    var txtstateofbirth = $("#txtstateofbirth").val();
    var txtcountryofbirth = $("#txtcountryofbirth").val();
    var txtOccupation = $("#txtOccupation").val();
    var txtAddress = $("#txtAddress").val();
    var txtZip = $("#txtZip").val();
    var addressid = $("input:radio[name=radio]:checked").val()

    if (hdnsession == null || hdnsession == "" || hdnsession == undefined) {
        alert("Please Login or Sign up before Proceeding further");
    }
    else if (addressid == "" || addressid == undefined  && (txtAddress == "" || txtZip == "" || txtstate == "" || txtcountry == "")) {
        alert("Please Select or Enter your complete Address");
    }
    //else if (addressid == "" || addressid == undefined && (txtAddress == "")) {
    //    alert("Please Select or Enter your complete Address");
    //}
    //else if (addressid == "" || addressid == undefined  && (txtZip == "")) {
    //    alert("Please Select or Enter your complete Address");
    //}
    //else if (addressid == "" || addressid == undefined  && (txtcity == "")) {
    //    alert("Please Select or Enter your complete Address");
    //}
    //else if (addressid == "" || addressid == undefined  && (txtstate == "")) {
    //    alert("Please Select or Enter your complete Address");
    //}
    //else if (addressid == "" || addressid == undefined  && (txtcountry == "")) {
    //    alert("Please Select or Enter your complete Address");
    //}
    else if (txtfullname == "" || txtfullname == undefined ) {
        alert("Please Enter Your Full Name");
    }
    else if (ddlcountrycode == "Select" || ddlcountrycode == undefined) {
        alert("Please Select Country Code");
    }
    else if (txtmobileno == "" || txtmobileno == undefined) {
        alert("Please Enter Your Mobile Number");
    }
    else if (txtemail == "" || txtemail == undefined) {
        alert("Please Enter E-mail Address");
    }
    else if (ddlgender == "Select" || ddlgender == undefined) {
        alert("Please Select Your Gender");
    }
    else if (ddlday == "Select" || ddlday == undefined) {
        alert("Please Select Day in Date of Birth");
    }
    else if (ddlmonth == "Select" || ddlmonth == undefined) {
        alert("Please Select Month in Date of Birth");
    }
    else if (ddlyear == "Select" || ddlyear == undefined) {
        alert("Please Select Year in Date of Birth");
    }
    else if (txttimeofbirth == "" || txttimeofbirth == undefined) {
        alert("Please Enter Time of Birth");
    }
    //else if (txtcity == "" || txtcity == undefined) {
    //    alert("Please Enter your City");
    //}
    //else if (txtstate == "" || txtstate == undefined) {
    //    alert("Please Enter Your State");
    //}
    //else if (txtcountry == "" || txtcountry == undefined) {
    //    alert("Please Enter Your Country");
    //}
    else if (PreferredLang == "Select" || PreferredLang == undefined) {
        alert("Please Select Language");
    }
    else if (Martial_Status == "Select" || Martial_Status == undefined) {
        alert("Please Select Your Marital Status");
    }
    else if (txttopicofcall == "" || txttopicofcall == undefined) {
        alert("Please Enter Notes to Specialist");
    }
    else if (txtcityofbirth == "" || txtcityofbirth == undefined) {
        alert("Please Enter City of Birth");
    }
    else if (txtstateofbirth == "" || txtstateofbirth == undefined) {
        alert("Please Enter State of Birth");
    }
    else if (txtcountryofbirth == "" || txtcountryofbirth == undefined) {
        alert("Please Enter Country Of Birth");
    }
    else if (txtOccupation == "" || txtOccupation == undefined) {
        alert("Please Enter Your Occupation");
    }
    else {
        var CustomerDetails = {
            name: txtfullname,
            gender: ddlgender,
            Martial_Status: Martial_Status,
            day: ddlday,
            month: ddlmonth,
            year: ddlyear,
            TimeOfBirth: txttimeofbirth,

            txtcity: txtcity,
            State: txtstate,
            Country: txtcountry,
            txtZip: txtZip,
            txtAddress: txtAddress,
            CountryCode: ddlcountrycode,
            Mobile: txtmobileno,

            Email: txtemail,
            PreferredLang: PreferredLang,

            TopicforCall: txttopicofcall,
            txtcityofbirth: txtcityofbirth,
            txtstateofbirth: txtstateofbirth,
            txtcountryofbirth: txtcountryofbirth,
            txtOccupation: txtOccupation,
            addressid: addressid

        };

       
        var formdata = new FormData();
        for (var key in CustomerDetails) {
            formdata.append(key, CustomerDetails[key]);
        }

        $.ajax({
            url: "/CallIntakeForm/SaveChat_Call_Service",
            type: "POST",
            contentType: false,
            processData: false,
            data: formdata,
            success: function (response) {
              var service=  $("#hdnservice").val();
                if (response !== 0 && response > 0) {
                    //$scope.StudentRegID = response;
                    alert(" " + service+"  Successfully booked.");
                    //clearform();
                    window.location.href = "/StartChat/Index?CustId=" + custid +"&Service=Chat";
                    //$scope.goToTab(2);
                }
                else {

                    alert("" + service+"   not booked.");
                    window.location.href = "/DefaultHome/Default";
                    //clearform();
                }
            },
            error: function (err) {

            }
        });
    }
}

function BindAddress() {
    $.ajax({
        url: "/CallIntakeForm/Bindaddress/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            debugger
            var lang = "";  
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    lang += "<tr>"
                       +" <td>"
                          +"  <div class='radio'>"
                        + "  <label><input type='radio' id='rdadd" + i + "' name='radio' value='" + data[i].Addressid + "'></label>"
                                                  +"  </div>"
                        + " </td>"
                        + " <td>" + data[i].completeaddress + "<input type='hidden' id='hdnaddid" + i + " value='" + data[i].Addressid + "'/></td>"

                                            +"</tr>";

                }

                $('#mytable').append(lang);
            }
        }

    });
}

