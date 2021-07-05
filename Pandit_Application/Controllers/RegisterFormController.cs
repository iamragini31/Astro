using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Pandit_ApplicationEntity;
using Pandit_ApplicationManager;

namespace Pandit_Application.Controllers
{
    public class RegisterFormController : Controller
    {
        RegisterFormManager registerFormManger = new RegisterFormManager();
        RegisterFormModel registerFormModel = new RegisterFormModel();
        // GET: RegisterForm
        public ActionResult RegisterForm(string data)
        {
            string Bengali, English, urdu, Tamil, French, Spanish, German, Hindi, lang = "";
            List<RegisterFormModel> listRegisterFormModel = new List<RegisterFormModel>();

            listRegisterFormModel = registerFormManger.FetchPanditDetails(Convert.ToInt32(Session["PanditID"]));
            if (listRegisterFormModel.Count > 0)
            {
                registerFormModel.Fullname = listRegisterFormModel[0].Fullname;
                registerFormModel.Gender = listRegisterFormModel[0].Gender;
                registerFormModel.DateofBirth = listRegisterFormModel[0].DateofBirth;
                registerFormModel.EmailAddress = listRegisterFormModel[0].EmailAddress;
                registerFormModel.PhoneNumber = listRegisterFormModel[0].PhoneNumber;
                registerFormModel.Address = listRegisterFormModel[0].Address;
                registerFormModel.City = listRegisterFormModel[0].City;
                registerFormModel.State = listRegisterFormModel[0].State;
                registerFormModel.Country = listRegisterFormModel[0].Country;
                registerFormModel.Zip = listRegisterFormModel[0].Zip;
                registerFormModel.YearsOfExperience = listRegisterFormModel[0].YearsOfExperience;
                Bengali = listRegisterFormModel[0].Bengali;
                English = listRegisterFormModel[0].English;
                urdu = listRegisterFormModel[0].urdu;
                Tamil = listRegisterFormModel[0].Tamil;
                French = listRegisterFormModel[0].French;
                Spanish = listRegisterFormModel[0].Spanish;
                German = listRegisterFormModel[0].German;
                Hindi = listRegisterFormModel[0].Hindi;
                if (Bengali != "" && Bengali != null)
                {
                    lang += Bengali;
                }
                if (English != "" && English != null)
                {
                    if (lang == "")
                    {
                        lang += English;

                    }
                    else
                    {
                        lang += "," + English;

                    }
                }
                if (urdu != " " && urdu != null)
                {
                    if (lang == "")
                    {
                        lang += urdu;

                    }
                    else
                    {
                        lang += "," + urdu;

                    }
                }
                if (Tamil != " " && Tamil != null)
                {
                    if (lang == "")
                    {
                        lang += Tamil;

                    }
                    else
                    {
                        lang += "," + Tamil;

                    }
                }
                if (French != " " && French != null)
                {
                    if (lang == "")
                    {
                        lang += French;

                    }
                    else
                    {
                        lang += "," + French;

                    }
                }
                if (Spanish != " " && Spanish != null)
                {
                    if (lang == "")
                    {
                        lang += Spanish;

                    }
                    else
                    {
                        lang += "," + Spanish;

                    }
                }
                if (German != " " && German != null)
                {
                    if (lang == "")
                    {
                        lang += German;

                    }
                    else
                    {
                        lang += "," + German;

                    }
                }
                if (Hindi != " " && Hindi != null)
                {
                    if (lang == "")
                    {
                        lang += Hindi;

                    }
                    else
                    {
                        lang += "," + Hindi;

                    }
                }
                registerFormModel.Languages = lang;
                registerFormModel.PanditID = listRegisterFormModel[0].PanditID;
                Session["PanditID"] = listRegisterFormModel[0].PanditID;
            }
            return View(registerFormModel);
        }

        public ActionResult Setstatus(FormCollection form)
        {
            Session["TaxIdNumber"] = form["TaxIdNumber"]; ;
            Session["DisplayName"] = form["DisplayName"]; ;
            Session["OtherOrganisationDetails"] = form["OtherOrganisationDetails"]; ;
            return Json("1", JsonRequestBehavior.AllowGet);
        }

        public ActionResult SaveFile(FormCollection form)
        {
            string base64string = string.Empty;
            string fname = "";
            string CompImage = "";
            string filename = "";
            byte[] bytes;
            string[] arr = new string[3];
            if (Request.Files.Count > 0)
            {
                try
                {
                    HttpFileCollectionBase files = Request.Files;

                    for (int i = 0; i < files.Count; i++)
                    {
                        HttpPostedFileBase file = files[i];

                        using (BinaryReader br = new BinaryReader(file.InputStream))
                        {
                            bytes = br.ReadBytes(file.ContentLength);
                        }

                        Session["TaxIDImage"] = bytes;
                        Session["TaxIDImagePath"] = Path.GetFileName(file.FileName);
                        Session["TaxIDImagecontent"] = file.ContentType;

                    }

                }
                catch (Exception ex)
                {
                }
            }
            return Json(arr, JsonRequestBehavior.AllowGet);
        }
    }
}