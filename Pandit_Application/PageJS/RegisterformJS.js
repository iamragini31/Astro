﻿
var criminal_record1, criminal_record2, criminal_record3, criminal_record4;
var services, pujas, countreport, Reports = [];
$(document).ready(function () {
    var Gender = $("#hdngender").val();
    $("#ddlGender").val(Gender);
    GetAllServices();
    GetAllPuja();
    BindPackages();
    GetDetailReport();
});

function Checkcriminal(i) {
    debugger
    if (i == 1) {
        criminal_record1 = $("#CriminalQuest" + i).find("CriminalQuest1").text();

        var check1 = $("#CriminalQuest1").find("option:selected").text();
        var check2 = $("#CriminalQuest2").find("option:selected").text();
        var check3 = $("#CriminalQuest3").find("option:selected").text();
        var check4 = $("#CriminalQuest4").find("option:selected").text();


        if (check1 == "No" && check2 == "No" && check3 == "No" && check4 == "No") {
            $("#btnsecondform").removeClass("disabled2");

        }
        else if (check1 == "Yes" || check2 == "Yes" || check3 == "Yes" || check4 == "Yes") {
            $("#btnsecondform").addClass("disabled2");

        }

    }
    if (i == 2) {
        criminal_record2 = $("#CriminalQuest" + i).find("option:selected").text();
        var check1 = $("#CriminalQuest1").find("option:selected").text();
        var check2 = $("#CriminalQuest2").find("option:selected").text();
        var check3 = $("#CriminalQuest3").find("option:selected").text();
        var check4 = $("#CriminalQuest4").find("option:selected").text();


        if (check1 == "No" && check2 == "No" && check3 == "No" && check4 == "No") {
            $("#btnsecondform").removeClass("disabled2");
        }
        else if (check1 == "Yes" || check2 == "Yes" || check3 == "Yes" || check4 == "Yes") {
            $("#btnsecondform").addClass("disabled2");
        }

    }

    if (i == 3) {
        criminal_record3 = $("#CriminalQuest" + i).find("option:selected").text();

        var check1 = $("#CriminalQuest1").find("option:selected").text();
        var check2 = $("#CriminalQuest2").find("option:selected").text();
        var check3 = $("#CriminalQuest3").find("option:selected").text();
        var check4 = $("#CriminalQuest4").find("option:selected").text();


        if (check1 == "No" && check2 == "No" && check3 == "No" && check4 == "No") {
            $("#btnsecondform").removeClass("disabled2");
        }
        else if (check1 == "Yes" || check2 == "Yes" || check3 == "Yes" || check4 == "Yes") {
            $("#btnsecondform").addClass("disabled2");

        }
    }

    if (i == 4) {
        criminal_record4 = $("#CriminalQuest" + i).find("option:selected").text();

        var check1 = $("#CriminalQuest1").find("option:selected").text();
        var check2 = $("#CriminalQuest2").find("option:selected").text();
        var check3 = $("#CriminalQuest3").find("option:selected").text();
        var check4 = $("#CriminalQuest4").find("option:selected").text();


        if (check1 == "No" && check2 == "No" && check3 == "No" && check4 == "No") {
            $("#btnsecondform").removeClass("disabled2");
        }
        else if (check1 == "Yes" || check2 == "Yes" || check3 == "Yes" || check4 == "Yes") {
            $("#btnsecondform").addClass("disabled2");

        }
    }
}

function GotoSecondform() {
    debugger
    var DisplayName = $("#DisplayName").val();
    var fileUpload = $("#ImgTaxId").val();
    var TaxIdNumber = $("#TaxIdNumber").val();

    var chkpersonalacknowledgement = document.getElementById("acknowlwdgementchk");
    if ((criminal_record1 == "Select" || criminal_record1 == undefined) &&
        (criminal_record2 == "Select" || criminal_record2 == undefined) &&
        (criminal_record3 == "Select" || criminal_record3 == undefined) &&
        (criminal_record4 == "Select" || criminal_record4 == undefined)) {

        alert("Please Select Criminal Details")
    }
    else if (criminal_record1 == "Yes" || criminal_record2 == "Yes" || criminal_record3 == "Yes" || criminal_record4 == "Yes") {

        $("#btnsecondform").addClass("disabled2");
        alert("You can not proceed further");
    }
    else if (chkpersonalacknowledgement.checked == false) {
        alert("Please Check the Acknowledgement");
    }
    else if (DisplayName == "" || DisplayName == undefined) {
        alert(" Please Enter Your Display Name");
    }
    else if (fileUpload == "" || fileUpload == undefined) {
        alert(" Please Upload Your Tax Id Card");
    }
    else if (TaxIdNumber == "" || TaxIdNumber == undefined) {
        alert(" Please Enter Your Tax Id Number");
    }
    else {
        var PanditID = $("#hdnpanditid").val();
        var formdata = new FormData();
        formdata.append('TaxIdNumber', $("#TaxIdNumber").val());
        formdata.append('DisplayName', $("#DisplayName").val());
        formdata.append('OtherOrganisationDetails', $("#OtherOrganisationDetails").val());
        $.ajax({
            url: "/REgisterForm/Setstatus",
            type: "POST",
            contentType: false,
            processData: false,
            //dataType: "json",
            data: formdata,
            success: function (Res) {
                debugger
                window.location.href = "/RegisterForm2/RegisterForm2"

            }

        });

    }
}

function SavepaymentDetails() {
    debugger

    var package = $("input:radio[name=package]:checked").val()

    var paymentoption = $("input:radio[name=payment]:checked").val();
    var ChargesForCall = $("#ChargesForCall").val();
    var ChargesForCallINR = $("#ChargesForCallINR").val();
    var ChargesForChat = $("#ChargesForChat").val();
    var ChargesForChatINR = $("#ChargesForChatINR").val();
    var ReportChargesINR = $("#ReportChargesINR").val();
    var ChargesForChat = $("#ChargesForChat").val();
    var Email_Bank = $("#Email_Bank").val();
    var chkpersonalacknowledgement2 = document.getElementById("acknowlwdgementchk2");

    if (paymentoption == undefined) {
        alert("Please select payment information");
    }
    else if (chkpersonalacknowledgement2.checked == false) {
        alert("Please Check the Acknowledgement");
    }
    else {
        if (paymentoption == "BankTransfer") {
            var BankName = $("#BankName").val();
            var AccNumber = $("#AccNumber").val();
            var AccHolderName = $("#AccHolderName").val();
            var IFSCCode = $("#IFSCCode").val();
            var RoutingNum = $("#RoutingNum").val();

            if (BankName == "" || BankName == undefined) {
                alert(" Please Enter Bank Name");
            }
            else if (AccNumber == "" || AccNumber == undefined) {
                alert(" Please Enter Account Number");
            }
            else if (AccHolderName == "" || AccHolderName == undefined) {
                alert(" Please Enter Account Holder Name");
            }
            else if ((IFSCCode == "" || IFSCCode == undefined) && (RoutingNum == "" || RoutingNum == undefined)) {
                alert(" Please Enter  either IFSC Code or Routing Number");
            }
            else if ((Email_Bank == "" || Email_Bank == undefined) && (Email_Bank == "" || Email_Bank == undefined)) {
                alert(" Please Bank E-mail Address");
            }
            else if (package == "" || package == undefined) {
                alert(" Please Select any Package");
            }
            else if (ChargesForCall == "" || ChargesForCall == undefined) {
                alert(" Please Enter Charges for Call Per Minute");
            }
            else if (ChargesForCallINR == "" || ChargesForCallINR == undefined) {
                alert(" Please Enter Charges for Call Per Minute in INR");
            }
            else if (ChargesForChat == "" || ChargesForChat == undefined) {
                alert(" Please Enter Charges for Chat Per Minute");
            }
            else if (ChargesForChatINR == "" || ChargesForChatINR == undefined) {
                alert(" Please Enter Charges for Chat Per Minute in INR");
            }
            else if (services == "" || services == undefined) {
                alert(" Please Select any Services");
            }
            else if (pujas == "" || pujas == undefined) {
                alert(" Please Select any Puja");
            }

            else {
                var packageid = $("#hdnpackageid" + package).val();
                var formdata = new FormData();
                var postdata = JSON.stringify(Reports);
                formdata.append('BankName', BankName); formdata.append('AccNumber', AccNumber); formdata.append('AccHolderName', AccHolderName); formdata.append('IFSCCode', IFSCCode);
                formdata.append('RoutingNum', RoutingNum);
                formdata.append('Email_Bank', Email_Bank);
                formdata.append('packageid', packageid);
                formdata.append('ChargesForCall', ChargesForCall);
                formdata.append('ChargesForCallINR', ChargesForCallINR);
                formdata.append('ChargesForChat', ChargesForChat);
                formdata.append('ChargesForChatINR', ChargesForChatINR);
                formdata.append('paymentoption', paymentoption);
                formdata.append('postdata', postdata);
                if (Reports.length > 0) {
                    SaveRaports()
                }
                $.ajax({
                    url: "/REgisterForm2/SavePayment",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    //dataType: "json",
                    data: formdata,
                    success: function (Res) {
                        debugger
                        if (Res > 0) {
                            alert("Payment Successfull!!");
                            window.location.href = "/DefaultAdminPandit/DefaultAdminPandit";
                        }
                        else {
                            window.location.href = "/Login/Login";

                        }

                    }

                });


            }
        }
        else if (paymentoption == "ZelleTransfer") {
            var PhoneNumberZelle = $("#PhoneNumberZelle").val();
            var EmailZelle = $("#EmailZelle").val();
            if (PhoneNumberZelle == "" || PhoneNumberZelle == undefined || PhoneNumberZelle == null) {
                alert(" Please Enter Zelle Transfer Phone number");
            }
            else if (EmailZelle == "" || EmailZelle == undefined || EmailZelle == null) {
                alert(" Please Enter Zelle Transfer Email id");
            }
            else if (package == "" || package == undefined) {
                alert(" Please Select any Package");
            }
            else if (ChargesForCall == "" || ChargesForCall == undefined) {
                alert(" Please Enter Charges for Call Per Minute");
            }
            else if (ChargesForChat == "" || ChargesForChat == undefined) {
                alert(" Please Enter Charges for Chat Per Minute");
            }
            else if (services == "" || services == undefined) {
                alert(" Please Select any Services");
            }
            else if (pujas == "" || pujas == undefined) {
                alert(" Please Select any Puja");
            }

            else {
                var packageid = $("#hdnpackageid" + package).val();
                var formdata = new FormData();
                formdata.append('BankName', BankName); formdata.append('AccNumber', AccNumber); formdata.append('AccHolderName', AccHolderName); formdata.append('IFSCCode', IFSCCode);
                formdata.append('RoutingNum', RoutingNum); formdata.append('packageid', packageid); formdata.append('ChargesForCall', ChargesForCall); formdata.append('ChargesForChat', ChargesForChat);
                formdata.append('paymentoption', paymentoption); formdata.append('PhoneNumberZelle', PhoneNumberZelle); formdata.append('EmailZelle', EmailZelle);
                if (Reports.length > 0) {
                    SaveRaports()
                }
                $.ajax({
                    url: "/REgisterForm2/SavePayment",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    //dataType: "json",
                    data: formdata,
                    success: function (Res) {
                        debugger
                        if (Res > 0) {
                            alert("Payment Successfull!!");
                            window.location.href = "/DefaultAdminPandit/DefaultAdminPandit";
                        }
                        else {
                            window.location.href = "/Login/Login";

                        }

                    }

                });

            }
        }
        else if (paymentoption == "PaypalTransfer") {
            var PaypalAccountNumber = $("#PaypalAccountNumber").val();
            var Email_Paypal = $("#Email_Paypal").val();
            if (PaypalAccountNumber == "" || PaypalAccountNumber == undefined || PaypalAccountNumber == null) {
                alert(" Please Enter Paypal Account Number");
            }
            if (Email_Paypal == "" || Email_Paypal == undefined || Email_Paypal == null) {
                alert(" Please Enter Paypal E-mail Address");
            }
            else if (package == "" || package == undefined) {
                alert(" Please Select any Package");
            }
            else if (ChargesForCall == "" || ChargesForCall == undefined) {
                alert(" Please Enter Charges for Call Per Minute");
            }
            else if (ChargesForChat == "" || ChargesForChat == undefined) {
                alert(" Please Enter Charges for Chat Per Minute");
            }
            else if (ReportCharges == "" || ReportCharges == undefined) {
                alert(" Please Enter Charges for the Report");
            }
            else if (services == "" || services == undefined) {
                alert(" Please Select any Services");
            }
            else if (pujas == "" || pujas == undefined) {
                alert(" Please Select any Puja");
            }


            else {
                var packageid = $("#hdnpackageid" + package).val();
                var formdata = new FormData();
                formdata.append('BankName', BankName); formdata.append('AccNumber', AccNumber); formdata.append('AccHolderName', AccHolderName); formdata.append('IFSCCode', IFSCCode);
                formdata.append('RoutingNum', RoutingNum); formdata.append('packageid', packageid); formdata.append('ChargesForCall', ChargesForCall); formdata.append('ChargesForChat', ChargesForChat);
                formdata.append('paymentoption', paymentoption); formdata.append('PaypalAccountNumber', PaypalAccountNumber);
                formdata.append('Email_Paypal', Email_Paypal);
                $.ajax({
                    url: "/REgisterForm2/SavePayment",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    //dataType: "json",
                    data: formdata,
                    success: function (Res) {
                        debugger
                        if (Res > 0) {
                            alert("Payment Successfull!!");
                            window.location.href = "/DefaultAdminPandit/DefaultAdminPandit";
                        }
                        else {
                            window.location.href = "/Login/Login";

                        }

                    }

                });
                if (Reports.length > 0) {
                    SaveRaports()
                }


            }
        }
        else if (paymentoption == "GooglePayTransfer") {
            var GooglePayId = $("#GooglePayId").val();
            if (GooglePayId == null || GooglePayId == undefined || GooglePayId == "") {
                alert(" Please Enter Google Payid");

            } else if (package == "" || package == undefined) {
                alert(" Please Select any Package");
            }
            else if (ChargesForCall == "" || ChargesForCall == undefined) {
                alert(" Please Enter Charges for Call Per Minute");
            }
            else if (ChargesForChat == "" || ChargesForChat == undefined) {
                alert(" Please Enter Charges for Chat Per Minute");
            }
            else if (services == "" || services == undefined) {
                alert(" Please Select any Services");
            }
            else if (pujas == "" || pujas == undefined) {
                alert(" Please Select any Puja");
            }

            else {
                var packageid = $("#hdnpackageid" + package).val();
                var formdata = new FormData();
                formdata.append('BankName', BankName); formdata.append('AccNumber', AccNumber); formdata.append('AccHolderName', AccHolderName); formdata.append('IFSCCode', IFSCCode);
                formdata.append('RoutingNum', RoutingNum); formdata.append('packageid', packageid); formdata.append('ChargesForCall', ChargesForCall); formdata.append('ChargesForChat', ChargesForChat);
                formdata.append('paymentoption', paymentoption); formdata.append('PaypalAccountNumber', PaypalAccountNumber); formdata.append('GooglePayId', GooglePayId);
                $.ajax({
                    url: "/REgisterForm2/SavePayment",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    //dataType: "json",
                    data: formdata,
                    success: function (Res) {
                        debugger
                        if (Res > 0) {
                            alert("Payment Successfull!!");
                            window.location.href = "/DefaultAdminPandit/DefaultAdminPandit";
                        }
                        else {
                            window.location.href = "/Login/Login";

                        }

                    }

                });
                if (Reports.length > 0) {
                    SaveRaports()
                }
            }
        }
    }

}

function GetAllServices() {
    $.ajax({
        url: "/RegisterForm2/GetServices/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var tabstring = "";
            for (var i = 0; i < datares.length; i++) {

                tabstring += "<div class='col-sm-3'>"
                tabstring += "<div class='form-check'>"
                tabstring += "  <input class='form-check-input' onclick='RemoveDisability(" + i + ")' type='checkbox' id='Services" + i + "'>"
                tabstring += "<label class='input__label' id='lblservices" + i + "'>" + datares[i].skills + "</label>"
                tabstring += "</div>"
                tabstring += "</div>"
                tabstring += " <div class='col-sm-1' style='display:inline;    margin-bottom: 46px;'>"
                tabstring += "<input type='text' class='form-control input-style disabled1' placeholder='USD' id='txtservicesprice" + i + "'>"
                tabstring += "</div>"
                tabstring += " <div class='col-sm-1' style='display:inline;    margin-bottom: 46px;'>"
                tabstring += "<input type='text' class='form-control input-style disabled1' onchange='saveServices(" + i + ")' placeholder='INR' id='txtservicespriceINR" + i + "'>"
                tabstring += "</div>"
                tabstring += "<div class='col-sm-1'>"
                tabstring += "</div>"


            }
            $("#servicesdiv").append(tabstring);
        }

    });
}

function saveServices(i) {
    debugger
    services = servicename = $("#lblservices" + i).text();
    var servicename = $("#lblservices" + i).text();
    var servicesprice = $("#txtservicesprice" + i).val();
    var servicespriceINR = $("#txtservicespriceINR" + i).val();
    $.ajax({
        url: "/RegisterForm2/SaveSkill/",
        type: "GET",
        data: { "servicename": servicename, "servicesprice": servicesprice, "servicespriceINR": servicespriceINR },
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {


        }

    });
}
function GetAllPuja() {
    $.ajax({
        url: "/RegisterForm2/GetPuja/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var tabstring = "";
            for (var i = 0; i < datares.length; i++) {

                tabstring += "<div class='col-sm-3'>"
                tabstring += "      <div class='form-check'>"
                tabstring += "      <input class='form-check-input' onclick='RemovePujaDisability(" + i + ")' type='checkbox' id='chkprice" + i + "'>"
                tabstring += "          <label id='lblpuja" + i + "' class='input__label'>" + datares[i].puja + "</label> "
                tabstring += "             </div>"
                tabstring += "    </div>"

                tabstring += "     <div class='col-sm-1' style='display:inline;margin-bottom: 46px;'>"
                tabstring += "         <input type='text'  class='form-control input-style disabled1' placeholder='USD' id='txtpuja" + i + "'>"

                tabstring += "      </div>"
                tabstring += "     <div class='col-sm-1' style='display:inline;margin-bottom: 46px;'>"
                tabstring += "         <input type='text' onchange='PujaServices(" + i + ")' class='form-control input-style disabled1' placeholder='INR' id='txtpujaINR" + i + "'>"

                tabstring += "      </div>"
                tabstring += "       <div class='col-sm-1'></div>"


            }
            $("#pujaservices").append(tabstring);
        }

    });
}

function PujaServices(i) {
    debugger
    pujas = $("#lblpuja" + i).text();
    var pujaname = $("#lblpuja" + i).text();
    var pujaprice = $("#txtpuja" + i).val();
    var pujapriceINR = $("#txtpujaINR" + i).val();
    $.ajax({
        url: "/RegisterForm2/SavePuja/",
        type: "GET",
        data: { "pujaname": pujaname, "pujaprice": pujaprice, "pujapriceINR": pujapriceINR },
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {


        }

    });
}
function RemoveDisability(i) {
    var check = document.getElementById("Services" + i + "");
    if (check.checked == true) {
        $("#txtservicesprice" + i).removeClass("disabled1");
        $("#txtservicesprice").css("background-color", "white");
        $("#txtservicespriceINR" + i).removeClass("disabled1");
        $("#txtservicespriceINR").css("background-color", "white");
    }
    else {
        $("#txtservicesprice" + i).addClass("disabled1");
        $("#txtservicespriceINR" + i).addClass("disabled1");
    }
}
function RemovePujaDisability(i) {
    var check = document.getElementById("chkprice" + i + "");
    if (check.checked == true) {
        $("#txtpuja" + i).removeClass("disabled1");
        $("#txtpuja").css("background-color", "white");
        $("#txtpujaINR" + i).removeClass("disabled1");
        $("#txtpujaINR").css("background-color", "white");
    }
    else {
        $("#txtpuja" + i).addClass("disabled1");
        $("#txtpujaINR" + i).addClass("disabled1");
    }
}
function BindPackages() {
    $.ajax({
        url: "/RegisterForm2/BindPackages/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var tabstring = "";
            for (var i = 0; i < datares.length; i++) {
                debugger
                tabstring += "          <div class='col-lg-4 col-md-6 px-2 mb-4'>"
                tabstring += "     <div class='card text-center card__hover'>"
                tabstring += "      <div class='card-header'>"
                tabstring += "<input type='hidden' value='" + datares[i].packageID + "' id='hdnpackageid" + datares[i].packageID + "'/>"
                tabstring += "              <h3 class='display-4'><span class='currency'>$" + datares[i].packageprice + ".00</span></h3> "
                tabstring += "      </div>"
                tabstring += "        <div class='card-block'>"
                tabstring += "        <h4 class='card-title'>" + datares[i].PackageName + " </h4> "
                tabstring += "            <ul class='list-group'>"
                //tabstring += "               <li class='list-group-item'>" + datares[i].packageDescription + "</li> "
                //<li class='list-group-item'>Taxes/GST as Applicable (As per Locations)</li>

                tabstring += "     </ul>"
                tabstring += "   <input  style='margin-top:20px;' type='radio' id='package" + i + "' name='package' value='" + datares[i].packageID + "'><span>&nbsp;&nbsp;</span><label style='font-size: 21px;color: #ff7e00;'>Buy</label>"
                tabstring += "        </div>"

                tabstring += "              </div>"
                tabstring += "        </div >"


            }
            $("#packages").append(tabstring);
        }

    });
}
function GetDetailReport() {
    debugger
    $.ajax({
        url: "/RegisterForm2/GetDetailReport/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var countreport = datares.length;
            var tabstring = "";
            for (var i = 0; i < datares.length; i++) {

                tabstring += "<div class='col-sm-3'>"
                tabstring += "      <div class='form-check'>"
                tabstring += "      <input class='form-check-input' type='checkbox' onclick='CheckReport(" + i + "," + datares[i].ReportId + ")' id='chkbox" + i + "'>"
                tabstring += "          <label style='margin-bottom: 25px;' id='" + datares[i].ReportId + "' class='input__label'>" + datares[i].DetailedReport + "</label> "
                tabstring += "             </div>"
                tabstring += "    </div>"




            }
            $("#DetailedReport").append(tabstring);
        }

    });
}
function SaveRaports() {
    debugger
    var ReportCharges = $("#ReportCharges").val();
    var ReportChargesINR = $("#ReportChargesINR").val();
    var postdata = JSON.stringify(Reports);
    $.ajax({
        url: "/RegisterForm2/SaveRaports/",
        type: "GET",
        data: { "postdata": postdata, "ReportCharges": ReportCharges, "ReportChargesINR": ReportChargesINR },
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {


        }

    });
}
function CheckReport(i, serviceid) {
    debugger
    if ($('#chkbox' + i).is(':checked')) {
        Reports.push({ "ReportId": serviceid });
    } else {
        for (var i = 0; i < Reports.length; i++) {
            if (Reports[i].ReportId == serviceid) {
                Reports.pop(i);
            }
        }

    }

}




