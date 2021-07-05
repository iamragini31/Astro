$(document).ready(function () {
    BindAddress();
});

function Subitform() {
    debugger
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


    var Ptrtxtname = $("#Ptrtxtname").val();
    var Ptrddlgender = $("#Ptrddlgender").find("option:selected").text();
    var Ptrddlday = $("#Ptrddlday").find("option:selected").val();
    var Ptrddlmonth = $("#Ptrddlmonth").find("option:selected").val();
    var Ptrddlyear = $("#Ptrddlyear").find("option:selected").text();
    var PtrddlMartial_Status = $("#PtrddlMartial_Status").find("option:selected").text();
    var PtrtxtTimeOfBirth = $("#PtrtxtTimeOfBirth").val();
    var Ptrtxtcityofbirth = $("#Ptrtxtcityofbirth").val();
    var PtrtxtstateofBirth = $("#PtrtxtstateofBirth").val();
    var Ptrtxtcountryofbirth = $("#Ptrtxtcountryofbirth").val();
    var PtrtxtAddress = $("#PtrtxtAddress").val();
    var Ptrtxtcity = $("#Ptrtxtcity").val();
    var Ptrtxtstate = $("#Ptrtxtstate").val();
    var PtrtxtCountry = $("#PtrtxtCountry").val();
    var PtrtxtZip = $("#PtrtxtZip").val();
    var chkPartner = document.getElementById("chkPassport");
    var tabcontent = $("#hdnPartnerFlag").val();






    if (hdnsession == null || hdnsession == "" || hdnsession == undefined) {
        alert("Please Login or Sign up before Proceeding further");
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
    else if (txtfullname == "" || txtfullname == undefined) {
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
    else if (ddlday == "Day" || ddlday == undefined) {
        alert("Please Select Day in Date of Birth");
    }
    else if (ddlmonth == "Month" || ddlmonth == undefined) {
        alert("Please Select Month in Date of Birth");
    }
    else if (ddlyear == "Year" || ddlyear == undefined) {
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
    else if (addressid == "" || addressid == undefined && (txtAddress == "" || txtZip == "" || txtstate == "" || txtcountry == "")) {
        alert("Please Select or Enter your complete Address");
    }
    else if (txtOccupation == "" || txtOccupation == undefined) {
        alert("Please Enter Your Occupation");
    }
    else if (hdnPartnerFlag == 1 || Ptrtxtname == "" || Ptrtxtname == undefined) {
        alert("Please Enter Parnter's Name");
    }
    else if (hdnPartnerFlag == 1 || Ptrddlgender == "Select" || Ptrddlgender == undefined) {
        alert("Please Select Parnter's Gender");
    }
    else if (hdnPartnerFlag == 1 || Ptrddlday == "Day" || Ptrddlday == undefined) {
        alert("Please Enter Parnter's Day of Birth");
    }
    else if (hdnPartnerFlag == 1 || Ptrddlmonth == "Month" || Ptrtxtname == Ptrddlmonth) {
        alert("Please Enter Parnter's  Month of Birth");
    }
    else if (hdnPartnerFlag == 1 || Ptrddlyear == "Year" || Ptrtxtname == Ptrddlyear) {
        alert("Please Enter Parnter's Year of Birth");
    }
    else if (hdnPartnerFlag == 1 || PtrddlMartial_Status == "Select" || PtrddlMartial_Status == undefined) {
        alert("Please Enter Parnter's Martial Status");
    }
    else if (hdnPartnerFlag == 1 || PtrtxtTimeOfBirth == "" || PtrtxtTimeOfBirth == undefined) {
        alert("Please Enter Parnter Name's Time of Birth");
    }
    else if (hdnPartnerFlag == 1 || Ptrtxtcityofbirth == "" || Ptrtxtcityofbirth == undefined) {
        alert("Please Enter Parnter's City of Birth");
    }
    else if (hdnPartnerFlag == 1 || PtrtxtstateofBirth == "" || PtrtxtstateofBirth == undefined) {
        alert("Please Enter Parnter's State of Birth");
    }
    else if (hdnPartnerFlag == 1 || Ptrtxtcountryofbirth == "" || Ptrtxtcountryofbirth == undefined) {
        alert("Please Enter Parnter's Country of Birth");
    }
    else if (hdnPartnerFlag == 1 || Ptrtxtcity == "" || Ptrtxtcity == undefined) {
        alert("Please Enter Parnter's City");
    }
    else if (hdnPartnerFlag == 1 || Ptrtxtstate == "" || Ptrtxtstate == undefined) {
        alert("Please Enter Parnter's State");
    }
    else if (hdnPartnerFlag == 1 || PtrtxtCountry == "" || PtrtxtCountry == undefined) {
        alert("Please Enter Parnter's Country");
    }
    else if (hdnPartnerFlag == 1 || PtrtxtZip == "" || PtrtxtZip == undefined) {
        alert("Please Enter Parnter's Zip Code");
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
            addressid: addressid,


            Ptrtxtname: Ptrtxtname,
            Ptrddlgender: Ptrddlgender,
            PtrddlMartial_Status: PtrddlMartial_Status,
            Ptrddlday: Ptrddlday,
            Ptrddlmonth: Ptrddlmonth,
            Ptrddlyear: Ptrddlyear,
            PtrtxtTimeOfBirth: PtrtxtTimeOfBirth,
            Ptrtxtcityofbirth: Ptrtxtcityofbirth,
            PtrtxtstateofBirth: PtrtxtstateofBirth,
            Ptrtxtcountryofbirth: Ptrtxtcountryofbirth,
            PtrtxtAddress: PtrtxtAddress,
            Ptrtxtcity: Ptrtxtcity,
            Ptrtxtstate: Ptrtxtstate,
            PtrtxtCountry: PtrtxtCountry,
            PtrtxtZip: PtrtxtZip,


        };


        var formdata = new FormData();
        for (var key in CustomerDetails) {
            formdata.append(key, CustomerDetails[key]);
        }

        $.ajax({
            url: "/DetailedReportForm/SaveDetailedReportForm",
            type: "POST",
            contentType: false,
            processData: false,
            data: formdata,
            success: function (response) {
                //var service = $("#hdnservice").val();
                if (response !== 0 && response > 0) {



                    //$scope.StudentRegID = response;
                    //alert(" " + service + "  Successfully booked.");
                    //alert(" Your Report is  Successfully booked.");

                    //clearform();
                    window.location.href = "/WalletPayment/WalletPayment";
                    //$scope.goToTab(2);
                }
                else {

                    alert("" + service + "   not booked.");
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