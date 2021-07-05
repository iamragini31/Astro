var english, hindi, french, german, bengali, spanish, urdu, tamil, language;
var file1, file1filename, file1content;
var file2, file2filename, file2content;
var file3, file3filename, file3content;
var Palmistry, Kundli, Marriage_Specialist, Vastu, Puja, Business_Specialist, Career_Specialist, Spiritual_Healing_Specialist, Phychic_Reading_Specialist, Tarot, Vedic_Astrology,
    Gemology, KP_Astrology, Lal_Kitab_Astrology, Western_Astrology, Face_Reading, Signature_Reading, Vedic_Navgrah_Anusthan, Horary, specialist;
$(document).ready(function () {

    GetAllskill();
    GetAllSpecialization();



})
function GetAllskill() {
    $.ajax({
        url: "/PanditRegistration/GetSkill/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var tabstring = " <div class= 'col-sm-12 '>"
            tabstring += "    <div class='hs_kd_six_sec_input_wrapper'>"
            tabstring += "      <label>Languages You Speak (Choose atleast one)</label>"

            tabstring += "        </div>"
            tabstring += "       </div>"
            for (var i = 0; i < datares.length; i++) {

                tabstring += "    <div class='col-sm-3'>"

                tabstring += "      <div class='form-check'>"
                tabstring += "        <input class='form-check-input' type='checkbox' id='gridCheck" + i + " ' onclick='GetSkillDetails(" + i + ") '>"
                tabstring += "            <label id='lang" + i + "' class='form-check-label' for='gridCheck1'>" + datares[i].lang + "</label>"
                tabstring += "            </div>"
                tabstring += "       </div>"

            }
            $("#langdiv").append(tabstring);
        }

    });
}
function GetAllSpecialization() {
    $.ajax({
        url: "/PanditRegistration/GetSpecialization/",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (Res) {

            var datares = Res;
            var tabstring = " <div class= 'col-sm-12 '>"
            tabstring += "    <div class='hs_kd_six_sec_input_wrapper'>"
            tabstring += "      <label> Your Feild of Specialisation (Choose atleast one)</label>"

            tabstring += "        </div>"
            tabstring += "       </div>"
            for (var i = 0; i < datares.length; i++) {

                tabstring += "    <div class='col-sm-3'>"

                tabstring += "      <div class='form-check'>"
                tabstring += "        <input class='form-check-input' type='checkbox' id='specilization" + i + " ' onclick='GetSpeciDetails(" + i + ") '>"
                tabstring += "            <label id='Specilist" + i + "' class='form-check-label' for='gridCheck1'>" + datares[i].Specialization + "</label>"
                tabstring += "            </div>"
                tabstring += "       </div>"

            }
            $("#specdiv").append(tabstring);
        }

    });
}
function GetSkillDetails(i) {

    var lang = $("#lang" + i).text();
    if (lang == 'English') {
        english = lang;
        language = lang;
    }
    if (lang == 'Hindi') {
        hindi = lang;
        language = lang;
    }
    if (lang == 'Bengali') {
        bengali = lang;
        language = lang;
    }
    if (lang == 'Tamil') {
        tamil = lang;
        language = lang;
    }
    if (lang == 'Spanish') {
        spanish = lang;
        language = lang;
    }
    if (lang == 'German') {
        german = lang;
        language = lang;
    }
    if (lang == 'Urdu') {
        urdu = lang;
        language = lang;
    }
    if (lang == 'French') {
        french = lang;
        language = lang;
    }
}
function GetSpeciDetails(i) {

    var Spec = $("#Specilist" + i).text();
    if (Spec == 'Palmistry') {
        Palmistry = Spec;
        specialist = Spec;
    }
    if (Spec == 'Kundli') {
        Kundli = Spec;
        specialist = Spec;
    }
    if (Spec == 'Marriage Specialist') {
        Marriage_Specialist = Spec;
        specialist = Spec;
    }
    if (Spec == 'Vastu') {
        Vastu = Spec;
        specialist = Spec;
    }
    if (Spec == 'Business Specialist') {
        Business_Specialist = Spec;
        specialist = Spec;
    }
    if (Spec == 'Career Specialist') {
        Career_Specialist = Spec;
        specialist = Spec;
    }
    if (Spec == 'Spiritual Healing Specialist') {
        Spiritual_Healing_Specialist = Spec;
        specialist = Spec;
    }
    if (Spec == 'Phychic Reading Specialist') {
        Phychic_Reading_Specialist = Spec;
        specialist = Spec;
    }
    if (Spec == 'Tarot') {
        Tarot = Spec;
        specialist = Spec;
    }
    if (Spec == 'Vedic_Astrology') {
        Vedic_Astrology = Spec;
        specialist = Spec;
    }
    if (Spec == 'Gemology') {
        Gemology = Spec;
        specialist = Spec;
    }
    if (Spec == 'KP_Astrology') {
        KP_Astrology = Spec;
        specialist = Spec;
    }
    if (Spec == 'Lal_Kitab_Astrology') {
        Lal_Kitab_Astrology = Spec;
        specialist = Spec;
    }
    if (Spec == 'Western_Astrology') {
        Western_Astrology = Spec;
        specialist = Spec
    }
    if (Spec == 'Face_Reading') {
        Face_Reading = Spec;
        specialist = Spec;
    }
    if (Spec == 'Signature_Reading') {
        Signature_Reading = Spec;
        specialist = Spec;
    }
    if (Spec == 'Vedic_Navgrah_Anusthan') {
        Vedic_Navgrah_Anusthan = Spec;
        specialist = Spec;
    }
    if (Spec == 'Horary') {
        Horary = Spec;
        specialist = Spec;
    }
}
function Submit() {

    debugger
    var Fullname = $("#txtfullname").val();
    var Mobile = $("#txtmobile").val();
    var countrycode = $("#ddlcountrycode").find("option:selected").text();
    var Email = $("#txtEmail").val();
    var gender = $("#ddlgender").find("option:selected").text();
    var Day = $("#ddlday").find("option:selected").val();
    var Month = $("#ddlmonth").find("option:selected").val();
    var year = $("#ddlyear").find("option:selected").text();
    var YearofExperience = $("#txtYearofExperience").val();
    var Address = $("#txtAddress").val();
    var City = $("#txtcity").val();
    var State = $("#txtstate").val();
    var Country = $("#txtCountry").val();
    var Zip = $("#txtZip").val();
    var aboutself = $("#txtaboutself").val();
    var isFormValid = true;
    var StudentSaveDetails = {
        Palmistry: Palmistry,
        Kundli: Kundli,
        Gemology: Gemology,
        Horary: Horary,
        Vedic_Navgrah_Anusthan: Vedic_Navgrah_Anusthan,
        Signature_Reading: Signature_Reading,
        Face_Reading: Face_Reading,
        KP_Astrology: KP_Astrology,
        Lal_Kitab_Astrology: Lal_Kitab_Astrology,
        Marriage_Specialist: Marriage_Specialist,
        Western_Astrology: Western_Astrology,
        Business_Specialist: Business_Specialist,
        Career_Specialist: Career_Specialist,
        Spiritual_Healing_Specialist: Spiritual_Healing_Specialist,
        Phychic_Reading_Specialist: Phychic_Reading_Specialist,
        Tarot: Tarot,
        Vastu: Vastu,
        Vedic_Astrology: Vedic_Astrology,
        Fullname: Fullname,
        Mobile: Mobile,
        countrycode: countrycode,
        Email: Email,
        gender: gender,
        Day: Day,
        Month: Month,
        year: year,
        YearofExperience: YearofExperience,
        Address: Address,
        City: City,
        State: State,
        Country: Country,
        Zip: Zip,
        aboutself: aboutself,
        english: english,
        hindi: hindi,
        french: french,
        german: german,
        bengali: bengali,
        spanish: spanish,
        urdu: urdu,
        tamil: tamil,
        files: file1,
        files1: file2,
        files2: file3,
        file1filename: file1filename,
        file2filename: file2filename,
        file3filename: file3filename,
        file1content: file1content,
        file2content: file2content,
        file3content: file3content,

    };
    var fileUpload = $("#profilepic").get(0);

    var filePath = fileUpload.value;


    var fileUpload1 = $("#idproof").get(0);
    var filePath1 = fileUpload1.value;

    var fileUpload2 = $("#biodata").get(0);
    var filePath2 = fileUpload2.value;
    var formdata = new FormData();
    for (var key in StudentSaveDetails) {
        formdata.append(key, StudentSaveDetails[key]);
    }


    if (Fullname == "" || Fullname == undefined) {
        alert("Please Enter Full Name.");
        return false;
    }
    else if (countrycode == "Select") {
        alert("Please Select Country Code")
    }
    else if (Mobile == "" || Mobile == undefined) {
        alert("Please Enter Mobile.");
        return false;
    }

    else if (Email == "" || Email == undefined) {
        alert("Please Enter Email.");
        return false;
    }
    else if (gender == "Select") {
        alert("Please Select Gender.");
        return false;
    }
    else if (Day == "0") {
        alert("Please select Date of Birth");
        return false;
    }
    else if (Month == "0") {
        alert("Please Select Month.");
        return false;
    }
    else if (year == "Year") {
        alert("Please Select Year.");
        return false;
    }
    else if (YearofExperience == "" || YearofExperience == undefined) {
        alert("Please Enter Year of Experience");
        return false;
    }
    else if (Address == "" || Address == undefined) {
        alert("Please Enter Address");
        return false;
    }
    else if (City == "" || City == undefined) {
        alert("Please Enter City");
        return false;
    }
    else if (State == "" || State == undefined) {
        alert("Please Enter State");
        return false;
    }
    else if (Country == "" || Country == undefined) {
        alert("Please Enter Country");
        return false;
    }
    else if (Zip == "" || Zip == undefined) {
        alert("Please Enter Zip Code");
        return false;
    }
    else if (language == "" || language == undefined || language == null) {
        alert("Please Select atleast One language");
        return false;
    }
    else if (specialist == "" || specialist == undefined || specialist == null) {
        alert("Please Select atleast One Specialization");
        return false;
    }
    else if (filePath == "" || filePath == undefined) {
        alert("Please Choose Profile Picture");
    }
    else if (filePath1 == "" || filePath1 == undefined) {
        alert("Please Choose ID Proof");
    }
    //else if (filePath2 == "" || filePath2 == undefined) {
    //    alert("Please Choose Bio Data");
    //}
    else if (aboutself == "" || aboutself == undefined) {
        alert("Please write Something About Your Self");
        return false;
    }
    else {

        $.ajax({
            url: "/PanditRegistration/RegistrationPandit",
            type: "POST",
            contentType: false,
            processData: false,
            data: formdata,
            success: function (response) {

                if (response !== 0 && response > 0) {
                    //$scope.StudentRegID = response;
                    alert(" Specialist Registration  Successfully.");
                    //clearform();
                    window.location.href = "/DefaultHome/Default";
                    //$scope.goToTab(2);
                }
                else {

                    alert("Specialist Not Registered.");
                    window.location.href = "/DefaultHome/Default";
                    //clearform();
                }
            },
            error: function (err) {

            }
        });

    }
}
function checkFile() {



    var fileUpload = $("#profilepic").get(0);
    var files = fileUpload.files;
    var filePath = fileUpload.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("Please upload file having extensions .jpeg/.jpg/.png only.");
        $("#profilepic").val('');
    }
}
function checkFile1() {
    var fileUpload = $("#idproof").get(0);
    var files = fileUpload.files;
    var filePath = fileUpload.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("Please upload file having extensions .jpeg/.jpg/.png only.");
        $("#idproof").val('');
    }
}
function savefile1() {
    debugger
    var imgpath = document.getElementById('profilepic');
    if (!imgpath.value == "") {
        var img = imgpath.files[0].size;
        var imgsize = img / 1024;
        if (imgsize > 100) {

            alert("Please upload image size less then 100kb");
            document.getElementById('profilepic').value = []
        }
        else {
            var fileUpload = $("#profilepic").get(0);

            var filePath = fileUpload.value;
            var StudentSaveDetails = {
                Id: 1,
            };
            StudentSaveDetails.files = fileUpload.files;
            StudentSaveDetails.filePath = fileUpload.value;
            StudentSaveDetails.allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            var formdata = new FormData();
            for (var i = 0; i < StudentSaveDetails.files.length; i++) {
                formdata.append(StudentSaveDetails.files[i].name, StudentSaveDetails.files[i]);
            }

            formdata.append('type', "profile");
            $.ajax({
                url: "/PanditRegistration/SaveFile",
                type: "POST",
                contentType: false,
                processData: false,
                data: formdata,
                success: function (response) {
                    debugger
                    file1 = response[0];
                    file1filename = response[1];
                    file1content = response[2];
                },
                error: function (err) {

                }
            });}

    }
}
function savefile2() {
    debugger
    var imgpath = document.getElementById('idproof');
    if (!imgpath.value == "") {
        var img = imgpath.files[0].size;
        var imgsize = img / 1024;
        if (imgsize > 100) {

            alert("Please upload image size less then 100kb");
            document.getElementById('idproof').value = []
        }
        else {
            var fileUpload = $("#idproof").get(0);

            var filePath = fileUpload.value;
            var StudentSaveDetails = {
                Id: 1,
            };
            StudentSaveDetails.files = fileUpload.files;
            StudentSaveDetails.filePath = fileUpload.value;
            StudentSaveDetails.allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            var formdata = new FormData();
            for (var i = 0; i < StudentSaveDetails.files.length; i++) {
                formdata.append(StudentSaveDetails.files[i].name, StudentSaveDetails.files[i]);
            }

            formdata.append('type', "Govtid");
            $.ajax({
                url: "/PanditRegistration/SaveFile",
                type: "POST",
                contentType: false,
                processData: false,
                data: formdata,
                success: function (response) {
                    debugger

                    file2 = response[0];
                    file2filename = response[1];
                    file2content = response[2];
                },
                error: function (err) {

                }
            });
        }
        }
   
}
function savefile3() {
    debugger

    var fileUpload = $("#biodata").get(0);

    var filePath = fileUpload.value;
    var StudentSaveDetails = {
        Id: 1,
    };
    StudentSaveDetails.files = fileUpload.files;
    StudentSaveDetails.filePath = fileUpload.value;
    StudentSaveDetails.allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    var formdata = new FormData();
    for (var i = 0; i < StudentSaveDetails.files.length; i++) {
        formdata.append(StudentSaveDetails.files[i].name, StudentSaveDetails.files[i]);
    }

    formdata.append('type', "biodata");
    $.ajax({
        url: "/PanditRegistration/SaveFile",
        type: "POST",
        contentType: false,
        processData: false,
        data: formdata,
        success: function (response) {
            debugger

            file3 = response[0];
            file3filename = response[1];
            file3content = response[2];
        },
        error: function (err) {

        }
    });
}